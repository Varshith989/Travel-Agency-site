import Image from "next/image";
import Link from "next/link";
import { Compass, ShieldCheck, HeartHandshake, Eye, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Story & Philosophy — Aerova Travels",
  description: "Learn about the ethos behind Aerova Travels: artisanal curation, personal stewardship, and transformative global exploration.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Uncompromising Stewardship",
      desc: "We curate only what we have experienced firsthand. Every hotelier, pilot, naturalist, and sommelier in our orbit has earned our unwavering trust.",
      icon: ShieldCheck,
    },
    {
      title: "The Art of Slow Immersion",
      desc: "True luxury is not about rushing across checklists; it is the privilege of lingering in a temple courtyard after the gates close, or conversing with a winemaker in Lavaux.",
      icon: Eye,
    },
    {
      title: "Human Reverence & Harmony",
      desc: "Our journeys sustain local communities, protect delicate ecosystems, and cultivate lasting respect between our voyagers and their hosts.",
      icon: HeartHandshake,
    },
  ];

  const team = [
    {
      name: "Siddharth V. Varma",
      role: "Founder & Chief Expedition Architect",
      location: "Bengaluru & Zurich",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Elena Rostova",
      role: "Director of European Collections",
      location: "Paris & Milan",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Kenji Takahashi",
      role: "Curator of East Asian Sanctuaries",
      location: "Kyoto & Tokyo",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amina Al-Mansoor",
      role: "Lead Architect, Middle East & Africa",
      location: "Dubai & Muscat",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="pt-28 pb-28 min-h-screen bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#D9A441] text-xs uppercase tracking-widest font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>The Aerova Legacy</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#111111] tracking-tight">
            Go farther. Experience more.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#737373] font-light leading-relaxed">
            Born from an uncompromising passion for the world's rare and quiet wonders, Aerova was founded to restore art and intimacy to the travel experience.
          </p>
        </div>

        {/* Cinematic Imagery Banner */}
        <div className="relative h-[60vh] min-h-[440px] rounded-3xl overflow-hidden shadow-2xl mb-24">
          <Image
            src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2160&q=85"
            alt="Aerova Swiss Alps Expedition"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-black/20" />
          <div className="absolute bottom-10 left-8 sm:left-14 max-w-xl text-white">
            <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block mb-1">
              Our Vision
            </span>
            <p className="font-serif text-xl sm:text-2xl font-light italic">
              “Travel is not merely the crossing of borders. It is an expansion of the spirit.”
            </p>
          </div>
        </div>

        {/* Our Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block">
              Our Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
              Why We Travel
            </h2>
            <p className="text-sm sm:text-base text-[#737373] font-light leading-relaxed">
              In an age of automated booking engines, endless cookie-cutter itineraries, and overcrowded tourist corridors, we believe travelers deserve something far deeper: bespoke stewardship, unhurried pacing, and access to the world's most evocative sanctuaries.
            </p>
            <p className="text-sm sm:text-base text-[#737373] font-light leading-relaxed">
              Aerova was built on a singular conviction: that a journey should be treated as an original work of art. We design trips that honor your time, ignite your curiosities, and linger in memory long after you return.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
                alt="Japan Travel"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md mt-8">
              <Image
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80"
                alt="Maldives Lagoon"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
              Our Core Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              The Values That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white border border-[#171717]/8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#D9A441] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#111111] mb-3">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#737373] font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Curators / Team */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
              The Curators
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Destination Architects
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#737373] font-light">
              Our team consists of passionate explorers, linguists, and cultural connoisseurs stationed across global hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-[#171717]/8 shadow-sm group text-center p-6"
              >
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#D9A441]/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif font-bold text-base text-[#111111] mb-1">
                  {member.name}
                </h4>
                <p className="text-[11px] text-[#D9A441] font-semibold uppercase tracking-wider mb-1">
                  {member.role}
                </p>
                <p className="text-[11px] text-[#737373]">{member.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="rounded-3xl bg-[#111111] text-white p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Ready to begin your personal chapter?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light mb-8">
              Speak directly with an Aerova curator to design a tailored luxury itinerary.
            </p>
            <Link
              href="/plan-trip"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
            >
              <span>Start Planning With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
