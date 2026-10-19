"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (isAdmin) {
    return null;
  }

  // Determine if current page has dark hero background (e.g. homepage)
  const isHomePage = pathname === "/";
  const navTextIsDark = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-[#FAF8F5]/92 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-[#181918]/6 py-3 sm:py-4"
            : isHomePage
            ? "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-4 sm:py-6"
            : "bg-[#FAF8F5] border-b border-[#181918]/6 py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Emblem */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Aerova Travels Homepage"
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  navTextIsDark
                    ? "bg-[#0D1315] text-[#C29D59] group-hover:bg-[#C29D59] group-hover:text-[#0D1315]"
                    : "bg-white/15 backdrop-blur-md border border-white/25 text-[#C29D59] group-hover:bg-white group-hover:text-[#0D1315]"
                }`}
              >
                <Compass className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif tracking-[0.28em] text-base sm:text-lg font-semibold uppercase leading-none transition-colors duration-300 ${
                    navTextIsDark ? "text-[#0D1315]" : "text-white"
                  }`}
                >
                  AEROVA
                </span>
                <span
                  className={`text-[8.5px] tracking-[0.35em] uppercase font-medium mt-1 transition-colors duration-300 ${
                    navTextIsDark ? "text-[#7A7C78]" : "text-white/70"
                  }`}
                >
                  TRAVELS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-medium"
              aria-label="Main Navigation"
            >
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 group ${
                      isActive
                        ? navTextIsDark
                          ? "text-[#0D1315] font-semibold"
                          : "text-white font-semibold"
                        : navTextIsDark
                        ? "text-[#585A57] hover:text-[#C29D59]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C29D59] transition-transform duration-300 origin-left ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/#inquire"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm group ${
                  navTextIsDark
                    ? "bg-[#0D1315] text-[#FAF8F5] hover:bg-[#C29D59] hover:text-[#0D1315]"
                    : "bg-white text-[#0D1315] hover:bg-[#C29D59] hover:text-white"
                }`}
              >
                <span>Plan My Journey</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/#inquire"
                className={`px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                  navTextIsDark
                    ? "bg-[#0D1315] text-white"
                    : "bg-white/90 text-[#0D1315]"
                }`}
              >
                Plan
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  navTextIsDark
                    ? "text-[#0D1315] hover:bg-black/5"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Refined Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0D1315]/70 backdrop-blur-md lg:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-[85vw] sm:max-w-sm bg-[#FAF8F5] shadow-2xl p-5 sm:p-7 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-[#181918]/10">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0D1315] text-[#C29D59] flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="font-serif tracking-[0.25em] font-semibold text-base text-[#0D1315] uppercase">
                    AEROVA
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5 text-[#181918]" />
                </button>
              </div>

              {/* Editorial Nav Links */}
              <div className="mt-8 flex flex-col space-y-4">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xl font-serif py-1 transition-colors flex items-center justify-between group ${
                        isActive
                          ? "text-[#C29D59] font-medium"
                          : "text-[#0D1315] hover:text-[#C29D59]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-10 pt-6 border-t border-[#181918]/10 space-y-3">
                <Link
                  href="/#inquire"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0D1315] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#C29D59] hover:text-[#0D1315] transition-colors shadow-sm"
                >
                  <span>Plan My Journey</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#181918]/15 text-[#585A57] text-[11px] uppercase tracking-widest font-medium hover:border-[#0D1315] hover:text-[#0D1315] transition-colors"
                >
                  <span>Concierge Admin</span>
                </Link>
              </div>
            </div>

            {/* Direct Concierge Contact Footer */}
            <div className="pt-8 border-t border-[#181918]/10 space-y-2.5 text-xs text-[#585A57]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C29D59]" />
                <span className="font-mono">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C29D59]" />
                <span>concierge@aerovatravels.com</span>
              </div>
              <p className="pt-2 text-[11px] italic font-serif text-[#7A7C78]">
                “Curating the world&apos;s quiet sanctuaries.”
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
