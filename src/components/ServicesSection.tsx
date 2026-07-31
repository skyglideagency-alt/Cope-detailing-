import React, { useState } from "react";
import { SERVICE_PACKAGES, ADD_ON_SERVICES } from "../data/detailingData";
import { VehicleCategory } from "../types";
import {
  Sparkles,
  Armchair,
  ShieldCheck,
  Crown,
  CheckCircle2,
  Clock,
  ArrowRight,
  Car,
  Truck,
  Bus,
  Anchor,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesSectionProps {
  onSelectPackage?: (pkgId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>("Sedan / Coupe");

  const categoryIcons: Record<VehicleCategory, React.ReactNode> = {
    "Sedan / Coupe": <Car className="w-4 h-4" />,
    "Truck / SUV": <Truck className="w-4 h-4" />,
    "Van / Large SUV": <Bus className="w-4 h-4" />,
    "Boat / Aircraft / Fleet": <Anchor className="w-4 h-4" />,
  };

  const packageIcons: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-red-500" />,
    Armchair: <Armchair className="w-6 h-6 text-red-500" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-500" />,
    Crown: <Crown className="w-6 h-6 text-amber-400" />,
  };

  const handleBookClick = (pkgId: string) => {
    if (onSelectPackage) {
      onSelectPackage(pkgId);
    }
    const quoteElem = document.getElementById("quote-form");
    if (quoteElem) {
      quoteElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 bg-zinc-900 text-white relative border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Mobile Detailing Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Transparent Mobile Pricing & Service Packages
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            No hidden fees. Select your vehicle class below to view exact package pricing with complete interior and exterior detailing care.
          </p>
        </motion.div>

        {/* Vehicle Class Selector Tabs with Motion Pill */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {(["Sedan / Coupe", "Truck / SUV", "Van / Large SUV", "Boat / Aircraft / Fleet"] as VehicleCategory[]).map(
            (cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all z-10 ${
                    isSelected
                      ? "text-white"
                      : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-red-600 rounded-xl shadow-lg shadow-red-600/30 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {categoryIcons[cat]}
                  <span>{cat}</span>
                </button>
              );
            }
          )}
        </div>

        {/* Package Grid - Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SERVICE_PACKAGES.map((pkg, index) => {
            const price = pkg.basePrices[selectedCategory];
            const isPopular = pkg.popular;
            const keyFeatures = pkg.features.slice(0, 3);

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-zinc-950 rounded-xl border p-4 flex flex-col justify-between transition-colors relative group ${
                  isPopular
                    ? "border-red-500/80 shadow-lg ring-1 ring-red-500/30 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950"
                    : "border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                {pkg.badge && (
                  <motion.div 
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow"
                  >
                    {pkg.badge}
                  </motion.div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2.5 pt-1">
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800"
                    >
                      {packageIcons[pkg.iconName] || <Sparkles className="w-4 h-4 text-red-500" />}
                    </motion.div>
                    <div className="text-right">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${pkg.id}-${price}`}
                          initial={{ opacity: 0, y: -8, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.9 }}
                          transition={{ duration: 0.25 }}
                          className="text-xl font-black text-emerald-400 block"
                        >
                          ${price}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-[10px] text-zinc-500 block -mt-1">est.</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{pkg.name}</h3>

                  <div className="flex items-center gap-1 text-[11px] text-amber-400 font-medium mb-3">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{pkg.estimatedDuration}</span>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-zinc-300 mb-4">
                    {keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleBookClick(pkg.id)}
                  className={`w-full py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    isPopular
                      ? "bg-red-600 hover:bg-red-700 text-white shadow-md"
                      : "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800"
                  }`}
                >
                  <span>Book Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Add-on Services Spotlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          <h3 className="text-xl font-bold text-white mb-2 text-center sm:text-left">
            Popular Add-On Enhancements
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 text-center sm:text-left">
            Add specialized treatments during your online booking or on-site with Cope.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ON_SERVICES.map((addon, idx) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * idx }}
                whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.4)" }}
                className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800/80 flex items-start justify-between gap-3 transition-colors"
              >
                <div>
                  <h4 className="font-bold text-white text-sm">{addon.name}</h4>
                  <p className="text-xs text-zinc-400 mt-1">{addon.description}</p>
                </div>
                <span className="text-sm font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-lg shrink-0">
                  +${addon.price}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
