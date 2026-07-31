import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SimpleLeadForm } from "./components/SimpleLeadForm";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { AboutUs } from "./components/AboutUs";
import { ServicesSection } from "./components/ServicesSection";
import { FAQSection } from "./components/FAQSection";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { AdminDrawer } from "./components/AdminDrawer";
import { BUSINESS_INFO } from "./data/detailingData";
import { Phone, Mail, Facebook, MessageSquare, ShieldCheck, Heart } from "lucide-react";

export default function App() {
  const [adminOpen, setAdminOpen] = useState<boolean>(false);

  const handleSelectPackage = (pkgId: string) => {
    const quoteEl = document.getElementById("quote-form");
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-red-600 selection:text-white pb-16 sm:pb-0">
      {/* Navigation Header */}
      <Navbar onOpenAdmin={() => setAdminOpen(true)} />

      {/* Main App Layout per User Specification */}
      <main>
        {/* 1. Ultra clean hero section, with funny wording */}
        <Hero />

        {/* 2. Simple lead gen form (Name, Phone, Car Type, etc.) */}
        <SimpleLeadForm />

        {/* 3. Recreated Before/After image gallery with uploaded photos */}
        <BeforeAfterSlider />

        {/* Full Detailing Packages & Service Rates */}
        <ServicesSection onSelectPackage={handleSelectPackage} />

        {/* 4. About Us section */}
        <AboutUs />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 5. Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-black flex items-center justify-center text-base">
                  C
                </div>
                <span className="font-extrabold text-white text-base">
                  Cope's <span className="text-red-500">Auto Detail</span>
                </span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Mobile detailing anywhere in Muncie, IN & Delaware County. We bring onboard power & water to your doorstep. Over 10 years of experience.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm mb-3">Quick Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#quote-form" className="hover:text-white transition-colors">Instant Free Quote</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Before & After Gallery</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Cope's Detail</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm mb-3">Direct Contact</h4>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white font-semibold">
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white truncate">
                    {BUSINESS_INFO.email}
                  </a>
                </li>
                <li className="text-zinc-400 text-[11px] pt-1">
                  Muncie, IN 47303 • Mobile Service Radius 35 Miles
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm mb-3">Social Profiles</h4>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 text-blue-400 hover:text-white hover:bg-blue-600 transition-all border border-zinc-800"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={BUSINESS_INFO.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 text-emerald-400 hover:text-white hover:bg-emerald-600 transition-all border border-zinc-800"
                  aria-label="Messenger"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-zinc-500">
            <p>© {new Date().getFullYear()} Cope's Auto Detail. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Crafted for high conversion mobile leads in Muncie, IN</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Mobile Bottom Action Bar */}
      <MobileStickyBar />

      {/* Admin Lead Management Modal */}
      <AdminDrawer isOpen={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  );
}
