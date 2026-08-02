import React from "react";
import { BEFORE_AFTER_GALLERY } from "../data/detailingData";
import { CheckCircle2, Sparkles, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const BeforeAfterSlider: React.FC = () => {
  return (
    <section id="gallery" className="py-14 sm:py-20 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-900">
      {/* Background Subtle Red & Amber Accents */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Real Before & After Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Before & After Transformations
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Real vehicle detailing work performed by Cope's Auto Detail in Muncie. See the instant difference below.
          </p>
        </motion.div>

        {/* 5 Before & After Photo Comparisons Stack */}
        <div className="space-y-12">
          {BEFORE_AFTER_GALLERY.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ borderColor: "rgba(239, 68, 68, 0.4)", y: -4 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 sm:p-7 shadow-2xl transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30">
                      Photo #{index + 1}
                    </span>
                    <span className="text-xs text-zinc-400 font-bold">{item.vehicle} • {item.highlightTag}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{item.title}</h3>
                </div>
              </div>

              {/* Side-by-Side BEFORE & AFTER Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* BEFORE Image */}
                <div className="space-y-2">
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 h-64 sm:h-80 md:h-96 group shadow-inner"
                  >
                    <img
                      src={item.beforeImg}
                      alt={`${item.title} Before`}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (item.beforeImg && typeof item.beforeImg === 'string' && !target.src.includes('/images/')) {
                          const filename = item.beforeImg.split('/').pop()?.split('?')[0];
                          if (filename) target.src = `/images/${filename}`;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 left-3 bg-zinc-950/90 text-amber-400 border border-amber-500/40 text-xs font-black px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                    >
                      <AlertCircle className="w-4 h-4 text-amber-400" /> BEFORE
                    </motion.div>
                  </motion.div>
                </div>

                {/* AFTER Image */}
                <div className="space-y-2">
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 h-64 sm:h-80 md:h-96 group shadow-inner"
                  >
                    <img
                      src={item.afterImg}
                      alt={`${item.title} After`}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (item.afterImg && typeof item.afterImg === 'string' && !target.src.includes('/images/')) {
                          const filename = item.afterImg.split('/').pop()?.split('?')[0];
                          if (filename) target.src = `/images/${filename}`;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 right-3 bg-emerald-600/90 text-white text-xs font-black px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                    >
                      <CheckCircle2 className="w-4 h-4" /> AFTER
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Result Summary */}
              <motion.div 
                whileHover={{ backgroundColor: "rgba(9, 9, 11, 0.95)" }}
                className="mt-4 p-4 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 flex items-start gap-3 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white font-bold block mb-0.5">Detailing Result:</strong>
                  {item.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center bg-gradient-to-r from-red-950/40 via-zinc-900 to-red-950/40 border border-red-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
            Want Your Car Looking Like This?
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto mb-5">
            We bring our mobile detailing rig right to your driveway in Muncie and surrounding areas.
          </p>
          <motion.a
            href="#quote-form"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm shadow-xl shadow-red-600/30 transition-all"
          >
            <span>Get Your Instant Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
