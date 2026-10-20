"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Compass, MapPin } from "lucide-react";
import { destinations } from "@/lib/data/destinations";
import { formatINR } from "@/lib/utils";

export default function FeaturedDestinations() {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const regions = [
    { id: "all", label: "All Regions" },
    { id: "Asia", label: "Asia & Indochina" },
    { id: "Europe", label: "Europe & Alps" },
    { id: "Middle East", label: "Arabia & Beyond" },
  ];

  const filteredDestinations = activeTab === "all"
    ? destinations.slice(0, 6)
    : destinations.filter((d) => d.continent.toLowerCase().includes(activeTab.toLowerCase()) || d.country.toLowerCase().includes(activeTab.toLowerCase())).slice(0, 6);

  return (
    <section id="destinations" className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      {/* Section Header with Editorial Rhythm */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8 w-full max-w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C29D59]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
              Curated Portfolios
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0D1315] tracking-[-0.03em] leading-[1.08]">
            Destinations of rare stillness &amp; wonder.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#585A57] font-light leading-relaxed max-w-xl">
            Each sanctuary is personally surveyed by our destination architects. From
            mist-draped Kyoto bamboo groves to high-altitude Engadin chalets.
          </p>
        </div>

        {/* Region Filter Pills & View All */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full lg:w-auto min-w-0 max-w-full">
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#F2EFE9] border border-[#181918]/6 text-xs overflow-x-auto no-scrollbar w-full max-w-full min-w-0 shrink-0">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveTab(region.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full transition-all duration-300 font-medium text-xs tracking-wider uppercase shrink-0 whitespace-nowrap ${
                  activeTab === region.id
                    ? "bg-[#0D1315] text-[#FAF8F5] shadow-sm"
                    : "text-[#585A57] hover:text-[#0D1315]"
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D1315] hover:text-[#C29D59] transition-colors group ml-1 shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-8 w-full max-w-full">
        {filteredDestinations.map((dest, idx) => {
          // Asymmetric column spans: Create editorial hierarchy (first card 7 cols, second 5 cols, etc.)
          const colSpan =
            idx === 0
              ? "lg:col-span-7 h-[420px] sm:h-[500px]"
              : idx === 1
              ? "lg:col-span-5 h-[420px] sm:h-[500px]"
              : idx === 2
              ? "lg:col-span-4 h-[380px] sm:h-[440px]"
              : idx === 3
              ? "lg:col-span-4 h-[380px] sm:h-[440px]"
              : idx === 4
              ? "lg:col-span-4 h-[380px] sm:h-[440px]"
              : "lg:col-span-12 h-[340px] sm:h-[380px]";

          return (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between p-5 sm:p-7 sm:p-8 ${colSpan} bg-[#0D1315] w-full max-w-full`}
            >
              {/* Background Destination Photography */}
              <Image
                src={dest.heroImage}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90"
              />

              {/* Multi-layered Editorial Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1315]/95 via-[#0D1315]/40 to-[#0D1315]/20 group-hover:from-[#0D1315]/98 transition-all duration-500" />
              <div className="absolute inset-0 bg-black/20" />

              {/* Top Meta: Location & Starting Rate */}
              <div className="relative z-10 flex items-center justify-between gap-2 max-w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] sm:text-[11px] font-medium tracking-widest text-white uppercase border border-white/15 shrink-0 truncate">
                  <MapPin className="w-3 h-3 text-[#C29D59] shrink-0" />
                  <span>{dest.country}</span>
                </span>

                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[10px] sm:text-[11px] font-medium tracking-wider text-white border border-white/20 shrink-0">
                  From {formatINR(dest.startingPrice)}
                </span>
              </div>

              {/* Bottom Editorial Content with Hover Reveals */}
              <div className="relative z-10 text-white w-full max-w-full">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C29D59] font-medium mb-1.5">
                  <Compass className="w-3 h-3 shrink-0" />
                  <span className="truncate">{dest.idealDuration} • {dest.bestTimeToVisit.split("(")[0]}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-2 transition-colors duration-300 group-hover:text-[#F3E6D0]">
                  {dest.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 font-light line-clamp-2 max-w-lg mb-4 leading-relaxed">
                  {dest.tagline}
                </p>

                {/* Micro-Interaction Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs uppercase tracking-[0.16em] font-medium">
                  <span className="text-[#C29D59] group-hover:text-white transition-colors text-[11px] sm:text-xs">
                    Explore Bespoke Portfolio
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C29D59] group-hover:text-[#0D1315] transition-all duration-300 group-hover:scale-110 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
