"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate submission or forward to enquiries API
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          destination: "General Inquiry",
          notes: message,
        }),
      });
      setSubmitted(true);
    } catch {
      alert("Error sending message. Please email concierge@aerovatravels.com directly.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <div className="pt-28 pb-28 min-h-screen bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] mb-2 block">
            Private Concierge Service
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#111111] tracking-tight">
            Let's plan something unforgettable.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#737373] font-light leading-relaxed">
            Our private travel advisors are available 7 days a week to discuss your vision, answer nuanced questions, or begin sculpting your next escape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Office (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#171717]/8 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#111111]">
                Direct Contacts
              </h3>

              <div className="space-y-4 text-xs">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F7F3]">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#D9A441] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 uppercase tracking-wider text-[10px] block">Telephone</span>
                    <a href={`tel:${siteConfig.contact.phoneClean}`} className="font-mono font-bold text-sm text-[#111111] hover:text-[#D9A441]">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F7F3]">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#D9A441] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 uppercase tracking-wider text-[10px] block">Private Concierge</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-sm text-[#111111] hover:text-[#D9A441]">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F7F3]">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-400 uppercase tracking-wider text-[10px] block">Instant WhatsApp</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-sm text-[#111111] hover:text-emerald-600"
                    >
                      <span>Start WhatsApp Chat</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#111111]">
                  <MapPin className="w-4 h-4 text-[#D9A441]" />
                  <span>Global Headquarters</span>
                </div>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {siteConfig.contact.address}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#737373] pt-2">
                  <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>{siteConfig.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Google Map Styled Mockup */}
            <div className="p-8 rounded-3xl bg-[#111111] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block mb-1">
                  Private Lounge Visits
                </span>
                <h4 className="font-serif text-xl font-bold mb-2">
                  Prestige Nebula, Cubbon Road
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                  By appointment only. Sip artisanal espresso with our senior curators while viewing private high-resolution destination archives.
                </p>
                <div className="w-full h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-[#D9A441] mx-auto mb-1 animate-bounce" />
                      <span className="text-[11px] text-gray-300 font-mono">12.9774° N, 77.5997° E</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#171717]/8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    Message Received
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. An Aerova senior curator has been assigned to your message and will respond within 2 to 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#111111]">
                      Send a Personal Message
                    </h3>
                    <p className="text-xs text-[#737373] mt-1">
                      Whether you have questions regarding visa requirements, seasonal weather, or private aircraft options, we are here to assist.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gayatri Sen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="gayatri.sen@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                        Phone Number *
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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1.5">
                      How Can We Assist You? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about the destinations, timeline, or special requirements on your mind..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-all duration-300 disabled:opacity-50 shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? "Transmitting Note..." : "Transmit Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
