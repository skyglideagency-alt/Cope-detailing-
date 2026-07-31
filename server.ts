import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Booking {
  id: string;
  createdAt: string;
  customerName: string;
  phone: string;
  email: string;
  vehicleType: string;
  vehicleDetails: string;
  servicePackage: string;
  addOns: string[];
  address: string;
  date: string;
  timeSlot: string;
  estimatedPrice: number;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  notes?: string;
}

interface Lead {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  vehicleInfo: string;
  message: string;
  status: "New" | "Contacted" | "Closed";
}

// In-memory data store with initial realistic sample bookings & leads
let bookings: Booking[] = [
  {
    id: "BK-1092",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    customerName: "David Miller",
    phone: "(765) 555-0182",
    email: "david.m@example.com",
    vehicleType: "Truck / SUV",
    vehicleDetails: "2021 Ford F-150 SuperCrew",
    servicePackage: "Full Deep Interior Restorative Detail",
    addOns: ["Pet Hair Extraction", "Engine Bay Detail"],
    address: "2400 N Oakwood Ave, Muncie, IN 47304",
    date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
    timeSlot: "09:00 AM - 12:00 PM",
    estimatedPrice: 214,
    status: "Confirmed",
    notes: "Heavy dog hair in back seat area.",
  },
  {
    id: "BK-1093",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    customerName: "Sarah Jenkins",
    phone: "(765) 555-0199",
    email: "sjenkins@example.com",
    vehicleType: "Sedan / Coupe",
    vehicleDetails: "2022 Nissan Altima",
    servicePackage: "Ultimate Showroom Ceramic Detail",
    addOns: ["Headlight Restoration"],
    address: "1800 W Tillotson Ave, Muncie, IN 47304",
    date: new Date(Date.now() + 86400000 * 3).toISOString().split("T")[0],
    timeSlot: "01:00 PM - 04:00 PM",
    estimatedPrice: 324,
    status: "Pending",
    notes: "Please call when arriving at driveway.",
  },
];

let leads: Lead[] = [
  {
    id: "LD-8812",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    name: "Marcus Vance",
    phone: "(765) 555-0144",
    email: "mvance@example.com",
    vehicleInfo: "2020 Dodge Challenger SRT",
    message: "Looking for paint correction and ceramic coating quote for my black Challenger. Has minor swirl marks.",
    status: "New",
  },
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", businessName: "Cope's Auto Detail", location: "Muncie, IN" });
  });

  // Get Bookings
  app.get("/api/bookings", (req, res) => {
    res.json({ success: true, bookings });
  });

  // Create Booking
  app.post("/api/bookings", (req, res) => {
    const {
      customerName,
      phone,
      email,
      vehicleType,
      vehicleDetails,
      servicePackage,
      addOns,
      address,
      date,
      timeSlot,
      estimatedPrice,
      notes,
    } = req.body;

    if (!customerName || !phone || !servicePackage || !date || !timeSlot) {
      return res.status(400).json({
        success: false,
        error: "Missing required booking details (Name, Phone, Package, Date, Time).",
      });
    }

    const newBooking: Booking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      customerName,
      phone,
      email: email || "",
      vehicleType: vehicleType || "Vehicle",
      vehicleDetails: vehicleDetails || "Not specified",
      servicePackage,
      addOns: addOns || [],
      address: address || "Muncie Mobile Location",
      date,
      timeSlot,
      estimatedPrice: Number(estimatedPrice) || 0,
      status: "Pending",
      notes: notes || "",
    };

    bookings.unshift(newBooking);
    console.log("New booking created:", newBooking.id, newBooking.customerName);

    res.status(201).json({
      success: true,
      message: "Booking request received successfully!",
      booking: newBooking,
    });
  });

  // Update Booking Status
  app.patch("/api/bookings/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const booking = bookings.find((b) => b.id === id);

    if (!booking) {
      return res.status(404).json({ success: false, error: "Booking not found" });
    }

    if (status) booking.status = status;

    res.json({ success: true, booking });
  });

  // Get Leads
  app.get("/api/leads", (req, res) => {
    res.json({ success: true, leads });
  });

  // Submit Lead Contact Form
  app.post("/api/leads", (req, res) => {
    const { name, phone, email, vehicleInfo, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        error: "Name and Phone number are required.",
      });
    }

    const newLead: Lead = {
      id: `LD-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      name,
      phone,
      email: email || "",
      vehicleInfo: vehicleInfo || "N/A",
      message: message || "Requested callback for detailing service",
      status: "New",
    };

    leads.unshift(newLead);
    console.log("New lead received:", newLead.id, newLead.name);

    res.status(201).json({
      success: true,
      message: "Lead inquiry submitted successfully!",
      lead: newLead,
    });
  });

  // Update Lead Status
  app.patch("/api/leads/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const lead = leads.find((l) => l.id === id);

    if (!lead) {
      return res.status(404).json({ success: false, error: "Lead not found" });
    }

    if (status) lead.status = status;

    res.json({ success: true, lead });
  });

  // Serve Vite in dev, static files in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Cope's Auto Detail server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
