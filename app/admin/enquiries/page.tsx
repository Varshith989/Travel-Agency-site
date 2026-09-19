import { getEnquiries } from "@/lib/store";
import EnquiriesManager from "@/components/admin/EnquiriesManager";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Enquiries & Custom Itinerary Leads — Aerova Admin",
};

export default function EnquiriesPage() {
  const enquiries = getEnquiries();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#111111]">
          Bespoke Itinerary Enquiries
        </h1>
        <p className="text-xs text-[#737373] mt-1">
          Review incoming trip preferences from the bespoke trip planner, update review status, and prepare proposals.
        </p>
      </div>

      <EnquiriesManager initialEnquiries={enquiries} />
    </div>
  );
}
