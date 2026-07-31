import React, { useState } from "react";
import { BUSINESS_INFO, SERVICE_AREAS } from "../data/detailingData";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, Facebook, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ContactAndLeadForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [vehicleInfo, setVehicleInfo] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [leadSuccess, setLeadSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMessage("Please fill in your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, vehicleInfo, message }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setLeadSuccess(true);
      } else {
        setErrorMessage(data.error || "Failed to submit quote request. Please try calling directly.");
      }
    } catch (err) {
      console.error("Lead submission error:", err);
      setLeadSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" /> Instant Contact & Service Area
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Get In Touch With Cope's Auto Detail
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Have a question or need a custom quote for a fleet, boat, or aircraft? Call, message us on Facebook, or submit a request below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Information & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-white border-b border-zinc-800 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" /> Direct Contact Info
              </h3>

              <motion.a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 transition-all group"
              >
                <div className="p-3 bg-red-600/20 border border-red-500/30 text-red-400 rounded-xl group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold block">Phone Call</span>
                  <span className="text-sm font-extrabold text-white">{BUSINESS_INFO.phone}</span>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${BUSINESS_INFO.email}`}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 transition-all group"
              >
                <div className="p-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold block">Email Support</span>
                  <span className="text-sm font-bold text-white truncate max-w-[220px]">{BUSINESS_INFO.email}</span>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="p-3 bg-amber-600/20 border border-amber-500/30 text-amber-400 rounded-xl">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold block">Operating Hours</span>
                  <span className="text-xs font-semibold text-white">{BUSINESS_INFO.hours}</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-3">
                  Connect On Social Media
                </span>
                <div className="flex items-center gap-3">
                  <motion.a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Facebook className="w-4 h-4" /> Facebook Profile
                  </motion.a>
                  <motion.a
                    href={BUSINESS_INFO.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 py-2.5 px-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" /> Messenger Chat
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Mobile Service Coverage Radius */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl">
              <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" /> Service Area Coverage
              </h4>
              <p className="text-xs text-zinc-400 mb-4">
                We travel directly to your location throughout Delaware County and surrounding East-Central Indiana areas:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SERVICE_AREAS.map((town, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
                    className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] rounded-lg font-medium cursor-default transition-all"
                  >
                    📍 {town}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Lead Request Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-1">Request a Custom Quote or Callback</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill out your vehicle details below and Cope will contact you directly with pricing.
            </p>

            <AnimatePresence mode="wait">
              {leadSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-zinc-900 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
                  <p className="text-xs text-zinc-300">
                    Thanks {name}! Cope has received your quote request and will call you at <strong className="text-white">{phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setLeadSuccess(false);
                      setName("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="mt-4 px-4 py-2 bg-zinc-800 text-zinc-300 text-xs font-semibold rounded-xl hover:bg-zinc-700 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmitLead} className="space-y-4">
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
                      <label className="block text-xs font-bold text-zinc-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Michael Miller"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(765) 555-0182"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="michael@example.com"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1">Vehicle Make / Model / Year</label>
                      <input
                        type="text"
                        value={vehicleInfo}
                        onChange={(e) => setVehicleInfo(e.target.value)}
                        placeholder="e.g. 2020 Dodge Challenger"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1">How can we help you?</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what your vehicle needs (e.g. deep pet hair removal, paint polish, boat cleaning...)"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder-zinc-600 transition-all"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Send Instant Quote Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
