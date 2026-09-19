"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/data/experiences";

export default function TravelExperiences() {
  return (
    <section className="py-24 bg-[#EFECE6]/50 border-y border-[#171717]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] mb-2 block">
            Curated Styles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Travel your way.
          </h2>
          <p className="mt-3 text-base text-[#737373] font-light">
            Every traveler holds a unique rhythm. Discover our bespoke styles designed around how you wish to experience the world.
          </p>
        </div>

        {/* 8 Distinct Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              href={`/packages?style=${encodeURIComponent(exp.slug)}`}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              {/* Background */}
              <Image
                src={exp.cardImage}
                alt={exp.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-wider text-white font-semibold border border-white/20">
                  {exp.packageCount} Journeys
                </span>
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#D9A441] group-hover:text-[#111111] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 text-white">
                <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-amber-200 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 font-light">
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
