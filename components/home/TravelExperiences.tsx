"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/data/experiences";

export default function TravelExperiences() {
  return (
    <section className="py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C29D59]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
              Travel Moods
            </span>
            <span className="w-8 h-[1px] bg-[#C29D59]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0D1315] tracking-[-0.03em] leading-[1.08]">
            Curated by how you wish to feel.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#585A57] font-light leading-relaxed">
            Every journey possesses an emotional signature. Choose the atmosphere that speaks to your present desires.
          </p>
        </div>

        {/* 8 Distinct Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/packages?style=${encodeURIComponent(exp.slug)}`}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 p-6 flex flex-col justify-between"
            >
              {/* Background */}
              <Image
                src={exp.cardImage}
                alt={exp.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-300" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#E5D2AE] font-semibold border border-white/10">
                  {exp.packageCount} Journeys
                </span>
                <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C29D59] group-hover:text-[#0D1315] transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 text-white">
                <h3 className="font-serif text-2xl font-normal mb-1 group-hover:text-[#E5D2AE] transition-colors leading-snug">
                  {exp.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 font-light leading-relaxed">
                  {exp.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
