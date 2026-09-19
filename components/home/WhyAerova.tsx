"use client";

import { Sliders, CheckCircle2, Headphones, Sparkles } from "lucide-react";

export default function WhyAerova() {
  const pillars = [
    {
      num: "01",
      title: "Personalized Itineraries",
      description:
        "No cookie-cutter templates. Every route, suite, and dining reservation is sculpted around your tastes and travel rhythm.",
      icon: Sliders,
    },
    {
      num: "02",
      title: "Verified Experiences",
      description:
        "Personally vetted by our destination architects. We inspect every hotel, audit every private guide, and test every charter.",
      icon: CheckCircle2,
    },
    {
      num: "03",
      title: "24/7 Travel Support",
      description:
        "A dedicated personal concierge on WhatsApp and direct line from takeoff to landing, resolving any logistical request instantly.",
      icon: Headphones,
    },
    {
      num: "04",
      title: "Transparent Pricing",
      description:
        "Direct relationships with global luxury suppliers allow crystal-clear itemization without undisclosed commissions or fees.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] mb-2 block">
          The Aerova Standard
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
          Travel should feel effortless.
        </h2>
        <p className="mt-4 text-base text-[#737373] font-light leading-relaxed">
          From first spark of inspiration to your journey home, we remove the friction of modern exploration so you can simply be present.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.num}
              className="group p-8 rounded-3xl bg-white border border-[#171717]/8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-[#D9A441] tracking-widest">
                    {pillar.num}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-[#F8F7F3] flex items-center justify-center text-[#111111] group-hover:bg-[#D9A441] group-hover:text-[#111111] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#111111] mb-3 group-hover:text-[#D9A441] transition-colors">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#737373] font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
