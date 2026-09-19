"use client";

import Link from "next/link";
import { MessageSquare, Sparkles, CheckSquare, Luggage, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell us where you want to go",
      description: "Share your dream destination, travel dates, style, and desires through our multi-step planner or a brief call with our curators.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "We design your journey",
      description: "Our destination architect designs a day-by-day bespoke proposal complete with handpicked luxury stays, private guides, and culinary access.",
      icon: Sparkles,
    },
    {
      step: "03",
      title: "You approve your itinerary",
      description: "We refine every detail together until it mirrors your exact vision. Once approved, all bookings, passes, and VIP clearances are secured.",
      icon: CheckSquare,
    },
    {
      step: "04",
      title: "Pack your bags",
      description: "Receive your comprehensive Aerova travel portfolio and 24/7 dedicated concierge link. Embark with absolute peace of mind.",
      icon: Luggage,
    },
  ];

  return (
    <section className="py-24 bg-[#EFECE6]/40 border-y border-[#171717]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] mb-2 block">
            The Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
            How your journey begins.
          </h2>
          <p className="mt-3 text-base text-[#737373] font-light">
            A frictionless, high-touch methodology engineered around your peace of mind.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#D9A441] flex items-center justify-center font-mono font-bold text-sm shadow-md">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#111111] shadow-sm border border-[#171717]/5">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#111111] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#737373] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connecting Line on desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 border-t border-dashed border-[#D9A441]/40" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/plan-trip"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-all shadow-md group"
          >
            <span>Start Step 01 Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
