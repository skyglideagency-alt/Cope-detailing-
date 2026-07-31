import React, { useState, useEffect } from "react";
import { X, RefreshCw, Phone, Mail, Calendar, MapPin, CheckCircle2, Clock, UserCheck, MessageSquare, AlertCircle } from "lucide-react";

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"bookings" | "leads">("bookings");
  const [bookings, setBookings] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAdminData = async () => {
    setIsLoading(true);
    try {
      const [resB, resL] = await Promise.all([
        fetch("/api/bookings"),
        fetch("/api/leads"),
      ]);
      const dataB = await resB.json();
      const dataL = await resL.json();

      if (dataB.success) setBookings(dataB.bookings || []);
      if (dataL.success) setLeads(dataL.leads || []);
    } catch (err) {
      console.error("Error loading admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchAdminData();
    }
  }, [isOpen]);

  const updateBookingStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) fetchAdminData();
    } catch (e) {
      console.error("Error updating booking status", e);
    }
  };

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) fetchAdminData();
    } catch (e) {
      console.error("Error updating lead status", e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-2xl bg-zinc-950 border-l border-zinc-800 text-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Owner Lead & Booking Portal</h3>
              <p className="text-[11px] text-zinc-400">Cope's Auto Detail Management</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchAdminData}
              title="Refresh Data"
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-red-400" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-zinc-800 bg-zinc-950 px-4 pt-3">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center justify-center gap-2 ${
              activeTab === "bookings"
                ? "border-red-500 text-red-400 bg-red-500/10"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4" /> Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex-1 py-2.5 text-xs font-bold border-b-2 transition-all flex items-center justify-center gap-2 ${
              activeTab === "leads"
                ? "border-red-500 text-red-400 bg-red-500/10"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
          >
            <MessageSquare className="w-4 h-4" /> Quote Inquiries ({leads.length})
          </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {activeTab === "bookings" && (
            <>
              {bookings.length === 0 ? (
                <p className="text-zinc-500 text-xs text-center py-10">No bookings found.</p>
              ) : (
                bookings.map((item) => (
                  <div
                    key={item.id}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-white text-sm">{item.customerName}</span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                          item.status === "Confirmed"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : item.status === "Completed"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-zinc-300">
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Package:</span>
                        <span className="font-semibold text-white">{item.servicePackage}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Vehicle:</span>
                        <span>{item.vehicleType} ({item.vehicleDetails})</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Date & Slot:</span>
                        <span className="text-amber-400 font-semibold">{item.date} ({item.timeSlot})</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Price Estimate:</span>
                        <span className="text-emerald-400 font-bold">${item.estimatedPrice}</span>
                      </div>
                    </div>

                    <div className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="truncate">{item.address}</span>
                      </div>
                      {item.notes && (
                        <p className="text-[11px] text-zinc-400 italic">"{item.notes}"</p>
                      )}
                    </div>

                    {/* Quick Call Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${item.phone}`}
                          className="px-2.5 py-1.5 bg-red-600/20 text-red-400 border border-red-500/30 rounded-lg text-[11px] font-bold flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" /> Call
                        </a>
                      </div>

                      <select
                        value={item.status}
                        onChange={(e) => updateBookingStatus(item.id, e.target.value)}
                        className="bg-zinc-950 border border-zinc-800 text-xs rounded-lg px-2 py-1 text-zinc-300 focus:outline-none"
                      >
                        <option value="Pending">Status: Pending</option>
                        <option value="Confirmed">Status: Confirmed</option>
                        <option value="Completed">Status: Completed</option>
                        <option value="Cancelled">Status: Cancelled</option>
                      </select>
                    </div>
                  </div>
                ))
              )}
            </>
          )}

          {activeTab === "leads" && (
            <>
              {leads.length === 0 ? (
                <p className="text-zinc-500 text-xs text-center py-10">No quote inquiries found.</p>
              ) : (
                leads.map((item) => (
                  <div
                    key={item.id}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-white text-sm">{item.name}</span>
                      <span className="text-[10px] text-zinc-500">{new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>

                    <p className="text-zinc-300 bg-zinc-950 p-2.5 rounded-xl border border-zinc-800">
                      "{item.message}"
                    </p>

                    <div className="text-zinc-400 flex items-center gap-4">
                      <span>Vehicle: <strong className="text-white">{item.vehicleInfo}</strong></span>
                      <span>Phone: <strong className="text-white">{item.phone}</strong></span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${item.phone}`}
                          className="px-2.5 py-1.5 bg-red-600/20 text-red-400 border border-red-500/30 rounded-lg text-[11px] font-bold flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" /> Call
                        </a>
                      </div>

                      <button
                        onClick={() => updateLeadStatus(item.id, "Contacted")}
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 hover:text-white rounded-lg text-[11px]"
                      >
                        Mark Contacted
                      </button>
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
