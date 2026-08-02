import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/detailingData";
import { Phone, Sparkles, Star, CheckCircle2, ArrowDown, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const heroCarWashImg = "/images/hero_car_wash_bright.jpg";

const FUNNY_HEADINGS = [
  {
    main: "We Clean Up The Crimes Your Kids, Dogs & Fast Food Committed In Your Car.",
    sub: "Deep interior steam restoration, pet hair extraction & mirror ceramic shine — brought directly to your driveway in Muncie!",
  },
  {
    main: "Your Car Isn't Dark Grey. That's Just 3 Years Of Muncie Dirt.",
    sub: "Don't sell it yet! Over 10 years of mobile detailing experience turning rolling trash cans back into dealer-showroom perfection.",
  },
  {
    main: "So Clean You Can Eat Off The Dashboard. (Please Don't, We Just Cleaned It.)",
    sub: "We bring our own power & spot-free water unit to your home, workplace, or apartment. Zero hassle, maximum shine.",
  },
];

export const Hero: React.FC = () => {
  const [headingIndex, setHeadingIndex] = useState<number>(0);

  const currentHeading = FUNNY_HEADINGS[headingIndex];

  return (
    <section className="relative bg-zinc-950 text-white min-h-[580px] sm:min-h-[620px] flex items-center overflow-hidden py-14 sm:py-20 border-b border-zinc-800/60">
      {/* Background Hero Image with Vibrant Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroCarWashImg}
          alt="Cope's Auto Detail Luxury Car Wash and Detailing"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('unsplash')) {
              target.src = 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=80';
            }
          }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.65 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Top Funny Tag Badge Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-wide mb-6 backdrop-blur-md shadow-lg shadow-red-950/50"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <Zap className="w-3.5 h-3.5 fill-red-400 text-red-400" />
          </motion.div>
          <span>Mobile Detailing Anywhere • Muncie & Delaware County</span>
        </motion.div>

        {/* Funny Main Heading with AnimatePresence */}
        <div className="max-w-4xl mx-auto space-y-4 min-h-[220px] sm:min-h-[200px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={headingIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
                {currentHeading.main.split(".").map((part, idx) => (
                  <span key={idx} className="block">
                    {idx === 0 ? (
                      <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
                        {part}
                      </span>
                    ) : (
                      <span className="bg-gradient-to-r from-red-500 via-amber-400 to-red-400 bg-clip-text text-transparent">
                        {part}
                      </span>
                    )}
                  </span>
                ))}
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed pt-1">
                {currentHeading.sub}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Funny Switcher Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.06, backgroundColor: "rgba(24, 24, 27, 0.95)", borderColor: "rgba(245, 158, 11, 0.6)" }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setHeadingIndex((prev) => (prev + 1) % FUNNY_HEADINGS.length)}
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-amber-500/30 transition-all cursor-pointer shadow-md"
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </motion.div>
              <span>Click for another funny tagline 😄</span>
            </motion.button>
          </div>
        </div>

        {/* Main Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-lg mx-auto"
        >
          <motion.a
            href="#quote-form"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 20px 25px -5px rgba(220, 38, 38, 0.3)",
                "0 25px 35px -5px rgba(220, 38, 38, 0.5)",
                "0 20px 25px -5px rgba(220, 38, 38, 0.3)",
              ]
            }}
            transition={{ boxShadow: { repeat: Infinity, duration: 2.5 } }}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold px-8 py-4 rounded-2xl text-base shadow-xl flex items-center justify-center gap-2.5 transition-all"
          >
            <span>Get Free Instant Quote</span>
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.a>

          <motion.a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            whileHover={{ scale: 1.05, y: -4, borderColor: "rgba(239, 68, 68, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold px-6 py-4 rounded-2xl text-sm border border-zinc-700 flex items-center justify-center gap-2.5 transition-all shadow-lg"
          >
            <Phone className="w-4 h-4 text-red-500" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </motion.a>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-zinc-300"
        >
          {[
            { icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />, text: "Onboard Power & Water" },
            { icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />, text: "4.9 Star Rating (84+ Reviews)" },
            { icon: <Zap className="w-4 h-4 text-blue-400 shrink-0" />, text: "10+ Yrs Experience" },
            { icon: <Sparkles className="w-4 h-4 text-red-400 shrink-0" />, text: "We Beat Competitor Prices" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
              whileHover={{ y: -4, backgroundColor: "rgba(24, 24, 27, 0.9)", borderColor: "rgba(239, 68, 68, 0.4)" }}
              className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 flex items-center justify-center gap-2 transition-all shadow-md cursor-default"
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
