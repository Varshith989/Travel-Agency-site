"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Users, Sparkles, Search } from "lucide-react";

export default function SearchPanel() {
  const router = useRouter();
  const [destination, setDestination] = useState("all");
  const [dates, setDates] = useState("flexible");
  const [travelers, setTravelers] = useState("2");
  const [style, setStyle] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination !== "all") params.set("destination", destination);
    if (style !== "all") params.set("style", style);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12">
      <div className="bg-white rounded-3xl sm:rounded-full p-3 sm:p-4 shadow-2xl border border-[#171717]/8 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 items-center"
        >
          {/* Field 1: Destination */}
          <div className="px-4 py-2.5 rounded-2xl hover:bg-[#F8F7F3] transition-colors group">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#737373] group-hover:text-[#D9A441]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Where to?</span>
            </div>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full mt-1 bg-transparent font-medium text-sm text-[#111111] focus:outline-none cursor-pointer"
            >
              <option value="all">All Global Destinations</option>
              <option value="japan">Japan (Tokyo, Kyoto, Osaka)</option>
              <option value="bali">Bali, Indonesia</option>
              <option value="switzerland">Switzerland (Alps & Lakes)</option>
              <option value="maldives">Maldives Atolls</option>
              <option value="dubai">Dubai & Desert Oasis</option>
              <option value="paris">Paris, France</option>
            </select>
          </div>

          {/* Field 2: Dates */}
          <div className="px-4 py-2.5 rounded-2xl hover:bg-[#F8F7F3] transition-colors group">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#737373] group-hover:text-[#D9A441]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Travel Dates</span>
            </div>
            <select
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full mt-1 bg-transparent font-medium text-sm text-[#111111] focus:outline-none cursor-pointer"
            >
              <option value="flexible">Flexible Season</option>
              <option value="spring-2026">Spring 2026 (Sakura / Wildflowers)</option>
              <option value="summer-2026">Summer 2026 (June – August)</option>
              <option value="autumn-2026">Autumn 2026 (September – November)</option>
              <option value="winter-2026">Winter 2026 (Powder & Festive)</option>
            </select>
          </div>

          {/* Field 3: Travelers */}
          <div className="px-4 py-2.5 rounded-2xl hover:bg-[#F8F7F3] transition-colors group">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#737373] group-hover:text-[#D9A441]">
              <Users className="w-3.5 h-3.5" />
              <span>Travelers</span>
            </div>
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full mt-1 bg-transparent font-medium text-sm text-[#111111] focus:outline-none cursor-pointer"
            >
              <option value="1">1 Solo Voyager</option>
              <option value="2">2 Travelers (Couple / Pair)</option>
              <option value="3">3 – 4 (Small Group / Family)</option>
              <option value="5">5+ Private Entourage</option>
            </select>
          </div>

          {/* Field 4: Travel Style & Submit */}
          <div className="flex items-center gap-2 p-1">
            <div className="flex-1 px-3 py-2 rounded-2xl hover:bg-[#F8F7F3] transition-colors group">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#737373] group-hover:text-[#D9A441]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Travel Style</span>
              </div>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full mt-1 bg-transparent font-medium text-sm text-[#111111] focus:outline-none cursor-pointer truncate"
              >
                <option value="all">Any Travel Style</option>
                <option value="Luxury">Luxury & Private</option>
                <option value="Honeymoon">Romantic Honeymoon</option>
                <option value="Cultural">Cultural Odyssey</option>
                <option value="Beach">Beach & Lagoon</option>
                <option value="Adventure">Alpine Adventure</option>
              </select>
            </div>

            <button
              type="submit"
              className="h-14 px-6 rounded-full bg-[#111111] text-white flex items-center justify-center gap-2 hover:bg-[#D9A441] hover:text-[#111111] transition-all duration-300 shadow-md shrink-0 font-medium text-xs uppercase tracking-wider"
              aria-label="Find My Journey"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Find My Journey</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
