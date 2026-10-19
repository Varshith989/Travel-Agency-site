"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { usePathname } from "next/navigation";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const encodedMessage = encodeURIComponent(siteConfig.contact.whatsappDefaultMessage);
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Private Concierge WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5"
    >
      {/* Discreet Luxury Callout */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2.5 bg-[#0D1315]/95 text-white text-xs px-4 py-2.5 rounded-full shadow-2xl border border-white/10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#C29D59] animate-pulse" />
          <span className="font-light tracking-wide text-gray-200">
            Private Concierge on WhatsApp
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Refined Obsidian & Gold Luxury Trigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-[#0D1315] border border-[#C29D59]/40 text-[#C29D59] hover:bg-[#C29D59] hover:text-[#0D1315] flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Connect with Aerova Luxury Concierge on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#C29D59] ring-2 ring-[#0D1315]" />
      </a>
    </aside>
  );
}
