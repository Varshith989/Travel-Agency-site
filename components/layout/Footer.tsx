"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedInIcon, YouTubeIcon } from "@/components/ui/SocialIcons";
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
    <footer className="bg-[#111111] text-[#FFFFFF] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D9A441] flex items-center justify-center text-[#111111]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest text-[#FFFFFF] uppercase">
                AEROVA TRAVELS
              </span>
            </Link>
            <p className="text-[#D9A441] text-sm italic font-serif">
              “Go farther. Experience more.”
            </p>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Curating high-end bespoke adventures, private sanctuary stays, and transformative journeys across the world's most extraordinary destinations.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h4 className="text-sm uppercase tracking-widest text-gray-300 font-semibold mb-3">
              The Aerova Dispatch
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Receive private invitations, seasonal destination portfolios, and rare travel stories directly in your inbox.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#D9A441]/20 border border-[#D9A441]/40 rounded-full text-center text-xs text-[#D9A441]">
                Thank you. You have been welcomed to the Aerova Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center max-w-md">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/15 rounded-full text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D9A441] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="ml-2 px-6 py-3 rounded-full bg-[#D9A441] text-[#111111] text-xs font-semibold uppercase tracking-wider hover:bg-[#c49132] transition-colors shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Column Directory Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10">
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#D9A441] mb-5">
              Explore
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Curated Packages
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-white transition-colors">
                  Travel Experiences
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  Travel Journal
                </Link>
              </li>
              <li>
                <Link href="/destinations/japan" className="hover:text-white transition-colors">
                  Japan Golden Route
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#D9A441] mb-5">
              Company
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story & Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Concierge
                </Link>
              </li>
              <li>
                <Link href="/plan-trip" className="hover:text-white transition-colors">
                  Bespoke Trip Planner
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#D9A441] mb-5">
              Support
            </h5>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  FAQs & Assistance
                </Link>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Cancellation Policy
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Travel Insurance Guidance
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="cursor-default hover:text-white transition-colors">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold uppercase tracking-widest text-[#D9A441] mb-5">
              Global Headquarters
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Level 14, Prestige Nebula, Cubbon Road,
              <br />
              Bengaluru, KA 560001
            </p>
            <p className="text-xs text-gray-400 mb-1 font-mono">
              +91 (0) 80 4920 8800
            </p>
            <p className="text-xs text-[#D9A441]">
              concierge@aerovatravels.com
            </p>
          </div>
        </div>

        {/* Bottom Social & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Aerova Travels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D9A441] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D9A441] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D9A441] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D9A441] transition-colors"
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
