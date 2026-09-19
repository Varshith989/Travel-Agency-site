"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Admin pages have their own layout
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (isAdmin) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F7F3]/90 backdrop-blur-md shadow-sm border-b border-[#171717]/5 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-[#D9A441] transition-transform duration-300 group-hover:scale-105">
                <Compass className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#111111] uppercase">
                  AEROVA
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#737373] uppercase font-medium -mt-1">
                  TRAVELS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 tracking-wide ${
                      isActive
                        ? "text-[#111111] font-semibold"
                        : "text-[#171717]/80 hover:text-[#D9A441]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9A441] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/plan-trip"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#FFFFFF] text-xs uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-all duration-300 shadow-sm group"
              >
                <span>Plan Your Trip</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/plan-trip"
                className="px-3 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] text-[11px] uppercase tracking-wider font-medium"
              >
                Plan Trip
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-[#111111] hover:bg-black/5 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111]/60 backdrop-blur-sm lg:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F8F7F3] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#171717]/10">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center text-[#D9A441]">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-serif font-bold tracking-widest text-[#111111] uppercase">
                    AEROVA TRAVELS
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#171717]" />
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-serif transition-colors ${
                        isActive ? "text-[#D9A441] font-semibold" : "text-[#171717] hover:text-[#D9A441]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#171717]/10 space-y-4">
                <Link
                  href="/plan-trip"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-[#FFFFFF] text-sm uppercase tracking-wider font-semibold hover:bg-[#D9A441] hover:text-[#111111] transition-colors"
                >
                  <span>Plan Your Trip</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/admin"
                  className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#171717]/20 text-[#171717] text-xs uppercase tracking-wider font-medium hover:border-[#111111]"
                >
                  <span>Admin Portal</span>
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-[#171717]/10 space-y-3 text-xs text-[#737373]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>concierge@aerovatravels.com</span>
              </div>
              <p className="pt-2 text-[11px] text-[#737373]/80 italic">
                “Go farther. Experience more.”
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
