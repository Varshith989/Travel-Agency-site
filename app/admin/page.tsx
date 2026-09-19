import Link from "next/link";
import { getAdminStats, getBookings, getEnquiries } from "@/lib/store";
import { formatINR } from "@/lib/utils";
import {
  CalendarCheck,
  MessageSquareText,
  TrendingUp,
  Star,
  MapPin,
  ArrowRight,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default function AdminDashboardPage() {
  const stats = getAdminStats();
  const bookings = getBookings();
  const enquiries = getEnquiries();

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#111111]">
            Executive Dashboard
          </h1>
          <p className="text-xs text-[#737373] mt-1">
            Real-time portfolio metrics, inbound inquiries, and luxury travel reservations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/bookings"
            className="px-4 py-2 rounded-xl bg-[#111111] text-white text-xs font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-colors"
          >
            Manage Bookings
          </Link>
          <Link
            href="/admin/enquiries"
            className="px-4 py-2 rounded-xl bg-white border border-[#171717]/10 text-xs font-semibold hover:border-[#111111] transition-colors"
          >
            View Enquiries
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue */}
        <div className="p-6 rounded-3xl bg-white border border-[#171717]/8 shadow-sm">
          <div className="flex items-center justify-between text-xs text-[#737373] mb-3">
            <span className="uppercase tracking-wider font-semibold">Total Revenue</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
            {formatINR(stats.totalRevenue)}
          </div>
          <span className="text-[10px] text-emerald-600 font-semibold block mt-1">
            +18.4% from last quarter
          </span>
        </div>

        {/* Total Bookings */}
        <div className="p-6 rounded-3xl bg-white border border-[#171717]/8 shadow-sm">
          <div className="flex items-center justify-between text-xs text-[#737373] mb-3">
            <span className="uppercase tracking-wider font-semibold">Total Bookings</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#D9A441] flex items-center justify-center">
              <CalendarCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
            {stats.totalBookings}
          </div>
          <span className="text-[10px] text-[#737373] block mt-1">
            4 confirmed departures this month
          </span>
        </div>

        {/* Total Inbound Enquiries */}
        <div className="p-6 rounded-3xl bg-white border border-[#171717]/8 shadow-sm">
          <div className="flex items-center justify-between text-xs text-[#737373] mb-3">
            <span className="uppercase tracking-wider font-semibold">Bespoke Enquiries</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <MessageSquareText className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
            {stats.totalEnquiries}
          </div>
          <span className="text-[10px] text-[#D9A441] font-semibold block mt-1">
            Action required on {enquiries.filter(e => e.status === "NEW").length} new leads
          </span>
        </div>

        {/* Average Rating */}
        <div className="p-6 rounded-3xl bg-white border border-[#171717]/8 shadow-sm">
          <div className="flex items-center justify-between text-xs text-[#737373] mb-3">
            <span className="uppercase tracking-wider font-semibold">Guest Satisfaction</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
            {stats.averageRating} / 5.0
          </div>
          <span className="text-[10px] text-[#737373] block mt-1">
            98% repeat & referral index
          </span>
        </div>
      </div>

      {/* Two Column Layout: Recent Bookings & Popular Destinations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Bookings (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#171717]/8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#111111]">
                Recent Client Bookings
              </h3>
              <p className="text-xs text-[#737373]">Live reservation transactions</p>
            </div>
            <Link
              href="/admin/bookings"
              className="text-xs text-[#D9A441] font-semibold hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {bookings.slice(0, 4).map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-2xl bg-[#F8F7F3] border border-[#171717]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-[#D9A441]">
                      {b.bookingRef}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        b.status === "CONFIRMED"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#111111]">
                    {b.packageTitle}
                  </h4>
                  <p className="text-xs text-[#737373]">
                    {b.customerName} • {b.travelers} Guests • Travel: {b.travelDate}
                  </p>
                </div>

                <div className="text-right sm:border-l sm:border-gray-200 sm:pl-4">
                  <span className="font-serif font-bold text-sm text-[#111111] block">
                    {formatINR(b.totalPriceINR)}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-medium">
                    {b.paymentStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Destinations & Recent Enquiries (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Popular Destinations */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#171717]/8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#111111] mb-1">
              Top Desired Destinations
            </h3>
            <p className="text-xs text-[#737373] mb-6">Booking share per location</p>

            <div className="space-y-4">
              {stats.popularDestinations.map((dest) => (
                <div key={dest.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-[#111111]">{dest.name}</span>
                    <span className="text-[#737373] font-mono">{dest.bookingsCount} trips ({dest.percentage}%)</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D9A441] rounded-full"
                      style={{ width: `${dest.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Inbound Leads */}
          <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D9A441] font-semibold block">
                  Incoming Pipeline
                </span>
                <h4 className="font-serif text-lg font-bold">Latest Enquiry</h4>
              </div>
              <Link
                href="/admin/enquiries"
                className="text-xs text-[#D9A441] hover:underline"
              >
                Inspect
              </Link>
            </div>

            {enquiries[0] ? (
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-serif font-bold text-white text-sm">
                    {enquiries[0].customerName}
                  </span>
                  <span className="text-[10px] font-mono text-[#D9A441]">
                    {enquiries[0].enquiryRef}
                  </span>
                </div>
                <p className="text-gray-300">
                  Target: <strong>{enquiries[0].destination}</strong> ({enquiries[0].travelMonth} {enquiries[0].travelYear})
                </p>
                <p className="text-gray-400">
                  Style: {enquiries[0].travelStyle} • Budget: {enquiries[0].budgetPerPerson}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
