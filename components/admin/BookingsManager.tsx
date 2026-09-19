"use client";

import { useState } from "react";
import { Booking } from "@/lib/types";
import { formatINR } from "@/lib/utils";
import { CalendarCheck, Search, CheckCircle2, Clock, XCircle, RefreshCw } from "lucide-react";

interface Props {
  initialBookings: Booking[];
}

export default function BookingsManager({ initialBookings }: Props) {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = bookings.filter((b) => {
    const matchesSearch =
      b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.bookingRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.packageTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id: string, newStatus: Booking["status"]) => {
    try {
      await fetch("/api/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
    } catch {
      alert("Failed to update status");
    }
  };

  return (
    <div className="space-y-6">
      {/* Top filter bar */}
      <div className="bg-white rounded-3xl p-6 border border-[#171717]/8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by client, ref, or package..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {["all", "CONFIRMED", "PENDING", "COMPLETED"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                statusFilter === st
                  ? "bg-[#111111] text-white"
                  : "bg-[#F8F7F3] text-[#737373] hover:text-[#111111]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-3xl border border-[#171717]/8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8F7F3] border-b border-[#171717]/5 text-gray-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-4 pl-6">Ref & Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Itinerary</th>
                <th className="p-4">Travel Date</th>
                <th className="p-4">Total Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-[#F8F7F3]/40 transition-colors">
                  <td className="p-4 pl-6">
                    <span className="font-mono font-bold text-[#D9A441] block">
                      {b.bookingRef}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(b.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-[#111111] block">
                      {b.customerName}
                    </span>
                    <span className="text-[11px] text-gray-500 block">{b.customerEmail}</span>
                    <span className="text-[11px] text-gray-400 font-mono">{b.customerPhone}</span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium text-[#111111] block max-w-xs truncate">
                      {b.packageTitle}
                    </span>
                    <span className="text-[11px] text-gray-500">{b.travelers} Guests</span>
                  </td>
                  <td className="p-4 font-mono text-[#111111]">
                    {b.travelDate}
                  </td>
                  <td className="p-4 font-serif font-bold text-[#111111]">
                    {formatINR(b.totalPriceINR)}
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        b.status === "CONFIRMED"
                          ? "bg-emerald-100 text-emerald-800"
                          : b.status === "PENDING"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6">
                    <select
                      value={b.status}
                      onChange={(e) => handleStatusChange(b.id, e.target.value as any)}
                      className="px-2.5 py-1 rounded-xl bg-[#F8F7F3] border border-gray-200 text-xs font-medium text-[#111111] cursor-pointer"
                    >
                      <option value="CONFIRMED">Confirm</option>
                      <option value="PENDING">Pending</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="CANCELLED">Cancel</option>
                    </select>
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
