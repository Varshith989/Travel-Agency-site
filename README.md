# AEROVA TRAVELS ✈️
> *“Go farther. Experience more.”*

A bespoke, production-grade luxury travel agency web platform built with **Next.js 15+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**, fully integrated with **Razorpay Payments** and **WhatsApp Concierge**.

---

## 🌟 Key Features

* **Cinematic Editorial Design**: High-end aesthetic with warm linen (`#F8F7F3`), deep charcoal (`#111111`), and refined gold accents (`#D9A441`).
* **Signature Flagship Showcase**: **Japan 10 Days (Tokyo → Hakone → Kyoto → Osaka)** with day-by-day interactive itinerary accordions, meal plans, and hotel tiers.
* **36 Dynamic & Pre-Rendered Routes**:
  * Destinations Directory & Dynamic Guides (Bali, Switzerland, Japan, Maldives, Dubai, Paris, Amalfi Coast, Iceland).
  * 8 Curated Travel Experiences (Luxury, Honeymoon, Cultural, Adventure, Wildlife, Beach, Family, Weekend Getaways).
  * Filterable Packages Catalog with instant search, duration & budget filtering, and sorting.
  * Editorial Travel Journal with high-resolution travel stories.
* **Direct Booking & Payments**:
  * Integrated **Razorpay Checkout** with 20% advance deposit support (UPI, Credit/Debit cards, NetBanking).
  * Alternative Concierge Bank Wire Transfer invoicing.
* **6-Step Bespoke Trip Planner (`/plan-trip`)**: Multi-step wizard with live quote calculations and unique reference codes (`ENQ-xxxx`).
* **Admin Operations Portal (`/admin`)**:
  * Revenue KPI cards and booking volume analytics.
  * Reservation status updater (`CONFIRMED`, `PENDING`, `COMPLETED`, `CANCELLED`).
  * Custom itinerary leads manager with preference tags (`NEW`, `IN_REVIEW`, `QUOTED`, `CONVERTED`).
* **Floating WhatsApp Concierge**: Persistent floating launcher linked directly to `+91 83176 46088`.
* **SEO & Sitemaps**: Dynamic XML sitemap generation (`/sitemap.xml`) and `robots.txt`.
* **Database Ready**: Complete Prisma schema for PostgreSQL.

---

## 🚀 Tech Stack

* **Framework**: Next.js 15+ (App Router, Turbopack)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Icons**: Lucide React & Custom Vector SVGs
* **Payment Gateway**: Razorpay
* **Database ORM**: Prisma (PostgreSQL-ready)

---

## ⚙️ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env.local

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
Admin Portal is available at [http://localhost:3000/admin](http://localhost:3000/admin).

---

## 💳 Razorpay Configuration

In `.env.local`:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_xxxxxx"
RAZORPAY_KEY_SECRET="your_secret_key"
NEXT_PUBLIC_WHATSAPP_NUMBER="918317646088"
```

---

## 📄 License
MIT © 2026 Aerova Travels. All rights reserved.
