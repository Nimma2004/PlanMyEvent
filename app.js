/**
 * PlanMyEvent Sri Lanka - Core Application Logic
 * - Dark & Light Mode Theme Support
 * - Sri Lankan Phone Formats, Locations, & LKR Currency
 * - Task 1: Free Client Registration System & Role Switcher
 * - Task 2: Smooth Expandable Event Planner Details Cards
 */

// =============================================================================
// 1. Initial Mock Database: Verified Sri Lankan Event Planners
// Includes Services, Packages, Portfolios, and Reviews
// =============================================================================
let eventPlanners = [
  {
    id: "pln-001",
    name: "Ceylon Royale Weddings & Poruwa",
    contactPerson: "Dilshan Senanayake",
    category: "Weddings",
    location: "Colombo 07, Western Province",
    priceStarting: 350000,
    budgetTier: "luxury",
    tier: "Premium", // Premium: Direct phone visible
    phone: "+94 77 555 8392",
    email: "dilshan@ceylonroyaleweddings.lk",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 12,
    bio: "Ceylon Royale specializes in grand traditional Poruwa ceremonies, church weddings, and luxury ballroom receptions across Colombo, Negombo, and Bentota. Featured in Lanka Woman and Bride of the Year, we combine authentic Sri Lankan cultural heritage with modern couture floral artistry.",
    services: [
      "Custom Lotus Poruwa Construction",
      "Traditional Kandyan Drummers & Dancers",
      "Grand Floral Mandap & Table Scapes",
      "Bridal Dressing & Saree Draping Liaison",
      "Venue Management (Hotels & Beach Villas)",
      "Day-of Protocol & Auspicious Times Coordination"
    ],
    packages: [
      {
        name: "Silver Poruwa",
        price: 350000,
        desc: "Traditional wooden carved Poruwa, brass oil lamp decor, floral aisle & day-of coordination for up to 150 guests."
      },
      {
        name: "Gold Royale",
        price: 550000,
        desc: "Custom lotus floral Poruwa, 50 fresh flower centerpieces, 6 traditional drummers, lighting & full bridal coordination."
      },
      {
        name: "Platinum Heritage",
        price: 850000,
        desc: "End-to-end wedding production, imported orchids, 3D mapped ballroom entrance, VIP concierge & drone coverage management."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        caption: "Traditional Lotus Poruwa & Floral Pavilion at Cinnamon Grand Colombo"
      },
      {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
        caption: "Sunset Beachside Reception with Brass Oil Lamps in Bentota"
      },
      {
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
        caption: "Grand Ballroom Table Decor with Jasmine & Orchids"
      },
      {
        url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
        caption: "Evening Fairylight Canopy & Champagne Toast"
      }
    ],
    reviews: [
      {
        id: "rev-101",
        author: "Kavinda & Shenali Wickramasinghe",
        date: "2026-08-14",
        rating: 5,
        eventType: "Wedding",
        comment: "Dilshan and his team curated our Poruwa ceremony at Galle Face Hotel flawlessly. The traditional drummers, floral arches, and timings were world-class. Being able to call Dilshan directly on his mobile via his Premium profile made planning from Australia so effortless!"
      },
      {
        id: "rev-102",
        author: "Dr. Rohitha Fernando",
        date: "2026-07-02",
        rating: 5,
        eventType: "Wedding",
        comment: "Outstanding coordination for our daughter's wedding banquet. Guests from abroad were truly fascinated by the traditional Sri Lankan aesthetic."
      },
      {
        id: "rev-103",
        author: "Anuki De Silva",
        date: "2026-05-18",
        rating: 5,
        eventType: "Poruwa Ceremony",
        comment: "The most beautiful Poruwa setup we have ever seen. Highly recommended for couples seeking timeless elegance in Sri Lanka."
      }
    ]
  },
  {
    id: "pln-002",
    name: "Apex Lanka Corporate Summits & Expos",
    contactPerson: "Dhanushka Jayasuriya",
    category: "Corporate Events",
    location: "Colombo 03, Western Province",
    priceStarting: 220000,
    budgetTier: "moderate",
    tier: "Premium",
    phone: "+94 71 555 6741",
    email: "events@apexlankasummits.lk",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 9,
    bio: "Apex delivers end-to-end corporate event management for national business forums, executive summits, tech hackathons, and annual shareholder banquets at BMICH, Shangri-La Colombo, and Waters Edge.",
    services: [
      "BMICH & Hotel Conference Management",
      "Keynote Staging & LED Video Walls",
      "Simultaneous Translation Systems",
      "VIP Protocol & Government Liaison",
      "Corporate Catering & Banquet Logistics",
      "Event Photography & Live Broadcast Streaming"
    ],
    packages: [
      {
        name: "Executive Forum",
        price: 220000,
        desc: "AV staging, digital backdrops, registration desk & keynote management for up to 200 executives."
      },
      {
        name: "Premier Summit",
        price: 420000,
        desc: "Panoramic LED walls, speaker green room, banquet dinner logistics & press media management."
      },
      {
        name: "Global Convention",
        price: 780000,
        desc: "Full convention management, 30+ exhibition booths, live streaming, multi-day coordination."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        caption: "Sri Lanka Technology Forum Mainstage Staging at BMICH"
      },
      {
        url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
        caption: "Annual FinTech Leadership Summit at Shangri-La Colombo"
      },
      {
        url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
        caption: "Executive Gala & Awards Ceremony with LED Stage Video Walls"
      }
    ],
    reviews: [
      {
        id: "rev-201",
        author: "Dialog Enterprise Group",
        date: "2026-08-28",
        rating: 5,
        eventType: "Corporate Conference",
        comment: "Dhanushka managed 1,200 delegates across 2 days without a single hitch. Audio visual coordination, simultaneous translation, and VIP logistics were world class."
      },
      {
        id: "rev-202",
        author: "Lanka Business Online",
        date: "2026-06-12",
        rating: 5,
        eventType: "Annual Gala",
        comment: "Superb execution. Having direct telephone access to Dhanushka's mobile made last-minute ministerial protocol changes completely stress-free."
      }
    ]
  },
  {
    id: "pln-003",
    name: "Bloom & Confetti Party Studio",
    contactPerson: "Nethmi Abeyratne",
    category: "Birthdays",
    location: "Kandy Central, Central Province",
    priceStarting: 75000,
    budgetTier: "budget",
    tier: "Standard", // Standard: Direct phone hidden
    phone: "+94 76 555 4921",
    email: "nethmi@bloomandconfettilk.com",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 6,
    bio: "We turn milestone 21st birthdays, sweet sixteens, children's themed parties, and anniversaries in Kandy and Central Province into vibrant celebrations. Renowned for custom balloon arches, artisanal dessert tables, and photo booths.",
    services: [
      "Artisanal Organic Balloon Arches",
      "Custom Themed Dessert & Cake Tables",
      "Interactive Photo Booths & Neon Backdrops",
      "Entertainers, Magicians & DJs",
      "Kids Goodie Bags & Personalized Favors",
      "Outdoor Pavilion & Fairy Lighting"
    ],
    packages: [
      {
        name: "Pastel Dream",
        price: 75000,
        desc: "Custom organic balloon arch, dessert table backdrop, cake pedestal & 30 personalized favor bags."
      },
      {
        name: "Milestone Glow",
        price: 135000,
        desc: "Illuminated neon number signs, instant print photo booth, balloon installation & party games host."
      },
      {
        name: "Grand Carnival",
        price: 220000,
        desc: "Full venue transformation at hotel/garden, 2 live snack stations (popcorn & candy floss), magician & DJ."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
        caption: "Overlooking Kandy Lake 21st Birthday Pavilion Setup"
      },
      {
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
        caption: "Pastel Botanical Garden Birthday Party at Peradeniya"
      },
      {
        url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
        caption: "Tropical Neon Glow Celebration & Dessert Art Table"
      }
    ],
    reviews: [
      {
        id: "rev-301",
        author: "Chamari Bandara",
        date: "2026-08-05",
        rating: 5,
        eventType: "21st Birthday",
        comment: "I submitted an inquiry quote form through PlanMyEvent and Nethmi called me back within 40 minutes! The balloon installations and customized cake table made my daughter's 21st magical."
      },
      {
        id: "rev-302",
        author: "Nuwan Jayawardena",
        date: "2026-06-20",
        rating: 4,
        eventType: "1st Birthday Party",
        comment: "Very creative ideas on an affordable budget. The party setup at Grand Kandyan was ready well ahead of time."
      }
    ]
  },
  {
    id: "pln-004",
    name: "PulseWave Music & Concert Productions",
    contactPerson: "Dinesh Ranasinghe",
    category: "Concerts",
    location: "Mount Lavinia & Colombo Coast",
    priceStarting: 650000,
    budgetTier: "luxury",
    tier: "Premium",
    phone: "+94 70 555 9183",
    email: "dinesh@pulsewavelk.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 14,
    bio: "Sri Lanka's leading live concert production, EDM festival management, and acoustic beach festival specialists. From high-power sound rigs at Viharamahadevi Open Air Theatre to beach festivals in Mount Lavinia and Hikkaduwa.",
    services: [
      "Arena & Beach Stage Engineering",
      "Line-Array Concert Sound Systems",
      "Intelligent Beam & Laser Lighting",
      "Artist Hospitality & Greenroom Prep",
      "Municipal Permits & Crowd Safety Barriers",
      "LED Screen Visuals & Stage Pyrotechnics"
    ],
    packages: [
      {
        name: "Acoustic Beach Session",
        price: 650000,
        desc: "6,000W sound system, acoustic staging, ambient beach warm lighting & 500-guest crowd management."
      },
      {
        name: "Festival Stage Pro",
        price: 950000,
        desc: "Dual line-array sound rig, intelligent moving head lights, LED stage backdrop & artist liaison."
      },
      {
        name: "Arena Mega Rig",
        price: 1600000,
        desc: "Full open-air concert production, 3D laser array, pyrotechnic cold sparks, safety fencing & multi-cam feed."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        caption: "Mainstage EDM Festival Rig & Lighting Display in Colombo"
      },
      {
        url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80",
        caption: "Mount Lavinia Beachside Acoustic Sunset Fest Crowd"
      },
      {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        caption: "Indoor Arena Concert Stage & Sound Engineering"
      }
    ],
    reviews: [
      {
        id: "rev-401",
        author: "Ceylon Sound Promoters",
        date: "2026-07-19",
        rating: 5,
        eventType: "Music Festival",
        comment: "Dinesh and PulseWave are absolute masters. Security, municipal permits, and stage acoustics were handled seamlessly. Direct phone contact is crucial for festival coordination, so their Premium badge was essential."
      },
      {
        id: "rev-402",
        author: "Southern Coast Vibes",
        date: "2026-04-11",
        rating: 5,
        eventType: "Live Concert",
        comment: "Flawless sound engineering and crowd management for 5,000 attendees."
      }
    ]
  },
  {
    id: "pln-005",
    name: "Cinnamon Coast Private Soirées & Dinners",
    contactPerson: "Amasha Gunaratne",
    category: "Private Parties",
    location: "Galle Fort, Southern Province",
    priceStarting: 95000,
    budgetTier: "budget",
    tier: "Standard",
    phone: "+94 77 555 3298",
    email: "amasha@cinnamoncoastparties.lk",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 7,
    bio: "Intimate colonial courtyard dinners, beachside seafood banquets, private chef collaborations, and sunset cocktail soirées across Galle Fort, Thalpe, and Mirissa. We create bespoke settings with tropical candlelight styling.",
    services: [
      "Colonial Courtyard Candlelight Staging",
      "Private Chef & Sommelier Liaison",
      "Acoustic Live Jazz & Bossa Nova Duos",
      "Custom Linen & Ceramic Table Art",
      "Tropical Botanical Installations",
      "Sunset Cocktail Bar Coordination"
    ],
    packages: [
      {
        name: "Intimate Courtyard",
        price: 95000,
        desc: "Candlelight dining for 12 guests, floral table runners, ambient fairy lighting & vintage glassware."
      },
      {
        name: "Galle Fort Soirée",
        price: 175000,
        desc: "30-person colonial villa banquet, live acoustic duo, artisan welcome cocktail bar & floral canopy."
      },
      {
        name: "Cliffside Estate",
        price: 290000,
        desc: "60-person luxury coastal gathering, 5-course plated service styling, canopy tents & dedicated concierge."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
        caption: "Dutch Colonial Courtyard Candlelit Dinner in Galle Fort"
      },
      {
        url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
        caption: "Artisan 5-Course Sri Lankan Fusion Plated Banquet"
      },
      {
        url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
        caption: "Mirissa Cliffside Evening Cocktail Soirée"
      }
    ],
    reviews: [
      {
        id: "rev-501",
        author: "Ruwan & Melani Ratnayake",
        date: "2026-08-01",
        rating: 5,
        eventType: "Private Dinner",
        comment: "Amasha transformed an old colonial villa in Galle into a fairytale garden for our 10th anniversary. Submitted our request via the inquiry form and received a tailored menu proposal the very next morning."
      },
      {
        id: "rev-502",
        author: "Tariq Mansoor",
        date: "2026-06-15",
        rating: 5,
        eventType: "Beach Soirée",
        comment: "Exceptional taste in ambient fairy lighting and live acoustic jazz pairings. Our international guests were blown away."
      }
    ]
  },
  {
    id: "pln-006",
    name: "Heritage Hills Luxury Weddings",
    contactPerson: "Sachini Mendis",
    category: "Weddings",
    location: "Nuwara Eliya & Hill Country",
    priceStarting: 450000,
    budgetTier: "luxury",
    tier: "Premium",
    phone: "+94 71 555 7104",
    email: "sachini@heritagehillsevents.lk",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 11,
    bio: "Specializing in destination weddings amidst misty tea plantations in Nuwara Eliya and Hatton, as well as coastal luxury in Bentota. Full bridal concierge, Poruwa ceremonies, international guest travel logistics, and floral styling.",
    services: [
      "Destination Tea Plantation Ceremonies",
      "English Country Garden Floral Arches",
      "Poruwa & Church Dual-Ceremony Logistics",
      "Foreign Guest Airport & Hotel Shuttles",
      "Heirloom Silver & Antique Table Styling",
      "Misty Mountain Photography Scout"
    ],
    packages: [
      {
        name: "Highland Grace",
        price: 450000,
        desc: "Garden floral arch, custom Poruwa setup, day-of coordination & floral centerpieces for 150 guests."
      },
      {
        name: "Colonial Grandeur",
        price: 680000,
        desc: "Full destination management, live classical string quartet, imported floral aisle & bridal suite concierge."
      },
      {
        name: "Royal Plantation",
        price: 980000,
        desc: "Multi-day estate celebration, vintage luxury car transport, fireworks display & complete guest logistics."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        caption: "Nuwara Eliya Tea Estate Misty Morning Wedding"
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
        caption: "English Tudor Cottage Floral Canopy & Poruwa Setup"
      },
      {
        url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
        caption: "Kandyan Bride Styling & Handcrafted Lily Bouquets"
      }
    ],
    reviews: [
      {
        id: "rev-601",
        author: "Hasitha & Tharushi Alwis",
        date: "2026-07-29",
        rating: 5,
        eventType: "Destination Wedding",
        comment: "Sachini is simply incomparable! She planned our destination wedding in Nuwara Eliya with 300 guests from the UK and Sri Lanka. Direct phone and WhatsApp access made coordinating everything so reassuring."
      }
    ]
  },
  {
    id: "pln-007",
    name: "Serendib Corporate Retreats & Galas",
    contactPerson: "Janaka Pathirana",
    category: "Corporate Events",
    location: "Negombo & Western Coast",
    priceStarting: 180000,
    budgetTier: "moderate",
    tier: "Standard",
    phone: "+94 76 555 8820",
    email: "janaka@serendibevents.lk",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 8,
    bio: "Corporate team retreats, outdoor leadership camps, and annual awards banquets in Negombo beach resorts and Kalutara. We combine high-energy beach team-building with polished conference management.",
    services: [
      "Beachside Team-Building Challenges",
      "Conference Room AV & Projection",
      "Outdoor Campfire & BBQ Evenings",
      "Water Sports & Excursion Coordination",
      "Motivational Speaker Staging",
      "Corporate Branded Merchandise"
    ],
    packages: [
      {
        name: "Team Outing Essential",
        price: 180000,
        desc: "Beach games facilitation, sound setup, customized team bandanas & day itinerary coordination."
      },
      {
        name: "Resort Leadership Retreat",
        price: 320000,
        desc: "2-day conference logistics, banquet dinner, campfire setup, live Calypso band & awards staging."
      },
      {
        name: "Annual Excellence Gala",
        price: 520000,
        desc: "Red-carpet entrance, stage production, awards ceremony, live 5-piece band & banquet logistics for 350 staff."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
        caption: "Annual Awards Gala & Red Carpet Entrance in Negombo"
      },
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        caption: "Beachside Corporate Dinner & Live Calypso Band"
      },
      {
        url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
        caption: "Outdoor Evening Networking Mixer with Lagoon View"
      }
    ],
    reviews: [
      {
        id: "rev-701",
        author: "Commercial Bank Staff Welfare",
        date: "2026-06-05",
        rating: 5,
        eventType: "Corporate Gala",
        comment: "Janaka answered our inquiry prompt within 2 hours with 3 great resort options. The entire event came in right on budget and our employees had an unforgettable time!"
      }
    ]
  },
  {
    id: "pln-008",
    name: "Starlight Milestone Celebrations",
    contactPerson: "Hiruni Karunaratne",
    category: "Birthdays",
    location: "Battaramulla & Colombo Suburbs",
    priceStarting: 60000,
    budgetTier: "budget",
    tier: "Premium",
    phone: "+94 77 555 1940",
    email: "hiruni@starlightcelebrations.lk",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
    cover: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    experienceYears: 5,
    bio: "Magical birthday celebrations for all ages across Colombo, Battaramulla, and Rajagiriya! From themed kids' adventure parties to milestone 50th and 60th celebrations. We handle decor, cake tables, magicians, and goodie bags.",
    services: [
      "Interactive Themed Adventure Pavilions",
      "Custom Character Costumes & Actors",
      "Cotton Candy & Popcorn Live Stations",
      "3D Custom Themed Cake Table Decor",
      "DJ, Magic Shows & Bubble Displays",
      "Custom Keepsake Bags & Balloon Twisters"
    ],
    packages: [
      {
        name: "Wonderland Fun",
        price: 60000,
        desc: "Themed backdrop, organic balloon garland, character cake table & magician for 1 hour."
      },
      {
        name: "Super Adventure",
        price: 110000,
        desc: "Live snack stalls (popcorn & candy floss), instant photo booth, interactive games host & party prizes."
      },
      {
        name: "Golden Milestone",
        price: 185000,
        desc: "Complete venue transformation, illuminated 4ft numbers, 2 live entertainers, customized dessert bar & photographer."
      }
    ],
    portfolio: [
      {
        url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
        caption: "Enchanted Garden Children's Birthday Pavilion"
      },
      {
        url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
        caption: "Golden Jubilee 50th Milestone Birthday Banquet"
      },
      {
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
        caption: "Custom Cupcake Tower & Tropical Dessert Bar"
      }
    ],
    reviews: [
      {
        id: "rev-801",
        author: "Dinithi & Supun Weerasinghe",
        date: "2026-08-11",
        rating: 5,
        eventType: "Birthday Party",
        comment: "Hiruni made our son's 5th birthday celebration unforgettable! We found her on PlanMyEvent Sri Lanka, dialed her directly, and within 48 hours she had the entire superhero theme sketched out."
      },
      {
        id: "rev-802",
        author: "Chathura Dias",
        date: "2026-07-22",
        rating: 5,
        eventType: "Milestone Celebration",
        comment: "Super professional and creative. Took away 100% of the party stress for my mother's 60th birthday."
      }
    ]
  }
];

// Leads and Clients Database (persisted in localStorage)
let leadInquiries = [];
let registeredUsers = [];
let currentUser = null;

// Active UI & Filter State
let appState = {
  selectedCategory: "",
  selectedTier: "all",
  searchKeyword: "",
  budgetFilter: "",
  sortBy: "rating-desc",
  currentProfilePlannerId: null,
  newReviewRating: 5,
  activeRegistrationRole: "client" // "client" (default) or "planner"
};

// =============================================================================
// 2. Helper Utilities & Calculations
// =============================================================================

function formatCurrency(amount) {
  return "Rs. " + Number(amount).toLocaleString('en-LK');
}

function getAverageRating(planner) {
  if (!planner.reviews || planner.reviews.length === 0) return 5.0;
  const sum = planner.reviews.reduce((acc, r) => acc + Number(r.rating), 0);
  return (sum / planner.reviews.length).toFixed(1);
}

function renderStarsHtml(rating) {
  const rounded = Math.round(Number(rating));
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    } else {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
  }
  return starsHtml;
}

function showToast(title, message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const iconMap = {
    success: "fa-solid fa-circle-check",
    info: "fa-solid fa-circle-info",
    warning: "fa-solid fa-triangle-exclamation",
    error: "fa-solid fa-circle-xmark"
  };

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon"><i class="${iconMap[type] || iconMap.info}"></i></div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-hiding");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// =============================================================================
// 3. Dark Mode / Light Mode Theme Controller
// =============================================================================
function initTheme() {
  const storedTheme = localStorage.getItem("planmyevent_theme");
  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", initialTheme);

  const toggleBtn = document.getElementById("themeToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("planmyevent_theme", newTheme);

  showToast(
    newTheme === "dark" ? "Dark Mode Enabled" : "Light Mode Enabled",
    `Switched interface to ${newTheme} theme. Preference saved.`,
    "info"
  );
}

// =============================================================================
// 4. Task 1: Client & User Session Management
// =============================================================================
function initUserSession() {
  const savedUsers = localStorage.getItem("planmyevent_registered_users");
  if (savedUsers) {
    try {
      registeredUsers = JSON.parse(savedUsers);
    } catch (e) {
      registeredUsers = [];
    }
  }

  const activeUser = localStorage.getItem("planmyevent_active_user");
  if (activeUser) {
    try {
      currentUser = JSON.parse(activeUser);
      updateNavSessionUI();
    } catch (e) {
      currentUser = null;
    }
  }
}

function updateNavSessionUI() {
  const guestActions = document.getElementById("guestNavActions");
  const userWidget = document.getElementById("userSessionWidget");
  const nameEl = document.getElementById("userDisplayName");
  const roleBadgeEl = document.getElementById("userRoleBadge");

  if (!guestActions || !userWidget) return;

  if (currentUser) {
    guestActions.style.display = "none";
    userWidget.style.display = "flex";
    if (nameEl) nameEl.textContent = currentUser.name.split(" ")[0];
    if (roleBadgeEl) roleBadgeEl.textContent = currentUser.role === "client" ? "Client" : "Planner";
  } else {
    guestActions.style.display = "flex";
    userWidget.style.display = "none";
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("planmyevent_active_user");
  updateNavSessionUI();
  showToast("Signed Out", "You have been signed out successfully.", "info");
}

// =============================================================================
// 5. Category Grid Rendering
// =============================================================================
const categoryDefinitions = [
  {
    name: "Weddings",
    slug: "wedding",
    icon: "fa-solid fa-rings-wedding",
    subtext: "Traditional Poruwa, Church & Beach Ceremonies"
  },
  {
    name: "Corporate Events",
    slug: "corporate",
    icon: "fa-solid fa-briefcase",
    subtext: "Conferences, BMICH Expos & Award Nights"
  },
  {
    name: "Birthdays",
    slug: "birthday",
    icon: "fa-solid fa-cake-candles",
    subtext: "21st Birthdays, Anniversaries & Kids Themes"
  },
  {
    name: "Concerts",
    slug: "concert",
    icon: "fa-solid fa-music",
    subtext: "Live Shows, EDM & Coastal Beach Rigs"
  },
  {
    name: "Private Parties",
    slug: "dinner",
    icon: "fa-solid fa-champagne-glasses",
    subtext: "Colonial Courtyards, Private Chefs & Villas"
  }
];

function renderCategories() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  grid.innerHTML = categoryDefinitions.map(cat => {
    const count = eventPlanners.filter(p => p.category.toLowerCase().includes(cat.name.toLowerCase())).length;
    return `
      <div class="category-card ${cat.slug}" data-category="${cat.name}">
        <div class="category-icon-box">
          <i class="${cat.icon}"></i>
        </div>
        <div class="category-info">
          <h3>${cat.name}</h3>
          <p>${cat.subtext}</p>
        </div>
        <div class="category-footer">
          <span>${count} Verified Planners</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      const catName = card.getAttribute("data-category");
      setCategoryFilter(catName);
    });
  });
}

function setCategoryFilter(category) {
  appState.selectedCategory = (appState.selectedCategory === category) ? "" : category;
  
  const heroSelect = document.getElementById("heroCategorySelect");
  if (heroSelect) {
    heroSelect.value = appState.selectedCategory;
  }

  applyFiltersAndRender();

  const directorySection = document.getElementById("directorySection");
  if (directorySection) {
    directorySection.scrollIntoView({ behavior: "smooth" });
  }

  if (appState.selectedCategory) {
    showToast("Category Selected", `Filtered Sri Lankan directory by "${appState.selectedCategory}"`, "info");
  }
}

// =============================================================================
// 6. Directory Filtering & Task 2: Expandable Details Cards Rendering
// =============================================================================
function getFilteredPlanners() {
  let result = [...eventPlanners];

  if (appState.searchKeyword.trim() !== "") {
    const term = appState.searchKeyword.toLowerCase().trim();
    result = result.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.location.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.bio.toLowerCase().includes(term)
    );
  }

  if (appState.selectedCategory !== "") {
    result = result.filter(p => p.category.toLowerCase() === appState.selectedCategory.toLowerCase());
  }

  if (appState.selectedTier === "premium") {
    result = result.filter(p => p.tier === "Premium");
  } else if (appState.selectedTier === "standard") {
    result = result.filter(p => p.tier === "Standard");
  }

  if (appState.budgetFilter === "budget") {
    result = result.filter(p => p.priceStarting < 100000);
  } else if (appState.budgetFilter === "moderate") {
    result = result.filter(p => p.priceStarting >= 100000 && p.priceStarting <= 300000);
  } else if (appState.budgetFilter === "luxury") {
    result = result.filter(p => p.priceStarting > 300000);
  }

  result.sort((a, b) => {
    const ratingA = Number(getAverageRating(a));
    const ratingB = Number(getAverageRating(b));
    const reviewsCountA = a.reviews ? a.reviews.length : 0;
    const reviewsCountB = b.reviews ? b.reviews.length : 0;

    switch (appState.sortBy) {
      case "rating-desc":
        if (ratingB !== ratingA) return ratingB - ratingA;
        return reviewsCountB - reviewsCountA;
      case "reviews-desc":
        return reviewsCountB - reviewsCountA;
      case "price-asc":
        return a.priceStarting - b.priceStarting;
      case "price-desc":
        return b.priceStarting - a.priceStarting;
      default:
        return 0;
    }
  });

  return result;
}

function renderPlannersGrid() {
  const grid = document.getElementById("plannersGrid");
  const emptyState = document.getElementById("emptyState");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;

  const filtered = getFilteredPlanners();

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} verified Sri Lankan ${filtered.length === 1 ? 'planner' : 'planners'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    updateActiveFiltersBar();
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  // Build Planner Cards with Task 2: Smooth Expandable Details Section
  grid.innerHTML = filtered.map(planner => {
    const avgRating = getAverageRating(planner);
    const reviewCount = planner.reviews ? planner.reviews.length : 0;
    const isPremium = planner.tier === "Premium";
    const thumbs = (planner.portfolio || []).slice(0, 3);
    const cleanPhone = planner.phone.replace(/[^0-9+]/g, '');
    const waNumber = cleanPhone.replace(/^\+/, '');

    // Contact Box logic
    let contactBoxHtml = "";
    if (isPremium) {
      contactBoxHtml = `
        <div class="contact-status-box premium">
          <div class="premium-contact-info">
            <i class="fa-solid fa-phone-volume"></i>
            <div>
              <span style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.04em; display:block;">Direct Mobile Number</span>
              <span class="premium-phone-number">${planner.phone}</span>
            </div>
          </div>
          <div style="display:flex; gap:0.35rem;">
            <a href="tel:${cleanPhone}" class="premium-call-action" title="Call directly">
              <i class="fa-solid fa-phone"></i> Call
            </a>
            <a href="https://wa.me/${waNumber}" target="_blank" rel="noopener noreferrer" class="premium-call-action" style="background:#10B981;" title="WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      `;
    } else {
      contactBoxHtml = `
        <div class="contact-status-box standard">
          <div class="standard-hidden-info">
            <i class="fa-solid fa-lock"></i>
            <div>
              <span style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.04em; display:block;">Direct Phone Hidden</span>
              <span style="font-weight: 500;">Inquiry form required</span>
            </div>
          </div>
          <span class="standard-pill-hint">Standard Tier</span>
        </div>
      `;
    }

    // Packages HTML for drawer
    const packagesHtml = (planner.packages || []).map(pkg => `
      <div class="drawer-package-card">
        <div class="drawer-pkg-header">
          <span class="drawer-pkg-name">${pkg.name}</span>
          <span class="drawer-pkg-price">${formatCurrency(pkg.price)}</span>
        </div>
        <p class="drawer-pkg-desc">${pkg.desc}</p>
      </div>
    `).join("");

    // Services chips HTML for drawer
    const servicesHtml = (planner.services || []).map(svc => `
      <span class="service-chip"><i class="fa-solid fa-circle-check"></i> ${svc}</span>
    `).join("");

    // Recent reviews snippet for drawer
    const recentReviewsHtml = (planner.reviews || []).slice(0, 2).map(r => `
      <div class="review-item" style="padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
        <div class="review-top-row" style="margin-bottom: 0.25rem;">
          <strong style="font-size: 0.825rem; color: var(--text-main);">${r.author}</strong>
          <span class="review-stars" style="font-size: 0.75rem;">${renderStarsHtml(r.rating)}</span>
        </div>
        <p style="font-size: 0.775rem; color: var(--text-body); line-height: 1.4;">"${r.comment}"</p>
      </div>
    `).join("");

    return `
      <article class="planner-card ${isPremium ? 'is-premium' : ''}" id="card-${planner.id}">
        <!-- Card Cover -->
        <div class="card-cover">
          <img src="${planner.cover}" alt="${planner.name} cover" class="card-cover-img" loading="lazy" />
          <div class="card-cover-overlay"></div>
          
          <div class="card-badge-top">
            ${isPremium 
              ? `<span class="tier-badge premium"><i class="fa-solid fa-crown"></i> Premium</span>`
              : `<span class="tier-badge standard"><i class="fa-solid fa-shield-check"></i> Standard</span>`
            }
          </div>

          <span class="card-category-tag">${planner.category}</span>

          <!-- Avatar Frame -->
          <div class="card-avatar-wrapper">
            <img src="${planner.avatar}" alt="${planner.contactPerson}" class="card-avatar" />
          </div>
        </div>

        <!-- Primary Card Body -->
        <div class="card-body">
          <div class="card-title-row">
            <h3 class="planner-name">${planner.name}</h3>
            <div class="card-rating" title="Rated ${avgRating} out of 5 stars">
              <i class="fa-solid fa-star"></i>
              <span>${avgRating}</span>
              <span style="font-weight: 400; opacity: 0.85;">(${reviewCount})</span>
            </div>
          </div>

          <div class="planner-location">
            <i class="fa-solid fa-location-dot"></i> ${planner.location} &bull; ${planner.experienceYears}+ yrs exp
          </div>

          <p class="planner-bio">${planner.bio}</p>

          <!-- Portfolio Thumbnails -->
          <div class="portfolio-preview-box">
            <div class="portfolio-preview-label">
              <span>Past Work Preview</span>
              <span>${planner.portfolio ? planner.portfolio.length : 0} photos</span>
            </div>
            <div class="portfolio-thumbnails">
              ${thumbs.map(t => `
                <img src="${t.url}" alt="${t.caption}" class="portfolio-thumb" onclick="openLightbox('${t.url}', '${t.caption.replace(/'/g, "\\'")}')" />
              `).join("")}
            </div>
          </div>

          <!-- Contact Status Box -->
          ${contactBoxHtml}

          <!-- Footer Pricing & Expand Toggle Action -->
          <div class="card-footer">
            <div class="planner-pricing">
              <span class="pricing-label">Starting From</span>
              <span class="pricing-value">${formatCurrency(planner.priceStarting)}</span>
            </div>
            
            <div class="card-actions">
              <!-- Task 2: Smooth Expandable Toggle Button -->
              <button class="btn btn-outline btn-card-toggle" id="btn-toggle-${planner.id}" onclick="toggleCardExpansion('${planner.id}')">
                <span class="toggle-text">View Details</span>
                <i class="fa-solid fa-chevron-down toggle-icon"></i>
              </button>
              
              ${isPremium
                ? `<button class="btn btn-primary btn-card-contact" onclick="openInquiryModal('${planner.id}')">
                    <i class="fa-solid fa-paper-plane"></i> Book
                  </button>`
                : `<button class="btn btn-primary btn-card-contact" onclick="openInquiryModal('${planner.id}')">
                    <i class="fa-solid fa-envelope"></i> Quote
                  </button>`
              }
            </div>
          </div>
        </div>

        <!-- Task 2: Smooth Expandable Drawer Section -->
        <div class="card-expandable-drawer" id="drawer-${planner.id}" aria-hidden="true">
          <div class="card-expandable-inner">
            <div class="drawer-content">
              <!-- Full Bio Section -->
              <div class="drawer-block">
                <span class="drawer-block-title"><i class="fa-solid fa-circle-info"></i> About the Firm</span>
                <p class="drawer-bio-text">${planner.bio}</p>
              </div>

              <!-- Services Provided Section -->
              <div class="drawer-block">
                <span class="drawer-block-title"><i class="fa-solid fa-list-check"></i> Services Provided</span>
                <div class="services-chip-grid">
                  ${servicesHtml}
                </div>
              </div>

              <!-- Pricing & Packages Section -->
              <div class="drawer-block">
                <span class="drawer-block-title"><i class="fa-solid fa-tag"></i> Packages & Pricing</span>
                <div class="drawer-packages-grid">
                  ${packagesHtml}
                </div>
              </div>

              <!-- Extended Portfolio Section -->
              <div class="drawer-block">
                <span class="drawer-block-title"><i class="fa-solid fa-images"></i> Full Portfolio Gallery</span>
                <div class="drawer-portfolio-grid">
                  ${(planner.portfolio || []).map(item => `
                    <div class="drawer-portfolio-item" onclick="openLightbox('${item.url}', '${item.caption.replace(/'/g, "\\'")}')">
                      <img src="${item.url}" alt="${item.caption}" loading="lazy" />
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Verified Client Reviews Section -->
              <div class="drawer-block">
                <span class="drawer-block-title"><i class="fa-solid fa-star"></i> Client Reviews (${reviewCount})</span>
                <div class="expanded-reviews-box">
                  ${recentReviewsHtml}
                </div>
              </div>

              <!-- Drawer Action Bar -->
              <div class="drawer-action-bar">
                <button class="btn btn-outline btn-sm" onclick="openProfileModal('${planner.id}')">
                  <i class="fa-solid fa-expand"></i> Open Full Page View
                </button>
                <button class="btn btn-primary btn-sm" onclick="openInquiryModal('${planner.id}')">
                  <i class="fa-solid fa-envelope-open-text"></i> Request Free Quote
                </button>
                <button class="btn btn-outline btn-sm" onclick="toggleCardExpansion('${planner.id}')">
                  <i class="fa-solid fa-chevron-up"></i> Collapse
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  updateActiveFiltersBar();
}

// Task 2: Smooth Expand/Collapse Controller
function toggleCardExpansion(plannerId) {
  const card = document.getElementById(`card-${plannerId}`);
  const drawer = document.getElementById(`drawer-${plannerId}`);
  const btn = document.getElementById(`btn-toggle-${plannerId}`);
  if (!card) return;

  const isExpanded = card.classList.contains("is-expanded");

  if (isExpanded) {
    card.classList.remove("is-expanded");
    if (drawer) drawer.setAttribute("aria-hidden", "true");
    if (btn) {
      const textSpan = btn.querySelector(".toggle-text");
      if (textSpan) textSpan.textContent = "View Details";
    }
  } else {
    card.classList.add("is-expanded");
    if (drawer) drawer.setAttribute("aria-hidden", "false");
    if (btn) {
      const textSpan = btn.querySelector(".toggle-text");
      if (textSpan) textSpan.textContent = "Hide Details";
    }
  }
}

// Active Filter Chips Bar
function updateActiveFiltersBar() {
  const bar = document.getElementById("activeFiltersBar");
  const chipsContainer = document.getElementById("filterChips");
  if (!bar || !chipsContainer) return;

  const chips = [];

  if (appState.selectedCategory) {
    chips.push({
      label: `Category: ${appState.selectedCategory}`,
      clear: () => {
        appState.selectedCategory = "";
        const heroSelect = document.getElementById("heroCategorySelect");
        if (heroSelect) heroSelect.value = "";
        applyFiltersAndRender();
      }
    });
  }

  if (appState.selectedTier !== "all") {
    chips.push({
      label: `Tier: ${appState.selectedTier.toUpperCase()}`,
      clear: () => {
        appState.selectedTier = "all";
        syncTierButtons();
        applyFiltersAndRender();
      }
    });
  }

  if (appState.searchKeyword.trim() !== "") {
    chips.push({
      label: `Search: "${appState.searchKeyword}"`,
      clear: () => {
        appState.searchKeyword = "";
        const navInput = document.getElementById("quickNavSearch");
        const heroLoc = document.getElementById("heroLocationInput");
        if (navInput) navInput.value = "";
        if (heroLoc) heroLoc.value = "";
        applyFiltersAndRender();
      }
    });
  }

  if (appState.budgetFilter !== "") {
    const budgetLabels = {
      budget: "Budget (< Rs. 100k)",
      moderate: "Moderate (Rs. 100k - 300k)",
      luxury: "Luxury (Rs. 300k+)"
    };
    chips.push({
      label: budgetLabels[appState.budgetFilter] || "Budget",
      clear: () => {
        appState.budgetFilter = "";
        const bSelect = document.getElementById("heroBudgetSelect");
        if (bSelect) bSelect.value = "";
        applyFiltersAndRender();
      }
    });
  }

  if (chips.length > 0) {
    bar.style.display = "flex";
    chipsContainer.innerHTML = chips.map((c, idx) => `
      <span class="chip">
        ${c.label}
        <i class="fa-solid fa-xmark" data-chip-index="${idx}"></i>
      </span>
    `).join("");

    chipsContainer.querySelectorAll("i").forEach((icon, i) => {
      icon.addEventListener("click", () => chips[i].clear());
    });
  } else {
    bar.style.display = "none";
    chipsContainer.innerHTML = "";
  }
}

function applyFiltersAndRender() {
  renderPlannersGrid();
}

function syncTierButtons() {
  const tierBtns = document.querySelectorAll(".tier-btn");
  tierBtns.forEach(btn => {
    if (btn.getAttribute("data-tier") === appState.selectedTier) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// =============================================================================
// 7. Full Planner Profile Modal Controller & Workflows
// =============================================================================
function openProfileModal(plannerId) {
  const planner = eventPlanners.find(p => p.id === plannerId);
  if (!planner) return;

  appState.currentProfilePlannerId = plannerId;
  appState.newReviewRating = 5;

  const modal = document.getElementById("profileModal");
  const content = document.getElementById("profileModalContent");
  if (!modal || !content) return;

  const avgRating = getAverageRating(planner);
  const isPremium = planner.tier === "Premium";
  const reviews = planner.reviews || [];

  const starCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(r => {
    const star = Math.min(5, Math.max(1, Math.round(Number(r.rating))));
    starCounts[star] = (starCounts[star] || 0) + 1;
  });
  const totalReviews = reviews.length || 1;

  let contactCalloutHtml = "";
  if (isPremium) {
    const cleanPhone = planner.phone.replace(/[^0-9+]/g, '');
    const waNumber = cleanPhone.replace(/^\+/, '');
    contactCalloutHtml = `
      <div class="profile-contact-callout premium-highlight">
        <div class="premium-callout-left">
          <div class="premium-icon-box">
            <i class="fa-solid fa-crown"></i>
          </div>
          <div>
            <span class="badge-pill" style="background:#FDE68A; color:#92400E; margin-bottom:0.25rem;">
              <i class="fa-solid fa-sparkles"></i> Direct Sri Lankan Contact Unlocked
            </span>
            <h4 class="premium-callout-title">Direct Client Communication Unlocked</h4>
            <p class="premium-callout-desc">As a verified Premium Planner in Sri Lanka, direct mobile & WhatsApp access is provided below.</p>
          </div>
        </div>

        <div class="premium-callout-actions">
          <a href="tel:${cleanPhone}" class="btn btn-direct-call">
            <i class="fa-solid fa-phone"></i> ${planner.phone}
          </a>
          <a href="https://wa.me/${waNumber}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="border-color:#10B981; color:#10B981;" title="Chat on WhatsApp">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <button class="btn btn-outline" onclick="openInquiryModal('${planner.id}')" title="Send structured quote form">
            <i class="fa-solid fa-envelope"></i> Send Quote Form
          </button>
        </div>
      </div>
    `;
  } else {
    contactCalloutHtml = `
      <div class="profile-contact-callout standard-highlight">
        <div class="standard-callout-left">
          <div class="standard-icon-box">
            <i class="fa-solid fa-lock"></i>
          </div>
          <div>
            <span class="badge-pill" style="background:var(--border-color); color:var(--text-muted); margin-bottom:0.25rem;">
              Standard Member Listing
            </span>
            <h4 class="standard-callout-title">Direct Phone Number is Hidden</h4>
            <p class="standard-callout-desc">To connect with ${planner.name}, please submit your event vision via our secure quotation inquiry form.</p>
          </div>
        </div>

        <div>
          <button class="btn btn-primary" onclick="openInquiryModal('${planner.id}')">
            <i class="fa-solid fa-envelope-open-text"></i> Request Event Quote
          </button>
        </div>
      </div>
    `;
  }

  // Packages grid HTML for modal
  const packagesModalHtml = (planner.packages || []).map(pkg => `
    <div class="modal-package-card">
      <span class="modal-pkg-title">${pkg.name}</span>
      <span class="modal-pkg-price">${formatCurrency(pkg.price)}</span>
      <p class="modal-pkg-desc">${pkg.desc}</p>
      <button class="btn btn-outline btn-sm" onclick="openInquiryModal('${planner.id}')">
        Inquire for this Package
      </button>
    </div>
  `).join("");

  content.innerHTML = `
    <!-- Profile Hero -->
    <div class="profile-hero">
      <img src="${planner.cover}" alt="${planner.name} cover" class="profile-cover-img" />
      <div class="profile-hero-gradient"></div>
    </div>

    <!-- Main Profile Info -->
    <div class="profile-main-info">
      <div class="profile-avatar-row">
        <div class="profile-avatar-frame">
          <img src="${planner.avatar}" alt="${planner.contactPerson}" class="profile-pic" />
        </div>

        <div>
          ${isPremium 
            ? `<span class="tier-badge premium"><i class="fa-solid fa-crown"></i> Verified Premium Planner</span>` 
            : `<span class="tier-badge standard"><i class="fa-solid fa-shield-check"></i> Verified Standard Planner</span>`
          }
        </div>
      </div>

      <div class="profile-meta-header">
        <h2 class="profile-name" id="profilePlannerName">${planner.name}</h2>
      </div>

      <div class="profile-location-category">
        <span><i class="fa-solid fa-user-tie text-muted"></i> Lead: <strong>${planner.contactPerson}</strong></span>
        <span>&bull;</span>
        <span><i class="fa-solid fa-tags text-muted"></i> ${planner.category}</span>
        <span>&bull;</span>
        <span><i class="fa-solid fa-location-dot text-muted"></i> ${planner.location}</span>
        <span>&bull;</span>
        <span><i class="fa-solid fa-coins text-muted"></i> Starting from <strong>${formatCurrency(planner.priceStarting)}</strong></span>
      </div>

      ${contactCalloutHtml}
    </div>

    <!-- About & Bio Section -->
    <div class="profile-section-block">
      <h3 class="profile-block-heading">About the Event Planner</h3>
      <p class="profile-bio-text">${planner.bio}</p>
    </div>

    <!-- Services Provided Section -->
    <div class="profile-section-block">
      <h3 class="profile-block-heading">Services Provided</h3>
      <div class="services-chip-grid">
        ${(planner.services || []).map(svc => `
          <span class="service-chip"><i class="fa-solid fa-circle-check"></i> ${svc}</span>
        `).join("")}
      </div>
    </div>

    <!-- Packages & Pricing Section -->
    <div class="profile-section-block">
      <h3 class="profile-block-heading">Pricing & Service Packages</h3>
      <div class="modal-packages-grid">
        ${packagesModalHtml}
      </div>
    </div>

    <!-- Portfolio Gallery Section -->
    <div class="profile-section-block">
      <div class="profile-block-heading">
        <h3>Past Event Portfolio</h3>
        <span class="text-muted" style="font-size: 0.85rem;">Click any photo to enlarge</span>
      </div>

      <div class="profile-portfolio-grid">
        ${(planner.portfolio || []).map(item => `
          <div class="profile-portfolio-item" onclick="openLightbox('${item.url}', '${item.caption.replace(/'/g, "\\'")}')">
            <img src="${item.url}" alt="${item.caption}" loading="lazy" />
            <div class="portfolio-overlay">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
            </div>
          </div>
        `).join("")}
      </div>
    </div>

    <!-- Ratings & Verified Reviews Section -->
    <div class="profile-section-block" id="reviewsSection">
      <div class="profile-block-heading">
        <h3>Client Ratings & Reviews</h3>
        <span class="text-muted" style="font-size: 0.85rem;">${reviews.length} Verified Sri Lankan Reviews</span>
      </div>

      <div class="reviews-breakdown-card">
        <div class="rating-score-box">
          <div class="rating-huge" id="profileAverageScore">${avgRating}</div>
          <div class="rating-stars-gold" id="profileStarsDisplay">${renderStarsHtml(avgRating)}</div>
          <div class="rating-count-text" id="profileReviewsTotal">${reviews.length} verified reviews</div>
        </div>

        <div class="rating-progress-list">
          ${[5, 4, 3, 2, 1].map(star => {
            const count = starCounts[star] || 0;
            const pct = Math.round((count / totalReviews) * 100);
            return `
              <div class="rating-bar-row">
                <span class="rating-bar-label">${star} ★</span>
                <div class="rating-bar-track">
                  <div class="rating-bar-fill" style="width: ${pct}%;"></div>
                </div>
                <span style="width: 30px; text-align: right; color: var(--text-muted); font-size: 0.75rem;">${count}</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- Interactive "Leave a Review" Form -->
      <div class="leave-review-card">
        <h4 class="leave-review-title">Worked with ${planner.name}? Leave a Verified Review</h4>
        <p class="leave-review-sub">Your feedback helps fellow event hosts across Sri Lanka plan with confidence.</p>

        <form id="newReviewForm" onsubmit="handleReviewSubmit(event)">
          <div class="star-rating-selector">
            <span style="font-weight: 600; font-size: 0.85rem; margin-right: 0.5rem;">Your Rating:</span>
            <div class="stars-interactive" id="starPicker">
              <i class="fa-solid fa-star active" data-value="1"></i>
              <i class="fa-solid fa-star active" data-value="2"></i>
              <i class="fa-solid fa-star active" data-value="3"></i>
              <i class="fa-solid fa-star active" data-value="4"></i>
              <i class="fa-solid fa-star active" data-value="5"></i>
            </div>
            <span class="star-score-feedback" id="starScoreLabel">5.0 - Exceptional</span>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="revAuthorInput">Your Full Name *</label>
              <input type="text" id="revAuthorInput" required placeholder="e.g. Ruwan & Dilini" />
            </div>
            <div class="form-group">
              <label for="revEventTypeSelect">Event Type *</label>
              <select id="revEventTypeSelect" required>
                <option value="Wedding & Poruwa">Wedding & Poruwa</option>
                <option value="Birthday Party">Birthday / Anniversary</option>
                <option value="Corporate Gala">Corporate Event</option>
                <option value="Concert & Festival">Concert / Festival</option>
                <option value="Private Dinner">Private Dinner / Soirée</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="revCommentInput">Your Experience & Feedback *</label>
            <textarea id="revCommentInput" rows="3" required placeholder="Share details regarding punctuality, Poruwa rituals, floral decor, catering management, and day-of coordination..."></textarea>
          </div>

          <div style="text-align: right;">
            <button type="submit" class="btn btn-primary">
              <i class="fa-solid fa-paper-plane"></i> Submit Verified Review
            </button>
          </div>
        </form>
      </div>

      <!-- Reviews Feed -->
      <div class="reviews-list" id="profileReviewsList">
        ${reviews.map(r => renderSingleReviewHtml(r)).join("")}
      </div>
    </div>
  `;

  initStarPicker();

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeProfileModal() {
  const modal = document.getElementById("profileModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function renderSingleReviewHtml(review) {
  const initials = review.author
    .split(" ")
    .map(n => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return `
    <div class="review-item">
      <div class="review-top-row">
        <div class="reviewer-profile">
          <div class="reviewer-avatar">${initials}</div>
          <div>
            <div class="reviewer-name">${review.author}</div>
            <div class="review-event-tag">Verified Host &bull; ${review.eventType}</div>
          </div>
        </div>
        <div style="text-align: right;">
          <div class="review-stars">${renderStarsHtml(review.rating)}</div>
          <span class="review-date">${review.date}</span>
        </div>
      </div>
      <p class="review-comment">${review.comment}</p>
    </div>
  `;
}

function initStarPicker() {
  const starContainer = document.getElementById("starPicker");
  const label = document.getElementById("starScoreLabel");
  if (!starContainer) return;

  const stars = starContainer.querySelectorAll("i");
  const labels = {
    1: "1.0 - Poor",
    2: "2.0 - Fair",
    3: "3.0 - Good",
    4: "4.0 - Very Good",
    5: "5.0 - Exceptional"
  };

  function updateStars(val) {
    stars.forEach(s => {
      const sVal = Number(s.getAttribute("data-value"));
      if (sVal <= val) {
        s.classList.add("active");
        s.classList.remove("fa-regular");
        s.classList.add("fa-solid");
      } else {
        s.classList.remove("active");
        s.classList.remove("fa-solid");
        s.classList.add("fa-regular");
      }
    });
    if (label) label.textContent = labels[val] || `${val}.0`;
  }

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const val = Number(star.getAttribute("data-value"));
      appState.newReviewRating = val;
      updateStars(val);
    });

    star.addEventListener("mouseenter", () => {
      const val = Number(star.getAttribute("data-value"));
      updateStars(val);
    });
  });

  starContainer.addEventListener("mouseleave", () => {
    updateStars(appState.newReviewRating);
  });

  updateStars(appState.newReviewRating);
}

function handleReviewSubmit(e) {
  e.preventDefault();
  if (!appState.currentProfilePlannerId) return;

  const planner = eventPlanners.find(p => p.id === appState.currentProfilePlannerId);
  if (!planner) return;

  const authorInput = document.getElementById("revAuthorInput");
  const eventTypeSelect = document.getElementById("revEventTypeSelect");
  const commentInput = document.getElementById("revCommentInput");

  if (!authorInput || !commentInput) return;

  const newReview = {
    id: "rev-" + Date.now(),
    author: authorInput.value.trim(),
    date: new Date().toISOString().split("T")[0],
    rating: appState.newReviewRating,
    eventType: eventTypeSelect.value,
    comment: commentInput.value.trim()
  };

  if (!planner.reviews) planner.reviews = [];
  planner.reviews.unshift(newReview);

  const newAvg = getAverageRating(planner);

  const reviewsList = document.getElementById("profileReviewsList");
  if (reviewsList) {
    reviewsList.insertAdjacentHTML("afterbegin", renderSingleReviewHtml(newReview));
  }

  const avgScoreEl = document.getElementById("profileAverageScore");
  const starsDisplayEl = document.getElementById("profileStarsDisplay");
  const reviewsTotalEl = document.getElementById("profileReviewsTotal");
  if (avgScoreEl) avgScoreEl.textContent = newAvg;
  if (starsDisplayEl) starsDisplayEl.innerHTML = renderStarsHtml(newAvg);
  if (reviewsTotalEl) reviewsTotalEl.textContent = `${planner.reviews.length} verified reviews`;

  authorInput.value = "";
  commentInput.value = "";
  appState.newReviewRating = 5;
  initStarPicker();

  renderPlannersGrid();

  showToast("Review Published!", `Your ${newReview.rating}-star review for ${planner.name} is now live.`, "success");
}

// =============================================================================
// 8. Customer Inquiry / Lead Generation Modal & Logic
// =============================================================================
function openInquiryModal(plannerId) {
  const planner = eventPlanners.find(p => p.id === plannerId);
  if (!planner) return;

  const modal = document.getElementById("inquiryModal");
  const hiddenIdInput = document.getElementById("inquiryPlannerId");
  const targetLabel = document.getElementById("inquiryPlannerTarget");

  if (!modal || !hiddenIdInput || !targetLabel) return;

  hiddenIdInput.value = planner.id;
  targetLabel.innerHTML = `Connecting with: <strong>${planner.name}</strong> (${planner.tier} Planner &bull; ${planner.location})`;

  // If a client is logged in, auto-fill their info!
  if (currentUser) {
    const nameInput = document.getElementById("inquiryClientName");
    const emailInput = document.getElementById("inquiryClientEmail");
    const phoneInput = document.getElementById("inquiryClientPhone");
    if (nameInput) nameInput.value = currentUser.name || "";
    if (emailInput) emailInput.value = currentUser.email || "";
    if (phoneInput) phoneInput.value = currentUser.phone || "";
  }

  const categorySelect = document.getElementById("inquiryEventType");
  if (categorySelect) {
    if (planner.category === "Weddings") categorySelect.value = "Wedding";
    else if (planner.category === "Birthdays") categorySelect.value = "Birthday Party";
    else if (planner.category === "Corporate Events") categorySelect.value = "Corporate Event";
    else if (planner.category === "Concerts") categorySelect.value = "Concert & Festival";
    else if (planner.category === "Private Parties") categorySelect.value = "Private Dinner";
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeInquiryModal() {
  const modal = document.getElementById("inquiryModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function handleInquiryFormSubmit(e) {
  e.preventDefault();

  const plannerId = document.getElementById("inquiryPlannerId").value;
  const planner = eventPlanners.find(p => p.id === plannerId);

  const clientName = document.getElementById("inquiryClientName").value.trim();
  const clientEmail = document.getElementById("inquiryClientEmail").value.trim();
  const clientPhone = document.getElementById("inquiryClientPhone").value.trim();
  const eventType = document.getElementById("inquiryEventType").value;
  const eventDate = document.getElementById("inquiryEventDate").value;
  const guestCount = document.getElementById("inquiryGuestCount").value;
  const budget = document.getElementById("inquiryBudget").value;
  const notes = document.getElementById("inquiryNotes").value.trim();

  const leadRecord = {
    id: "lead-" + Date.now(),
    plannerId: planner ? planner.id : "unknown",
    plannerName: planner ? planner.name : "Unknown",
    clientName,
    clientEmail,
    clientPhone,
    eventType,
    eventDate,
    guestCount,
    budget,
    notes,
    timestamp: new Date().toISOString()
  };

  leadInquiries.push(leadRecord);

  closeInquiryModal();
  document.getElementById("customerInquiryForm").reset();

  showToast(
    "Inquiry Dispatched Successfully!",
    `Your event details for ${eventType} on ${eventDate} have been forwarded to ${planner ? planner.name : 'the planner'}.`,
    "success"
  );
}

// =============================================================================
// 9. Task 1: Unified Registration Controller [Client (Free) vs. Event Planner]
// =============================================================================
function openRegistrationModal(defaultRole = "client", defaultTier = "Standard") {
  const modal = document.getElementById("joinModal");
  if (!modal) return;

  setRegistrationRole(defaultRole);

  const radio = document.querySelector(`input[name="membershipTier"][value="${defaultTier}"]`);
  if (radio) {
    radio.checked = true;
    updateRegistrationFeeSummary(defaultTier);
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeRegistrationModal() {
  const modal = document.getElementById("joinModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function setRegistrationRole(role) {
  appState.activeRegistrationRole = role;

  const tabClient = document.getElementById("tabRoleClient");
  const tabPlanner = document.getElementById("tabRolePlanner");
  const formClient = document.getElementById("clientRegistrationForm");
  const formPlanner = document.getElementById("plannerRegistrationForm");
  const modalTitle = document.getElementById("joinModalTitle");
  const modalSub = document.getElementById("regModalSubtitle");
  const modalEyebrow = document.getElementById("regModalEyebrow");
  const modalIcon = document.getElementById("modalHeaderIcon");

  if (role === "client") {
    if (tabClient) tabClient.classList.add("active");
    if (tabPlanner) tabPlanner.classList.remove("active");
    if (formClient) formClient.style.display = "block";
    if (formPlanner) formPlanner.style.display = "none";

    if (modalEyebrow) modalEyebrow.textContent = "Free Client Sign Up";
    if (modalTitle) modalTitle.textContent = "Create Your Free Client Account";
    if (modalSub) modalSub.textContent = "Sign up for free to contact event planners, request custom quotes, and save portfolios.";
    if (modalIcon) {
      modalIcon.className = "modal-header-icon";
      modalIcon.innerHTML = `<i class="fa-solid fa-user-plus"></i>`;
    }
  } else {
    if (tabClient) tabClient.classList.remove("active");
    if (tabPlanner) tabPlanner.classList.add("active");
    if (formClient) formClient.style.display = "none";
    if (formPlanner) formPlanner.style.display = "block";

    if (modalEyebrow) modalEyebrow.textContent = "Vendor Onboarding";
    if (modalTitle) modalTitle.textContent = "Register as an Event Planner";
    if (modalSub) modalSub.textContent = "Pay a one-time registration fee to get listed in the directory and receive direct client leads.";
    if (modalIcon) {
      modalIcon.className = "modal-header-icon gold-bg";
      modalIcon.innerHTML = `<i class="fa-solid fa-briefcase"></i>`;
    }
  }
}

// Task 1: Handle Free Client Registration Submission
function handleClientRegistrationSubmit(e) {
  e.preventDefault();

  const fullName = document.getElementById("clientFullName").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const password = document.getElementById("clientPassword").value;
  const phone = document.getElementById("clientPhone").value.trim();
  const preferredEvent = document.getElementById("clientPreferredEvent").value;

  // Create Client User Object
  const newClientUser = {
    id: "client-" + Date.now(),
    role: "client",
    name: fullName,
    email: email,
    phone: phone,
    preferredEvent: preferredEvent,
    createdAt: new Date().toISOString()
  };

  // Save in Local Database
  registeredUsers.push(newClientUser);
  localStorage.setItem("planmyevent_registered_users", JSON.stringify(registeredUsers));

  // Log in immediately
  currentUser = newClientUser;
  localStorage.setItem("planmyevent_active_user", JSON.stringify(currentUser));

  // Update UI & Close
  updateNavSessionUI();
  closeRegistrationModal();
  document.getElementById("clientRegistrationForm").reset();

  showToast(
    `Welcome, ${fullName}!`,
    `Your Free Client Account has been created successfully. You can now message planners and request quotes.`,
    "success"
  );
}

// Handle Event Planner Registration Submission
function updateRegistrationFeeSummary(tier) {
  const feeLabel = document.getElementById("regSummaryFee");
  const phoneHint = document.getElementById("phoneVisibilityHint");
  if (!feeLabel) return;

  if (tier === "Premium") {
    feeLabel.textContent = "Rs. 30,000 LKR";
    if (phoneHint) {
      phoneHint.textContent = "✓ Visible publicly on directory card and profile modal with direct 'Call Now' and WhatsApp buttons.";
      phoneHint.style.color = "var(--success)";
    }
  } else {
    feeLabel.textContent = "Rs. 15,000 LKR";
    if (phoneHint) {
      phoneHint.textContent = "Note: Standard tier hides direct phone number. Clients connect via customer quote inquiry forms.";
      phoneHint.style.color = "var(--text-muted)";
    }
  }
}

function handlePlannerRegistrationSubmit(e) {
  e.preventDefault();

  const tierRadio = document.querySelector('input[name="membershipTier"]:checked');
  const selectedTier = tierRadio ? tierRadio.value : "Standard";

  const businessName = document.getElementById("regBusinessName").value.trim();
  const contactPerson = document.getElementById("regContactPerson").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const category = document.getElementById("regCategory").value;
  const location = document.getElementById("regLocation").value.trim();
  const startingPrice = Number(document.getElementById("regStartingPrice").value);
  const experienceYears = Number(document.getElementById("regExperienceYears").value);
  const bio = document.getElementById("regBio").value.trim();

  const defaultMediaByCategory = {
    Weddings: {
      cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
      services: ["Poruwa Construction", "Floral Mandap", "Bridal Dressing Liaison", "Traditional Drummers"],
      packages: [
        { name: "Silver Package", price: startingPrice, desc: "Standard floral arch, basic Poruwa and coordination." },
        { name: "Gold Royale", price: startingPrice + 150000, desc: "Complete lotus Poruwa, 30 floral centerpieces, sound and lighting." }
      ],
      portfolio: [
        { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", caption: "Poruwa & Floral Mandap" },
        { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80", caption: "Beachside Reception Arch" },
        { url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80", caption: "Ballroom Table Accents" }
      ]
    },
    "Corporate Events": {
      cover: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
      services: ["Conference AV Setup", "LED Video Staging", "VIP Guest Protocol", "Exhibition Booths"],
      packages: [
        { name: "Executive Summit", price: startingPrice, desc: "Keynote staging, audio system and registration desk." }
      ],
      portfolio: [
        { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", caption: "Mainstage Summit Rig" },
        { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", caption: "Corporate Dinner" }
      ]
    },
    Birthdays: {
      cover: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
      services: ["Balloon Architecture", "Dessert Table Styling", "Photo Booth Setup", "Children's Entertainers"],
      packages: [
        { name: "Party Standard", price: startingPrice, desc: "Balloon arch, backdrop, cake table and photo booth." }
      ],
      portfolio: [
        { url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80", caption: "Milestone Setup" },
        { url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80", caption: "Balloon Art" }
      ]
    },
    Concerts: {
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
      services: ["Stage Rigging", "Line-Array Sound", "Truss Lighting", "Safety Barriers"],
      packages: [
        { name: "Live Stage Session", price: startingPrice, desc: "Complete concert audio rig and moving head lighting." }
      ],
      portfolio: [
        { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80", caption: "Festival Rig" },
        { url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80", caption: "Crowd Wave" }
      ]
    },
    "Private Parties": {
      cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&crop=faces,top&w=400&h=400&q=80",
      services: ["Colonial Courtyard Candlelight", "Table Art & Florals", "Live Acoustic Music", "Private Bar"],
      packages: [
        { name: "Private Banquet", price: startingPrice, desc: "Candlelight dining for 20 guests with acoustic background music." }
      ],
      portfolio: [
        { url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80", caption: "Colonial Table" },
        { url: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80", caption: "Dinner Service" }
      ]
    }
  };

  const media = defaultMediaByCategory[category] || defaultMediaByCategory["Weddings"];

  const newPlanner = {
    id: "pln-" + Date.now(),
    name: businessName,
    contactPerson,
    category,
    location,
    priceStarting,
    budgetTier: startingPrice > 300000 ? "luxury" : (startingPrice >= 100000 ? "moderate" : "budget"),
    tier: selectedTier,
    phone,
    email,
    avatar: media.avatar,
    cover: media.cover,
    experienceYears,
    bio,
    services: media.services,
    packages: media.packages,
    portfolio: media.portfolio,
    reviews: [
      {
        id: "rev-init-" + Date.now(),
        author: "Verified Sri Lankan Host",
        date: new Date().toISOString().split("T")[0],
        rating: 5,
        eventType: category,
        comment: `${businessName} has been newly registered on PlanMyEvent Sri Lanka. Outstanding portfolio and verified credentials!`
      }
    ]
  };

  eventPlanners.unshift(newPlanner);

  closeRegistrationModal();
  document.getElementById("plannerRegistrationForm").reset();

  appState.selectedTier = "all";
  appState.selectedCategory = "";
  syncTierButtons();
  renderCategories();
  renderPlannersGrid();

  const cardElement = document.getElementById(`card-${newPlanner.id}`);
  if (cardElement) {
    cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
    cardElement.style.boxShadow = "0 0 0 3px #10B981, 0 20px 30px rgba(16, 185, 129, 0.25)";
    setTimeout(() => {
      cardElement.style.boxShadow = "";
    }, 3500);
  }

  showToast(
    "Registration Successful!",
    `Welcome to PlanMyEvent Sri Lanka! ${businessName} has been registered as a ${selectedTier} Planner (${selectedTier === 'Premium' ? 'Rs. 30,000' : 'Rs. 15,000'} paid).`,
    "success"
  );
}

// =============================================================================
// 10. Login / Authentication Modal Logic
// =============================================================================
function openLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeLoginModal() {
  const modal = document.getElementById("loginModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function handleLoginFormSubmit(e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const foundUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (foundUser) {
    currentUser = foundUser;
  } else {
    // Default fallback demo sign-in
    currentUser = {
      id: "client-demo",
      role: "client",
      name: email.split("@")[0] || "Kasun",
      email: email
    };
  }

  localStorage.setItem("planmyevent_active_user", JSON.stringify(currentUser));
  updateNavSessionUI();
  closeLoginModal();
  document.getElementById("loginForm").reset();

  showToast(`Welcome back, ${currentUser.name}!`, "Signed into your PlanMyEvent Sri Lanka account.", "success");
}

function handleQuickDemoSignIn() {
  currentUser = {
    id: "client-demo-1",
    role: "client",
    name: "Kasun Wickramasinghe",
    email: "kasun.w@example.lk",
    phone: "+94 77 123 4567",
    preferredEvent: "Wedding & Poruwa"
  };

  localStorage.setItem("planmyevent_active_user", JSON.stringify(currentUser));
  updateNavSessionUI();
  closeLoginModal();

  showToast("Demo Client Active", "Logged in as Kasun Wickramasinghe (Free Client).", "success");
}

// =============================================================================
// 11. Portfolio Lightbox Viewer
// =============================================================================
function openLightbox(imageUrl, caption) {
  const lightbox = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImage");
  const cap = document.getElementById("lightboxCaption");
  if (!lightbox || !img) return;

  img.src = imageUrl;
  if (cap) cap.textContent = caption || "Portfolio Work";

  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}

// =============================================================================
// 12. Initialization & Event Listeners
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme & User Sessions
  initTheme();
  initUserSession();

  // 2. Initial Directory & Categories Render
  renderCategories();
  renderPlannersGrid();

  // 3. Mobile Nav Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("active"));
    });
  }

  // 4. Quick Nav Search
  const quickSearch = document.getElementById("quickNavSearch");
  if (quickSearch) {
    quickSearch.addEventListener("input", (e) => {
      appState.searchKeyword = e.target.value;
      applyFiltersAndRender();
    });
  }

  // 5. Hero Search Form
  const heroForm = document.getElementById("heroSearchForm");
  if (heroForm) {
    heroForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loc = document.getElementById("heroLocationInput").value;
      const cat = document.getElementById("heroCategorySelect").value;
      const bud = document.getElementById("heroBudgetSelect").value;

      appState.searchKeyword = loc;
      appState.selectedCategory = cat;
      appState.budgetFilter = bud;

      applyFiltersAndRender();
      document.getElementById("directorySection").scrollIntoView({ behavior: "smooth" });
    });
  }

  // 6. Tier Filter Buttons (All / Premium / Standard)
  const tierBtns = document.querySelectorAll(".tier-btn");
  tierBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      appState.selectedTier = btn.getAttribute("data-tier");
      syncTierButtons();
      applyFiltersAndRender();
    });
  });

  // 7. Sort By Dropdown
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      appState.sortBy = e.target.value;
      applyFiltersAndRender();
    });
  }

  // 8. Reset Filters Button
  const resetBtn = document.getElementById("resetFiltersBtn");
  const clearAllBtn = document.getElementById("clearAllFiltersBtn");
  const resetHandler = () => {
    appState.searchKeyword = "";
    appState.selectedCategory = "";
    appState.selectedTier = "all";
    appState.budgetFilter = "";
    appState.sortBy = "rating-desc";

    const navInput = document.getElementById("quickNavSearch");
    const heroLoc = document.getElementById("heroLocationInput");
    const heroCat = document.getElementById("heroCategorySelect");
    const heroBud = document.getElementById("heroBudgetSelect");
    const sortSel = document.getElementById("sortSelect");

    if (navInput) navInput.value = "";
    if (heroLoc) heroLoc.value = "";
    if (heroCat) heroCat.value = "";
    if (heroBud) heroBud.value = "";
    if (sortSel) sortSel.value = "rating-desc";

    syncTierButtons();
    applyFiltersAndRender();
    showToast("Filters Cleared", "Displaying all verified Sri Lankan event planners.", "info");
  };

  if (resetBtn) resetBtn.addEventListener("click", resetHandler);
  if (clearAllBtn) clearAllBtn.addEventListener("click", resetHandler);

  // 9. Task 1: Registration Role Tabs Listeners
  const tabRoleClient = document.getElementById("tabRoleClient");
  const tabRolePlanner = document.getElementById("tabRolePlanner");
  if (tabRoleClient) {
    tabRoleClient.addEventListener("click", () => setRegistrationRole("client"));
  }
  if (tabRolePlanner) {
    tabRolePlanner.addEventListener("click", () => setRegistrationRole("planner"));
  }

  // 10. Registration Forms Submissions
  const clientRegForm = document.getElementById("clientRegistrationForm");
  if (clientRegForm) {
    clientRegForm.addEventListener("submit", handleClientRegistrationSubmit);
  }

  const plannerRegForm = document.getElementById("plannerRegistrationForm");
  if (plannerRegForm) {
    plannerRegForm.addEventListener("submit", handlePlannerRegistrationSubmit);
  }

  // 11. Modal Close Buttons
  const closeProfileBtn = document.getElementById("closeProfileModalBtn");
  if (closeProfileBtn) closeProfileBtn.addEventListener("click", closeProfileModal);

  const closeInquiryBtn = document.getElementById("closeInquiryModalBtn");
  const cancelInquiryBtn = document.getElementById("cancelInquiryBtn");
  if (closeInquiryBtn) closeInquiryBtn.addEventListener("click", closeInquiryModal);
  if (cancelInquiryBtn) cancelInquiryBtn.addEventListener("click", closeInquiryModal);

  const closeJoinBtn = document.getElementById("closeJoinModalBtn");
  const cancelJoinBtn = document.getElementById("cancelJoinBtn");
  const cancelClientJoinBtn = document.getElementById("cancelClientJoinBtn");
  if (closeJoinBtn) closeJoinBtn.addEventListener("click", closeRegistrationModal);
  if (cancelJoinBtn) cancelJoinBtn.addEventListener("click", closeRegistrationModal);
  if (cancelClientJoinBtn) cancelClientJoinBtn.addEventListener("click", closeRegistrationModal);

  const closeLightboxBtn = document.getElementById("closeLightboxBtn");
  if (closeLightboxBtn) closeLightboxBtn.addEventListener("click", closeLightbox);

  const closeLoginBtn = document.getElementById("closeLoginModalBtn");
  const cancelLoginBtn = document.getElementById("cancelLoginBtn");
  if (closeLoginBtn) closeLoginBtn.addEventListener("click", closeLoginModal);
  if (cancelLoginBtn) cancelLoginBtn.addEventListener("click", closeLoginModal);

  // 12. Login Form & Demo Sign-In
  const loginForm = document.getElementById("loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLoginFormSubmit);

  const quickDemoBtn = document.getElementById("quickDemoSignInBtn");
  if (quickDemoBtn) quickDemoBtn.addEventListener("click", handleQuickDemoSignIn);

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", logoutUser);

  // 13. Registration / Login Triggers
  const openRegisterModalBtn = document.getElementById("openRegisterModalBtn");
  if (openRegisterModalBtn) {
    openRegisterModalBtn.addEventListener("click", () => openRegistrationModal("client"));
  }

  const openLoginModalBtn = document.getElementById("openLoginModalBtn");
  if (openLoginModalBtn) {
    openLoginModalBtn.addEventListener("click", openLoginModal);
  }

  const ctaRegisterClientBtn = document.getElementById("ctaRegisterClientBtn");
  if (ctaRegisterClientBtn) {
    ctaRegisterClientBtn.addEventListener("click", () => openRegistrationModal("client"));
  }

  const ctaJoinPlannerBtn = document.getElementById("ctaJoinPlannerBtn");
  if (ctaJoinPlannerBtn) {
    ctaJoinPlannerBtn.addEventListener("click", () => openRegistrationModal("planner"));
  }

  const footerClientRegisterLink = document.getElementById("footerClientRegisterLink");
  if (footerClientRegisterLink) {
    footerClientRegisterLink.addEventListener("click", (e) => {
      e.preventDefault();
      openRegistrationModal("client");
    });
  }

  const footerJoinStd = document.getElementById("footerJoinStandard");
  if (footerJoinStd) {
    footerJoinStd.addEventListener("click", (e) => {
      e.preventDefault();
      openRegistrationModal("planner", "Standard");
    });
  }

  const footerJoinPrem = document.getElementById("footerJoinPremium");
  if (footerJoinPrem) {
    footerJoinPrem.addEventListener("click", (e) => {
      e.preventDefault();
      openRegistrationModal("planner", "Premium");
    });
  }

  const pricingTierBtns = document.querySelectorAll(".select-tier-btn");
  pricingTierBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tier = btn.getAttribute("data-tier-select") || "Standard";
      openRegistrationModal("planner", tier);
    });
  });

  const announcementCta = document.getElementById("announcementCta");
  if (announcementCta) {
    announcementCta.addEventListener("click", (e) => {
      e.preventDefault();
      openRegistrationModal("client");
    });
  }

  // 14. Planner Registration Tier Radio Change
  const tierRadios = document.querySelectorAll('input[name="membershipTier"]');
  tierRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      updateRegistrationFeeSummary(e.target.value);
    });
  });

  // 15. Inquiry Form Submit
  const inquiryForm = document.getElementById("customerInquiryForm");
  if (inquiryForm) inquiryForm.addEventListener("submit", handleInquiryFormSubmit);

  // 16. Window click & ESC to close modals
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      closeProfileModal();
      closeInquiryModal();
      closeRegistrationModal();
      closeLightbox();
      closeLoginModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProfileModal();
      closeInquiryModal();
      closeRegistrationModal();
      closeLightbox();
      closeLoginModal();
    }
  });

  // 17. Footer Category & Location Quick Filters
  document.querySelectorAll("[data-footer-category]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-footer-category");
      setCategoryFilter(cat);
    });
  });

  document.querySelectorAll("[data-footer-location]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const loc = link.getAttribute("data-footer-location");
      appState.searchKeyword = loc;
      const heroLoc = document.getElementById("heroLocationInput");
      if (heroLoc) heroLoc.value = loc;
      applyFiltersAndRender();
      document.getElementById("directorySection").scrollIntoView({ behavior: "smooth" });
      showToast("Location Filtered", `Showing event planners in ${loc}`, "info");
    });
  });
});
