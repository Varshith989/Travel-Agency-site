import { Destination } from "../types";

export const destinations: Destination[] = [
  {
    id: "dest-bali",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    tagline: "Sanctuary of mist-veiled temples, terraced emerald hills, and sunlit ocean cliffs.",
    description:
      "From the sacred water palaces of Ubud to the dramatic limestone perches of Uluwatu, Bali weaves spirituality, world-class private sanctuaries, and untamed tropical splendor into an intoxicating tapestry.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 89999,
    bestTimeToVisit: "April to October (Dry Season)",
    idealDuration: "7 – 10 Days",
    visaInfo: "Visa on Arrival (30 Days, Extendable)",
    featured: true,
    weather: {
      tempAvg: "28°C",
      season: "Tropical Dry & Sunny",
      peakMonths: "June – September",
    },
    topExperiences: [
      {
        title: "Private Sunrise Trek at Mount Batur",
        description: "Scale volcanic ridges before dawn with a private naturalist, sipping hot cocoa as morning mist bathes the caldera.",
        image: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Holistic Water Purification at Tirta Empul",
        description: "An exclusive spiritual blessing ceremony guided by an Balinese elder in sacred spring waters.",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Sunset Champagne Cruise on Uluwatu Coast",
        description: "Catamaran charter gliding past ancient cliffside temples as the Indian Ocean turns molten gold.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "Amandari, Ubud",
        rating: 4.9,
        location: "Ayung River Valley, Ubud",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        tag: "Forest Sanctuary",
      },
      {
        name: "Bulgari Resort Bali",
        rating: 5.0,
        location: "Uluwatu Cliffs",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        tag: "Clifftop Luxury",
      },
      {
        name: "COMO Shambhala Estate",
        rating: 4.8,
        location: "Begawan Village, Payangan",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        tag: "Holistic Wellness",
      },
    ],
    faqs: [
      {
        question: "What is the best month for weather and minimal crowds?",
        answer: "May, June, and September offer the quintessential sweet spot: bright blue skies, comfortable humidity, and quieter beaches before the midsummer rush.",
      },
      {
        question: "Is Bali suitable for luxury honeymooners?",
        answer: "Bali is universally celebrated as one of the world's premier romantic havens, celebrated for private plunge pool villas, couple spa rituals, and cliffside candlelight dinners.",
      },
      {
        question: "How does Aerova arrange private transfers?",
        answer: "Every guest is paired with a private luxury vehicle, experienced English-speaking chauffeur, and dedicated local concierge throughout the journey.",
      },
    ],
  },
  {
    id: "dest-dubai",
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Middle East",
    tagline: "Futuristic architecture rising from golden desert dunes into the Arabian sky.",
    description:
      "A glittering metropolis where architectural impossibilities come alive. Dubai redefines ultra-luxury with Michelin-starred dining, private desert Bedouin glamping, and royal superyacht experiences.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 119999,
    bestTimeToVisit: "November to March (Cool Season)",
    idealDuration: "5 – 7 Days",
    visaInfo: "Fast-Track 30-Day E-Visa",
    featured: true,
    weather: {
      tempAvg: "25°C",
      season: "Pleasant & Breezy",
      peakMonths: "December – February",
    },
    topExperiences: [
      {
        title: "Private Desert Conservation Safari & Stargazing",
        description: "Traverse untouched crimson dunes in vintage Land Rovers, followed by a candlelit feast in a secluded royal oasis.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Sunset Helicopter Tour of the Palm & Skyline",
        description: "Panoramic aerial perspectives of the Burj Khalifa, the World Islands, and the Arabian Gulf coastline.",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Curated Old Dubai Heritage & Gold Souk Walk",
        description: "Delve into perfumed spice alleys, cross Dubai Creek on a private wooden abra, and discover historic Al Fahidi.",
        image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "Atlantis The Royal",
        rating: 5.0,
        location: "Palm Jumeirah",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
        tag: "Iconic Opulence",
      },
      {
        name: "One&Only The Palm",
        rating: 4.9,
        location: "West Crescent, Palm",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        tag: "Intimate Seclusion",
      },
      {
        name: "Al Maha Desert Resort & Spa",
        rating: 4.9,
        location: "Dubai Desert Conservation",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        tag: "Desert Sanctuary",
      },
    ],
    faqs: [
      {
        question: "When is the weather best for outdoor exploration?",
        answer: "November through April features sunny days in the mid-20s Celsius with gentle sea breezes, ideal for desert camps and yachting.",
      },
      {
        question: "Can Aerova secure reservations at exclusive Michelin restaurants?",
        answer: "Yes, our concierge team reserves coveted tables at Ossiano, Trèsind Studio, and French Riviera with priority seatings.",
      },
      {
        question: "What dress codes should travelers be mindful of?",
        answer: "Dubai is cosmopolitan and welcoming. Smart casual dress is celebrated at restaurants, while modest attire is appreciated when visiting mosques and cultural heritage districts.",
      },
    ],
  },
  {
    id: "dest-maldives",
    slug: "maldives",
    name: "Maldives",
    country: "Republic of Maldives",
    continent: "Indian Ocean",
    tagline: "Castaway barefoot luxury suspended over crystalline sapphire lagoons.",
    description:
      "A constellation of coral atolls scattered like pearls across the warm Indian Ocean. Here, time melts away inside overwater stilt villas with glass floors, private infinity pools, and direct reef stairs.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 179999,
    bestTimeToVisit: "November to April (Northeast Monsoon)",
    idealDuration: "5 – 7 Days",
    visaInfo: "Free 30-Day Tourist Visa on Arrival for all Nationalities",
    featured: true,
    weather: {
      tempAvg: "29°C",
      season: "Crystal Clear Waters",
      peakMonths: "December – April",
    },
    topExperiences: [
      {
        title: "Subaquatic Dining Under Coral Reefs",
        description: "Dine five meters below sea level surrounded by manta rays, green turtles, and luminous tropical schools.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Snorkeling with Gentle Whale Sharks in South Ari",
        description: "Join resident marine biologists in protected biosphere reserves for an encounter with the world's largest fish.",
        image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Private Sandbank Candlelit Dinner",
        description: "Whisked by speedboat to an uninhabited spit of white coral sand for an exclusive five-course seafood barbecue under stars.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "Soneva Jani",
        rating: 5.0,
        location: "Noonu Atoll",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
        tag: "Retractable Roofs & Slides",
      },
      {
        name: "The Ritz-Carlton Maldives",
        rating: 4.9,
        location: "Fari Islands",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        tag: "Minimalist Masterpiece",
      },
      {
        name: "Gili Lankanfushi",
        rating: 4.9,
        location: "North Malé Atoll",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        tag: "No News, No Shoes",
      },
    ],
    faqs: [
      {
        question: "How do we get from Malé Airport to the resort?",
        answer: "Aerova coordinates either private seaplane flights or luxury speedboats matching your resort location, including VIP airport lounge access.",
      },
      {
        question: "Are all-inclusive meal packages recommended?",
        answer: "Yes, our tailored Maldives packages include premium all-inclusive options covering fine dining, sommelier selections, and non-motorized water sports.",
      },
    ],
  },
  {
    id: "dest-switzerland",
    slug: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    continent: "Europe",
    tagline: "Pristine alpine grandeur, glass-like lakes, and timeless horological elegance.",
    description:
      "Drift past snow-crested peaks aboard the Glacier Express, wander timbered chalets adorned with geraniums in Zermatt, and savor fondue in candlelit mountain refuges beneath the Matterhorn.",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 224999,
    bestTimeToVisit: "June to September (Hiking) or Dec to March (Skiing)",
    idealDuration: "8 – 12 Days",
    visaInfo: "Schengen Visa (Aerova provides full itinerary documentation)",
    featured: true,
    weather: {
      tempAvg: "19°C (Summer) / -2°C (Winter)",
      season: "Alpine Freshness",
      peakMonths: "July – August & January – February",
    },
    topExperiences: [
      {
        title: "Glacier Express Excellence Class Journey",
        description: "Window seat through the Swiss Alps with a dedicated concierge, seven-course regional pairing, and 291 panoramic bridges.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Private Helicopter Flight Around the Matterhorn",
        description: "Soar alongside sheer rock faces and landing on pristine glacier ice for a celebratory champagne toast.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Lake Geneva Private Wooden Boat & Vineyard Tour",
        description: "Cruise the UNESCO Lavaux terraced vineyards with private tastings in cellars dating back to the 12th century.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "The Chedi Andermatt",
        rating: 5.0,
        location: "Andermatt, Swiss Alps",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        tag: "Alpine Zen",
      },
      {
        name: "Badrutt's Palace Hotel",
        rating: 4.9,
        location: "St. Moritz",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        tag: "Aristocratic Heritage",
      },
      {
        name: "Bürgenstock Hotel & Alpine Spa",
        rating: 4.9,
        location: "Lake Lucerne",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        tag: "Clifftop Infinity Spa",
      },
    ],
    faqs: [
      {
        question: "Is the Swiss Travel Pass included in Aerova packages?",
        answer: "Yes, our Swiss itineraries include First Class Swiss Travel Passes with seat reservations on legendary panoramic trains.",
      },
      {
        question: "Can beginners enjoy skiing in Switzerland?",
        answer: "Absolutely. We arrange world-class certified private instructors at Zermatt, St. Moritz, or Grindelwald for tailored ski tuition.",
      },
    ],
  },
  {
    id: "dest-japan",
    slug: "japan",
    name: "Japan",
    country: "Japan",
    continent: "Asia",
    tagline: "Where ancient serenity dances in harmony with futuristic wonder.",
    description:
      "A sensory pilgrimage from neon-bathed Tokyo avenues to Kyoto's moss-carpeted Zen gardens and steaming hot-spring ryokans tucked into Hakone's cedar-draped mountains.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 149999,
    bestTimeToVisit: "March to May (Sakura) or Oct to Nov (Autumn Foliage)",
    idealDuration: "10 – 14 Days",
    visaInfo: "Tourist E-Visa (Smooth Aerova application support)",
    featured: true,
    weather: {
      tempAvg: "17°C",
      season: "Cherry Blossoms & Maple Glow",
      peakMonths: "April, October, November",
    },
    topExperiences: [
      {
        title: "Private Tea Ceremony with a Kyoto Tea Master",
        description: "Enter an authentic 400-year-old teahouse overlooking stone Zen gardens for a meditative Matcha ritual.",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Bullet Train Shinkansen Green Car & Hakone Ryokan",
        description: "Zoom at 320 km/h past Mount Fuji to stay in an authentic cedar onsen ryokan with private open-air baths.",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Exclusive Tokyo Tsukiji Outer Market & Sushi Omakase",
        description: "Private early-morning exploration with a master sushi chef followed by a 14-piece nigiri omakase behind closed doors.",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "Aman Tokyo",
        rating: 5.0,
        location: "Otemachi, Tokyo",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        tag: "Sanctuary in the Sky",
      },
      {
        name: "Hoshinoya Kyoto",
        rating: 4.9,
        location: "Arashiyama River, Kyoto",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        tag: "Riverside Ryokan",
      },
      {
        name: "Gora Kadan",
        rating: 4.9,
        location: "Hakone National Park",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        tag: "Imperial Onsen Villa",
      },
    ],
    faqs: [
      {
        question: "When should I book for cherry blossom season?",
        answer: "Sakura season (late March to mid-April) typically books 6 to 9 months in advance. We recommend reaching out by September to secure top ryokan suites.",
      },
      {
        question: "Is dietary customization possible for vegetarian or halal travelers?",
        answer: "Yes, our bilingual concierge customizes Kaiseki and multi-course meals to accommodate vegetarian, vegan, and halal preferences seamlessly.",
      },
    ],
  },
  {
    id: "dest-paris",
    slug: "paris",
    name: "Paris",
    country: "France",
    continent: "Europe",
    tagline: "The timeless capital of haute couture, art, culinary mastery, and romance.",
    description:
      "Stroll the golden cobblestones of the Place Vendôme, behold the Louvre in the tranquil glow of evening private access, and savor cellar vintages along the Seine as the Eiffel Tower illuminates the Parisian sky.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 164999,
    bestTimeToVisit: "April to June or September to November",
    idealDuration: "5 – 8 Days",
    visaInfo: "Schengen Visa",
    featured: true,
    weather: {
      tempAvg: "20°C",
      season: "Pleasant & Romantic",
      peakMonths: "May, June, September",
    },
    topExperiences: [
      {
        title: "After-Hours Private Tour of the Musée d'Orsay",
        description: "Stand alone before Monet's Water Lilies and Van Gogh's Starry Night without the bustling crowds.",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Private Vintage Riva Boat Cruise on the Seine",
        description: "Sip champagne from crystal flutes while gliding under illuminated 16th-century stone bridges.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Bespoke Perfume Atelier in Le Marais",
        description: "Formulate your personal signature fragrance with a master Parisian nose in a private historic salon.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "Hôtel de Crillon, Rosewood",
        rating: 5.0,
        location: "Place de la Concorde",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        tag: "18th-Century Palace",
      },
      {
        name: "Le Bristol Paris",
        rating: 4.9,
        location: "Rue du Faubourg Saint-Honoré",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        tag: "Quintessential Elegance",
      },
      {
        name: "Cheval Blanc Paris",
        rating: 4.9,
        location: "Quai du Louvre, 1st Arr.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        tag: "Modern Seine View",
      },
    ],
    faqs: [
      {
        question: "Can Aerova arrange a day trip to the Champagne region?",
        answer: "Yes, we arrange private high-speed transport to Épernay and Reims with private cellar visits at Dom Pérignon and Ruinart.",
      },
      {
        question: "Is airport VIP fast-track provided?",
        answer: "Every Aerova Paris booking includes meet-and-greet curbside concierge service and VIP fast-track through customs at Charles de Gaulle Airport.",
      },
    ],
  },
  {
    id: "dest-amalfi",
    slug: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    continent: "Europe",
    tagline: "Pastel villages clinging to dramatic Mediterranean sea cliffs.",
    description:
      "A sun-drenched Italian dream where fragrant lemon groves cascade down to azure waters. Unwind in Positano, cruise along Capri's Faraglioni rocks, and savor hand-made pasta on cliffside terraces.",
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 189999,
    bestTimeToVisit: "May to October",
    idealDuration: "6 – 8 Days",
    visaInfo: "Schengen Visa",
    featured: false,
    weather: {
      tempAvg: "26°C",
      season: "Mediterranean Sunshine",
      peakMonths: "June – September",
    },
    topExperiences: [
      {
        title: "Capri Private Gozzo Yacht Charter",
        description: "Circumnavigate Capri and swim in hidden emerald coves away from tourists.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Ravello Clifftop Villa Gardens & Sunset Concert",
        description: "Explore Villa Cimbrone's Terrace of Infinity suspended 1,200 feet above the Gulf of Salerno.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "Le Sirenuse, Positano",
        rating: 5.0,
        location: "Positano",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        tag: "Mythic Glamour",
      },
    ],
    faqs: [
      {
        question: "How should we travel between towns?",
        answer: "We provide private Mercedes vans and speedboats so you avoid crowded mountain buses and winding cliff traffic.",
      },
    ],
  },
  {
    id: "dest-iceland",
    slug: "iceland",
    name: "Iceland",
    country: "Iceland",
    continent: "Europe",
    tagline: "Volcanoes, thundering waterfalls, and luminous dancing aurora borealis.",
    description:
      "An otherworldly land of raw elemental power. Soak in geo-thermal lagoons, explore crystalline blue ice caves inside glaciers, and chase the northern lights in luxury super-jeeps.",
    heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    ],
    startingPrice: 199999,
    bestTimeToVisit: "Sept to April (Northern Lights) / June to Aug (Midnight Sun)",
    idealDuration: "7 – 10 Days",
    visaInfo: "Schengen Visa",
    featured: false,
    weather: {
      tempAvg: "12°C (Summer) / -1°C (Winter)",
      season: "Aurora & Geothermal",
      peakMonths: "October – March",
    },
    topExperiences: [
      {
        title: "Vatnajökull Crystal Ice Cave Expedition",
        description: "Hike deep into translucent sapphire caverns beneath Europe's largest glacier.",
        image: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=800&q=80",
      },
    ],
    recommendedHotels: [
      {
        name: "The Retreat at Blue Lagoon",
        rating: 4.9,
        location: "Grindavík",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        tag: "Geothermal Haven",
      },
    ],
    faqs: [
      {
        question: "When can we see the Northern Lights?",
        answer: "The Aurora Borealis is most active between late September and early April on crisp, dark nights.",
      },
    ],
  },
];
