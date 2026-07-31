import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/detailingData";
import { Phone, Calendar, Menu, X, Sparkles, MessageSquare, ShieldCheck, UserCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Instant Free Quote", href: "#quote-form" },
    { name: "Before & After", href: "#gallery" },
    { name: "Services & Rates", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact & Location", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <motion.a 
          href="#" 
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-xl bg-red-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg shadow-red-600/30"
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            C
          </motion.div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white leading-tight">
              Cope's <span className="text-red-500">Auto Detail</span>
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-semibold">
              Mobile Service • Muncie, IN
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-300">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx + 0.2 }}
              whileHover={{ scale: 1.08, color: "#f87171" }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-red-400 transition-colors relative py-1"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs font-bold hover:bg-zinc-800 transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>{BUSINESS_INFO.phone}</span>
          </motion.a>

          <motion.a
            href="#quote-form"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 15px -3px rgba(220, 38, 38, 0.2)",
                "0 10px 25px -3px rgba(220, 38, 38, 0.4)",
                "0 10px 15px -3px rgba(220, 38, 38, 0.2)"
              ]
            }}
            transition={{ boxShadow: { repeat: Infinity, duration: 3 } }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg shadow-red-600/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Free Quote</span>
          </motion.a>

          {onOpenAdmin && (
            <motion.button
              onClick={onOpenAdmin}
              title="Admin Lead Manager"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 text-xs flex items-center justify-center"
            >
              <UserCheck className="w-4 h-4" />
            </motion.button>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <motion.a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-red-600 text-white rounded-xl text-xs font-bold sm:hidden"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-5 space-y-4 overflow-hidden"
          >
            <div className="space-y-2 text-sm font-medium">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * idx }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-zinc-300 hover:text-red-400 border-b border-zinc-900"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <motion.a
                href="#quote-form"
                whileTap={{ scale: 0.97 }}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
              >
                <Sparkles className="w-4 h-4" /> Get Free Instant Quote
              </motion.a>

              <motion.a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 border border-zinc-800"
              >
                <Phone className="w-4 h-4 text-red-500" /> Call {BUSINESS_INFO.phone}
              </motion.a>

              {onOpenAdmin && (
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full py-2 bg-zinc-900 text-zinc-400 text-xs rounded-xl border border-zinc-800 flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4" /> Owner Lead Portal
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
