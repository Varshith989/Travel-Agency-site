"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function DarkCTASection() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    enquiryRef: string;
    destination: string;
    customerName: string;
  } | null>(null);

  // Form State
  const [destination, setDestination] = useState("Japan");
  const [travelStyle, setTravelStyle] = useState("Cultural Odyssey");
  const [travelSeason, setTravelSeason] = useState("Autumn 2026 (Sakura / Foliage)");
  const [duration, setDuration] = useState("10 – 14 Days");
  const [travelers, setTravelers] = useState("2 Travelers");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const destinationPresets = [
    { name: "Japan", sub: "Tokyo, Kyoto, Hakone" },
    { name: "Switzerland", sub: "Alps & Glacier Rail" },
    { name: "Bali", sub: "Rainforest & Clifftops" },
    { name: "Maldives", sub: "Private Overwater Villas" },
    { name: "Dubai", sub: "Desert Dunes & Emirates" },
    { name: "France", sub: "Parisian Couture & Riviera" },
  ];

  const travelStylePresets = [
    "Cultural Odyssey",
    "Private Sanctuary",
    "Alpine & Wilderness",
    "Honeymoon & Romance",
  ];

  const handleNext = () => {
    setErrorMsg("");
    if (step === 1 && !destination) {
      setErrorMsg("Please select your preferred destination.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setErrorMsg("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setErrorMsg("Please provide your telephone or WhatsApp number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          travelMonth: travelSeason,
          travelYear: "2026",
          durationDays: duration,
          travelersCount: travelers.includes("1") ? 1 : travelers.includes("2") ? 2 : 4,
          travelStyle,
          budgetPerPerson: "Bespoke Luxury",
          accommodation: "5-Star Luxury & Historic Ryokans",
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          customerCountry: "International",
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setConfirmation({
          enquiryRef: data.data.enquiryRef,
          destination: data.data.destination,
          customerName: data.data.customerName,
        });
      } else {
        setErrorMsg(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setErrorMsg("Unable to transmit enquiry. Please reach our concierge directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="inquire"
      className="relative py-16 sm:py-28 bg-[#0D1315] text-white overflow-hidden scroll-mt-12"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2160&q=80"
          alt="Night Horizon"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1315] via-[#0D1315]/90 to-[#0D1315]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C29D59]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
              The Bespoke Atelier
            </span>
            <span className="w-8 h-[1px] bg-[#C29D59]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[1.08] text-white">
            Begin your personal chapter.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Tell us where your curiosity lies. A dedicated senior destination
            architect will formulate a tailored blueprint within 24 hours.
          </p>
        </div>

        {/* Multi-Step Atelier Container */}
        <div className="bg-[#141C1F] rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 border border-white/10 shadow-2xl backdrop-blur-md">
          {confirmation ? (
            /* Success State */
            <div className="text-center py-10 space-y-6 animate-fade-in max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#C29D59]/20 border border-[#C29D59] flex items-center justify-center text-[#C29D59] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#C29D59] font-mono block mb-1">
                  Reference: {confirmation.enquiryRef}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-3">
                  Dossier received, {confirmation.customerName}.
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  Your bespoke journey dossier for{" "}
                  <strong className="text-white font-medium">
                    {confirmation.destination}
                  </strong>{" "}
                  has been placed on our private desk. Our curators will review
                  flight alignments and suite allocations, contacting you via
                  WhatsApp and email within 24 hours.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
                <button
                  onClick={() => {
                    setConfirmation(null);
                    setStep(1);
                  }}
                  className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors uppercase tracking-wider"
                >
                  Plan Another Route
                </button>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Aerova,%20I%20just%20submitted%20reference%20${confirmation.enquiryRef}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-[#C29D59] text-[#0D1315] font-semibold hover:bg-white transition-colors uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Connect Immediately</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* Form Steps */
            <form onSubmit={handleSubmit}>
              {/* Progress Stepper */}
              <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl sm:text-3xl font-light text-[#C29D59]">
                    0{step}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                      Step {step} of 03
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                      {step === 1 && "Destination & Travel Style"}
                      {step === 2 && "Season, Duration & Travelers"}
                      {step === 3 && "Guest Coordinates & Desires"}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        s === step
                          ? "w-8 bg-[#C29D59]"
                          : s < step
                          ? "w-4 bg-white/40"
                          : "w-4 bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Destination & Travel Style */}
              {step === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-4">
                      Where would you like to wander?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {destinationPresets.map((dest) => (
                        <button
                          type="button"
                          key={dest.name}
                          onClick={() => setDestination(dest.name)}
                          className={`p-4 rounded-2xl border text-left transition-all ${
                            destination === dest.name
                              ? "bg-[#C29D59]/15 border-[#C29D59] text-white shadow-md"
                              : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"
                          }`}
                        >
                          <span className="font-serif text-base font-medium block text-white mb-0.5">
                            {dest.name}
                          </span>
                          <span className="text-[11px] text-gray-400 line-clamp-1">
                            {dest.sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-3">
                      Preferred Travel Mood
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {travelStylePresets.map((style) => (
                        <button
                          type="button"
                          key={style}
                          onClick={() => setTravelStyle(style)}
                          className={`p-3 rounded-xl border text-xs text-center font-medium transition-all ${
                            travelStyle === style
                              ? "bg-[#C29D59] text-[#0D1315] border-[#C29D59]"
                              : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Season, Duration & Party */}
              {step === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-2">
                        Timing & Season
                      </label>
                      <select
                        value={travelSeason}
                        onChange={(e) => setTravelSeason(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-[#C29D59] cursor-pointer"
                      >
                        <option value="Spring 2026 (Sakura / Wildflowers)" className="bg-[#141C1F]">
                          Spring 2026 (Sakura / Wildflowers)
                        </option>
                        <option value="Summer 2026 (June – August)" className="bg-[#141C1F]">
                          Summer 2026 (June – August)
                        </option>
                        <option value="Autumn 2026 (September – November)" className="bg-[#141C1F]">
                          Autumn 2026 (September – November)
                        </option>
                        <option value="Winter 2026 / Festive" className="bg-[#141C1F]">
                          Winter 2026 / Festive
                        </option>
                        <option value="Flexible / Undecided" className="bg-[#141C1F]">
                          Flexible / Open to Curator Advice
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-2">
                        Pacing & Duration
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-[#C29D59] cursor-pointer"
                      >
                        <option value="7 – 9 Days" className="bg-[#141C1F]">
                          7 – 9 Days (Intimate Escape)
                        </option>
                        <option value="10 – 14 Days" className="bg-[#141C1F]">
                          10 – 14 Days (Signature Odyssey)
                        </option>
                        <option value="15+ Days" className="bg-[#141C1F]">
                          15+ Days (Grand Grand Tour)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-2">
                        Voyager Count
                      </label>
                      <select
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-[#C29D59] cursor-pointer"
                      >
                        <option value="1 Solo Voyager" className="bg-[#141C1F]">
                          1 Solo Voyager
                        </option>
                        <option value="2 Travelers (Couple / Pair)" className="bg-[#141C1F]">
                          2 Travelers (Couple / Pair)
                        </option>
                        <option value="3 – 4 Travelers (Family / Friends)" className="bg-[#141C1F]">
                          3 – 4 Travelers (Small Group)
                        </option>
                        <option value="5+ Private Entourage" className="bg-[#141C1F]">
                          5+ Private Entourage
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-gray-300">
                    <Sparkles className="w-4 h-4 text-[#C29D59] shrink-0" />
                    <span>
                      Selected: <strong>{destination}</strong> • {travelStyle} • {duration} for {travelers}
                    </span>
                  </div>
                </div>
              )}

              {/* Step 3: Coordinates & Desires */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C29D59]"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C29D59]"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-2">
                        Telephone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C29D59]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-300 font-medium block mb-2">
                      Specific Desires, Stays, or Milestones (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Celebrating our 10th anniversary; private onsen ryokan required; passionate about local tea ceremonies and architectural landmarks..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C29D59]"
                    />
                  </div>
                </div>
              )}

              {/* Error Message */}
              {errorMsg && (
                <div className="mt-4 p-3 rounded-xl bg-red-900/40 border border-red-500/30 text-xs text-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/20 text-xs uppercase tracking-wider text-gray-300 hover:text-white hover:border-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-gray-400 py-1">
                    <Lock className="w-3.5 h-3.5 text-[#C29D59]" />
                    <span>Strictly private &amp; confidential</span>
                  </div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#C29D59] text-[#0D1315] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-md group text-center"
                  >
                    <span>Continue to Step 0{step + 1}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 rounded-full bg-[#C29D59] text-[#0D1315] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-xl disabled:opacity-50 text-center"
                  >
                    <span>{loading ? "Transmitting Dossier..." : "Submit Bespoke Enquiry"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Quiet Trust Signals */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-center text-xs text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C29D59]" />
            <span>24-Hour Dossier Turnaround</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-[#C29D59]" />
            <span>Direct Senior Curator Assignment</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C29D59]" />
            <span>Complimentary Initial Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
