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
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#111111] text-[#FFFFFF] text-xs px-3.5 py-2 rounded-full shadow-lg border border-white/10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with our Luxury Concierge</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#20ba59] transition-all duration-300"
        aria-label="Open WhatsApp conversation with Aerova Travels"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D9A441] border-2 border-white" />
      </a>
    </aside>
  );
}
