"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/config";

export default function InstagramGallery() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      caption: "Alpine morning tranquility in Zermatt",
    },
    {
      src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
      caption: "Overwater bliss in the Maldives",
    },
    {
      src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      caption: "Autumn maple canopy over Kyoto pagodas",
    },
    {
      src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      caption: "Sunrise clouds above Bali volcanoes",
    },
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      caption: "Golden hour over Dubai desert dunes",
    },
    {
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      caption: "Twilight stroll past the Eiffel Tower",
    },
  ];

  return (
    <section className="py-24 bg-[#F4F0E8]/40 border-t border-[#181918]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#C29D59]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C29D59]">
                Visual Chronicles
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#0D1315]">
              Snapshots of the sublime.
            </h3>
          </div>

          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#181918]/10 text-xs font-semibold text-[#0D1315] hover:border-[#C29D59] hover:text-[#C29D59] transition-colors shadow-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#C29D59]" />
            <span>Follow @aerovatravels</span>
            <ArrowUpRight className="w-3 h-3 text-[#7A7C78]" />
          </a>
        </div>

        {/* 6 Photo Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {photos.map((photo, idx) => (
            <a
              key={idx}
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
