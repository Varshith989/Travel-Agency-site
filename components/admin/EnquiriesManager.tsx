"use client";

import { useState } from "react";
import { Enquiry } from "@/lib/types";
import { Search, Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";

interface Props {
  initialEnquiries: Enquiry[];
}

export default function EnquiriesManager({ initialEnquiries }: Props) {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(initialEnquiries);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = enquiries.filter((e) => {
    return (
      e.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.enquiryRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleStatusChange = async (id: string, newStatus: Enquiry["status"]) => {
    try {
      await fetch("/api/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
      );
    } catch {
      alert("Failed to update status");
    }
  };

  return (
    <div className="space-y-6">
      {/* Top filter bar */}
      <div className="bg-white rounded-3xl p-6 border border-[#171717]/8 shadow-sm flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search leads by customer, destination, ref..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-[#F8F7F3] rounded-2xl text-xs text-[#111111] focus:outline-none"
          />
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-3xl border border-[#171717]/8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F8F7F3] border-b border-[#171717]/5 text-gray-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-4 pl-6">Ref & Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Destination & Dates</th>
                <th className="p-4">Style & Accommodations</th>
                <th className="p-4">Budget Range</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((enq) => (
                <tr key={enq.id} className="hover:bg-[#F8F7F3]/40 transition-colors">
                  <td className="p-4 pl-6">
                    <span className="font-mono font-bold text-[#D9A441] block">
                      {enq.enquiryRef}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(enq.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="font-semibold text-[#111111] block">
                      {enq.customerName}
                    </span>
                    <span className="text-[11px] text-gray-500 block">{enq.customerEmail}</span>
                    <span className="text-[11px] text-gray-400 font-mono">{enq.customerPhone} ({enq.customerCountry})</span>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-sm text-[#111111] block">
                      {enq.destination}
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {enq.travelMonth} {enq.travelYear} ({enq.durationDays}) • {enq.travelersCount} Guests
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="font-medium text-[#111111] block">
                      {enq.travelStyle}
                    </span>
                    <span className="text-[10px] text-gray-500">{enq.accommodation}</span>
                  </td>
                  <td className="p-4 font-mono font-semibold text-[#D9A441]">
                    {enq.budgetPerPerson}
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        enq.status === "NEW"
                          ? "bg-blue-100 text-blue-800"
                          : enq.status === "QUOTED"
                          ? "bg-purple-100 text-purple-800"
                          : enq.status === "CONVERTED"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {enq.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6">
                    <select
                      value={enq.status}
                      onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                      className="px-2.5 py-1 rounded-xl bg-[#F8F7F3] border border-gray-200 text-xs font-medium text-[#111111] cursor-pointer"
                    >
                      <option value="NEW">New</option>
                      <option value="IN_REVIEW">In Review</option>
                      <option value="QUOTED">Quoted</option>
                      <option value="CONTACTED">Contacted</option>
                      <option value="CONVERTED">Converted</option>
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
