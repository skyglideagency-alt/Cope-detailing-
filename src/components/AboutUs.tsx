import React from "react";
import { BUSINESS_INFO } from "../data/detailingData";
import { ShieldCheck, Award, MapPin, Wrench, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import copesAboutHeroImg from "../assets/images/copes_about_hero_1785476871132.jpg";

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900 text-white relative overflow-hidden border-b border-zinc-800">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <motion.img
                src={copesAboutHeroImg}
                alt="Cope's Mobile Detailing Professional Rig"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 border border-zinc-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-red-600/30 shrink-0"
                  >
                    10+
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Years Serving Muncie & Delaware County</h4>
                    <p className="text-xs text-zinc-400">100% Mobile Service • Onboard Water & Power</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" /> About Cope's Auto Detail
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Local, Reliable Mobile Detailing. <br />
              <span className="text-red-500">We Bring The Shop To Your Driveway.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              At Cope's Auto Detail, we believe you shouldn't have to waste your Saturday sitting in a cramped waiting room or driving across town. Founded right here in Muncie, Indiana, we built a fully self-contained mobile detailing unit equipped with our own pressure washers, spot-free water tanks, steam extraction units, and commercial power.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Whether your daily driver accumulated years of kid snacks, pet hair, and coffee spills, or your classic muscle car needs paint correction and ceramic protection, we treat every vehicle with uncompromising craft and attention to detail.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div 
                whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.4)" }}
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3 transition-all"
              >
                <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Self-Contained Rig</h4>
                  <p className="text-xs text-zinc-400 mt-1">We supply all water and power needed on site.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3, borderColor: "rgba(16, 185, 129, 0.4)" }}
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-3 transition-all"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Price Beat Guarantee</h4>
                  <p className="text-xs text-zinc-400 mt-1">Top tier results that beat local shop prices.</p>
                </div>
              </motion.div>
            </div>

            {/* Quote Seal */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-zinc-950 border border-red-500/30 flex items-center justify-between gap-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs text-zinc-200 font-semibold">"Your satisfaction is 100% guaranteed. You don't pay until you inspect your clean vehicle!"</p>
                  <span className="text-[11px] text-red-400 font-bold block mt-0.5">— Cope, Owner & Head Detailer</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
