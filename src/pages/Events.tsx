import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Brain, Building2, Briefcase, ChevronDown, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TicketReservationModal from '../components/TicketReservationModal';

type FieldTripItem = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  banner: string;
  driveFolder: string;
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
};

const Events = () => {
  // Optional ticket modal (kept for compatibility)
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Accordion state for Field Trips
  const [expandedFieldTrip, setExpandedFieldTrip] = useState<number | null>(null);

  // ---------- Data ----------
  const events: WorkshopItem[] = [
    {
      id: 1,
      title: 'Mecha Magic 2025',
      year: '2025',
      date: 'February 28, 2025',
      description:
        'Pascal-CU brought together over 500 engineering students from across Egypt for a full day of learning, networking, and inspiration.',
      status: 'Completed',
      attendees: '500+',
      banner: '/mechamagic.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/19540fhP5FZWPudmiRx9AcWZOjw0cQoWo?usp=drive_link',
      highlights: [
        'Participation from 13+ student activities and organizations',
        'Guest Speakers: 8 industry-leading experts',
        'Full day of technical workshops and networking sessions'
      ]
    },
    {
      id: 2,
      title: 'Mecha Verse 2025',
      year: '2025',
      date: 'February 8, 2025',
      description:
        'An exhibition dedicated to showcasing mechanical engineering graduation projects — where the brightest ideas met real opportunities.',
      status: 'Completed',
      attendees: '450+',
      banner: '/MAIN BANNER final ver. 169.png',
      driveFolder: 'https://drive.google.com/drive/folders/1Zag9IPU6tBbjx02ZKfOCmYRR-bYzpowp?usp=drive_link',
      highlights: [
        'First-ever mechanical engineering graduation projects exhibition in Egypt',
        'Showcased innovative projects bridging creativity and industry impact'
      ]
    }
  ];

  const workshops: WorkshopItem[] = [
    {
      id: 1,
      title: 'Mechanical Design Workshop - 2025',
      year: '2025',
      date: 'February 3, 2025',
      description:
        'A practical workshop that teaches 3D modeling, mechanical design, and digital prototyping using professional engineering software.',
      status: 'Completed',
      attendees: '100+',
      banner: '/workshops.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/134FdiSMUEz6dJ0uR4jtbo81DIVwu6pR-?usp=drive_link',
      highlights: [
        'Participation from 13+ student activities and organizations',
        'Guest Speakers: 8 industry-leading experts',
        'Full day of technical workshops and networking sessions'
      ]
    },
    {
      id: 2,
      title: 'Hydraulic Systems Workshop - 2025',
      year: '2025',
      date: 'February 11, 2025',
      description:
        'A hands-on workshop where students learn hydraulic principles, components, and real-world applications through experiments and circuit assemblies.',
      status: 'Completed',
      attendees: '100+',
      banner: '/workshops.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/1Onn--pRXoFyZ1v0ruHiTMZZ4zipOvIAV?usp=drive_link',
      highlights: [
        'First-ever mechanical engineering graduation projects exhibition in Egypt',
        'Showcased innovative projects bridging creativity and industry impact'
      ]
    },
    {
      id: 3,
      title: 'CFD Workshop - 2025',
      year: '2025',
      date: 'February 3, 2025',
      description:
        'A practical workshop teaching fluid simulation, analysis, and optimization using Computational Fluid Dynamics software.',
      status: 'Completed',
      attendees: '100+',
      banner: '/workshops.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/192iq39YP5puenSZvHTDmp2Zqv9n-xHPd?usp=drive_link',
      highlights: [
        'First-ever mechanical engineering graduation projects exhibition in Egypt',
        'Showcased innovative projects bridging creativity and industry impact'
      ]
    },
    {
      id: 4,
      title: 'Automotive Workshop - 2025',
      year: '2025',
      date: 'January 29, 2025',
      description:
        'A hands-on workshop focused on automotive engineering principles, vehicle dynamics, and engine systems.',
      status: 'Completed',
      attendees: '100+',
      banner: '/workshops.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/1PAMTdzak6Sl58phBK4ymIaR_21vTRn8L?usp=drive_link',
      highlights: [
        'First-ever mechanical engineering graduation projects exhibition in Egypt',
        'Showcased innovative projects bridging creativity and industry impact'
      ]
    }

  ];

  const fieldTrips: FieldTripItem[] = [
    {
      id: 1,
      title: 'ObourLand Factory Visit',
      location: 'ObourLand Factory, Egypt',
      date: 'April 24, 2025',
      description:
        "An insightful visit to one of Egypt's leading industrial manufacturing facilities, exploring modern production lines and engineering innovations.",
      banner: '/obour.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/19AXG3mAO3wo7q2PCLcR7cPHVYjcAx9Sw?usp=drive_link'
    },
    {
      id: 2,
      title: ' Art Ceramic سيراميكا آرت Factory Tour',
      location: '6th of October industrial zone, 1st CPC industrial compound, Cairo',
      date: 'April 30, 2025',
      description: 'one of Egypt’s top ceramic manufacturers! Discover the secrets behind ceramic production, from raw materials to the final artistic touches. Witness cutting-edge machinery, industrial processes, and engineering excellence up close!',
      banner: '/art.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/19CRiq6izGk3dSj4HUjzs_iNHy5Ug5_3L?usp=drive_link'
    },
    {
      id: 3,
      title: 'Khedr Trust',
      location: 'Khedr Trust, Industrial Zone, Cairo',
      date: 'May 3, 2025',
      description: 'a leading Egyptian manufacturer of air conditioning products with 11+ years of expertise in the market!',
      banner: '/khedr.png',
      driveFolder: 'https://drive.google.com/drive/folders/1tUXMDN-33iFnNNq9Ie0g44mO_OdOl7WE?usp=drive_link'
    },
    {
      id: 4,
      title: ' EGIC إيچيك Factory Visit',
      location: '6th of October Industrial Zone, Almostakbal Way, Egypt',
      date: 'June 25, 2025',
      description: "one of Egypt’s leading industry experts in water and gas piping systems. Explore their advanced manufacturing processes, quality control measures, and innovative engineering solutions that drive their success in the market.",
      banner: '/egic.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/1DHhgNEEITwLuYQtSVKgNtBu0qh4h9kvr?usp=drive_link'
    },
    {
      id: 5,
      title: 'Premco Precast Factory Tour',
      location: '6 October City, Egypt',
      date: 'April 19, 2025',
      description: 'Building Egypt’s future with uncompromising quality and boundless innovation. At PREMCO PRECAST EGYPT',
      banner: '/premco.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/1MhHVTKNgFafPNI383s4eqAkf4K75B36C?usp=drive_link'
    },
    {
      id: 6,
      title: 'Korra Energi Factory Tour',
      location: '2nd industrial zone, New Elsalheya city, Egypt',
      date: 'September 2, 2025',
      description: 'Ever wondered how mega factories come to life from the inside out? This time, our journey will be with Korra energi , a pioneering Egyptian company with over 40 years of experience in providing integrated energy solutions across Egypt, Africa, and the Middle East.',
      banner: '/KORRA.jpg',
      driveFolder: 'https://drive.google.com/drive/folders/1MhHVTKNgFafPNI383s4eqAkf4K75B36C?usp=drive_link'
    },
    {
      id: 7,
      title: ' Daikin Egypt Factory Tour',
      location: 'District 5, Egypt',
      date: 'December 11, 2025',
      description: 'Step inside Daikin Egypt, the Japanese global leader in HVAC-R technology, providing cooling, heating, and innovative climate solutions for offices, factories, and malls. See how engineering turns designs into reality!',
      banner: '/daikin.png',
      driveFolder: ''
    }
  ];

  const internships: InternshipItem[] = [
    {
      id: 1,
      title: 'DRIC Summer Internship',
      company: 'DRIC Developed Refrigeration & Air Condition Industries Equipment Co.',
      description:
      'Ever wondered how massive HVAC systems that power malls, factories, and hospitals are actually built and tested ?! This is what we will see in Dric factory, Get ready for a deep dive into the world of HVAC manufacturing, where technology, design, and production meet to deliver comfort!',
      duration: 'Summer 2025 (17 August - 21 August)',
      banner: '/dric inter.jpg',
      highlights: ['Work on real engineering projects', 'Mentorship from industry experts', 'Networking opportunities', 'Certificate of completion'],
      driveFolder: 'https://drive.google.com/drive/folders/1bW4Tut_j68qKX1oFbB5drreb9QEGL4op?usp=drive_link'
    },
    {
      id: 2,
      title: 'AG Chem BTTRIGAS Summer Internship Program',
      company: 'AG Chem BTTRIGAS',
      description:
      'Participants experience on-site factory sessions and online modules, learning key topics in refrigerants: industry, applications, legislation, handling, and the refrigeration cycle. Gain hands-on technical insights while understanding sustainability and safety in modern refrigeration systems.',
      duration: 'Summer 2025 (2 weeks)',
      banner: '/agchem inter.jpg',
      highlights: [
        'Hybrid learning',
        'Refrigerants industry and applications',
        'Legislation, handling, and safety',
        'Refrigeration cycle & energy management'
      ],
      driveFolder: 'https://drive.google.com/drive/folders/1oBRuTDGMc2G_3YHLrsfkG6dXVuUeTeFw?usp=drive_link'
    }

  ];

  // ---------- Handlers ----------
  const openDriveFolder = (folderUrl: string) => {
    window.open(folderUrl, '_blank');
  };

  // ---------- Reusable animation props ----------
  const fadeUp = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.35 } };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-primary-900 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pascal Events 2025
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Explore our Events, Workshops, Industry Field Trips, and Internship Programs, All designed to connect students with real-world engineering.
          </motion.p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Exclusive Announcement Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gold/20 via-coral/20 to-gold/20 border-2 border-gold rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            {/* Left: Content */}
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <Sparkles className="h-8 w-8 text-gold mt-1" />
                </motion.div>
                <div className="flex-grow">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/30 text-navy rounded-full mb-3 border border-gold font-bold text-xs">
                    🎉 EXCLUSIVE ANNOUNCEMENT
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    2026 Workshops Applications Now Open!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-2xl">
                    Don't miss the opportunity to join our upcoming 2026 workshops! Dive into mechanical engineering like never before! Whether you're passionate about, Robotics, Hydraulic, Automotive, SOLIDWORKS, AI & ML applications in Mechanical Engineering. or Premium workshops by ROCOL, including Lubrication and Soft Skills, these workshops are tailored just for you.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScqC8q3lAbaoUius23HLlhELG3UL3QM3BbN3rmNnsQvJabSHA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-gold to-coral hover:from-gold/90 hover:to-coral/90 text-white font-bold rounded-lg transition-all duration-300 group"
                  >
                    Apply Now
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.img
                src="/pascal workshops final announcement FINAL FINAL.png"
                alt="2026 Workshops"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg sm:rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* ----------------- 1) Events Section ----------------- */}
        <section>
          <motion.header {...fadeUp} className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Events</h2>
            <p className="text-gray-600 mt-2">Highlighted Pascal events from 2025 — photo galleries and summaries.</p>
          </motion.header>

          <motion.div {...fadeUp} className="space-y-8">
            {events.map((event) => (
              <motion.article
                key={event.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                whileHover={{ y: -4 }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img src={event.banner} alt={event.title} className="w-full h-64 md:h-full object-cover" />
                  </div>

                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{event.title} <span className="text-sm text-gray-500 ml-2">({event.year})</span></h3>
                        <p className="text-gray-600 mt-2">{event.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium block">
                          {event.status}
                        </span>
                        <div className="mt-3 text-gray-600 text-sm">
                          <div className="flex items-center justify-end gap-2">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Event Highlights:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {event.highlights?.map((h, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openDriveFolder(event.driveFolder)}
                        className="bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                      >
                        View Photo Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ----------------- 2) Workshops Section ----------------- */}
        <section>
          <motion.header {...fadeUp} className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Workshops</h2>
            <p className="text-gray-600 mt-2">Hands-on workshops and exhibitions — view galleries and details.</p>
          </motion.header>

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {workshops.map((wk) => (
              <motion.div
                key={wk.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                whileHover={{ y: -4 }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img src={wk.banner} alt={wk.title} className="w-full h-56 md:h-full object-cover" />
                  </div>

                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{wk.title}</h3>
                      <span className="text-sm text-gray-500">{wk.year}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{wk.description}</p>

                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{wk.date ?? '2025'}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{wk.attendees} attendees</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => openDriveFolder(wk.driveFolder)}
                        className="bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                      >
                        View Photo Gallery
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ----------------- 3) Field Trips Section (Accordion) ----------------- */}
        <section>
          <motion.header {...fadeUp} className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Field Trips</h2>
            <p className="text-gray-600 mt-2">Industry and factory visits with guided tours and hands-on demos.</p>
          </motion.header>

          <motion.div {...fadeUp} className="space-y-4">
            {fieldTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFieldTrip(expandedFieldTrip === trip.id ? null : trip.id)}
                  className="w-full p-3 sm:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-4">
                    <img src={trip.banner} alt={trip.title} className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg object-cover" />
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{trip.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-gray-600 text-xs sm:text-sm mt-1">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {trip.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {trip.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div animate={{ rotate: expandedFieldTrip === trip.id ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedFieldTrip === trip.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.33 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-3 sm:p-6">
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{trip.description}</p>

                        <div className="flex gap-3">
                          <button
                            onClick={() => openDriveFolder(trip.driveFolder)}
                            className="bg-navy hover:bg-primary-800 text-white font-semibold text-sm sm:text-base py-2 px-4 sm:px-6 rounded-lg transition-colors"
                          >
                            View Photo Gallery
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </section>

{/* ----------------- 4) Internships Section ----------------- */}
    <section>
      <motion.header {...fadeUp} className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-navy">Internships</h2>
        <p className="text-gray-600 mt-2">Structured internship programs that connect students to industry partners.</p>
      </motion.header>

      <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {internships.map((intern) => (
          <motion.div
            key={intern.id}
            className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            whileHover={{ y: -4 }}
          >
            {/* image */}
            <img src={intern.banner} alt={intern.title} className="w-full h-40 sm:h-44 object-cover" />

            {/* content wrapper with flex-col to stretch */}
            <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{intern.title}</h3>
                  <span className="text-xs sm:text-sm text-gray-500">{intern.duration}</span>
                </div>

                <p className="text-coral font-semibold text-sm sm:text-base mb-2">{intern.company}</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4">{intern.description}</p>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Program Highlights:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
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
              <div className="flex justify-center mt-auto pt-4 sm:pt-6">
                <button
                  onClick={() => openDriveFolder(intern.driveFolder)}
                  className="bg-navy hover:bg-primary-800 text-white font-semibold text-sm sm:text-base py-2 px-4 sm:px-6 rounded-lg transition-colors"
                >
                  View image gallery
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
      </main>

      {/* Ticket Reservation Modal */}
      {isReservationModalOpen && selectedEvent && (
        <TicketReservationModal event={selectedEvent} isOpen={isReservationModalOpen} onClose={() => setIsReservationModalOpen(false)} />
      )}
    </div>
  );
};

export default Events;
