import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/data/destinations";
import { packages } from "@/lib/data/packages";
import { formatINR } from "@/lib/utils";
import { MapPin, Sun, Star, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `${destination.name}, ${destination.country} — Luxury Travel Guide | Aerova Travels`,
    description: destination.tagline,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const relatedPackages = packages.filter(
    (p) => p.destinationSlug === destination.slug
  );

  return (
    <div className="min-h-screen bg-[#F8F7F3] w-full max-w-full overflow-x-hidden">
      {/* Cinematic Hero */}
      <div className="relative h-[65vh] min-h-[440px] sm:h-[75vh] sm:min-h-[500px] flex items-end pb-10 sm:pb-16 overflow-hidden w-full max-w-full">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white max-w-full">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gray-300 hover:text-[#D9A441] transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Destinations</span>
          </Link>

          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-[#D9A441]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D9A441]">
              {destination.country} • {destination.continent}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {destination.name}
          </h1>

          <p className="text-sm sm:text-xl text-gray-200 font-light max-w-3xl leading-relaxed">
            {destination.tagline}
          </p>

          <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-300 pt-4 border-t border-white/20 w-full max-w-full">
            <div>
              <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                Ideal Duration
              </span>
              <span className="font-medium text-white">{destination.idealDuration}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                Best Season
              </span>
              <span className="font-medium text-white">{destination.bestTimeToVisit}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                Average Climate
              </span>
              <span className="font-medium text-white">{destination.weather.tempAvg}</span>
            </div>
            <div>
              <span className="text-gray-400 block text-[10px] uppercase tracking-wider">
                Starting Price
              </span>
              <span className="font-semibold text-[#D9A441] text-sm">
                From {formatINR(destination.startingPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-full">
          {/* Left Column: Overview & Experiences */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16 w-full max-w-full">
            {/* Overview */}
            <section className="w-full max-w-full">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
                Overview
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#111111] mb-6">
                The Essence of {destination.name}
              </h2>
              <p className="text-base text-[#737373] leading-relaxed font-light mb-6">
                {destination.description}
              </p>

              {/* Climate & Visa Info Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-white border border-[#171717]/8 shadow-sm w-full max-w-full">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                    <Sun className="w-4 h-4 text-[#D9A441]" />
                    <span>Climate & Peak Months</span>
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {destination.weather.season}. Peak conditions prevail during {destination.weather.peakMonths}.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111111] uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                    <span>Visa Regulations</span>
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {destination.visaInfo}. Aerova provides concierge itinerary paperwork and assistance.
                  </p>
                </div>
              </div>
            </section>

            {/* Top Curated Experiences */}
            <section className="w-full max-w-full">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
                Unrivaled Moments
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-6 sm:mb-8">
                Top Experiences in {destination.name}
              </h2>
              <div className="space-y-4 sm:space-y-6 w-full max-w-full">
                {destination.topExperiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#171717]/8 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center w-full max-w-full"
                  >
                    <div className="relative w-full sm:w-44 h-48 sm:h-36 rounded-xl sm:rounded-2xl overflow-hidden shrink-0">
                      <Image
                        src={exp.image}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 180px"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full min-w-0">
                      <span className="font-mono text-xs text-[#D9A441] font-bold block mb-1">
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111] mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#737373] font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recommended Hotels */}
            <section className="w-full max-w-full">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
                Accommodations
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-6 sm:mb-8">
                Recommended Stays
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full">
                {destination.recommendedHotels.map((hotel, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#171717]/8 shadow-sm group w-full max-w-full"
                  >
                    <div className="relative h-44 w-full">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 250px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] text-white font-medium uppercase tracking-wider">
                        {hotel.tag}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-1 text-[#D9A441] text-xs mb-1">
                        <Star className="w-3.5 h-3.5 fill-[#D9A441]" />
                        <span className="font-bold">{hotel.rating}</span>
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#111111] mb-1">
                        {hotel.name}
                      </h4>
                      <p className="text-[11px] text-[#737373]">{hotel.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="w-full max-w-full">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A441] block mb-2">
                Essential Advisory
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3 sm:space-y-4 w-full max-w-full">
                {destination.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#171717]/8 shadow-sm w-full max-w-full"
                  >
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#111111] mb-1.5 sm:mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#737373] font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Trip Planning Card & Packages */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8 w-full max-w-full">
            {/* Sticky Lead Card */}
            <div className="sticky top-28 bg-[#111111] text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 w-full max-w-full">
              <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block mb-2">
                Custom Curation
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                Plan a Bespoke Trip to {destination.name}
              </h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed mb-5 sm:mb-6">
                Connect with our dedicated destination curator to design a private itinerary tailored to your schedule and desires.
              </p>

              <div className="space-y-2.5 sm:space-y-3 text-xs text-gray-300 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Private villa or 5-star palace accommodations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Dedicated private English-speaking chauffeur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Exclusive culinary and cultural reservations</span>
                </div>
              </div>

              <Link
                href={`/plan-trip?destination=${encodeURIComponent(destination.name)}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 rounded-full bg-[#D9A441] text-[#111111] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors shadow-lg"
              >
                <span>Request {destination.name} Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Matching Packages */}
            {relatedPackages.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-[#171717]/8 shadow-sm w-full max-w-full">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-3 sm:mb-4">
                  Signature Package Available
                </h3>
                {relatedPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    href={`/packages/${pkg.slug}`}
                    className="block group p-4 rounded-2xl hover:bg-[#F8F7F3] transition-colors border border-transparent hover:border-[#171717]/10 w-full max-w-full"
                  >
                    <span className="text-[10px] text-[#D9A441] uppercase tracking-wider font-semibold">
                      {pkg.durationDays} Days • {pkg.travelStyle}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#111111] group-hover:text-[#D9A441] transition-colors mt-0.5">
                      {pkg.title}
                    </h4>
                    <p className="text-xs text-[#737373] mt-1">
                      From {formatINR(pkg.priceINR)} / person
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
