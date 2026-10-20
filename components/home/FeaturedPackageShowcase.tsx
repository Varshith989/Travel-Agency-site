"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Moon,
  Sparkles,
  Star,
} from "lucide-react";
import { packages } from "@/lib/data/packages";
import { formatINR } from "@/lib/utils";

export default function FeaturedPackageShowcase() {
  const [regionFilter, setRegionFilter] = useState("all");
  const [styleFilter, setStyleFilter] = useState("all");

  const regions = [
    { id: "all", label: "All Regions" },
    { id: "Japan", label: "Japan" },
    { id: "Indonesia", label: "Bali" },
    { id: "Switzerland", label: "Switzerland" },
    { id: "Republic of Maldives", label: "Maldives" },
    { id: "United Arab Emirates", label: "Dubai" },
  ];

  const travelStyles = [
    { id: "all", label: "All Styles" },
    { id: "Cultural", label: "Cultural" },
    { id: "Luxury", label: "Private Sanctuary" },
    { id: "Honeymoon", label: "Honeymoon" },
    { id: "Beach", label: "Coastal & Island" },
  ];

  const filteredPackages = packages.filter((pkg) => {
    const matchesRegion =
      regionFilter === "all" ||
      pkg.country.toLowerCase().includes(regionFilter.toLowerCase()) ||
      pkg.destinationSlug.toLowerCase().includes(regionFilter.toLowerCase());

    const matchesStyle =
      styleFilter === "all" ||
      pkg.travelStyle.toLowerCase() === styleFilter.toLowerCase();

    return matchesRegion && matchesStyle;
  });

  return (
    <section id="journeys" className="py-16 sm:py-28 bg-[#F4F0E8]/60 border-y border-[#181918]/6 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6 sm:gap-8 w-full max-w-full">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#C29D59]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
                Signature Itineraries
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0D1315] tracking-[-0.03em] leading-[1.08]">
              Curated journeys of effortless grace.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#585A57] font-light leading-relaxed max-w-xl">
              Each expedition is fully customizable, guided by local masters, and
              curated with private sanctuary accommodation.
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#0D1315] hover:text-[#C29D59] transition-colors group shrink-0"
          >
            <span>View All Journeys</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-12 pb-5 sm:pb-6 border-b border-[#181918]/8 w-full max-w-full min-w-0">
          {/* Region Tabs with isolated horizontal scroll */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full max-w-full min-w-0">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setRegionFilter(reg.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap shrink-0 transition-all duration-300 ${
                  regionFilter === reg.id
                    ? "bg-[#0D1315] text-[#FAF8F5] shadow-sm"
                    : "bg-white/80 hover:bg-white text-[#585A57] border border-[#181918]/6"
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* Style Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] uppercase tracking-wider text-[#7A7C78] hidden sm:inline">
              Style:
            </span>
            <select
              value={styleFilter}
              onChange={(e) => setStyleFilter(e.target.value)}
              className="px-4 py-2 rounded-full bg-white border border-[#181918]/10 text-xs font-medium text-[#0D1315] focus:outline-none focus:ring-1 focus:ring-[#C29D59] cursor-pointer"
            >
              {travelStyles.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Itinerary Cards Grid - 1 column under md, 2 under lg, 3 on lg+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-full">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#181918]/8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between w-full max-w-full"
            >
              {/* Card Header & Imagery */}
              <div>
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#E5D2AE] font-semibold border border-white/10">
                      {pkg.travelStyle}
                    </span>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] text-amber-300 font-medium">
                      <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                      <span>{pkg.rating}</span>
                    </div>
                  </div>

                  {/* Route Bar over Image Bottom */}
                  {pkg.route && pkg.route.length > 0 && (
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-[11px] font-mono text-gray-200 truncate">
                      <MapPin className="w-3 h-3 text-[#C29D59] shrink-0" />
                      <span className="truncate">{pkg.route.join(" → ")}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-[#7A7C78] mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C29D59]" />
                      <span>{pkg.durationDays} Days</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5 text-[#C29D59]" />
                      <span>{pkg.durationNights} Nights</span>
                    </div>
                    <span>•</span>
                    <span className="font-light">{pkg.country}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#0D1315] leading-snug group-hover:text-[#C29D59] transition-colors mb-2.5">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#585A57] font-light line-clamp-2 leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  {/* Highlights Pill List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#181918]/6 text-xs text-[#585A57]">
                    {pkg.inclusions.slice(0, 2).map((inc, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Sparkles className="w-3 h-3 text-[#C29D59] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Pricing & Actions */}
              <div className="px-5 pb-5 sm:px-7 sm:pb-7 pt-2 flex items-center justify-between border-t border-[#181918]/6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7A7C78] block">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-serif font-semibold text-[#0D1315]">
                      {formatINR(pkg.priceINR)}
                    </span>
                    <span className="text-[11px] text-[#7A7C78] font-light">/ person</span>
                  </div>
                </div>

                <Link
                  href={`/packages/${pkg.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0D1315] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#C29D59] hover:text-[#0D1315] transition-colors"
                >
                  <span>Itinerary</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
