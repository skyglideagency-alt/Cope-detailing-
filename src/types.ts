export type VehicleCategory = "Sedan / Coupe" | "Truck / SUV" | "Van / Large SUV" | "Boat / Aircraft / Fleet";

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  basePrices: Record<VehicleCategory, number>;
  estimatedDuration: string;
  features: string[];
  iconName: string;
}

export interface AddOnService {
  id: string;
  name: string;
  description: string;
  price: number;
  iconName: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: "Interior" | "Exterior" | "Pet Hair" | "Ceramic Polish" | "Trunk Cargo" | "Console" | "Steering Wheel" | "Dashboard";
  vehicle: string;
  beforeImg: string;
  afterImg: string;
  description: string;
  highlightTag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Mobile Service" | "Booking & Pricing" | "Paint & Ceramic" | "Interior Care";
}

export interface BookingFormData {
  vehicleCategory: VehicleCategory;
  vehicleMakeModel: string;
  vehicleYear: string;
  packageId: string;
  selectedAddOnIds: string[];
  mobileAddress: string;
  cityStateZip: string;
  bookingDate: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  specialNotes: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  vehicleInfo: string;
  message: string;
}
