"use client";

import { useState } from "react";
import { ItineraryDay } from "@/lib/types";
import { ChevronDown, MapPin, Utensils, BedDouble, Check } from "lucide-react";

interface Props {
  itinerary: ItineraryDay[];
}

export default function PackageItineraryAccordions({ itinerary }: Props) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  return (
    <div className="space-y-4">
      {itinerary.map((day) => {
        const isExpanded = expandedDay === day.dayNumber;
        return (
          <div
            key={day.dayNumber}
            className="rounded-3xl bg-white border border-[#171717]/8 overflow-hidden shadow-sm transition-all duration-200"
          >
            <button
              onClick={() => toggleDay(day.dayNumber)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F8F7F3]/60 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-[#111111] text-[#D9A441] flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-sm">
                  DAY {day.dayNumber < 10 ? `0${day.dayNumber}` : day.dayNumber}
                </span>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D9A441] font-semibold block">
                    {day.location}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#111111]">
                    {day.title}
                  </h4>
                </div>
              </div>

              <div className={`p-2 rounded-full bg-[#F8F7F3] text-[#111111] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isExpanded && (
              <div className="p-6 pt-0 border-t border-gray-100 mt-2 space-y-4">
                <p className="text-sm text-[#737373] leading-relaxed font-light">
                  {day.description}
                </p>

                {/* Day Details: Meals, Hotel, Activities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8F7F3] text-xs">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-3.5 h-3.5 text-[#D9A441]" />
                    <span className="text-gray-500">Meals:</span>
                    <span className="font-medium text-[#111111]">{day.meals}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-3.5 h-3.5 text-[#D9A441]" />
                    <span className="text-gray-500">Stay:</span>
                    <span className="font-medium text-[#111111]">{day.stayHotel}</span>
                  </div>
                </div>

                {day.activities && day.activities.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold block mb-2">
                      Highlights of the Day
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {day.activities.map((act, aIdx) => (
                        <span
                          key={aIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#171717]/8 text-[11px] font-medium text-[#111111]"
                        >
                          <Check className="w-3 h-3 text-[#D9A441]" />
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
