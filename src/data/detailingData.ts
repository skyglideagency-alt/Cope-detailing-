import { ServicePackage, AddOnService, BeforeAfterItem, Testimonial, FAQItem, VehicleCategory } from "../types";

export const BUSINESS_INFO = {
  name: "Cope's Auto Detail",
  tagline: "Mobile Detailing Anywhere — We Come To You!",
  experienceYears: 10,
  phone: "(765) 634-7056",
  phoneRaw: "17656347056",
  email: "cope765@gmail.com",
  facebookUrl: "https://www.facebook.com/copesautodetail",
  messengerUrl: "https://m.me/copesautodetail",
  location: "Mobile Detailing Anywhere, Muncie, IN 47303",
  primaryCity: "Muncie, IN",
  serviceRadius: "35-mile radius including Muncie, Yorktown, Anderson, New Castle, Marion & Hartford City",
  guarantee: "We Beat The Competition's Prices! 100% Mobile Convenience & Satisfaction Guaranteed.",
  hours: "Monday - Saturday: 8:00 AM - 7:00 PM | Sunday: By Appointment",
  rating: 4.9,
  reviewsCount: 84,
  stats: [
    { label: "Vehicles Detailed", value: "1,250+" },
    { label: "Years Experience", value: "10+" },
    { label: "Satisfaction", value: "100%" },
    { label: "Mobile Service", value: "Anywhere" },
  ]
};

export const VEHICLE_CATEGORIES: { id: VehicleCategory; label: string; description: string; icon: string }[] = [
  { id: "Sedan / Coupe", label: "Sedan / Coupe", description: "2-Door, 4-Door, Sports Cars, Hatchbacks", icon: "Car" },
  { id: "Truck / SUV", label: "Midsize SUV / Truck", description: "Crossovers, Standard Pickup Trucks, 2-Row SUVs", icon: "Truck" },
  { id: "Van / Large SUV", label: "Large SUV / Van", description: "3-Row SUVs, Minivans, Lifted Trucks, Duallys", icon: "Bus" },
  { id: "Boat / Aircraft / Fleet", label: "Boats & Specialty", description: "Boats, Aircrafts, RVs, Commercial Fleets", icon: "Anchor" },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "express-refresh",
    name: "Express Mobile Wash & Polish",
    tagline: "Quick exterior gloss boost & light interior maintenance",
    basePrices: {
      "Sedan / Coupe": 89,
      "Truck / SUV": 109,
      "Van / Large SUV": 129,
      "Boat / Aircraft / Fleet": 179,
    },
    estimatedDuration: "1.5 - 2 Hours",
    iconName: "Sparkles",
    features: [
      "Hand Foam Cannon Wash & Microfiber Scratch-Free Dry",
      "Wheel, Barrel & Tire Deep Cleaning + High Gloss Shine",
      "Full Interior Carpet & Floor Mat Express Vacuuming",
      "Dashboard, Steering Wheel & Center Console Wipe Down",
      "Streak-Free Interior & Exterior Window Cleaning",
      "Door Jambs Cleaned & Air Fragrance Treatment",
    ],
  },
  {
    id: "deep-interior-restoration",
    name: "Full Deep Interior Restoration",
    tagline: "Total deep clean, steam extraction, pet hair & stain removal",
    popular: true,
    badge: "Most Popular Interior",
    basePrices: {
      "Sedan / Coupe": 139,
      "Truck / SUV": 159,
      "Van / Large SUV": 189,
      "Boat / Aircraft / Fleet": 249,
    },
    estimatedDuration: "2.5 - 3.5 Hours",
    iconName: "Armchair",
    features: [
      "Deep Steam Cleaning & Hot Water Carpet Extraction",
      "Complete Pet Hair Removal & Embedded Debris Extraction",
      "Dashboard, Vents, Buttons & Center Console Sanitation",
      "Leather Seat Deep Scrub, Cleaning & UV Conditioning",
      "Fabric Seat Stain Treatment & Deep Foam Shampoo",
      "Trunk & Cargo Area Deep Cleaning & Vacuuming",
      "Headliner Spot Cleaning & Antibacterial Odor Sanitizer",
      "Streak-Free Interior Glass & Mirror Polishing",
    ],
  },
  {
    id: "exterior-precision-polish",
    name: "Exterior Precision Detail & Sealant",
    tagline: "Paint decontamination, iron removal & 6-month slick ceramic sealant",
    basePrices: {
      "Sedan / Coupe": 149,
      "Truck / SUV": 169,
      "Van / Large SUV": 199,
      "Boat / Aircraft / Fleet": 279,
    },
    estimatedDuration: "2.5 - 3 Hours",
    iconName: "ShieldCheck",
    features: [
      "pH-Neutral Snow Foam Bath & Two-Bucket Scratchless Wash",
      "Iron Particle Decontamination & Clay Bar Paint Treatment",
      "Single-Stage Gloss Enhancement Machine Buff",
      "Slick Hydrophobic Ceramic Sealant Application (6 Mo Protection)",
      "Deep Wheel Well & Alloy Rim Brake Dust Stripping",
      "Tire Dressing & Exterior Plastic Trim UV Restoration",
      "Crystal Clear Hydrophobic Windshield & Glass Coating",
    ],
  },
  {
    id: "ultimate-showroom-ceramic",
    name: "Ultimate Showroom Ceramic Detail",
    tagline: "The complete interior & exterior transformation package",
    badge: "Best Value Transformation",
    basePrices: {
      "Sedan / Coupe": 259,
      "Truck / SUV": 289,
      "Van / Large SUV": 329,
      "Boat / Aircraft / Fleet": 449,
    },
    estimatedDuration: "4 - 5 Hours",
    iconName: "Crown",
    features: [
      "INCLUDES Full Deep Interior Restoration Package",
      "INCLUDES Exterior Precision Detail & Decontamination",
      "Paint Correction (Removes Light Swirls & Scratches)",
      "12-Month Pro Ceramic Coating Application (High Gloss & Beading)",
      "Engine Bay Degreasing, Steam Cleaning & Dress Treatment",
      "Headlight Clarity Restoration & UV Protective Coat",
      "Complete Leather & Fabric Stain Shield Treatment",
      "Complimentary Floor Mat Paper Tags & Air Refresh",
    ],
  },
];

export const ADD_ON_SERVICES: AddOnService[] = [
  {
    id: "pet-hair-extreme",
    name: "Extreme Pet Hair Extraction",
    description: "Specialized rubber brushes & high-suction tools for stubborn pet hair",
    price: 30,
    iconName: "Dog",
  },
  {
    id: "headlight-restoration",
    name: "Headlight Oxidation Restoration",
    description: "Wet sanding, compound polishing & UV ceramic clear coat seal",
    price: 45,
    iconName: "SunMedium",
  },
  {
    id: "engine-bay-detail",
    name: "Engine Bay Deep Clean & Dressing",
    description: "Steam degreasing, safe electrical wrap & matte UV trim dress",
    price: 40,
    iconName: "Gauge",
  },
  {
    id: "ozone-odor-elimination",
    name: "Ozone Machine Odor Elimination",
    description: "Kills bacteria, smoke, mold & mildew trapped in HVAC ducts",
    price: 35,
    iconName: "Wind",
  },
  {
    id: "ceramic-glass-shield",
    name: "Ceramic Glass Rain Shield",
    description: "Extreme rain repellent treatment for all windows & windshield",
    price: 25,
    iconName: "Droplets",
  },
];

// Real Before and After Transformations based on uploaded FB vehicle photos
export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [
  {
    id: "suv-trunk-carpet",
    title: "SUV Cargo & Interior Deep Extraction",
    category: "Trunk Cargo",
    vehicle: "Client Vehicle",
    beforeImg: "/images/FB_IMG_1785402137231.jpg",
    afterImg: "/images/FB_IMG_1785402140428.jpg",
    description: "Deep pet hair, sand, and ground-in dirt extracted from carpet weave using commercial high-suction vacuum and specialized detailing tools.",
    highlightTag: "Deep Interior Cleaning",
  },
  {
    id: "center-console-cupholder",
    title: "Console, Seats & Interior Detail Transformation",
    category: "Console",
    vehicle: "Client Vehicle",
    beforeImg: "/images/FB_IMG_1785402145286.jpg",
    afterImg: "/images/FB_IMG_1785402148281.jpg",
    description: "Spills, crumbs, and embedded grime stripped from controls, cup holders, and seats leaving UV-protected, clean trim.",
    highlightTag: "Steam Sanitation",
  },
  {
    id: "steering-wheel-dash",
    title: "Full Paint Correction & Gloss Paint Reflection",
    category: "Exterior",
    vehicle: "Client Vehicle",
    beforeImg: "/images/FB_IMG_1785402151560.jpg",
    afterImg: "/images/FB_IMG_1785402154538.jpg",
    description: "Hand wash, clay bar treatment, and ceramic gloss sealant applied to deliver a deep mirror reflection and hydro-phobic finish.",
    highlightTag: "High Gloss Finish",
  },
  {
    id: "truck-radio-dashboard",
    title: "Dashboard & Driver Area Deep Clean",
    category: "Dashboard",
    vehicle: "Client Vehicle",
    beforeImg: "/images/FB_IMG_1785402118361.jpg",
    afterImg: "/images/FB_IMG_1785402121191.jpg",
    description: "Thick dust and grime removed from vents, buttons, and climate controls, restoring a clean factory matte look.",
    highlightTag: "Dash Restoration",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Tyler R.",
    location: "Muncie, IN",
    vehicle: "2021 Ford F-150",
    rating: 5,
    comment: "Cope's Auto Detail did an insane job on my F-150 interior! My truck had sand and dog hair everywhere from hunting season. He came right to my driveway and made it look brand new. Best detailing in Muncie by far!",
    date: "July 2026",
    verified: true,
  },
  {
    id: "2",
    name: "Jessica K.",
    location: "Yorktown, IN",
    vehicle: "Nissan Rogue SUV",
    rating: 5,
    comment: "Super convenient mobile service! I was working from home and Cope detailed my SUV right outside. The interior steam cleaning got rid of old coffee stains and kids juice spills. Highly recommend!",
    date: "June 2026",
    verified: true,
  },
  {
    id: "3",
    name: "Greg M.",
    location: "Anderson, IN",
    vehicle: "Dodge Challenger",
    rating: 5,
    comment: "10+ years of experience really shows. He did an exterior ceramic polish on my Challenger and the mirror shine is unbelievable. Water slides right off. Plus he beat every quote I got in town!",
    date: "May 2026",
    verified: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need to provide water or power at my location?",
    answer: "No! Cope's Auto Detail brings a fully self-contained mobile unit equipped with our own onboard water tank, pressure washer, generator power, and professional extraction equipment. We can detail your car in your driveway, apartment parking spot, or workplace!",
    category: "Mobile Service",
  },
  {
    question: "How long does a full mobile detail take?",
    answer: "An Express Wash & Polish takes about 1.5 to 2 hours. Full Deep Interior Restorations or Showroom Ceramic Details take 3 to 5 hours depending on vehicle size and soil condition.",
    category: "Booking & Pricing",
  },
  {
    question: "What makes Cope's Auto Detail different from local car washes?",
    answer: "Car washes scratch your paint with dirty brushes and miss the deep interior crevices. Over 10 years of professional experience means we use 100% scratch-free microfiber hand methods, deep hot water steam extraction, and top-tier ceramic sealants tailored for your vehicle.",
    category: "Interior Care",
  },
  {
    question: "What happens if it rains on my scheduled booking day?",
    answer: "If you have a garage or covered driveway space, we can detail rain or shine! If outdoors, we will contact you in advance to reschedule to the next available sunny slot without any penalty.",
    category: "Booking & Pricing",
  },
  {
    question: "How do payments work?",
    answer: "You pay nothing upfront! Payment is due only after the job is completed and you have inspected your vehicle and are 100% satisfied. We accept Cash, Venmo, Zelle, Credit/Debit Cards, and Apple Pay.",
    category: "Booking & Pricing",
  },
];

export const SERVICE_AREAS = [
  "Muncie (47303, 47304, 47302)",
  "Yorktown, IN",
  "Anderson, IN",
  "New Castle, IN",
  "Albany, IN",
  "Marion, IN",
  "Hartford City, IN",
  "Pendleton, IN",
  "Noblesville & Fishers (Extended area)",
];
