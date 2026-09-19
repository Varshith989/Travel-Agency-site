import { Booking, Enquiry, AdminStats } from "./types";
import { destinations } from "./data/destinations";
import { packages } from "./data/packages";

// In-memory data store for server and client access
let initialBookings: Booking[] = [
  {
    id: "bk-101",
    bookingRef: "AER-2026-8921",
    packageId: "pkg-japan-10d",
    packageTitle: "Japan: The Golden Route (10 Days)",
    customerName: "Aarav Deshmukh",
    customerEmail: "aarav.deshmukh@example.com",
    customerPhone: "+91 98201 44552",
    travelDate: "2026-10-15",
    travelers: 2,
    totalPriceINR: 299998,
    status: "CONFIRMED",
    paymentStatus: "PAID",
    notes: "Celebrating 10th anniversary; requested room with Mount Fuji view at Gora Kadan.",
    createdAt: "2026-03-01T10:14:00Z",
  },
  {
    id: "bk-102",
    bookingRef: "AER-2026-7843",
    packageId: "pkg-bali-7d",
    packageTitle: "Bali: Rainforest Sanctuary & Ocean Cliffs (7 Days)",
    customerName: "Sunita & Vikram Malhotra",
    customerEmail: "malhotra.v@example.com",
    customerPhone: "+91 97110 33214",
    travelDate: "2026-05-10",
    travelers: 2,
    totalPriceINR: 179998,
    status: "CONFIRMED",
    paymentStatus: "PAID",
    notes: "Vegetarian breakfast preferences requested.",
    createdAt: "2026-03-04T14:22:00Z",
  },
  {
    id: "bk-103",
    bookingRef: "AER-2026-6512",
    packageId: "pkg-swiss-8d",
    packageTitle: "Switzerland: Alpine Grandeur & Glacier Rail (8 Days)",
    customerName: "Dr. Siddharth Rao",
    customerEmail: "siddharth.rao@clinic.org",
    customerPhone: "+91 94480 77123",
    travelDate: "2026-07-20",
    travelers: 3,
    totalPriceINR: 674997,
    status: "PENDING",
    paymentStatus: "PARTIAL",
    notes: "Requested First-Class panoramic seats together on Glacier Express.",
    createdAt: "2026-03-07T08:45:00Z",
  },
  {
    id: "bk-104",
    bookingRef: "AER-2026-5198",
    packageId: "pkg-maldives-5d",
    packageTitle: "Maldives: Azure Serenity Overwater Escape (5 Days)",
    customerName: "Meera & Tanya Chawla",
    customerEmail: "meera.chawla@studio.co",
    customerPhone: "+91 99802 88190",
    travelDate: "2026-04-18",
    travelers: 2,
    totalPriceINR: 359998,
    status: "CONFIRMED",
    paymentStatus: "PAID",
    notes: "Requested sunset-facing overwater villa with private slide.",
    createdAt: "2026-03-09T18:00:00Z",
  },
];

let initialEnquiries: Enquiry[] = [
  {
    id: "enq-201",
    enquiryRef: "ENQ-7721",
    destination: "Japan",
    travelMonth: "October",
    travelYear: "2026",
    durationDays: "10-14 Days",
    travelersCount: 2,
    travelStyle: "Cultural & Culinary",
    budgetPerPerson: "₹1,50,000 - ₹2,00,000",
    accommodation: "5-Star Luxury & Traditional Ryokan",
    customerName: "Rohan Kapoor",
    customerEmail: "rohan.kapoor@techcorp.io",
    customerPhone: "+91 98334 55120",
    customerCountry: "India",
    notes: "Interested in private sushi omakase behind closed doors in Ginza and scenic train routes.",
    status: "NEW",
    createdAt: "2026-03-10T11:20:00Z",
  },
  {
    id: "enq-202",
    enquiryRef: "ENQ-6912",
    destination: "Switzerland",
    travelMonth: "August",
    travelYear: "2026",
    durationDays: "7-10 Days",
    travelersCount: 4,
    travelStyle: "Alpine Luxury & Family",
    budgetPerPerson: "₹2,50,000+",
    accommodation: "Luxury Chalet / 5-Star Palace",
    customerName: "Pooja Reddy",
    customerEmail: "pooja.reddy@investments.com",
    customerPhone: "+91 98860 12345",
    customerCountry: "India",
    notes: "Family trip with elderly parents. Require comfortable private Mercedes transfers throughout.",
    status: "QUOTED",
    createdAt: "2026-03-08T16:30:00Z",
  },
  {
    id: "enq-203",
    enquiryRef: "ENQ-5840",
    destination: "Maldives",
    travelMonth: "May",
    travelYear: "2026",
    durationDays: "5-7 Days",
    travelersCount: 2,
    travelStyle: "Romantic Honeymoon",
    budgetPerPerson: "₹1,75,000 - ₹2,25,000",
    accommodation: "Overwater Pool Villa",
    customerName: "Karan Johar",
    customerEmail: "karan.j@creative.in",
    customerPhone: "+91 98210 99401",
    customerCountry: "India",
    notes: "Honeymoon booking. Look for private sandbank sunset dining and seaplane transfer.",
    status: "IN_REVIEW",
    createdAt: "2026-03-06T09:15:00Z",
  },
];

// Helper functions
export function getBookings(): Booking[] {
  return initialBookings;
}

export function addBooking(booking: Omit<Booking, "id" | "bookingRef" | "createdAt">): Booking {
  const newBooking: Booking = {
    ...booking,
    id: `bk-${Date.now()}`,
    bookingRef: `AER-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    createdAt: new Date().toISOString(),
  };
  initialBookings = [newBooking, ...initialBookings];
  return newBooking;
}

export function updateBookingStatus(id: string, status: Booking["status"]): boolean {
  const item = initialBookings.find((b) => b.id === id);
  if (item) {
    item.status = status;
    return true;
  }
  return false;
}

export function getEnquiries(): Enquiry[] {
  return initialEnquiries;
}

export function addEnquiry(enquiry: Omit<Enquiry, "id" | "enquiryRef" | "createdAt" | "status">): Enquiry {
  const newEnquiry: Enquiry = {
    ...enquiry,
    id: `enq-${Date.now()}`,
    enquiryRef: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
    status: "NEW",
    createdAt: new Date().toISOString(),
  };
  initialEnquiries = [newEnquiry, ...initialEnquiries];
  return newEnquiry;
}

export function updateEnquiryStatus(id: string, status: Enquiry["status"]): boolean {
  const item = initialEnquiries.find((e) => e.id === id);
  if (item) {
    item.status = status;
    return true;
  }
  return false;
}

export function getAdminStats(): AdminStats {
  const totalRevenue = initialBookings
    .filter((b) => b.status !== "CANCELLED")
    .reduce((sum, b) => sum + b.totalPriceINR, 0);

  const totalBookings = initialBookings.length;
  const totalEnquiries = initialEnquiries.length;

  const popularDestinations = [
    { name: "Japan", bookingsCount: 42, percentage: 35 },
    { name: "Bali", bookingsCount: 38, percentage: 28 },
    { name: "Switzerland", bookingsCount: 31, percentage: 22 },
    { name: "Maldives", bookingsCount: 26, percentage: 15 },
  ];

  return {
    totalRevenue,
    totalBookings,
    totalEnquiries,
    averageRating: 4.95,
    popularDestinations,
    recentBookings: initialBookings.slice(0, 5),
    recentEnquiries: initialEnquiries.slice(0, 5),
  };
}
