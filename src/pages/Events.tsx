import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Brain, Building2, Briefcase, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from '../components/EventCard';
import TicketReservationModal from '../components/TicketReservationModal';

type EventCategory = 'workshops' | 'fieldTrips' | 'internships';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<EventCategory>('workshops');
  const [expandedFieldTrip, setExpandedFieldTrip] = useState<number | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<{ images: string[]; title: string } | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const upcomingEvents = [];
  

  const workshops = [
    {
      id: 1,
      title: 'Mecha Magic 2027',
      year: '2025',
      date: 'February 28, 2025',
      description: 'Pascal Academy brought together over 500 engineering students from across Egypt for a full day of learning, networking, and inspiration',
      status: 'Completed',
      attendees: '500+',
      banner: '/m.jpg',
      images: [
        '/m.jpg',
        '/mechaM.jpg',
        '/mechaM2.jpg',
        '/mechaM3.jpg',
        '/mechaM4.jpg'
      ],
      highlights: [
        'Participation from 13+ student activities and organizations representing different universities',
        'Guest Speakers: 8 industry-leading experts in mechanical and industrial engineering',
        'Full day of technical workshops and networking sessions',
        'Over 500 students from across Egypt participated'
      ]
    },
    {
      id: 2,
      title: 'Mecha Verse 2025',
      year: '2025',
      date: 'February 8, 2025',
      description: 'An engineering experience that bridged creativity, innovation, and real industry impact! Mecha Verse was the first-ever exhibition in Egypt dedicated to showcasing mechanical engineering graduation projects, where the brightest ideas met real opportunities.',
      status: 'Completed',
      attendees: '450+',
      banner: '/MAIN BANNER final ver. 169.png',
      images: [
        '/MAIN BANNER final ver. 169.png',
        '/verse.jpg',
        '/verse5.jpeg'
      ],
      highlights: [
        'First-ever mechanical engineering graduation projects exhibition in Egypt',
        'Showcased innovative projects bridging creativity and industry impact',
        'Connected students with real opportunities in the engineering field',
        'Successful networking platform for future engineers'
      ]
    }
  ];

  const fieldTrips = [
    {
      id: 1,
      title: 'Promec Industrial Visit',
      location: 'Promec Factory, Egypt',
      date: 'March 15, 2025',
      description: 'An insightful visit to one of Egypt\'s leading industrial manufacturing facilities, exploring modern production lines and engineering innovations.',
      banner: '/promec.jpg',
      images: [
        '/promec.jpg',
        '/promec.jpg'
      ]
    },
    {
      id: 2,
      title: 'EMC Factory Tour',
      location: 'Egyptian Media Company, Cairo',
      date: 'March 22, 2025',
      description: 'Discover the intersection of mechanical engineering and media technology in this comprehensive factory tour.',
      banner: '/emc.jpg',
      images: [
        '/emc.jpg',
        '/emc.jpg'
      ]
    },
    {
      id: 3,
      title: 'El-Attal Industrial Complex',
      location: 'El-Attal, 6th of October City',
      date: 'April 5, 2025',
      description: 'Explore heavy machinery manufacturing and precision engineering at El-Attal industrial facilities.',
      banner: '/elattal.jpg',
      images: [
        '/elattal.jpg',
        '/elattal.jpg'
      ]
    },
    {
      id: 4,
      title: 'Obour City Engineering Hub',
      location: 'Obour City, Egypt',
      date: 'April 12, 2025',
      description: 'Visit multiple engineering facilities and innovation centers in Egypt\'s growing industrial zone.',
      banner: '/obour.jpg',
      images: [
        '/obour.jpg',
        '/obour.jpg'
      ]
    },
    {
      id: 5,
      title: 'Simplex Manufacturing Tour',
      location: 'Simplex Facilities',
      date: 'April 19, 2025',
      description: 'Experience cutting-edge manufacturing processes and quality control systems in action.',
      banner: '/simplex.jpg',
      images: [
        '/simplex.jpg',
        '/simplex.jpg'
      ]
    },
    {
      id: 6,
      title: 'El-Waha Industrial Visit',
      location: 'El-Waha, Egypt',
      date: 'April 26, 2025',
      description: 'Tour advanced production facilities and learn about sustainable manufacturing practices.',
      banner: '/elwaha.jpg',
      images: [
        '/elwaha.jpg',
        '/elwaha.jpg'
      ]
    }
  ];

  const internships = [
    {
      id: 1,
      title: 'Summer Engineering Internship',
      company: 'Leading Industrial Partner',
      description: 'A comprehensive 8-week summer internship program providing hands-on experience in mechanical engineering, working on real projects with industry professionals.',
      duration: 'Summer 2025 (8 weeks)',
      banner: '/AI.jpg',
      highlights: [
        'Work on real engineering projects',
        'Mentorship from industry experts',
        'Networking opportunities',
        'Certificate of completion'
      ]
    },
    {
      id: 2,
      title: 'Winter Training Program',
      company: 'Technology Solutions Corp',
      description: 'A focused 4-week winter training program covering automation, control systems, and modern manufacturing technologies.',
      duration: 'Winter 2025 (4 weeks)',
      banner: '/AI-1200x800.jpg',
      highlights: [
        'Advanced technical training',
        'Industry certifications',
        'Practical workshops',
        'Career development sessions'
      ]
    }
  ];

  const handleReserveTicket = (event: any) => {
    setSelectedEvent(event);
    setIsReservationModalOpen(true);
  };

  const openGallery = (images: string[], title: string) => {
    setSelectedGallery({ images, title });
    setCurrentGalleryIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentGalleryIndex(0);
  };

  const nextGalleryImage = () => {
    if (selectedGallery) {
      setCurrentGalleryIndex((prev) => (prev + 1) % selectedGallery.images.length);
    }
  };

  const prevGalleryImage = () => {
    if (selectedGallery) {
      setCurrentGalleryIndex((prev) => (prev - 1 + selectedGallery.images.length) % selectedGallery.images.length);
    }
  };

  const tabs = [
    { id: 'workshops' as EventCategory, label: 'Workshops', icon: Brain },
    { id: 'fieldTrips' as EventCategory, label: 'Field Trips', icon: Building2 },
    { id: 'internships' as EventCategory, label: 'Internships', icon: Briefcase }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-primary-900 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pascal Events
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our workshops, field trips, and internship experiences
          </motion.p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-navy text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {/* Workshops Tab */}
            {activeTab === 'workshops' && (
              <motion.div
                key="workshops"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {workshops.map((workshop) => (
                  <div key={workshop.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={workshop.banner}
                          alt={workshop.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{workshop.title}</h3>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {workshop.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{workshop.attendees} attendees</span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6">{workshop.description}</p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                          <ul className="space-y-2">
                            {workshop.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => openGallery(workshop.images, workshop.title)}
                          className="bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                        >
                          View Photo Gallery
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Field Trips Tab */}
            {activeTab === 'fieldTrips' && (
              <motion.div
                key="fieldTrips"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {fieldTrips.map((trip) => (
                  <div key={trip.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      onClick={() => setExpandedFieldTrip(expandedFieldTrip === trip.id ? null : trip.id)}
                      className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={trip.banner}
                          alt={trip.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
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
                      <motion.div
                        animate={{ rotate: expandedFieldTrip === trip.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedFieldTrip === trip.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200"
                        >
                          <div className="p-6">
                            <p className="text-gray-600 mb-6">{trip.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                              {trip.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`${trip.title} - Photo ${index + 1}`}
                                  className="w-full h-32 object-cover rounded-lg"
                                />
                              ))}
                            </div>
                            <button
                              onClick={() => openGallery(trip.images, trip.title)}
                              className="bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                            >
                              View Full Gallery
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Internships Tab */}
            {activeTab === 'internships' && (
              <motion.div
                key="internships"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {internships.map((internship) => (
                  <div key={internship.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src={internship.banner}
                      alt={internship.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h3>
                      <p className="text-coral font-semibold mb-3">{internship.company}</p>
                      <p className="text-gray-600 mb-4">{internship.description}</p>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Program Highlights:</h4>
                        <ul className="space-y-2">
                          {internship.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Ticket Reservation Modal */}
      {isReservationModalOpen && selectedEvent && (
        <TicketReservationModal
          event={selectedEvent}
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      )}

      {/* Gallery Modal */}
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
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentGalleryIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
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
