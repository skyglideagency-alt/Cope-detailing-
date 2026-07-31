import React from "react";
import { BUSINESS_INFO } from "../data/detailingData";
import { Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const MobileStickyBar: React.FC = () => {
  return (
    <motion.aside
      aria-label="Mobile Bottom Actions"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
      className="fixed bottom-0 inset-x-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 p-2.5 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <motion.a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          whileTap={{ scale: 0.93 }}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-red-600 text-white rounded-xl text-xs font-extrabold shadow-md shadow-red-600/20"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </motion.a>

        <motion.a
          href="#quote-form"
          whileTap={{ scale: 0.93 }}
          animate={{
            boxShadow: [
              "0 4px 10px rgba(245, 158, 11, 0.2)",
              "0 6px 18px rgba(245, 158, 11, 0.5)",
              "0 4px 10px rgba(245, 158, 11, 0.2)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-amber-500 text-zinc-950 rounded-xl text-xs font-extrabold shadow-md"
        >
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Sparkles className="w-4 h-4 text-zinc-950" />
          </motion.div>
          <span>Get Free Quote</span>
        </motion.a>
      </div>
    </motion.aside>
  );
};
