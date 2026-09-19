"use client";

import { useEffect, useRef, useState } from "react";
import { Compass, Globe, Heart, Star } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

function Counter({ end, suffix = "", decimals = 0, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(easeOut * end);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function TravelStatistics() {
  const stats = [
    {
      label: "Trips Planned",
      end: 500,
      suffix: "+",
      decimals: 0,
      icon: Compass,
      subtext: "Across 4 continents",
    },
    {
      label: "Curated Destinations",
      end: 20,
      suffix: "+",
      decimals: 0,
      icon: Globe,
      subtext: "Vetted global havens",
    },
    {
      label: "Happy Travelers",
      end: 98,
      suffix: "%",
      decimals: 0,
      icon: Heart,
      subtext: "Repeat & referred guests",
    },
    {
      label: "Average Rating",
      end: 4.9,
      suffix: "/5",
      decimals: 1,
      icon: Star,
      subtext: "From 120+ verified reviews",
    },
  ];

  return (
    <section className="py-20 bg-[#111111] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D9A441] mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#D9A441] mb-2">
                  <Counter
                    end={item.end}
                    suffix={item.suffix}
                    decimals={item.decimals}
                    duration={1800}
                  />
                </div>

                <div className="font-serif text-base sm:text-lg font-medium text-white mb-1">
                  {item.label}
                </div>

                <div className="text-xs text-gray-400 font-light">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
