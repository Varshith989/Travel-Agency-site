import { packages } from "@/lib/data/packages";
import PackagesCatalogClient from "@/components/packages/PackagesCatalogClient";
import { Compass } from "lucide-react";

export const metadata = {
  title: "Curated Travel Packages — Aerova Travels",
  description: "Browse luxury multi-day itineraries across Japan, Switzerland, Bali, the Maldives, Dubai, and Paris.",
};

interface Props {
  searchParams: Promise<{ destination?: string; style?: string }>;
}

export default async function PackagesPage({ searchParams }: Props) {
  const { destination, style } = await searchParams;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#D9A441] text-xs uppercase tracking-widest font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Turnkey Luxury Itineraries</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#111111] tracking-tight">
            Curated Packages
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#737373] font-light leading-relaxed">
            Every package is an artisan blueprint: hand-selected luxury suites, First-Class transit, private guides, and seamless concierge support.
          </p>
        </div>

        {/* Client interactive catalog with filters */}
        <PackagesCatalogClient
          initialPackages={packages}
          initialDestination={destination || "all"}
          initialStyle={style || "all"}
        />
      </div>
    </div>
  );
}
