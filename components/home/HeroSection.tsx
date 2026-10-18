"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Compass, Shield, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Cinematic Full-Bleed Imagery with Art-Directed Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=90"
          alt="Pristine alpine vista at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1315]/75 via-[#0D1315]/40 to-[#0D1315]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D1315]/30 to-[#0D1315]/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12 sm:mt-16">
        {/* Subtle Atelier Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] tracking-[0.26em] uppercase font-medium text-gray-200 mb-8"
        >
          <Compass className="w-3.5 h-3.5 text-[#C29D59]" />
          <span>Curated Journeys • Artisanal Travel Atelier</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em] text-white leading-[1.04] max-w-5xl mx-auto drop-shadow-sm"
        >
          The world,
          <br />
          <span className="italic font-light text-[#E5D2AE] tracking-tight">
            composed just for you.
          </span>
        </motion.h1>

        {/* Comfortable Editorial Subtitle (60-70ch) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-base sm:text-lg md:text-xl text-gray-200/90 max-w-2xl mx-auto font-light leading-relaxed tracking-wide drop-shadow"
        >
          Bespoke expeditions, private sanctuary retreats, and unhurried cultural
          immersions crafted around your personal rhythm.
        </motion.p>

        {/* Dual CTAs — Primary & Subtle Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#inquire"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C29D59] text-[#0D1315] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[#0D1315] transition-all duration-300 shadow-2xl group"
          >
            <span>Plan My Journey</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/#destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            <span>Explore Destinations</span>
          </Link>
        </motion.div>

        {/* Trust Signals — Understated Editorial Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.65 }}
          className="mt-16 pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs tracking-wider uppercase text-gray-300 font-light"
        >
          <div className="flex items-center justify-center gap-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
            <span>100% Tailored Itineraries</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Shield className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
            <span>Personally Vetted Guides</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Compass className="w-3.5 h-3.5 text-[#C29D59] shrink-0" />
            <span>24/7 Dedicated Concierge</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/50 hover:text-white transition-colors"
      >
        <Link
          href="/#destinations"
          aria-label="Scroll to destinations"
          className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.25em]"
        >
          <span>Explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
