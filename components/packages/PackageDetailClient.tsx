"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Package } from "@/lib/types";
import { formatINR } from "@/lib/utils";
import BookingModal from "./BookingModal";
import PackageItineraryAccordions from "./PackageItineraryAccordions";
import {
  MapPin,
  Star,
  CheckCircle2,
  XCircle,
  Building2,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

interface Props {
  pkg: Package;
}

export default function PackageDetailClient({ pkg }: Props) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7F3] pt-20 sm:pt-24 pb-28 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#737373] hover:text-[#D9A441] transition-colors mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Curated Packages</span>
        </Link>

        {/* Hero Banner with large imagery */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[480px] flex items-end p-5 sm:p-8 sm:p-12 mb-8 sm:mb-14">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          <div className="relative z-10 text-white max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2.5 sm:mb-3">
              <span className="px-3 py-1 rounded-full bg-[#D9A441] text-[#111111] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                {pkg.travelStyle}
              </span>
              <span className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-300 font-semibold bg-black/40 px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>{pkg.rating}</span>
                <span className="text-gray-300">({pkg.reviewCount})</span>
              </span>
              <span className="text-[11px] sm:text-xs text-gray-200">
                {pkg.durationDays} Days / {pkg.durationNights} Nights
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 sm:mb-3">
              {pkg.title}
            </h1>

            <p className="font-serif italic text-base sm:text-xl text-amber-200 mb-3 sm:mb-4 font-light">
              “{pkg.tagline}”
            </p>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#D9A441] shrink-0" />
              <span className="font-medium text-white">{pkg.destinationName}, {pkg.country}</span>
              <span>•</span>
              <span className="font-mono text-[#D9A441]">{pkg.route.join(" → ")}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Itinerary, Inclusions, Hotels */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-14">
            {/* Overview */}
            <section>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
                Journey Narrative
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-3 sm:mb-4">
                Overview
              </h2>
              <p className="text-sm sm:text-base text-[#737373] leading-relaxed font-light">
                {pkg.overview}
              </p>
            </section>

            {/* Day-by-Day Interactive Itinerary */}
            <section>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-1">
                    Day-By-Day Blueprint
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                    Curated Itinerary
                  </h2>
                </div>
                <span className="text-xs text-[#737373]">
                  {pkg.itinerary.length} Days Mapped
                </span>
              </div>

              <PackageItineraryAccordions itinerary={pkg.itinerary} />
            </section>

            {/* Inclusions & Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#171717]/8 shadow-sm">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#111111] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>What&apos;s Included</span>
                </h3>
                <ul className="space-y-3 text-xs text-[#171717] leading-relaxed font-light">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#111111] mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-gray-400" />
                  <span>What&apos;s Excluded</span>
                </h3>
                <ul className="space-y-3 text-xs text-[#737373] leading-relaxed font-light">
                  {pkg.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Handpicked Accommodations */}
            <section>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
                Sanctuaries of Rest
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-5 sm:mb-6">
                Featured Hotels & Ryokans
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {pkg.hotels.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#171717]/8 shadow-sm flex items-center gap-3 sm:gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F8F7F3] flex items-center justify-center text-[#D9A441] shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#111111]">
                        {h.name}
                      </h4>
                      <p className="text-xs text-[#737373]">
                        {h.city} • {h.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cancellation Policy */}
            <section className="p-5 sm:p-6 rounded-2xl bg-white border border-[#171717]/8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span>Flexible Cancellation & Assurance</span>
              </div>
              <p className="text-xs text-[#737373] leading-relaxed font-light">
                {pkg.cancellationPolicy}
              </p>
            </section>
          </div>

          {/* Right Column: Sticky Booking / Price Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#111111] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 space-y-5 sm:space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">
                  All-Inclusive Starting Price
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D9A441]">
                    {formatINR(pkg.priceINR)}
                  </span>
                  <span className="text-xs text-gray-400">/ person</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  Taxes, premium stays & First-Class transport included
                </p>
              </div>

              <div className="space-y-3 text-xs text-gray-300 pt-4 border-t border-white/10">
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="font-medium text-white">{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Travel Style:</span>
                  <span className="font-medium text-white">{pkg.travelStyle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Transfers:</span>
                  <span className="font-medium text-white">Private Luxury Vehicle</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pacing:</span>
                  <span className="font-medium text-white">Bespoke & Unhurried</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-4 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book This Trip</span>
                </button>

                <Link
                  href={`/plan-trip?package=${encodeURIComponent(pkg.title)}`}
                  className="w-full py-3.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Customize Itinerary</span>
                </Link>
              </div>

              <p className="text-[11px] text-center text-gray-400 font-light">
                Questions? Call our concierge at <span className="text-[#D9A441]">+91 80 4920 8800</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0D1315]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 lg:hidden shadow-2xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 block leading-tight">Starting from</span>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-lg font-bold text-[#D9A441]">{formatINR(pkg.priceINR)}</span>
            <span className="text-[10px] text-gray-400">/pp</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/plan-trip?package=${encodeURIComponent(pkg.title)}`}
            className="px-3.5 py-2.5 rounded-full border border-white/20 text-white text-xs uppercase tracking-wider font-semibold whitespace-nowrap"
          >
            Customize
          </Link>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-4 py-2.5 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        pkg={pkg}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
