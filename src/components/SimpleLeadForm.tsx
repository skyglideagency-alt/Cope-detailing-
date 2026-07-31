import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/detailingData";
import { Send, CheckCircle2, Phone, Sparkles, AlertCircle, Clock, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const SimpleLeadForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [carType, setCarType] = useState<string>("Sedan / Coupe");
  const [serviceNeeded, setServiceNeeded] = useState<string>("Full Deep Interior & Exterior Detail");
  const [notes, setNotes] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setErrorMessage("Please enter your phone number so we can call you.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          vehicleInfo: carType,
          message: `Service Requested: ${serviceNeeded}. Additional Notes: ${notes || "None"}`,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit quote request. Please try calling directly.");
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="py-16 bg-zinc-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Top Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Instant Free Quote In 30 Seconds
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get Your Instant Mobile Quote
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              No obligation. Tell us what you drive & we’ll contact you with a guaranteed quote within minutes.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                key="submitted-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-900 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4 max-w-lg mx-auto shadow-2xl"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 15, 0] }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Thanks <strong className="text-white">{name}</strong>! Cope received your details for your <strong className="text-white">{carType}</strong> and will call <strong className="text-emerald-400">{phone}</strong> shortly with pricing and open slots.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
                  >
                    <Phone className="w-4 h-4" /> Call {BUSINESS_INFO.phone}
                  </motion.a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setPhone("");
                      setNotes("");
                    }}
                    className="px-4 py-3 bg-zinc-800 text-zinc-300 hover:text-white rounded-xl text-xs font-semibold hover:bg-zinc-700 transition-colors"
                  >
                    Request Another Quote
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.form 
                key="quote-form-fields"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-5 max-w-2xl mx-auto"
              >
                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-950/80 border border-red-500/50 rounded-xl text-red-300 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Johnson"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Phone Number (for fast callback) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(765) 555-0199"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Vehicle Type *
                    </label>
                    <select
                      value={carType}
                      onChange={(e) => setCarType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    >
                      <option value="Sedan / Coupe">Sedan / Coupe (2-Door / 4-Door)</option>
                      <option value="Truck / SUV">Midsize SUV / Pickup Truck</option>
                      <option value="Van / Large SUV">Large SUV / Minivan / Lifted Truck</option>
                      <option value="Boat / Specialty">Boat / RV / Commercial Fleet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Service Requested *
                    </label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    >
                      <option value="Full Deep Interior & Exterior Detail">Full Deep Interior & Exterior Detail</option>
                      <option value="Deep Interior Steam Restoration">Deep Interior Steam Restoration (Stains & Pet Hair)</option>
                      <option value="Exterior Precision Polish & Ceramic Sealant">Exterior Precision Polish & Ceramic Sealant</option>
                      <option value="Express Wash & Refresh">Express Wash & Light Refresh</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                    Anything specific? (Optional notes)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Dog hair in back seat, stain on driver side, park in driveway..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-red-600/30 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Quote Request...</span>
                  ) : (
                    <>
                      <span>Get Free Instant Quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> We beat local prices
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> 100% Mobile convenience
                  </span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
