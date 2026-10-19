"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Mail, Phone } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/config";
import { useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0D1315] text-[#FAF8F5] pt-14 sm:pt-24 pb-12 sm:pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C29D59] flex items-center justify-center text-[#0D1315]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.22em] text-white uppercase">
                AEROVA TRAVELS
              </span>
            </Link>
            <p className="text-[#C29D59] text-sm italic font-serif">
              &ldquo;Curating the world&apos;s quiet sanctuaries.&rdquo;
            </p>
            <p className="text-gray-300 text-sm max-w-md leading-relaxed font-light">
              Designing high-end bespoke adventures, private sanctuary stays, and
              transformative journeys across four continents with personal stewardship.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C29D59] font-semibold mb-2">
              The Aerova Dispatch
            </h4>
            <p className="text-xs text-gray-300 mb-5 font-light">
              Receive private invitations, seasonal portfolio previews, and rare
              travel essays directly in your inbox.
            </p>
            {subscribed ? (
              <div className="p-4 bg-[#C29D59]/15 border border-[#C29D59]/40 rounded-full text-center text-xs text-[#E5D2AE] animate-fade-in font-medium">
                Thank you. You have been welcomed to the private Aerova Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center max-w-md gap-2.5 sm:gap-0">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-white/5 border border-white/15 rounded-full text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#C29D59] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:ml-2 px-6 py-3 sm:py-3.5 rounded-full bg-[#C29D59] text-[#0D1315] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors shrink-0 text-center"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Column Directory Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-16 border-b border-white/10 text-xs">
          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C29D59] mb-5">
              Portfolios
            </h5>
            <ul className="space-y-3.5 text-gray-300 font-light">
              <li>
                <Link href="/destinations" className="hover:text-[#C29D59] transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-[#C29D59] transition-colors">
                  Signature Journeys
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-[#C29D59] transition-colors">
                  Curated Travel Moods
                </Link>
              </li>
              <li>
                <Link href="/destinations/japan" className="hover:text-[#C29D59] transition-colors">
                  Japan Expedition
                </Link>
              </li>
              <li>
                <Link href="/destinations/switzerland" className="hover:text-[#C29D59] transition-colors">
                  Swiss Alps Sanctuary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C29D59] mb-5">
              Atelier
            </h5>
            <ul className="space-y-3.5 text-gray-300 font-light">
              <li>
                <Link href="/about" className="hover:text-[#C29D59] transition-colors">
                  Our Philosophy &amp; Curators
                </Link>
              </li>
              <li>
                <Link href="/#inquire" className="hover:text-[#C29D59] transition-colors">
                  Bespoke Planner
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#C29D59] transition-colors">
                  Travel Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C29D59] transition-colors">
                  Concierge Desk
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#C29D59] transition-colors">
                  Curator Admin
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C29D59] mb-5">
              Guest Services
            </h5>
            <ul className="space-y-3.5 text-gray-300 font-light">
              <li>
                <Link href="/contact" className="hover:text-[#C29D59] transition-colors">
                  Direct Inquiries &amp; Assistance
                </Link>
              </li>
              <li>
                <span className="hover:text-[#C29D59] transition-colors cursor-pointer">
                  Cancellation &amp; Rescheduling
                </span>
              </li>
              <li>
                <span className="hover:text-[#C29D59] transition-colors cursor-pointer">
                  Private Aviation &amp; Charters
                </span>
              </li>
              <li>
                <span className="hover:text-[#C29D59] transition-colors cursor-pointer">
                  Terms &amp; Bespoke Agreement
                </span>
              </li>
              <li>
                <span className="hover:text-[#C29D59] transition-colors cursor-pointer">
                  Privacy Policy &amp; Security
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C29D59] mb-5">
              Global Desk
            </h5>
            <p className="text-gray-300 font-light leading-relaxed mb-4">
              Level 14, Prestige Nebula, Cubbon Road,
              <br />
              Bengaluru, KA 560001
            </p>
            <p className="text-gray-300 font-mono mb-2 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C29D59]" />
              <span>{siteConfig.contact.phone}</span>
            </p>
            <p className="text-[#C29D59] font-medium">
              concierge@aerovatravels.com
            </p>
          </div>
        </div>

        {/* Bottom Social & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <p>© 2026 Aerova Travels. All rights reserved. Quiet luxury curated globally.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C29D59] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C29D59] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C29D59] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C29D59] transition-colors"
              aria-label="YouTube"
            >
              <YouTubeIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
