import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Brain,
  Building2,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import TicketReservationModal from "../components/TicketReservationModal";

type FieldTripItem = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  banner: string;
  driveFolder: string;
  registrationUrl?: string;
  highlights?: string[];
  status?: "upcoming" | "completed";
};

type WorkshopItem = {
  id: number;
  title: string;
  year: string;
  date?: string;
  description: string;
  status: string;
  attendees: string;
  banner: string;
  driveFolder: string;
  highlights?: string[];
};

type InternshipItem = {
  id: number;
  title: string;
  company: string;
  description: string;
  duration: string;
  banner: string;
  highlights: string[];
  driveFolder: string;
  registrationUrl?: string;
};

const Events = () => {
  // Optional ticket modal (kept for compatibility)
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // ---------- Data ----------
  const events: WorkshopItem[] = [
    {
      id: 1,
      title: "Mecha Magic 2025",
      year: "2025",
      date: "February 28, 2025",
      description:
        "Pascal-CU brought together over 500 engineering students from across Egypt for a full day of learning, networking, and inspiration.",
      status: "Completed",
      attendees: "500+",
      banner: "/mechamagic.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/19540fhP5FZWPudmiRx9AcWZOjw0cQoWo?usp=drive_link",
      highlights: [
        "Participation from 13+ student activities and organizations",
        "Guest Speakers: 8 industry-leading experts",
        "Full day of technical workshops and networking sessions",
      ],
    },
    {
      id: 2,
      title: "Mecha Verse 2025",
      year: "2025",
      date: "February 8, 2025",
      description:
        "An exhibition dedicated to showcasing mechanical engineering graduation projects — where the brightest ideas met real opportunities.",
      status: "Completed",
      attendees: "450+",
      banner: "/MAIN BANNER final ver. 169.png",
      driveFolder:
        "https://drive.google.com/drive/folders/1Zag9IPU6tBbjx02ZKfOCmYRR-bYzpowp?usp=drive_link",
      highlights: [
        "First-ever mechanical engineering graduation projects exhibition in Egypt",
        "Showcased innovative projects bridging creativity and industry impact",
      ],
    },
  ];

  const workshops: WorkshopItem[] = [
    {
      id: 1,
      title: "Mechanical Design Workshop - 2025",
      year: "2025",
      date: "February 3, 2025",
      description:
        "A practical workshop that teaches 3D modeling, mechanical design, and digital prototyping using professional engineering software.",
      status: "Completed",
      attendees: "100+",
      banner: "/workshops.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/134FdiSMUEz6dJ0uR4jtbo81DIVwu6pR-?usp=drive_link",
      highlights: [
        "Participation from 13+ student activities and organizations",
        "Guest Speakers: 8 industry-leading experts",
        "Full day of technical workshops and networking sessions",
      ],
    },
    {
      id: 2,
      title: "Hydraulic Systems Workshop - 2025",
      year: "2025",
      date: "February 11, 2025",
      description:
        "A hands-on workshop where students learn hydraulic principles, components, and real-world applications through experiments and circuit assemblies.",
      status: "Completed",
      attendees: "100+",
      banner: "/workshops.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/1Onn--pRXoFyZ1v0ruHiTMZZ4zipOvIAV?usp=drive_link",
      highlights: [
        "First-ever mechanical engineering graduation projects exhibition in Egypt",
        "Showcased innovative projects bridging creativity and industry impact",
      ],
    },
    {
      id: 3,
      title: "CFD Workshop - 2025",
      year: "2025",
      date: "February 3, 2025",
      description:
        "A practical workshop teaching fluid simulation, analysis, and optimization using Computational Fluid Dynamics software.",
      status: "Completed",
      attendees: "100+",
      banner: "/workshops.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/192iq39YP5puenSZvHTDmp2Zqv9n-xHPd?usp=drive_link",
      highlights: [
        "First-ever mechanical engineering graduation projects exhibition in Egypt",
        "Showcased innovative projects bridging creativity and industry impact",
      ],
    },
    {
      id: 4,
      title: "Automotive Workshop - 2025",
      year: "2025",
      date: "January 29, 2025",
      description:
        "A hands-on workshop focused on automotive engineering principles, vehicle dynamics, and engine systems.",
      status: "Completed",
      attendees: "100+",
      banner: "/workshops.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/1PAMTdzak6Sl58phBK4ymIaR_21vTRn8L?usp=drive_link",
      highlights: [
        "First-ever mechanical engineering graduation projects exhibition in Egypt",
        "Showcased innovative projects bridging creativity and industry impact",
      ],
    },
  ];

  const fieldTrips: FieldTripItem[] = [
    {
      id: 1,
      title: "ROCOL Egypt Field Trip",
      location: "ROCOL Egypt — Advanced Industrial Lubricants Facility",
      date: "TBA",
      description:
        "From advanced industrial lubricants to keeping global factories moving — ROCOL Egypt is a leading name in high-performance lubricants and maintenance products, helping heavy industries and manufacturing systems ru n smoothly and efficiently every day.",

      banner: "/rocol.jpg",
      driveFolder: "",
      registrationUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLScBqD9SYPs-hyDu9uvXWP-KSUOJH2Eo__oTRGD-qKd7YgX3Wg/viewform",
      highlights: [
        "Learn why maintenance and lubrication are critical for machines and production lines",
        "Practical look at high-performance products and real engineering challenges",
        "Expert-led sessions on solving real industrial problems on the ground",
      ],
      status: "upcoming",
    },
    {
      id: 2,
      title: " Art Ceramic سيراميكا آرت Factory Tour",
      location:
        "6th of October industrial zone, 1st CPC industrial compound, Cairo",
      date: "April 30, 2025",
      description:
        "one of Egypt’s top ceramic manufacturers! Discover the secrets behind ceramic production, from raw materials to the final artistic touches. Witness cutting-edge machinery, industrial processes, and engineering excellence up close!",
      banner: "/art.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/19CRiq6izGk3dSj4HUjzs_iNHy5Ug5_3L?usp=drive_link",
    },
    {
      id: 3,
      title: "Khedr Trust",
      location: "Khedr Trust, Industrial Zone, Cairo",
      date: "May 3, 2025",
      description:
        "a leading Egyptian manufacturer of air conditioning products with 11+ years of expertise in the market!",
      banner: "/khedr.png",
      driveFolder:
        "https://drive.google.com/drive/folders/1tUXMDN-33iFnNNq9Ie0g44mO_OdOl7WE?usp=drive_link",
    },
    {
      id: 4,
      title: " EGIC إيچيك Factory Visit",
      location: "6th of October Industrial Zone, Almostakbal Way, Egypt",
      date: "June 25, 2025",
      description:
        "one of Egypt’s leading industry experts in water and gas piping systems. Explore their advanced manufacturing processes, quality control measures, and innovative engineering solutions that drive their success in the market.",
      banner: "/egic.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/1DHhgNEEITwLuYQtSVKgNtBu0qh4h9kvr?usp=drive_link",
    },
    {
      id: 5,
      title: "Premco Precast Factory Tour",
      location: "6 October City, Egypt",
      date: "April 19, 2025",
      description:
        "Building Egypt’s future with uncompromising quality and boundless innovation. At PREMCO PRECAST EGYPT",
      banner: "/premco.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/1MhHVTKNgFafPNI383s4eqAkf4K75B36C?usp=drive_link",
    },
    {
      id: 6,
      title: "Korra Energi Factory Tour",
      location: "2nd industrial zone, New Elsalheya city, Egypt",
      date: "September 2, 2025",
      description:
        "Ever wondered how mega factories come to life from the inside out? This time, our journey will be with Korra energi , a pioneering Egyptian company with over 40 years of experience in providing integrated energy solutions across Egypt, Africa, and the Middle East.",
      banner: "/KORRA.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/1MhHVTKNgFafPNI383s4eqAkf4K75B36C?usp=drive_link",
    },
    {
      id: 7,
      title: " Daikin Egypt Factory Tour",
      location: "District 5, Egypt",
      date: "December 11, 2025",
      description:
        "Step inside Daikin Egypt, the Japanese global leader in HVAC-R technology, providing cooling, heating, and innovative climate solutions for offices, factories, and malls. See how engineering turns designs into reality!",
      banner: "/daikin.png",
      driveFolder: "",
    },
    {
      id: 8,
      title: "ObourLand Factory Visit",
      location: "ObourLand Factory, Egypt",
      date: "April 24, 2025",
      description:
        "An insightful visit to one of Egypt's leading industrial manufacturing facilities, exploring modern production lines and engineering innovations.",
      banner: "/obour.jpg",
      driveFolder:
        "https://drive.google.com/drive/folders/19AXG3mAO3wo7q2PCLcR7cPHVYjcAx9Sw?usp=drive_link",
    },
  ];

  const internships: InternshipItem[] = [
    {
      id: 1,
      title: "DRIC Summer Internship",
      company:
        "DRIC Developed Refrigeration & Air Condition Industries Equipment Co.",
      description:
        "Ever wondered how massive HVAC systems that power malls, factories, and hospitals are actually built and tested ?! This is what we will see in Dric factory, Get ready for a deep dive into the world of HVAC manufacturing, where technology, design, and production meet to deliver comfort!",
      duration: "Summer 2025 (17 August - 21 August)",
      banner: "/dric inter.jpg",
      highlights: [
        "Work on real engineering projects",
        "Mentorship from industry experts",
        "Networking opportunities",
        "Certificate of completion",
      ],
      driveFolder:
        "https://drive.google.com/drive/folders/1bW4Tut_j68qKX1oFbB5drreb9QEGL4op?usp=drive_link",
    },
    {
      id: 2,
      title: "AG Chem BTTRIGAS Summer Internship Program",
      company: "AG Chem BTTRIGAS",
      description:
        "Pascal–CU is excited to announce a 2-week Hybrid training program in collaboration with AG Chem BTTRIGAS, one of the leading companies in the refrigerants industry in Egypt, the Middle East, and Africa. The program combines offline sessions at AG Chem's factory with online learning modules — 3 rounds available. Site location: 4th industrial zone, Badr city (transportation provided from Badr LRT station). Open to Mechanical Engineering students (mainstream & credit hours) and other universities.",
      duration: "Summer 2025 · 2 weeks · 3 Rounds · Badr City",
      banner: "/agchem inter.jpg",
      highlights: [
        "Refrigerants Industry & Applications",
        "Refrigerants Legislations & Handling/Transportation",
        "Refrigeration Cycle & Energy Management",
        "Hybrid Learning: offline factory + online modules",
      ],
      driveFolder:
        "https://drive.google.com/drive/folders/1oBRuTDGMc2G_3YHLrsfkG6dXVuUeTeFw?usp=drive_link",
      registrationUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLScg3KBD4-y8Y_4lvlh4P4RWPHQGMXNk6sxqw6IwJNAAEHRvBw/viewform?usp=publish-editor",
    },
  ];

  // ---------- Handlers ----------
  const openDriveFolder = (folderUrl: string) => {
    window.open(folderUrl, "_blank");
  };

  // ---------- Reusable animation props ----------
  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.35 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-primary-900 to-primary-800 text-white py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pascal Events 2025
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Explore our Events, Workshops, Industry Field Trips, and Internship
            Programs, All designed to connect students with real-world
            engineering.
          </motion.p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        {/* ─────────────── Announcements ─────────────── */}
        <section id="announcements">
          <motion.header {...fadeUp} className="mb-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-1.5 h-6 bg-gold rounded-full" />
              <h2 className="text-xl md:text-2xl font-bold text-navy">
                Announcements
              </h2>
            </div>
            <p className="text-gray-500 text-sm ml-5">
              Active registrations and latest updates from Pascal.
            </p>
          </motion.header>

          {/* Active Registration Cards */}
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
          >

            {/* ── AG Chem BTTRIGAS Summer Internship ── */}
            <div className="relative bg-gradient-to-br from-navy via-primary-950 to-navy text-white border border-gold/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
                <div className="absolute -top-16 -left-16 w-72 h-72 bg-gold rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
              </div>
              {/* Banner image */}
              <div className="relative h-32 overflow-hidden flex-shrink-0">
                <img
                  src="/ag chem int.png"
                  alt="AG Chem BTTRIGAS Summer Internship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-navy rounded-full font-bold text-xs">
                  🚨 ACTIVE REGISTRATION
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  Internship
                </span>
              </div>
              {/* Content */}
              <div className="relative z-10 p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-bold mb-0.5">
                  Summer Internship: AG Chem BTTRIGAS
                </h3>
                <p className="text-gold text-xs font-semibold mb-1.5">
                  Hybrid Training — Refrigerants Industry
                </p>
                <p className="text-gray-300 text-xs leading-relaxed mb-2 flex-grow">
                  Pascal–CU is excited to announce a 2-week Hybrid training program in collaboration with{" "}
                  <strong className="text-gold">AG Chem BTTRIGAS</strong>, one of the leading companies in the refrigerants industry in Egypt, the Middle East, and Africa.
                </p>
                <ul className="space-y-0.5 text-xs text-gray-300 mb-2 border-t border-white/10 pt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Refrigerants Industry, Applications &amp; Legislation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Handling, Transportation &amp; Safety
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Refrigeration Cycle &amp; Energy Management
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScg3KBD4-y8Y_4lvlh4P4RWPHQGMXNk6sxqw6IwJNAAEHRvBw/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow text-center py-1.5 bg-gradient-to-r from-gold to-coral text-navy font-bold rounded-lg hover:opacity-90 transition-all text-xs"
                  >
                    Register for Internship
                  </a>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    Spots limited
                  </span>
                </div>
              </div>
            </div>

            {/* ── ROCOL Egypt Field Trip ── */}
            <div className="relative bg-gradient-to-br from-navy via-primary-950 to-navy text-white border border-gold/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
                <div className="absolute -top-16 -left-16 w-72 h-72 bg-gold rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
              </div>
              {/* Banner image */}
              <div className="relative h-32 overflow-hidden flex-shrink-0">
                <img
                  src="/rocol ft.png"
                  alt="ROCOL Egypt Field Trip"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/60" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-navy rounded-full font-bold text-xs">
                  🚨 ACTIVE REGISTRATION
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  Field Trip
                </span>
              </div>
              {/* Content */}
              <div className="relative z-10 p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-bold mb-0.5">
                  Field Trip: ROCOL Egypt
                </h3>
                <p className="text-gold text-xs font-semibold mb-1.5">
                  Advanced Industrial Lubricants &amp; Maintenance
                </p>
                <p className="text-gray-300 text-xs leading-relaxed mb-2 flex-grow">
                  <strong className="text-gold">ROCOL Egypt</strong> is a
                  leading name in high-performance lubricants and maintenance
                  products, helping heavy industries and manufacturing systems
                  run efficiently every day.
                </p>
                <ul className="space-y-0.5 text-xs text-gray-300 mb-2 border-t border-white/10 pt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Learn why maintenance &amp; lubrication are critical for
                    production lines
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Practical look at high-performance products &amp; real
                    applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Real engineering challenges solved by experts on the ground
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScBqD9SYPs-hyDu9uvXWP-KSUOJH2Eo__oTRGD-qKd7YgX3Wg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow text-center py-1.5 bg-gradient-to-r from-gold to-coral text-navy font-bold rounded-lg hover:opacity-90 transition-all text-xs"
                  >
                    Register for Field Trip
                  </a>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    Seats limited
                  </span>
                </div>
              </div>
            </div>
            {/* ── Summer Internship 2026 ── */}
            <div className="relative bg-gradient-to-br from-navy via-primary-950 to-navy text-white border border-gold/30 rounded-2xl overflow-hidden shadow-xl flex flex-col">
              <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
                <div className="absolute -top-16 -left-16 w-72 h-72 bg-gold rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-coral rounded-full blur-3xl" />
              </div>
              {/* Banner image */}
              <div className="relative h-32 overflow-hidden flex-shrink-0">
                <img
                  src="/dric int .png"
                  alt="Summer Internship 2026"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/80" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-navy rounded-full font-bold text-xs">
                🚨 ACTIVE REGISTRATION
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  Internship
                </span>
              </div>
              {/* Content */}
              <div className="relative z-10 p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-bold mb-0.5">
                  Summer Internship Program 2026
                </h3>
                <p className="text-gold text-xs font-semibold mb-1.5">
                  Explore HVAC Manufacturing with DRIC
                </p>
                <p className="text-gray-300 text-xs leading-relaxed mb-2 flex-grow">
                  Pascal is pleased to announce an exclusive Summer Internship
                  in collaboration with{" "}
                  <strong className="text-gold">
                    DRIC — Developed Refrigeration &amp; Air Conditioning
                    Industrial Co.
                  </strong>
                </p>
                <ul className="space-y-0.5 text-xs text-gray-300 mb-2 border-t border-white/10 pt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Explore HVAC duct and air handling unit manufacturing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Learn design and assembly of industrial systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold flex-shrink-0">✓</span>{" "}
                    Open to all Egyptian universities — Mechanical &amp;
                    Mechatronics (1st–4th year)
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeUSQviX5xMEej6a87eBS8AwpB9CKnxIBFMdqBNchW5Lg87fQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow text-center py-1.5 bg-gradient-to-r from-gold to-coral text-navy font-bold rounded-lg hover:opacity-90 transition-all text-xs"
                  >
                    Register for Internship
                  </a>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    Seats limited
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </section>

        {/* ----------------- 1) Events Section ----------------- */}
        <section>
          <motion.header {...fadeUp} className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-navy">Events</h2>
            <p className="text-gray-600 mt-1 text-sm">
              Highlighted Pascal events from 2025 — photo galleries and
              summaries.
            </p>
          </motion.header>

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <motion.article
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* Banner */}
                <div className="relative">
                  <img
                    src={event.banner}
                    alt={event.title}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {event.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-1.5">
                    <h3 className="text-base font-bold text-gray-900">
                      {event.title}{" "}
                      <span className="text-xs text-gray-500">({event.year})</span>
                    </h3>
                    <div className="flex items-center gap-1 text-gray-500 text-xs flex-shrink-0 ml-2">
                      <Users className="h-3 w-3" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs mb-3 flex-grow">{event.description}</p>

                  <div className="mb-2">
                    <h4 className="font-semibold text-gray-900 mb-1 text-xs">Highlights:</h4>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {event.highlights?.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <div className="w-1.5 h-1.5 bg-navy rounded-full mt-1.5 flex-shrink-0"></div>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => openDriveFolder(event.driveFolder)}
                    className="mt-auto w-full bg-navy hover:bg-primary-800 text-white font-semibold py-1.5 rounded-lg transition-colors text-xs"
                  >
                    View Photo Gallery
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ----------------- 2) Workshops Section ----------------- */}
        <section>
          <motion.header {...fadeUp} className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-navy">
              Workshops
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Hands-on workshops and exhibitions — view galleries and details.
            </p>
          </motion.header>

          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {workshops.map((wk) => (
              <motion.div
                key={wk.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* image on top */}
                <img
                  src={wk.banner}
                  alt={wk.title}
                  className="w-full h-28 object-cover"
                />

                {/* content below */}
                <div className="p-3 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{wk.title}</h3>
                    <span className="text-xs text-gray-400 flex-shrink-0 ml-1">{wk.year}</span>
                  </div>
                  <p className="text-gray-600 text-xs mb-2 flex-grow leading-relaxed">{wk.description}</p>

                  <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs">
                    <div className="flex items-center gap-0.5">
                      <Calendar className="h-3 w-3" />
                      <span>{wk.date ?? "2025"}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Users className="h-3 w-3" />
                      <span>{wk.attendees}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openDriveFolder(wk.driveFolder)}
                    className="mt-auto w-full bg-navy hover:bg-primary-800 text-white font-semibold py-1.5 rounded-lg transition-colors text-xs"
                  >
                    View Gallery
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ----------------- 3) Field Trips Section (Accordion) ----------------- */}
        <section id="field-trips">
          <motion.header {...fadeUp} className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-navy">
              Field Trips
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Industry and factory visits with guided tours and hands-on demos.
            </p>
          </motion.header>

          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {fieldTrips.map((trip) => (
              <motion.div
                key={trip.id}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                whileHover={{ y: -3 }}
              >
                {/* thumbnail */}
                <div className="relative">
                  <img
                    src={trip.banner}
                    alt={trip.title}
                    className="w-full h-24 object-cover"
                  />
                  {trip.status === 'upcoming' && (
                    <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-gold text-navy rounded text-xs font-bold">
                      Active
                    </span>
                  )}
                </div>

                {/* content */}
                <div className="p-2.5 flex flex-col flex-grow">
                  <h3 className="text-xs font-bold text-gray-900 mb-1 leading-tight">{trip.title}</h3>

                  <div className="space-y-0.5 text-gray-500 mb-2">
                    <div className="flex items-start gap-1">
                      <MapPin className="h-2.5 w-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-xs leading-tight">{trip.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-2.5 w-2.5 flex-shrink-0" />
                      <span className="text-xs">{trip.date}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 mb-2 flex-grow leading-relaxed line-clamp-3">
                    {trip.description}
                  </p>

                  <div className="flex flex-col gap-1 mt-auto">
                    {trip.registrationUrl && (
                      <a
                        href={trip.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-gradient-to-r from-gold to-coral text-navy font-bold text-xs py-1.5 rounded-lg hover:opacity-90 transition-all"
                      >
                        🚀 Register
                      </a>
                    )}
                    {trip.driveFolder && (
                      <button
                        onClick={() => openDriveFolder(trip.driveFolder)}
                        className="w-full bg-navy hover:bg-primary-800 text-white font-semibold text-xs py-1.5 rounded-lg transition-colors"
                      >
                        Gallery
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ----------------- 4) Internships Section ----------------- */}
        <section>
          <motion.header {...fadeUp} className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-navy">
              Internships
            </h2>
            <p className="text-gray-600 mt-1 text-sm">
              Structured internship programs that connect students to industry
              partners.
            </p>
          </motion.header>

          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
          >
            {internships.map((intern) => (
              <motion.div
                key={intern.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* image */}
                <img
                  src={intern.banner}
                  alt={intern.title}
                  className="w-full h-32 sm:h-36 object-cover"
                />

                {/* content wrapper with flex-col to stretch */}
                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                        {intern.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {intern.duration}
                      </span>
                    </div>

                    <p className="text-coral font-semibold text-xs sm:text-sm mb-1.5">
                      {intern.company}
                    </p>
                    <p className="text-xs text-gray-600 mb-3">
                      {intern.description}
                    </p>

                    <div className="border-t border-gray-200 pt-2">
                      <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">
                        Program Highlights:
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-600">
                        {intern.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* button goes to bottom automatically */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto pt-3">
                    {intern.registrationUrl && (
                      <a
                        href={intern.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold to-coral text-navy font-bold text-xs py-1.5 px-3 rounded-lg shadow-md hover:opacity-90 transition-all"
                      >
                        🚀 Register Now
                      </a>
                    )}
                    {intern.driveFolder && (
                      <button
                        onClick={() => openDriveFolder(intern.driveFolder)}
                        className="bg-navy hover:bg-primary-800 text-white font-semibold text-xs py-1.5 px-3 rounded-lg transition-colors"
                      >
                        View image gallery
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Ticket Reservation Modal */}
      {isReservationModalOpen && selectedEvent && (
        <TicketReservationModal
          event={selectedEvent}
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Events;
