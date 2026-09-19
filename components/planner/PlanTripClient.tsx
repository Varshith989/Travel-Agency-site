"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Calendar,
  Users,
  Wallet,
  Sparkles,
  UserCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";

interface Props {
  initialDestination?: string;
  initialStyle?: string;
}

export default function PlanTripClient({ initialDestination = "", initialStyle = "" }: Props) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<any>(null);

  // Form states
  const [destination, setDestination] = useState(initialDestination || "Japan");
  const [travelMonth, setTravelMonth] = useState("October");
  const [travelYear, setTravelYear] = useState("2026");
  const [durationDays, setDurationDays] = useState("10 – 14 Days");
  const [travelersCount, setTravelersCount] = useState(2);
  const [travelStyle, setTravelStyle] = useState(initialStyle || "Cultural & Heritage");
  const [budgetPerPerson, setBudgetPerPerson] = useState("₹1,50,000 - ₹2,00,000");
  const [accommodation, setAccommodation] = useState("5-Star Luxury & Traditional Ryokan");
  
  // Contact info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("India");
  const [notes, setNotes] = useState("");

  const destinationOptions = [
    { name: "Japan", country: "Tokyo, Kyoto, Osaka", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" },
    { name: "Bali", country: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80" },
    { name: "Switzerland", country: "Alps & Lakes", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80" },
    { name: "Maldives", country: "Indian Ocean", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80" },
    { name: "Dubai", country: "United Arab Emirates", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80" },
    { name: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
  ];

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          travelMonth,
          travelYear,
          durationDays,
          travelersCount,
          travelStyle,
          budgetPerPerson,
          accommodation,
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          customerCountry: country,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setConfirmation(data.data);
      }
    } catch {
      alert("Failed to submit request. Please reach out to concierge@aerovatravels.com");
    } finally {
      setLoading(false);
    }
  };

  const stepsList = [
    "Destination",
    "Dates",
    "Travelers",
    "Budget",
    "Style",
    "Contact",
  ];

  return (
    <div className="pt-28 pb-28 min-h-screen bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#D9A441] text-xs uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Bespoke Travel Architect</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#111111] tracking-tight">
            Design Your Private Journey
          </h1>
          <p className="mt-3 text-sm text-[#737373] font-light">
            Share your aspirations. Our senior curators will craft a tailored proposal within 24 hours.
          </p>
        </div>

        {/* Progress Stepper */}
        {!confirmation && (
          <div className="mb-12">
            <div className="flex items-center justify-between relative mb-3">
              {stepsList.map((label, idx) => {
                const stepNum = idx + 1;
                const isCompleted = step > stepNum;
                const isCurrent = step === stepNum;

                return (
                  <div key={label} className="flex flex-col items-center relative z-10">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                        isCompleted
                          ? "bg-[#D9A441] text-[#111111]"
                          : isCurrent
                          ? "bg-[#111111] text-[#FFFFFF] ring-4 ring-[#D9A441]/30"
                          : "bg-white text-gray-400 border border-gray-200"
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : stepNum}
                    </div>
                    <span
                      className={`hidden sm:block text-[10px] uppercase tracking-wider font-semibold mt-1.5 ${
                        isCurrent ? "text-[#111111]" : "text-gray-400"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
              {/* Connecting background track */}
              <div className="absolute top-4 left-4 right-4 h-[2px] bg-gray-200 -z-0" />
              <div
                className="absolute top-4 left-4 h-[2px] bg-[#D9A441] -z-0 transition-all duration-500"
                style={{ width: `${((step - 1) / (stepsList.length - 1)) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Confirmation Screen */}
        {confirmation ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#171717]/8 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-[#D9A441] tracking-widest block mb-1">
                DOSSIER REF: {confirmation.enquiryRef}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
                Your Journey Blueprint is in Motion
              </h2>
              <p className="text-sm text-[#737373] mt-3 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{confirmation.customerName}</strong>. Our senior destination architect specializing in <strong>{confirmation.destination}</strong> is reviewing your travel preferences.
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-6 rounded-2xl bg-[#F8F7F3] border border-[#171717]/8 text-left text-xs space-y-3 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-gray-500">Destination:</span>
                <span className="font-semibold text-[#111111]">{confirmation.destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Dates / Season:</span>
                <span className="font-semibold text-[#111111]">
                  {confirmation.travelMonth} {confirmation.travelYear} ({confirmation.durationDays})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Party Size:</span>
                <span className="font-semibold text-[#111111]">{confirmation.travelersCount} Travelers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Travel Style:</span>
                <span className="font-semibold text-[#111111]">{confirmation.travelStyle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Budget Range:</span>
                <span className="font-semibold text-[#D9A441]">{confirmation.budgetPerPerson}</span>
              </div>
            </div>

            <p className="text-xs text-[#737373] max-w-md mx-auto">
              We have dispatched an acknowledgment to <strong>{confirmation.customerEmail}</strong>. Expect your private itinerary portfolio via WhatsApp or email shortly.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-3.5 rounded-full bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-colors"
              >
                Return to Homepage
              </Link>
              <Link
                href="/packages"
                className="px-8 py-3.5 rounded-full border border-[#171717]/20 text-[#171717] text-xs uppercase tracking-widest font-semibold hover:bg-black/5 transition-colors"
              >
                Explore More Packages
              </Link>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#171717]/8">
            {/* Step 1: Destination */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    Where would you like to travel?
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    Select a featured global haven or type your custom destination.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {destinationOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setDestination(opt.name)}
                      className={`group relative h-36 rounded-2xl overflow-hidden text-left p-4 flex flex-col justify-end transition-all ${
                        destination === opt.name
                          ? "ring-4 ring-[#D9A441] scale-[1.02]"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={opt.img}
                        alt={opt.name}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="relative z-10 text-white">
                        <span className="text-[10px] text-gray-300 block">{opt.country}</span>
                        <span className="font-serif font-bold text-lg">{opt.name}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-2">
                    Or enter another destination of interest:
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Iceland, New Zealand, Kenya Safari, Amalfi Coast..."
                    className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Travel dates & Duration */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    When do you plan to embark?
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    Select your preferred travel season and expected duration.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-2">
                      Target Month
                    </label>
                    <select
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    >
                      {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Flexible"].map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-2">
                      Travel Year
                    </label>
                    <select
                      value={travelYear}
                      onChange={(e) => setTravelYear(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    >
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-2">
                    Ideal Trip Duration
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["5 – 7 Days", "8 – 10 Days", "10 – 14 Days", "15+ Days"].map((dur) => (
                      <button
                        key={dur}
                        type="button"
                        onClick={() => setDurationDays(dur)}
                        className={`p-3.5 rounded-2xl text-xs font-medium border transition-all ${
                          durationDays === dur
                            ? "bg-[#111111] text-white border-[#111111]"
                            : "bg-[#F8F7F3] text-[#111111] border-[#171717]/5 hover:border-[#D9A441]"
                        }`}
                      >
                        {dur}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Travelers */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    How many travelers in your party?
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    We calibrate room configurations, transport vehicles, and private guides to your group size.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { count: 1, label: "Solo Voyager" },
                    { count: 2, label: "Couple / Duo" },
                    { count: 4, label: "Family / Small Group" },
                    { count: 6, label: "Private Entourage (6+)" },
                  ].map((item) => (
                    <button
                      key={item.count}
                      type="button"
                      onClick={() => setTravelersCount(item.count)}
                      className={`p-6 rounded-2xl text-center border transition-all ${
                        travelersCount === item.count
                          ? "bg-[#111111] text-white border-[#111111] shadow-md"
                          : "bg-[#F8F7F3] text-[#111111] border-[#171717]/5 hover:border-[#D9A441]"
                      }`}
                    >
                      <span className="font-serif text-3xl font-bold block mb-1">
                        {item.count}{item.count === 6 ? "+" : ""}
                      </span>
                      <span className="text-xs font-light text-gray-400">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Budget */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    What is your intended investment?
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    Estimated budget per person excluding international flights.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Refined Comfort", range: "₹1,00,000 – ₹1,50,000", desc: "4 to 5-star boutique hotels with shared luxury transfers." },
                    { label: "Premium Luxury", range: "₹1,50,000 – ₹2,25,000", desc: "5-star luxury resorts, private chauffeurs, and premier experiences." },
                    { label: "Ultra-Luxury Sanctuary", range: "₹2,25,000 – ₹3,50,000", desc: "Private pool villas, First-Class rail, and exclusive VIP access." },
                    { label: "Bespoke Connoisseur", range: "₹3,50,000+", desc: "Aman / Bulgari suites, private yachts, helicopters, and closed-door dining." },
                  ].map((b) => (
                    <button
                      key={b.range}
                      type="button"
                      onClick={() => setBudgetPerPerson(b.range)}
                      className={`p-5 rounded-2xl text-left border transition-all ${
                        budgetPerPerson === b.range
                          ? "bg-[#111111] text-white border-[#111111] shadow-md"
                          : "bg-[#F8F7F3] text-[#111111] border-[#171717]/5 hover:border-[#D9A441]"
                      }`}
                    >
                      <span className="font-serif font-bold text-base block mb-1">
                        {b.label}
                      </span>
                      <span className="text-xs font-mono text-[#D9A441] font-semibold block mb-2">
                        {b.range} / person
                      </span>
                      <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                        {b.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Preferences */}
            {step === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    Your travel style & stay preferences
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    Select your overarching trip personality and accommodation preference.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-2">
                    Trip Focus
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Cultural & Heritage",
                      "Romantic Honeymoon",
                      "Alpine Adventure",
                      "Coastal & Beach Escape",
                      "Gastronomy & Wine",
                      "Wellness & Rejuvenation",
                    ].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setTravelStyle(s)}
                        className={`p-3 rounded-2xl text-xs font-medium border transition-all ${
                          travelStyle === s
                            ? "bg-[#111111] text-white border-[#111111]"
                            : "bg-[#F8F7F3] text-[#111111] border-[#171717]/5 hover:border-[#D9A441]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-2">
                    Accommodation Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      "5-Star Luxury & Traditional Ryokan",
                      "Overwater Pool Villas",
                      "Heritage Palace & Historic Chalets",
                    ].map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setAccommodation(a)}
                        className={`p-3.5 rounded-2xl text-xs font-medium border text-left transition-all ${
                          accommodation === a
                            ? "bg-[#111111] text-white border-[#111111]"
                            : "bg-[#F8F7F3] text-[#111111] border-[#171717]/5 hover:border-[#D9A441]"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Contact Information */}
            {step === 6 && (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    Where should we deliver your itinerary?
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    Provide your contact details so our curator can reach you with the proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Raghav Singhal"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="raghav@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1.5">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1.5">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#737373] uppercase tracking-wider mb-1.5">
                    Personal Travel Wishes or Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about special occasions, favorite cuisines, pacing preferences, or specific sights on your wishlist..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-all duration-300 disabled:opacity-50 shadow-xl"
                >
                  {loading ? "Transmitting Proposal Request..." : "Request My Itinerary"}
                </button>
              </form>
            )}

            {/* Stepper Navigation Buttons (for steps 1-5) */}
            {step < 6 && (
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#737373] hover:text-[#111111] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-all shadow-md"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
