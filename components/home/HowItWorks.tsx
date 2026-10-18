"use client";

import Link from "next/link";
import { ArrowRight, Compass, FileText, KeyRound } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "The Dialogue",
      subtitle: "Uncovering your personal travel rhythm",
      description:
        "Through our bespoke inquiry atelier or a discreet consultation, share your curiosities, culinary passions, and ideal tempo.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Artisanal Blueprint",
      subtitle: "Sculpting an original day-by-day itinerary",
      description:
        "Our destination architects design a tailored route, vetting each private sanctuary suite, scenic transfer, and local guide.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Curated Access",
      subtitle: "Securing private doors & rare clearances",
      description:
        "Once you approve the proposal, we secure priority reservations, after-hours temple access, and private rail charters.",
    },
    {
      num: "04",
      title: "Effortless Presence",
      subtitle: "Dedicated concierge stewardship",
      description:
        "Receive your bound leather portfolio and 24/7 concierge WhatsApp link. Travel with absolute calm, knowing every detail is held.",
      icon: KeyRound,
    },
  ];

  return (
    <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#C29D59]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
            The Aerova Atelier Method
          </span>
          <span className="w-8 h-[1px] bg-[#C29D59]" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0D1315] tracking-[-0.03em] leading-[1.08]">
          How extraordinary journeys come to life.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#585A57] font-light leading-relaxed">
          We treat each itinerary not as a standard booking, but as an original work of art
          crafted around your singular perspective.
        </p>
      </div>

      {/* 4 Step Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((item, idx) => (
          <div
            key={item.num}
            className="group relative bg-[#FAF8F5] rounded-3xl p-8 border border-[#181918]/8 hover:border-[#C29D59]/40 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              {/* Refined Numeral Badge */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-4xl font-light text-[#C29D59] tracking-tighter">
                  {item.num}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#7A7C78] font-mono">
                  Phase {idx + 1}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-normal text-[#0D1315] mb-1 group-hover:text-[#C29D59] transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] uppercase tracking-wider text-[#C29D59] font-medium mb-4">
                {item.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#585A57] font-light leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#181918]/6 flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#0D1315] group-hover:text-[#C29D59] transition-colors">
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Process CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/#inquire"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D1315] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C29D59] hover:text-[#0D1315] transition-all shadow-md group"
        >
          <span>Begin Step 01 Now</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
