import { destinations } from "@/lib/data/destinations";
import { formatINR } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Destinations Catalog — Aerova Admin",
};

export default function AdminDestinationsPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
          Destinations Catalog
        </h1>
        <p className="text-xs text-[#737373] mt-1">
          Overview of all published international destinations, seasonal highlights, and entry rates.
        </p>
      </div>

      {/* Mobile Card View (Visible on <md) */}
      <div className="block md:hidden space-y-3">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="p-4 rounded-2xl bg-white border border-[#171717]/8 shadow-sm space-y-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-serif font-bold text-base text-[#111111]">
                  {dest.name}
                </h3>
                <span className="text-[11px] text-gray-500 block">{dest.country} ({dest.continent})</span>
              </div>
              <span className="font-serif font-bold text-sm text-[#111111] shrink-0">
                {formatINR(dest.startingPrice)}
              </span>
            </div>

            <p className="text-xs text-[#737373] line-clamp-1 italic">
              “{dest.tagline}”
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-100">
              <div>
                <span className="text-[10px] text-gray-400 uppercase block">Duration</span>
                <span className="font-medium text-[#111111]">{dest.idealDuration}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase block">Best Season</span>
                <span className="font-medium text-[#111111]">{dest.bestTimeToVisit}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex justify-end">
              <Link
                href={`/destinations/${dest.slug}`}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs text-[#D9A441] font-semibold hover:underline"
              >
                <span>View Live Guide</span>
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
                <th className="p-4 pl-6">Destination</th>
                <th className="p-4">Country & Region</th>
                <th className="p-4">Ideal Duration</th>
                <th className="p-4">Best Time To Visit</th>
                <th className="p-4">Starting Price</th>
                <th className="p-4 pr-6">Live Guide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {destinations.map((dest) => (
                <tr key={dest.id} className="hover:bg-[#F8F7F3]/40 transition-colors">
                  <td className="p-4 pl-6">
                    <span className="font-bold text-sm text-[#111111] block">
                      {dest.name}
                    </span>
                    <span className="text-[10px] text-[#737373]">{dest.tagline}</span>
                  </td>
                  <td className="p-4 font-medium text-[#111111]">
                    {dest.country} ({dest.continent})
                  </td>
                  <td className="p-4 text-gray-600">
                    {dest.idealDuration}
                  </td>
                  <td className="p-4 text-gray-600">
                    {dest.bestTimeToVisit}
                  </td>
                  <td className="p-4 font-serif font-bold text-sm text-[#111111]">
                    From {formatINR(dest.startingPrice)}
                  </td>
                  <td className="p-4 pr-6">
                    <Link
                      href={`/destinations/${dest.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-xs text-[#D9A441] hover:underline"
                    >
                      <span>View Guide</span>
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
