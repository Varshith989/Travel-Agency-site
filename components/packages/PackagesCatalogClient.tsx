"use client";

import { useState, useMemo, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, Star, Clock, MapPin, ArrowRight, RotateCcw } from "lucide-react";
import { Package } from "@/lib/types";
import { formatINR } from "@/lib/utils";

interface Props {
  initialPackages: Package[];
  initialDestination?: string;
  initialStyle?: string;
}

export default function PackagesCatalogClient({
  initialPackages,
  initialDestination = "all",
  initialStyle = "all",
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(initialDestination);
  const [selectedStyle, setSelectedStyle] = useState(initialStyle);
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [sortBy, setSortBy] = useState<"popularity" | "price-asc" | "price-desc" | "duration">("popularity");

  const destinationsList = useMemo(() => {
    const list = Array.from(new Set(initialPackages.map((p) => p.destinationName)));
    return ["all", ...list];
  }, [initialPackages]);

  const stylesList = useMemo(() => {
    const list = Array.from(new Set(initialPackages.map((p) => p.travelStyle)));
    return ["all", ...list];
  }, [initialPackages]);

  const filteredPackages = useMemo(() => {
    return initialPackages
      .filter((pkg) => {
        // Search
        const matchesSearch =
          pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.destinationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.tagline.toLowerCase().includes(searchTerm.toLowerCase());

        if (!matchesSearch) return false;

        // Destination
        if (
          selectedDestination !== "all" &&
          pkg.destinationSlug.toLowerCase() !== selectedDestination.toLowerCase() &&
          pkg.destinationName.toLowerCase() !== selectedDestination.toLowerCase()
        ) {
          return false;
        }

        // Style
        if (
          selectedStyle !== "all" &&
          pkg.travelStyle.toLowerCase() !== selectedStyle.toLowerCase()
        ) {
          return false;
        }

        // Duration
        if (selectedDuration === "short" && pkg.durationDays > 6) return false;
        if (selectedDuration === "medium" && (pkg.durationDays < 7 || pkg.durationDays > 9)) return false;
        if (selectedDuration === "long" && pkg.durationDays < 10) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.priceINR - b.priceINR;
        if (sortBy === "price-desc") return b.priceINR - a.priceINR;
        if (sortBy === "duration") return a.durationDays - b.durationDays;
        return b.reviewCount - a.reviewCount; // Popularity default
      });
  }, [initialPackages, searchTerm, selectedDestination, selectedStyle, selectedDuration, sortBy]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedDestination("all");
    setSelectedStyle("all");
    setSelectedDuration("all");
    setSortBy("popularity");
  };

  return (
    <div>
      {/* Filter Toolbar */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#171717]/8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by country, city, or route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#D9A441]"
            />
          </div>

          {/* Destination Filter */}
          <div>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none cursor-pointer"
            >
              <option value="all">All Destinations</option>
              {destinationsList.filter((d) => d !== "all").map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Travel Style Filter */}
          <div>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none cursor-pointer"
            >
              <option value="all">All Travel Styles</option>
              {stylesList.filter((s) => s !== "all").map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Duration Filter */}
          <div>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none cursor-pointer"
            >
              <option value="all">Any Duration</option>
              <option value="short">5 – 6 Days</option>
              <option value="medium">7 – 9 Days</option>
              <option value="long">10+ Days</option>
            </select>
          </div>

          {/* Sort Selector */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] font-semibold focus:outline-none cursor-pointer"
            >
              <option value="popularity">Sort: Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration">Duration: Short to Long</option>
            </select>
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#737373]">
          <span>
            Showing <strong>{filteredPackages.length}</strong> of {initialPackages.length} curated packages
          </span>
          {(searchTerm || selectedDestination !== "all" || selectedStyle !== "all" || selectedDuration !== "all") && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-[#D9A441] hover:underline font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Package Cards Grid */}
      {filteredPackages.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#171717]/8 p-8">
          <p className="font-serif text-2xl font-bold text-[#111111] mb-2">
            No journeys match your exact filter combination.
          </p>
          <p className="text-sm text-[#737373] mb-6">
            Our curators can tailor a completely bespoke itinerary to any destination.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#171717]/8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badges */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-wider text-white font-semibold border border-white/10">
                      {pkg.travelStyle}
                    </span>
                    {pkg.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-[#D9A441] text-[#111111] text-[10px] uppercase tracking-wider font-bold shadow">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
                      <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#D9A441] text-[#D9A441]" />
                      <span className="font-bold">{pkg.rating}</span>
                      <span className="text-gray-300">({pkg.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Package Info */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#D9A441] uppercase tracking-wider font-semibold mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{pkg.destinationName}, {pkg.country}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#111111] leading-snug group-hover:text-[#D9A441] transition-colors mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#737373] line-clamp-2 font-light leading-relaxed mb-4">
                    {pkg.overview}
                  </p>

                  {/* Route tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {pkg.route.map((stop, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#F8F7F3] text-[10px] font-medium text-[#171717] border border-[#171717]/5"
                      >
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Price & Button */}
              <div className="p-6 pt-0 border-t border-[#171717]/5 mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                    From
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-xl font-bold text-[#111111]">
                      {formatINR(pkg.priceINR)}
                    </span>
                    <span className="text-[10px] text-[#737373]">/ person</span>
                  </div>
                </div>

                <Link
                  href={`/packages/${pkg.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
