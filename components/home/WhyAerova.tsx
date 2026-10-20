"use client";

import Image from "next/image";
import { Headphones, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

export default function WhyAerova() {
  const pillars = [
    {
      num: "01",
      title: "Artisanal Tailoring",
      description:
        "No templates or algorithmic bundles. Every suite, scenic transit, and private dining reservation is sculpted around your tastes and travel tempo.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "Personally Surveyed Stays",
      description:
        "We sleep in the beds, meet the general managers, and dine at the tables. Every sanctuary in our collection meets exacting standards of quiet luxury.",
      icon: ShieldCheck,
    },
    {
      num: "03",
      title: "Elite Local Storytellers",
      description:
        "Experience ancient ruins and modern architecture alongside private scholars, tea masters, wildlife trackers, and culinary historians.",
      icon: UserCheck,
    },
    {
      num: "04",
      title: "24/7 Dedicated Concierge",
      description:
        "A personal destination architect on WhatsApp and direct telephone from departure to return, managing every fluid request seamlessly.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-16 sm:py-28 bg-[#0D1315] text-white overflow-hidden relative w-full max-w-full">
      {/* Subtle Texture & Atmospheric Backdrop */}
      <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2160&q=80"
          alt="Atmospheric landscape"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1315] via-[#0D1315]/95 to-[#0D1315]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-end mb-12 sm:mb-20 w-full max-w-full">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C29D59]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
                The Aerova Distinction
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-white leading-[1.08]">
              Travel designed with human reverence.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              We remove the friction, noise, and commercial clichés of modern travel,
              returning you to the pure joy of quiet discovery and wonder.
            </p>
          </div>
        </div>

        {/* 4 Distinction Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 w-full max-w-full">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#141C1F] border border-white/10 hover:border-[#C29D59]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-lg w-full max-w-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <span className="font-serif text-3xl font-light text-[#C29D59]">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C29D59] group-hover:bg-[#C29D59] group-hover:text-[#0D1315] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2 sm:mb-3 group-hover:text-[#E5D2AE] transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-gray-300/90 font-light leading-relaxed mt-3 sm:mt-4">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
