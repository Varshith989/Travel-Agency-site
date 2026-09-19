"use client";

import { useState, useEffect } from "react";
import { Package } from "@/lib/types";
import { formatINR } from "@/lib/utils";
import { X, Calendar, Users, CheckCircle2, ShieldCheck, CreditCard, Sparkles, Building, ArrowRight } from "lucide-react";

interface Props {
  pkg: Package;
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function BookingModal({ pkg, isOpen, onClose }: Props) {
  const [travelers, setTravelers] = useState(2);
  const [travelDate, setTravelDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentType, setPaymentType] = useState<"deposit" | "invoice">("deposit");
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<any>(null);

  // Dynamically load Razorpay SDK
  useEffect(() => {
    if (typeof window !== "undefined" && !document.getElementById("razorpay-sdk")) {
      const script = document.createElement("script");
      script.id = "razorpay-sdk";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!isOpen) return null;

  const totalPrice = pkg.priceINR * travelers;
  // 20% deposit amount
  const depositAmount = Math.round(totalPrice * 0.2);
  const amountToCharge = paymentType === "deposit" ? depositAmount : totalPrice;

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create booking record in store/database
      const bookingRes = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: pkg.id,
          packageTitle: pkg.title,
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          travelDate: travelDate || new Date().toISOString().split("T")[0],
          travelers,
          totalPriceINR: totalPrice,
          notes,
        }),
      });
      const bookingData = await bookingRes.json();

      if (!bookingData.success) {
        throw new Error(bookingData.error || "Booking failed");
      }

      const currentBooking = bookingData.data;

      // 2. If user chose online payment via Razorpay
      if (paymentType === "deposit") {
        const orderRes = await fetch("/api/razorpay/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amountINR: depositAmount,
            bookingRef: currentBooking.bookingRef,
            packageTitle: pkg.title,
          }),
        });

        const orderData = await orderRes.json();

        if (orderData.success) {
          if (window.Razorpay && !orderData.isDemo) {
            const options = {
              key: orderData.keyId,
              amount: orderData.amount,
              currency: orderData.currency,
              name: "AEROVA TRAVELS",
              description: `20% Advance Deposit - ${pkg.title}`,
              order_id: orderData.orderId,
              prefill: {
                name: name,
                email: email,
                contact: phone,
              },
              theme: {
                color: "#D9A441",
              },
              handler: async function (response: any) {
                // Verify payment on server
                await fetch("/api/razorpay/verify-payment", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    bookingId: currentBooking.id,
                  }),
                });

                setConfirmation({
                  ...currentBooking,
                  paymentId: response.razorpay_payment_id,
                  paidAmount: depositAmount,
                });
                setLoading(false);
              },
              modal: {
                ondismiss: function () {
                  setLoading(false);
                  setConfirmation(currentBooking);
                },
              },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
            return;
          } else {
            // Simulated / Demo success if testing without live keys
            setConfirmation({
              ...currentBooking,
              paymentId: `pay_demo_${Date.now().toString().slice(-6)}`,
              paidAmount: depositAmount,
            });
          }
        }
      } else {
        // Direct invoice request
        setConfirmation(currentBooking);
      }
    } catch (err: any) {
      alert(err?.message || "Something went wrong. Please reach out to concierge@aerovatravels.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#171717]/10 my-8">
        {/* Modal Header */}
        <div className="bg-[#111111] text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block mb-1">
              Reserve Journey • Razorpay Enabled
            </span>
            <h3 className="font-serif text-2xl font-bold">{pkg.title}</h3>
            <p className="text-xs text-gray-400 mt-0.5">
              {pkg.durationDays} Days / {pkg.durationNights} Nights • {pkg.destinationName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation */}
        {confirmation ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-[#D9A441] tracking-widest block mb-1">
                REFERENCE: {confirmation.bookingRef}
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#111111]">
                {confirmation.paymentId ? "Deposit & Reservation Secured" : "Reservation Request Confirmed"}
              </h4>
              <p className="text-xs text-[#737373] mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{confirmation.customerName}</strong>. Your dates for <strong>{confirmation.packageTitle}</strong> have been secured.
                {confirmation.paymentId && (
                  <span className="block text-emerald-700 font-mono text-[11px] mt-1">
                    Razorpay Transaction ID: {confirmation.paymentId}
                  </span>
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#171717]/8 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Travel Date:</span>
                <span className="font-semibold text-[#111111]">{confirmation.travelDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Party Size:</span>
                <span className="font-semibold text-[#111111]">{confirmation.travelers} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total Journey Price:</span>
                <span className="font-semibold text-[#111111]">{formatINR(confirmation.totalPriceINR)}</span>
              </div>
              {confirmation.paidAmount && (
                <div className="flex justify-between border-t border-gray-200 pt-2 font-semibold text-emerald-700">
                  <span>Advance Paid via Razorpay:</span>
                  <span>{formatINR(confirmation.paidAmount)}</span>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-full bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                  Departure Date *
                </label>
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                  Number of Travelers
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                >
                  <option value={1}>1 Solo Guest</option>
                  <option value={2}>2 Guests (1 Room)</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (2 Rooms)</option>
                  <option value={6}>6 Guests (Private Suite)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Varun Reddy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="varun@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 83176 46088"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
              />
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
                Choose Payment Method
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentType("deposit")}
                  className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    paymentType === "deposit"
                      ? "border-[#D9A441] bg-amber-50/50 ring-1 ring-[#D9A441]"
                      : "border-gray-200 bg-[#F8F7F3]"
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#111111] block">
                      Pay 20% Deposit Online
                    </span>
                    <span className="text-[10px] text-gray-500 block mt-0.5">
                      Instant confirmation via Razorpay (UPI, Cards, NetBanking)
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentType("invoice")}
                  className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                    paymentType === "invoice"
                      ? "border-[#D9A441] bg-amber-50/50 ring-1 ring-[#D9A441]"
                      : "border-gray-200 bg-[#F8F7F3]"
                  }`}
                >
                  <Building className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-xs text-[#111111] block">
                      Concierge Bank Invoice
                    </span>
                    <span className="text-[10px] text-gray-500 block mt-0.5">
                      Pay via NEFT/RTGS wire transfer after consultation
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Price Summary Breakdown */}
            <div className="p-4 rounded-2xl bg-[#EFECE6]/50 border border-[#171717]/8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                  {paymentType === "deposit" ? "Payable Now (20% Deposit)" : "Total Trip Value"}
                </span>
                <span className="font-serif text-xl font-bold text-[#111111]">
                  {formatINR(paymentType === "deposit" ? depositAmount : totalPrice)}
                </span>
                {paymentType === "deposit" && (
                  <span className="text-[10px] text-[#737373] block">
                    Total: {formatINR(totalPrice)} for {travelers} {travelers === 1 ? "guest" : "guests"}
                  </span>
                )}
              </div>
              <div className="text-right text-[10px] text-emerald-700 font-medium">
                <span className="block font-semibold">100% Refundable</span>
                <span>up to 30 days before departure</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-all duration-300 disabled:opacity-50 shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {loading
                  ? "Processing..."
                  : paymentType === "deposit"
                  ? `Pay ${formatINR(depositAmount)} via Razorpay`
                  : "Request Concierge Reservation"}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
