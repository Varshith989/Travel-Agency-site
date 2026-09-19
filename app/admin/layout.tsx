import Link from "next/link";
import { Compass, LayoutDashboard, CalendarCheck, MessageSquareText, Package as PackageIcon, MapPin, ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Admin Portal — Aerova Travels",
  description: "Internal operations and reservations management dashboard for Aerova Travels.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const adminLinks = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Bookings", href: "/admin/bookings", icon: CalendarCheck },
    { label: "Custom Enquiries", href: "/admin/enquiries", icon: MessageSquareText },
    { label: "Packages", href: "/admin/packages", icon: PackageIcon },
    { label: "Destinations", href: "/admin/destinations", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-[#F0EFEA] flex flex-col md:flex-row font-sans text-[#111111]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#111111] text-white flex flex-col justify-between p-6 shrink-0">
        <div>
          {/* Brand */}
          <div className="flex items-center gap-2.5 pb-6 border-b border-white/10 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#D9A441] flex items-center justify-center text-[#111111]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-widest uppercase block">
                AEROVA
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D9A441] font-semibold">
                Admin Portal
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="space-y-1.5">
            {adminLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#D9A441]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Return to website */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Website</span>
          </Link>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] text-gray-400">
            <span className="text-emerald-400 font-bold block mb-0.5">● System Online</span>
            <span>Prisma ready • In-memory synced</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-[#171717]/8 px-6 flex items-center justify-between">
          <div className="text-xs font-semibold text-[#737373] uppercase tracking-wider">
            Aerova Reservation & Concierge Operations
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F8F7F3] text-xs font-medium text-[#111111] hover:bg-[#EFECE6] transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3 text-[#737373]" />
            </Link>
            <div className="w-8 h-8 rounded-full bg-[#111111] text-[#D9A441] flex items-center justify-center font-bold text-xs font-mono">
              AD
            </div>
          </div>
        </header>

        {/* Content body */}
        <main className="p-6 sm:p-10 flex-1">{children}</main>
      </div>
    </div>
  );
}
