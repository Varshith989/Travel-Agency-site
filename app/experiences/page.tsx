import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { experiences } from "@/lib/data/experiences";

export const metadata = {
  title: "Travel Experiences & Styles — Aerova Travels",
  description: "Explore curated travel styles: Luxury, Honeymoon, Cultural Odysseys, Alpine Adventures, and Bespoke Sanctuaries.",
};

export default function ExperiencesPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-24 min-h-screen bg-[#F8F7F3] w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 w-full max-w-full">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#D9A441] text-[11px] sm:text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Travel Styles</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-6xl font-bold text-[#111111] tracking-tight">
            Travel Your Way
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#737373] font-light leading-relaxed">
            Every journey we plan begins not merely with a map, but with how you want to feel. Browse our signature categories.
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-8 sm:space-y-12 w-full max-w-full">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#171717]/8 shadow-sm grid grid-cols-1 lg:grid-cols-12 w-full max-w-full ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo Column (6 cols) */}
              <div className={`lg:col-span-6 relative min-h-[220px] sm:min-h-[340px] lg:min-h-full w-full ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={exp.heroImage}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Text Column (6 cols) */}
              <div className={`lg:col-span-6 p-5 sm:p-8 sm:p-12 flex flex-col justify-between w-full max-w-full ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="w-full max-w-full">
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441] block mb-1.5 sm:mb-2">
                    {exp.packageCount} Tailored Packages Available
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#111111] mb-2 sm:mb-3">
                    {exp.title}
                  </h2>
                  <p className="font-serif italic text-sm sm:text-base text-[#D9A441] mb-3 sm:mb-4">
                    “{exp.tagline}”
                  </p>
                  <p className="text-xs sm:text-sm text-[#737373] font-light leading-relaxed mb-5 sm:mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 sm:mb-8 w-full max-w-full">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-[#171717]">
                        <div className="w-4 h-4 rounded-full bg-[#D9A441]/20 flex items-center justify-center text-[#D9A441] shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-[#171717]/10 w-full max-w-full">
                  <Link
                    href={`/packages?style=${encodeURIComponent(exp.slug)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-all text-center"
                  >
                    <span>View Matching Packages</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/plan-trip?style=${encodeURIComponent(exp.title)}`}
                    className="text-xs uppercase tracking-wider font-semibold text-[#111111] hover:text-[#D9A441] transition-colors text-center py-2 sm:py-0"
                  >
                    Request Custom Trip
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
