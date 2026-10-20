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
    <div className="min-h-screen bg-[#F0EFEA] flex flex-col md:flex-row font-sans text-[#111111] w-full max-w-full overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#111111] text-white flex flex-col justify-between p-4 sm:p-6 shrink-0 border-b md:border-b-0 border-white/10">
        <div>
          {/* Brand */}
          <div className="flex items-center gap-2.5 pb-4 md:pb-6 border-b border-white/10 mb-4 md:mb-8">
            <div className="w-8 h-8 rounded-full bg-[#D9A441] flex items-center justify-center text-[#111111] shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-widest uppercase block leading-tight">
                AEROVA
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D9A441] font-semibold">
                Admin Portal
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex md:flex-col gap-1.5 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {adminLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 md:gap-3 px-3.5 md:px-4 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
                >
                  <Icon className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Return to website */}
        <div className="hidden md:block pt-6 border-t border-white/10 space-y-3">
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
      <div className="flex-1 flex flex-col overflow-y-auto min-w-0 max-w-full overflow-x-hidden">
        {/* Top bar */}
        <header className="h-14 sm:h-16 bg-white border-b border-[#171717]/8 px-4 sm:px-6 flex items-center justify-between gap-2">
          <div className="text-[11px] sm:text-xs font-semibold text-[#737373] uppercase tracking-wider truncate pr-2">
            Aerova Concierge Operations
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F8F7F3] text-xs font-medium text-[#111111] hover:bg-[#EFECE6] transition-colors"
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
        <main className="p-4 sm:p-6 sm:p-10 flex-1 min-w-0 max-w-full overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
