"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 w-full max-w-full">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#C29D59]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
            Client Reflections
          </span>
          <span className="w-8 h-[1px] bg-[#C29D59]" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0D1315] tracking-[-0.03em] leading-[1.08]">
          Chapters written across four continents.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#585A57] font-light leading-relaxed">
          Unfiltered reflections from discerning voyagers who entrusted Aerova with
          their most cherished milestones.
        </p>
      </div>

      {/* Editorial Pull-Quote Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-full">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="p-5 sm:p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-white border border-[#181918]/8 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between relative group w-full max-w-full"
          >
            <div>
              {/* Stars & Subtle Quote Watermark */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-1.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C29D59] text-[#C29D59]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#C29D59]/20 transition-transform duration-500 group-hover:scale-110 shrink-0" />
              </div>

              {/* Editorial Pull-Quote */}
              <p className="font-serif text-lg sm:text-2xl text-[#0D1315] leading-[1.4] italic font-normal mb-6 sm:mb-10">
                &ldquo;{item.content}&rdquo;
              </p>
            </div>

            {/* Author Meta & Trip Footnote */}
            <div className="pt-5 sm:pt-6 border-t border-[#181918]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[#C29D59]/30 shrink-0">
                  <Image
                    src={item.avatarUrl}
                    alt={item.authorName}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base font-medium text-[#0D1315]">
                    {item.authorName}
                  </h4>
                  <p className="text-xs text-[#7A7C78] font-light">
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[11px] text-[#C29D59] font-medium block uppercase tracking-wider">
                  {item.tripTaken}
                </span>
                <span className="text-[10px] text-[#7A7C78]">{item.travelDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
