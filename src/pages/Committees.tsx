import React, { useState, useEffect, useRef } from 'react';
import {
  Users, Brain, Car, Palette, UserCheck, Megaphone, Camera, Globe, Wind, Wrench, Lightbulb, Play, X, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Committees = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [cardPosition, setCardPosition] = useState<number>(0);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Track screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to modal position after it opens
  useEffect(() => {
    if (playingVideo !== null && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scroll({
          top: cardPosition,
          behavior: 'smooth',
        });
      }, 100);
    }
  }, [playingVideo, cardPosition]);

  const committees = [
    {
      id: 1,
      name: 'AI & ML Committee',
      icon: Brain,
      description: 'Focuses on artificial intelligence and machine learning applications in engineering...',
      responsibilities: ['AI research and development', 'Machine learning workshops', 'Data analysis projects', 'Automation solutions'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/1jcIY87oq-RbTNHToeBt6VarhzY_csyxD/preview'
    },
    {
      id: 2,
      name: 'Automotive Committee',
      icon: Car,
      description: 'Dedicated to automotive engineering and vehicle technology...',
      responsibilities: ['Vehicle design projects', 'Automotive workshops', 'Industry partnerships', 'Racing team support'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/12g1zHUpexRPPDURVzAWbcZSlZkQ4T4_e/preview'
    },
    {
      id: 3,
      name: 'Graphic Design Committee',
      icon: Palette,
      description: 'Creates visual content and branding materials for Pascal...',
      responsibilities: ['Visual branding', 'Social media graphics', 'Event materials design', 'Website graphics'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/1mT4R9vD3MwO73Isw-GcjOprlgykBJoAC/preview'
    },
    {
      id: 4,
      name: 'HR Committee',
      icon: UserCheck,
      description: 'Manages human resources and member relations within Pascal. Handles recruitment, member development, team building activities, and maintains a positive organizational culture.',
      responsibilities: ['Recruitment & Onboarding', 'Team Building & Engagement', 'Member Support', 'Performance & Development'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/15VmfSpTydL3MIfYp7y6WVabAKIp-A5Wf/preview'
    },
    {
      id: 5,
      name: 'Marketing Committee',
      icon: Megaphone,
      description: 'Promotes Pascal events and activities across various platforms. Develops marketing strategies, manages social media presence, and builds partnerships with other organizations.',
      responsibilities: ['Social media management', 'Event promotion', 'Partnership development', 'Brand awareness'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/1WgqtCVwIjQaz96HkSXVSXmdPiQSgsWH1/preview'
    },
    {
      id: 6,
      name: 'Photography & Video Committee',
      icon: Camera,
      description: 'Captures and documents Pascal events through photography and videography. Creates promotional videos, event highlights, and maintains a visual archive of Pascal activities.',
      responsibilities: ['Event photography', 'Video production', 'Content editing', 'Visual documentation'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/15yCyfX9wYPNTzYK-EM53wwNZ0TikMnns/preview'
    },
    {
      id: 7,
      name: 'ER Committee',
      icon: Globe,
      description: 'Manages external relations and partnerships. Builds connections with industry professionals, other student organizations, and academic institutions to expand Pascal\'s network.',
      responsibilities: ['Industry partnerships', 'Inter-university relations', 'Guest speaker coordination', 'Networking events'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/1CqQwuRuiz2HCEw2Dh2QPvyyToV765AiI/preview'
    },
    {
      id: 8,
      name: 'CFD Committee',
      icon: Wind,
      description: 'Specializes in Computational Fluid Dynamics and simulation technologies. Conducts CFD analysis, organizes simulation workshops, and works on fluid mechanics projects.',
      responsibilities: ['CFD analysis', 'Simulation workshops', 'Fluid mechanics projects', 'Software training'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/1l_9zrv3eIqP1O1IYdpluDiHvElblPrse/preview'
    },
    {
      id: 9,
      name: 'Hydraulic & Pneumatic Committee',
      icon: Wrench,
      description: 'Focuses on hydraulic and pneumatic systems in mechanical engineering. Develops projects related to fluid power systems and organizes hands-on workshops.',
      responsibilities: ['Hydraulic system design', 'Pneumatic projects', 'Fluid power workshops', 'System maintenance'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/1aBboBMJfD5fMAchC0wNJ2PDYw7UIgZRp/preview'
    },
    {
      id: 10,
      name: 'R&D Committee',
      icon: Lightbulb,
      description: 'Drives research and development initiatives within Pascal. Identifies emerging technologies, conducts feasibility studies, and develops innovative solutions for engineering challenges.',
      responsibilities: ['Research projects', 'Innovation development', 'Technology assessment', 'Patent research'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://drive.google.com/file/d/1pxxxlo-cNrXtGRdTEq2r6jrixPnFp98S/preview'
    }
    // Add more committees...
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handlePlayVideo = (id: number) => {
    // Get the position of the clicked card
    const cardElement = cardRefs.current[id];
    if (cardElement) {
      const cardRect = cardElement.getBoundingClientRect();
      setCardPosition(window.scrollY + cardRect.top - 20);
    }
    setPlayingVideo(id);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Optimized for Mobile */}
      <section className="relative bg-gradient-to-br from-navy via-primary-900 to-primary-800 text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-gold rounded-full opacity-20" />
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 bg-coral rounded-full opacity-20" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Pascal's Committees
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            Meet the specialized teams that drive Pascal's mission forward through expertise and dedication.
          </motion.p>
        </div>
      </section>

      {/* Committees Grid - Responsive Layout */}
      <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {committees.map((committee) => (
              <motion.div
                key={committee.id}
                ref={(el) => {
                  if (el) cardRefs.current[committee.id] = el;
                }}
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: isMobile ? 0 : -8 }}
              >
                {/* Video Section - Responsive Height */}
                <div className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden aspect-video">
                  <AnimatePresence mode="wait">
                    {playingVideo === committee.id ? (
                      <motion.div
                        key="video"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <iframe
                          src={committee.videoUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 'none', overflow: 'hidden' }}
                          scrolling="no"
                          frameBorder="0"
                          allowFullScreen={true}
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          title={committee.name}
                        />
                      </motion.div>
                    ) : (
                      <motion.button
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => handlePlayVideo(committee.id)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded-lg"
                        aria-label={`Play ${committee.name} video`}
                      >
                        <div className="text-center">
                          <motion.div
                            className="w-14 sm:w-16 h-14 sm:h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-navy/20 transition-colors"
                            whileHover={{ rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.6 }}
                          >
                            <committee.icon className="h-6 sm:h-8 w-6 sm:w-8 text-navy" />
                          </motion.div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-2 font-medium">Committee Video</p>
                          <motion.div
                            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-coral hover:bg-coral/90 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all duration-300 shadow-md group-hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="h-3 sm:h-4 w-3 sm:w-4" fill="currentColor" />
                            <span className="hidden sm:inline">Play Video</span>
                            <span className="sm:hidden">Play</span>
                          </motion.div>
                        </div>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                {/* Committee Info - Expandable on Mobile */}
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <committee.icon className="h-5 sm:h-5 w-5 sm:w-5 text-navy" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-snug">{committee.name}</h3>
                  </div>

                  {/* Mobile: Expandable Description */}
                  <div className="md:hidden">
                    <motion.button
                      onClick={() => setExpandedMobile(expandedMobile === committee.id ? null : committee.id)}
                      className="w-full text-left font-medium text-navy text-xs sm:text-sm flex items-center justify-between py-2 hover:text-primary-800 transition-colors"
                      aria-expanded={expandedMobile === committee.id}
                    >
                      Details
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          expandedMobile === committee.id ? 'rotate-180' : ''
                        }`}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {expandedMobile === committee.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 pt-2">
                            {committee.description}
                          </p>
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1.5">
                            {committee.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600 gap-2">
                                <span className="w-1.5 h-1.5 bg-navy rounded-full mt-1 flex-shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Desktop: Always Visible */}
                  <div className="hidden md:block">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {committee.description}
                    </p>
                    <h4 className="font-semibold text-gray-900 text-sm mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-1.5">
                      {committee.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600 gap-2">
                          <span className="w-1.5 h-1.5 bg-navy rounded-full mt-1.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Video Modal - Appears at Clicked Card Position */}
      <AnimatePresence>
        {playingVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md pointer-events-auto overflow-hidden"
            onClick={handleCloseVideo}
          >
            {/* Scrollable Container with video positioned at card location */}
            <div
              ref={containerRef}
              className="relative w-full h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Spacer to position video at the clicked card */}
              <div style={{ height: `${cardPosition}px` }} />

              {/* Video Modal Container */}
              <div className="flex flex-col items-center justify-center py-8 sm:py-12 min-h-screen">
                <motion.div
                  initial={{ scale: 0.85, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.85, opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                  className="relative w-full bg-black rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    maxWidth: isMobile ? 'calc(100vw - 2rem)' : 'min(800px, calc(100vw - 4rem))',
                    aspectRatio: isMobile ? '9/16' : '16/9',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <motion.button
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-9 sm:w-10 h-9 sm:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg"
                    onClick={handleCloseVideo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close video modal"
                  >
                    <X className="h-5 sm:h-6 w-5 sm:w-6" strokeWidth={2.5} />
                  </motion.button>

                  {/* Video Embed */}
                  <iframe
                    src={committees.find(c => c.id === playingVideo)?.videoUrl}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    scrolling="yes"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Committee Video"
                  />
                </motion.div>
              </div>

              {/* Bottom padding for scrolling */}
              <div className="h-screen" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Committees;