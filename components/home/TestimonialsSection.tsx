"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] mb-2 block">
          Client Reflections
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
          Unforgettable chapters told by our travelers.
        </h2>
        <p className="mt-3 text-base text-[#737373] font-light">
          Real stories from extraordinary journeys across four continents.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#171717]/8 shadow-sm flex flex-col justify-between relative hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D9A441] text-[#D9A441]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#D9A441]/20" />
              </div>

              {/* Quote Content */}
              <p className="font-serif text-lg sm:text-xl text-[#111111] leading-relaxed italic mb-8">
                “{item.content}”
              </p>
            </div>

            {/* Author Meta */}
            <div className="pt-6 border-t border-[#171717]/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D9A441]/40">
                  <Image
                    src={item.avatarUrl}
                    alt={item.authorName}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#111111]">
                    {item.authorName}
                  </h4>
                  <p className="text-xs text-[#737373] font-light">
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#D9A441] font-semibold block uppercase tracking-wider">
                  {item.tripTaken}
                </span>
                <span className="text-[10px] text-[#737373]">{item.travelDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
