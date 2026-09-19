import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aerova Travels — Curated Journeys Around the World",
  description:
    "Curated journeys, unforgettable experiences, and thoughtfully planned adventures around the world. Luxury travel focused, bespoke itineraries.",
  keywords: [
    "Aerova Travels",
    "Luxury Travel Agency",
    "Bespoke Itineraries",
    "Curated Journeys",
    "Japan Luxury Tour",
    "Bali Villas",
    "Switzerland Glacier Express",
    "Maldives Overwater Villas",
  ],
  authors: [{ name: "Aerova Travels" }],
  openGraph: {
    title: "Aerova Travels — Curated Journeys Around the World",
    description: "Go farther. Experience more. Luxury travel experiences and bespoke itineraries.",
    url: "https://aerovatravels.com",
    siteName: "Aerova Travels",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerova Travels — Curated Journeys Around the World",
    description: "Go farther. Experience more. Luxury bespoke travel around the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#171717] font-sans selection:bg-[#D9A441] selection:text-[#111111]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

