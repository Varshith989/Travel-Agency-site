import { packages } from "@/lib/data/packages";
import { formatINR } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

export const metadata = {
  title: "Packages Inventory — Aerova Admin",
};

export default function AdminPackagesPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
          Package Inventory
        </h1>
        <p className="text-xs text-[#737373] mt-1">
          Review active curated journeys, pricing in INR, durations, and day-by-day itineraries.
        </p>
      </div>

      {/* Mobile Card View (Visible on <md) */}
      <div className="block md:hidden space-y-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="p-4 rounded-2xl bg-white border border-[#171717]/8 shadow-sm space-y-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-serif font-bold text-base text-[#111111]">
                  {pkg.title}
                </h3>
                <span className="text-[11px] text-gray-500 block">{pkg.destinationName}, {pkg.country}</span>
              </div>
              <div className="text-right shrink-0">
                <span className="font-serif font-bold text-sm text-[#111111] block">
                  {formatINR(pkg.priceINR)}
                </span>
                <span className="inline-flex items-center gap-1 text-[#D9A441] font-bold text-[11px]">
                  <Star className="w-3 h-3 fill-[#D9A441]" />
                  {pkg.rating}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F8F7F3] text-[10px] uppercase font-semibold text-[#111111]">
                {pkg.travelStyle}
              </span>
              <span>•</span>
              <span className="text-xs">{pkg.durationDays}D / {pkg.durationNights}N</span>
            </div>

            <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-xs">
              <span className="text-[10px] font-mono text-gray-400">{pkg.slug}</span>
              <Link
                href={`/packages/${pkg.slug}`}
                target="_blank"
                className="inline-flex items-center gap-1 text-[#D9A441] font-semibold hover:underline"
              >
                <span>View Live Package</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table (Visible on md+) */}
      <div className="hidden md:block bg-white rounded-3xl border border-[#171717]/8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8F7F3] border-b border-[#171717]/5 text-gray-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-4 pl-6">Package Title</th>
                <th className="p-4">Destination</th>
                <th className="p-4">Style</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Starting Price</th>
                <th className="p-4">Rating</th>
                <th className="p-4 pr-6">Live URL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {packages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-[#F8F7F3]/40 transition-colors">
                  <td className="p-4 pl-6">
                    <span className="font-bold text-sm text-[#111111] block">
                      {pkg.title}
                    </span>
                    <span className="text-[10px] text-[#D9A441] font-mono">{pkg.slug}</span>
                  </td>
                  <td className="p-4 font-medium text-[#111111]">
                    {pkg.destinationName}, {pkg.country}
                  </td>
                  <td className="p-4 font-medium text-gray-600">
                    {pkg.travelStyle}
                  </td>
                  <td className="p-4 text-gray-600">
                    {pkg.durationDays}D / {pkg.durationNights}N
                  </td>
                  <td className="p-4 font-serif font-bold text-sm text-[#111111]">
                    {formatINR(pkg.priceINR)}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 text-[#D9A441] font-bold">
                      <Star className="w-3 h-3 fill-[#D9A441]" />
                      {pkg.rating} ({pkg.reviewCount})
                    </span>
                  </td>
                  <td className="p-4 pr-6">
                    <Link
                      href={`/packages/${pkg.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-xs text-[#D9A441] hover:underline"
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
