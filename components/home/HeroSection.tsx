"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, MapPin, Smile } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2160&q=85"
          alt="Cinematic Alpine Lake Vista"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients: Top fade for nav readability, bottom fade into linen canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/30 to-[#F8F7F3]" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-10 sm:mt-14">
        {/* Subtle Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-[0.2em] uppercase font-semibold text-gray-200 mb-6"
        >
          <Compass className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Curated Journeys • Unrivaled Luxury</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-sm"
        >
          YOUR NEXT
          <br />
          <span className="italic font-normal text-amber-200/95">GREAT ESCAPE.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow"
        >
          Curated journeys, unforgettable experiences, and thoughtfully planned adventures around the world.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-xl group"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/plan-trip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/30 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            <span>Plan My Trip</span>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-white/15 max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
            <ShieldCheck className="w-4 h-4 text-[#D9A441] shrink-0" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {siteConfig.stats.tripsPlanned} journeys planned
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
            <MapPin className="w-4 h-4 text-[#D9A441] shrink-0" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {siteConfig.stats.destinations} destinations
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-white">
            <Smile className="w-4 h-4 text-[#D9A441] shrink-0" />
            <span className="text-xs sm:text-sm font-medium tracking-wide">
              {siteConfig.stats.happyTravelers} happy travelers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
