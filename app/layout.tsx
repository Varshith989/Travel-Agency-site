import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://travel-agency-site-ten.vercel.app"),
  title: "Aerova Travels — Curated Journeys Around the World",
  description:
    "Award-calibre luxury travel design, private sanctuaries, and bespoke itineraries curated across Japan, Switzerland, Bali, Maldives, and beyond.",
  keywords: [
    "Aerova Travels",
    "Luxury Travel Atelier",
    "Bespoke Itineraries",
    "Curated Journeys",
    "Private Expeditions",
    "Japan Luxury Tour",
    "Bali Private Villas",
    "Swiss Alps Luxury Stays",
    "Maldives Lagoon Retreats",
  ],
  authors: [{ name: "Aerova Travels Concierge" }],
  openGraph: {
    title: "Aerova Travels — Curated Journeys Around the World",
    description:
      "Go farther. Experience more. Artisanal journeys and private sanctuaries crafted by world-class destination architects.",
    url: "https://travel-agency-site-ten.vercel.app",
    siteName: "Aerova Travels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Aerova Travels Curated Alpine Odyssey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerova Travels — Curated Journeys Around the World",
    description: "Quiet luxury journeys crafted with editorial precision.",
    images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://travel-agency-site-ten.vercel.app/#agency",
      name: "Aerova Travels",
      url: "https://travel-agency-site-ten.vercel.app",
      logo: "https://travel-agency-site-ten.vercel.app/favicon.ico",
      description:
        "Bespoke luxury journeys and private expeditions crafted for discerning travelers.",
      telephone: "+91-80-4920-8800",
      email: "concierge@aerovatravels.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Level 14, Prestige Nebula, Cubbon Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560001",
        addressCountry: "IN",
      },
      priceRange: "$$$$",
      sameAs: [
        "https://instagram.com/aerovatravels",
        "https://linkedin.com/company/aerovatravels",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#181918] font-sans selection:bg-[#C29D59]/25 selection:text-[#0D1315]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
