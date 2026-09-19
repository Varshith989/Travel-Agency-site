"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Calendar, Moon, Plane, Building2, Coffee, Compass, Star } from "lucide-react";
import { packages } from "@/lib/data/packages";
import { formatINR } from "@/lib/utils";

export default function FeaturedPackageShowcase() {
  const japanPackage = packages.find((p) => p.slug === "japan-golden-route") || packages[0];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Banner Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-[1px] bg-[#D9A441]" />
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441]">
          Signature Editorial Itinerary
        </span>
      </div>

      <div className="bg-[#111111] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 lg:grid-cols-12">
        {/* Left / Top Editorial Content (5 cols) */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#D9A441]/20 text-[#D9A441] text-[11px] uppercase tracking-wider font-semibold border border-[#D9A441]/30">
                Flagship Expedition
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>{japanPackage.rating}</span>
                <span className="text-gray-400">({japanPackage.reviewCount} reviews)</span>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              JAPAN — 10 DAYS
            </h2>

            {/* Route indicator */}
            <div className="mt-3 flex items-center gap-2 text-sm text-[#D9A441] font-mono font-medium">
              <span>Tokyo</span>
              <span>→</span>
              <span>Hakone</span>
              <span>→</span>
              <span>Kyoto</span>
              <span>→</span>
              <span>Osaka</span>
            </div>

            <blockquote className="mt-5 text-lg font-serif italic text-gray-300 border-l-2 border-[#D9A441] pl-4">
              “{japanPackage.tagline}”
            </blockquote>

            <p className="mt-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              {japanPackage.overview}
            </p>

            {/* Package Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Calendar className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="text-xs font-medium text-gray-200">10 Days</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Moon className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="text-xs font-medium text-gray-200">9 Nights</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Plane className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="text-xs font-medium text-gray-200">Flights Included</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Building2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="text-xs font-medium text-gray-200">5-Star & Ryokan</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Coffee className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="text-xs font-medium text-gray-200">Daily Breakfast</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Compass className="w-4 h-4 text-[#D9A441] shrink-0" />
                <span className="text-xs font-medium text-gray-200">Guided Tours</span>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 block">
                Starting from
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D9A441]">
                  {formatINR(japanPackage.priceINR)}
                </span>
                <span className="text-xs text-gray-400 font-light">/ person</span>
              </div>
            </div>

            <Link
              href={`/packages/${japanPackage.slug}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-xl group"
            >
              <span>View Itinerary</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right / Bottom Cinematic Imagery (6 cols) */}
        <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-full">
          <Image
            src={japanPackage.heroImage}
            alt="Japan Kyoto Pagoda & Cherry Blossoms"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#111111] lg:via-transparent lg:to-transparent" />
          
          {/* Floating Luxury Badge */}
          <div className="absolute bottom-6 right-6 z-10 glass-panel-dark px-4 py-3 rounded-2xl max-w-xs text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block mb-1">
              Featured Experience
            </span>
            <p className="text-xs text-white font-serif">
              Private Shinkansen Green Car + Authentic Onsen Ryokan Stay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
