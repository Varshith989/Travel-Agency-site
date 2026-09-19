"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { destinations } from "@/lib/data/destinations";
import { formatINR } from "@/lib/utils";

export default function FeaturedDestinations() {
  const featuredList = destinations.slice(0, 6);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] mb-2 block">
            Iconic Portfolios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Where will you go next?
          </h2>
          <p className="mt-3 text-base text-[#737373] max-w-xl font-light">
            From hidden escapes to iconic journeys, discover places worth remembering.
          </p>
        </div>

        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#111111] hover:text-[#D9A441] transition-colors group"
        >
          <span>View All 20+ Destinations</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid of Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredList.map((dest) => (
          <Link
            key={dest.id}
            href={`/destinations/${dest.slug}`}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-7"
          >
            {/* Background Image with Zoom */}
            <Image
              src={dest.heroImage}
              alt={dest.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15 group-hover:from-black/90 group-hover:via-black/45 transition-all duration-500" />

            {/* Card Top: Country & Price */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium tracking-wider text-white uppercase border border-white/20">
                <MapPin className="w-3 h-3 text-[#D9A441]" />
                {dest.country}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-medium tracking-wider text-white border border-white/10">
                From {formatINR(dest.startingPrice)}
              </span>
            </div>

            {/* Card Bottom Content */}
            <div className="relative z-10 text-white">
              <h3 className="font-serif text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-amber-200 transition-colors">
                {dest.name}
              </h3>
              <p className="text-xs text-gray-300 line-clamp-2 mb-4 font-light leading-relaxed">
                {dest.tagline}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
                <span className="text-[#D9A441] group-hover:underline">Explore Destination</span>
                <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-[#D9A441] group-hover:text-[#111111] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
