import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import { destinations } from "@/lib/data/destinations";
import { formatINR } from "@/lib/utils";

export const metadata = {
  title: "Curated Destinations — Aerova Travels",
  description: "Explore our handpicked collection of the world's most extraordinary destinations, from Bali to Switzerland and Japan.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#D9A441] text-xs uppercase tracking-widest font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Global Portfolio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#111111] tracking-tight">
            Curated Destinations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#737373] font-light leading-relaxed">
            From secluded private atolls in the Indian Ocean to snow-dusted alpine chalets in Switzerland, discover places worth remembering.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group relative h-[480px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-7 bg-black"
            >
              <Image
                src={dest.heroImage}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-300" />

              {/* Card Top */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium tracking-wider text-white uppercase border border-white/20">
                  <MapPin className="w-3 h-3 text-[#D9A441]" />
                  {dest.country}
                </span>
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-medium tracking-wider text-white border border-white/15">
                  From {formatINR(dest.startingPrice)}
                </span>
              </div>

              {/* Card Bottom */}
              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block mb-1">
                  {dest.continent} • {dest.idealDuration}
                </span>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {dest.name}
                </h2>
                <p className="text-xs text-gray-300 line-clamp-2 mb-4 font-light leading-relaxed">
                  {dest.tagline}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
                  <span className="text-[#D9A441]">Discover Itineraries</span>
                  <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-[#D9A441] group-hover:text-[#111111] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
