export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  continent: "Asia" | "Europe" | "Middle East" | "Indian Ocean" | "Americas" | "Africa";
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  startingPrice: number;
  bestTimeToVisit: string;
  idealDuration: string;
  visaInfo: string;
  featured: boolean;
  weather: {
    tempAvg: string;
    season: string;
    peakMonths: string;
  };
  topExperiences: {
    title: string;
    description: string;
    image: string;
  }[];
  recommendedHotels: {
    name: string;
    rating: number;
    location: string;
    image: string;
    tag: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  location: string;
  description: string;
  meals: string;
  stayHotel: string;
  activities: string[];
}

export interface Package {
  id: string;
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  country: string;
  durationDays: number;
  durationNights: number;
  priceINR: number;
  rating: number;
  reviewCount: number;
  heroImage: string;
  gallery: string[];
  tagline: string;
  overview: string;
  travelStyle: "Luxury" | "Honeymoon" | "Adventure" | "Cultural" | "Family" | "Wildlife" | "Beach" | "Weekend Getaways";
  featured: boolean;
  route: string[]; // e.g. ["Tokyo", "Kyoto", "Osaka"]
  inclusions: string[];
  exclusions: string[];
  hotels: {
    name: string;
    city: string;
    stars: number;
    type: string;
  }[];
  transport: string[];
  cancellationPolicy: string;
  itinerary: ItineraryDay[];
}

export interface ExperienceCategory {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  packageCount: number;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  authorName: string;
  location: string;
  rating: number;
  tripTaken: string;
  content: string;
  travelDate: string;
  avatarUrl: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  readTime: string;
  publishedAt: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface Booking {
  id: string;
  bookingRef: string;
  packageId: string;
  packageTitle: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  travelDate: string;
  travelers: number;
  totalPriceINR: number;
  status: "CONFIRMED" | "PENDING" | "COMPLETED" | "CANCELLED";
  paymentStatus: "PAID" | "PARTIAL" | "UNPAID";
  notes?: string;
  createdAt: string;
}

export interface Enquiry {
  id: string;
  enquiryRef: string;
  destination: string;
  travelMonth: string;
  travelYear: string;
  durationDays: string;
  travelersCount: number;
  travelStyle: string;
  budgetPerPerson: string;
  accommodation: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerCountry: string;
  notes?: string;
  status: "NEW" | "IN_REVIEW" | "QUOTED" | "CONTACTED" | "CONVERTED";
  createdAt: string;
}

export interface AdminStats {
  totalRevenue: number;
  totalBookings: number;
  totalEnquiries: number;
  averageRating: number;
  popularDestinations: { name: string; bookingsCount: number; percentage: number }[];
  recentBookings: Booking[];
  recentEnquiries: Enquiry[];
}
