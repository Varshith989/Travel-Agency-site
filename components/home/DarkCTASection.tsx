"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";

export default function DarkCTASection() {
  return (
    <section className="relative py-32 bg-[#111111] text-white overflow-hidden">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2160&q=80"
          alt="Night Horizon"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[#D9A441]/10 border border-[#D9A441]/30 flex items-center justify-center text-[#D9A441] mx-auto mb-6">
          <Compass className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Your next chapter
          <br />
          <span className="italic font-normal text-amber-200/90">starts somewhere else.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          Tell us where you're dreaming of going. We'll take care of the rest.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/plan-trip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-2xl group"
          >
            <span>Start Planning</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
          >
            <span>Talk to an Expert</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
