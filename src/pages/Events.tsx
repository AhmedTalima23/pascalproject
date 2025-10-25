import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Brain, Building2, Briefcase, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TicketReservationModal from '../components/TicketReservationModal';

type FieldTripItem = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  banner: string;
  images: string[];
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
  images: string[];
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
};

const Events = () => {
  // Lightbox / gallery state
  const [selectedGallery, setSelectedGallery] = useState<{ images: string[]; title: string } | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Accordion state for Field Trips
  const [expandedFieldTrip, setExpandedFieldTrip] = useState<number | null>(null);

  // Optional ticket modal (kept for compatibility)
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // ---------- Data (placeholders & your existing events) ----------
  const events: WorkshopItem[] = [
    {
      id: 1,
      title: 'Mecha Magic 2025',
      year: '2025',
      date: 'February 28, 2025',
      description:
        'Pascal Academy brought together over 500 engineering students from across Egypt for a full day of learning, networking, and inspiration.',
      status: 'Completed',
      attendees: '500+',
      banner: '/m.jpg',
      images: ['/m.jpg', '/mechaM.jpg', '/mechaM2.jpg', '/mechaM3.jpg'],
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
      images: ['/MAIN BANNER final ver. 169.png', '/verse.jpg', '/verse5.jpeg', '/verse4.jpg'],
      highlights: [
        'First-ever mechanical engineering graduation projects exhibition in Egypt',
        'Showcased innovative projects bridging creativity and industry impact'
      ]
    }
  ];

  const workshops: WorkshopItem[] = [
    // reusing the same two workshops (keeps the requested duplicates)
    ...events
  ];

  const fieldTrips: FieldTripItem[] = [
    {
      id: 1,
      title: 'Promec Industrial Visit',
      location: 'Promec Factory, Egypt',
      date: 'March 15, 2025',
      description:
        "An insightful visit to one of Egypt's leading industrial manufacturing facilities, exploring modern production lines and engineering innovations.",
      banner: '/promec.jpg',
      images: ['/promec.jpg', '/promec2.jpg', '/promec3.jpg', '/promec4.jpg']
    },
    {
      id: 2,
      title: 'EMC Factory Tour',
      location: 'Egyptian Media Company, Cairo',
      date: 'March 22, 2025',
      description: 'Discover the intersection of mechanical engineering and media technology in this comprehensive factory tour.',
      banner: '/emc.jpg',
      images: ['/emc.jpg', '/emc2.jpg', '/emc3.jpg']
    },
    {
      id: 3,
      title: 'El-Attal Industrial Complex',
      location: 'El-Attal, 6th of October City',
      date: 'April 5, 2025',
      description: 'Explore heavy machinery manufacturing and precision engineering at El-Attal industrial facilities.',
      banner: '/elattal.jpg',
      images: ['/elattal.jpg', '/elattal2.jpg', '/elattal3.jpg']
    },
    {
      id: 4,
      title: 'Obour City Engineering Hub',
      location: 'Obour City, Egypt',
      date: 'April 12, 2025',
      description: "Visit multiple engineering facilities and innovation centers in Egypt's growing industrial zone.",
      banner: '/obour.jpg',
      images: ['/obour.jpg', '/obour2.jpg', '/obour3.jpg']
    },
    {
      id: 5,
      title: 'Simplex Manufacturing Tour',
      location: 'Simplex Facilities',
      date: 'April 19, 2025',
      description: 'Experience cutting-edge manufacturing processes and quality control systems in action.',
      banner: '/simplex.jpg',
      images: ['/simplex.jpg', '/simplex2.jpg', '/simplex3.jpg']
    },
    {
      id: 6,
      title: 'El-Waha Industrial Visit',
      location: 'El-Waha, Egypt',
      date: 'April 26, 2025',
      description: 'Tour advanced production facilities and learn about sustainable manufacturing practices.',
      banner: '/elwaha.jpg',
      images: ['/elwaha.jpg', '/elwaha2.jpg', '/elwaha3.jpg']
    }
  ];

  const internships: InternshipItem[] = [
    {
      id: 1,
      title: 'Summer Engineering Internship',
      company: 'Leading Industrial Partner',
      description:
        'A comprehensive 8-week summer internship program providing hands-on experience in mechanical engineering, working on real projects with industry professionals.',
      duration: 'Summer 2025 (8 weeks)',
      banner: '/AI.jpg',
      highlights: ['Work on real engineering projects', 'Mentorship from industry experts', 'Networking opportunities', 'Certificate of completion']
    },
    {
      id: 2,
      title: 'Winter Training Program',
      company: 'Technology Solutions Corp',
      description:
        'A focused 4-week winter training program covering automation, control systems, and modern manufacturing technologies.',
      duration: 'Winter 2025 (4 weeks)',
      banner: '/AI-1200x800.jpg',
      highlights: ['Advanced technical training', 'Industry certifications', 'Practical workshops', 'Career development sessions']
    }
  ];

  // ---------- Handlers ----------
  const openGallery = (images: string[], title: string, startIndex = 0) => {
    setSelectedGallery({ images, title });
    setCurrentGalleryIndex(startIndex);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentGalleryIndex(0);
  };

  const nextGalleryImage = () => {
    if (!selectedGallery) return;
    setCurrentGalleryIndex((prev) => (prev + 1) % selectedGallery.images.length);
  };

  const prevGalleryImage = () => {
    if (!selectedGallery) return;
    setCurrentGalleryIndex((prev) => (prev - 1 + selectedGallery.images.length) % selectedGallery.images.length);
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
            Explore our Events, Workshops, Industry Field Trips, and Internship Programs — all designed to connect students with real-world engineering.
          </motion.p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
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
                        onClick={() => openGallery(event.images, event.title)}
                        className="bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                      >
                        View Photo Gallery
                      </button>
                      {/* <button
                        onClick={() => handleReserveTicket(event)}
                        className="bg-white border border-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-shadow shadow-sm hover:shadow-md"
                      >
                        Reserve (demo)
                      </button> */}
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

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Gallery</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {wk.images.slice(0, 6).map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => openGallery(wk.images, wk.title, idx)}
                            className="w-full h-20 rounded-lg overflow-hidden focus:outline-none"
                          >
                            <img src={img} alt={`${wk.title} ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => openGallery(wk.images, wk.title)}
                        className="bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                      >
                        View Gallery
                      </button>
                      <button
                        onClick={() => handleReserveTicket(wk)}
                        className="bg-white border border-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg"
                      >
                        Reserve (demo)
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
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img src={trip.banner} alt={trip.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{trip.title}</h3>
                      <div className="flex items-center gap-3 text-gray-600 text-sm mt-1">
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
                      <div className="p-6">
                        <p className="text-gray-600 mb-6">{trip.description}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {trip.images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => openGallery(trip.images, trip.title, index)}
                              className="w-full h-32 rounded-lg overflow-hidden focus:outline-none"
                            >
                              <img src={image} alt={`${trip.title} - Photo ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => openGallery(trip.images, trip.title)}
                            className="bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                          >
                            View Full Gallery
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

          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((intern) => (
              <motion.div
                key={intern.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                whileHover={{ y: -4 }}
              >
                <img src={intern.banner} alt={intern.title} className="w-full h-44 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{intern.title}</h3>
                    <span className="text-sm text-gray-500">{intern.duration}</span>
                  </div>

                  <p className="text-coral font-semibold mb-2">{intern.company}</p>
                  <p className="text-gray-600 mb-4">{intern.description}</p>

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
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Ticket Reservation Modal (kept as before) */}
      {isReservationModalOpen && selectedEvent && (
        <TicketReservationModal event={selectedEvent} isOpen={isReservationModalOpen} onClose={() => setIsReservationModalOpen(false)} />
      )}

      {/* Gallery Lightbox (reused across all sections) */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeGallery}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>

              <div className="relative">
                <img
                  src={selectedGallery.images[currentGalleryIndex]}
                  alt={`${selectedGallery.title} - Photo ${currentGalleryIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                {selectedGallery.images.length > 1 && (
                  <>
                    <button
                      onClick={prevGalleryImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                    >
                      <ChevronDown className="h-6 w-6 transform rotate-90" />
                    </button>
                    <button
                      onClick={nextGalleryImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                    >
                      <ChevronDown className="h-6 w-6 transform -rotate-90" />
                    </button>
                  </>
                )}
              </div>

              <div className="text-center mt-4">
                <p className="text-white text-lg font-semibold">{selectedGallery.title}</p>
                <p className="text-gray-300 text-sm mt-1">
                  Photo {currentGalleryIndex + 1} of {selectedGallery.images.length}
                </p>
              </div>

              {selectedGallery.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {selectedGallery.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${index === currentGalleryIndex ? 'bg-white w-8' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
