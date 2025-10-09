import React, { useState } from "react";
import {
  Brain,
  Megaphone,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const Committees = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const committees = [
    {
      id: 1,
      name: 'AI & ML Committee',
      icon: Brain,
      description: 'Focuses on artificial intelligence and machine learning applications in engineering. Develops AI-driven solutions, conducts research on emerging technologies, and organizes workshops on data science and automation.',
      responsibilities: ['AI research and development', 'Machine learning workshops', 'Data analysis projects', 'Automation solutions'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    },
    {
      id: 2,
      name: 'Automotive Committee',
      icon: Car,
      description: 'Dedicated to automotive engineering and vehicle technology. Works on automotive projects, organizes car shows, and connects students with automotive industry professionals.',
      responsibilities: ['Vehicle design projects', 'Automotive workshops', 'Industry partnerships', 'Racing team support'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    },
    {
      id: 3,
      name: 'Graphic Design Committee',
      icon: Palette,
      description: 'Creates visual content and branding materials for Pascal. Designs posters, social media content, presentations, and maintains the visual identity of all Pascal activities.',
      responsibilities: ['Visual branding', 'Social media graphics', 'Event materials design', 'Website graphics'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1922256062001660'
    },
    {
      id: 4,
      name: 'HR Committee',
      icon: UserCheck,
      description: 'Manages human resources and member relations within Pascal. Handles recruitment, member development, team building activities, and maintains a positive organizational culture.',
      responsibilities: ['Member recruitment', 'Team development', 'Conflict resolution', 'Performance evaluation'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    },
    {
      id: 5,
      name: 'Marketing Committee',
      icon: Megaphone,
      description: 'Promotes Pascal events and activities across various platforms. Develops marketing strategies, manages social media presence, and builds partnerships with other organizations.',
      responsibilities: ['Social media management', 'Event promotion', 'Partnership development', 'Brand awareness'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/689435420861447'

    },
    {
      id: 6,
      name: 'Photography & Video Editing Committee',
      icon: Camera,
      description: 'Captures and documents Pascal events through photography and videography. Creates promotional videos, event highlights, and maintains a visual archive of Pascal activities.',
      responsibilities: ['Event photography', 'Video production', 'Content editing', 'Visual documentation'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    },
    {
      id: 7,
      name: 'ER Committee',
      icon: Globe,
      description: 'Manages external relations and partnerships. Builds connections with industry professionals, other student organizations, and academic institutions to expand Pascal\'s network.',
      responsibilities: ['Industry partnerships', 'Inter-university relations', 'Guest speaker coordination', 'Networking events'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    },
    {
      id: 8,
      name: 'CFD Committee',
      icon: Wind,
      description: 'Specializes in Computational Fluid Dynamics and simulation technologies. Conducts CFD analysis, organizes simulation workshops, and works on fluid mechanics projects.',
      responsibilities: ['CFD analysis', 'Simulation workshops', 'Fluid mechanics projects', 'Software training'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    },
    {
      id: 9,
      name: 'Hydraulic & Pneumatic Committee',
      icon: Wrench,
      description: 'Focuses on hydraulic and pneumatic systems in mechanical engineering. Develops projects related to fluid power systems and organizes hands-on workshops.',
      responsibilities: ['Hydraulic system design', 'Pneumatic projects', 'Fluid power workshops', 'System maintenance'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    },
    {
      id: 10,
      name: 'R&D Committee',
      icon: Lightbulb,
      description: 'Drives research and development initiatives within Pascal. Identifies emerging technologies, conducts feasibility studies, and develops innovative solutions for engineering challenges.',
      responsibilities: ['Research projects', 'Innovation development', 'Technology assessment', 'Patent research'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/examplevideo'
    }
  ];

  const openVideo = (id: number) => {
    setScrollY(window.scrollY);
    setActiveVideo(id);
    document.body.style.overflow = "hidden"; // prevent scrolling behind
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = "auto";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary-800 text-white py-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Pascal's Committees
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Meet the specialized teams that drive Pascal's mission forward through expertise and dedication.
          </motion.p>
        </div>
      </section>

      {/* Committees Grid */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {committees.map((committee) => (
              <motion.div
                key={committee.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-[9/16] flex flex-col items-center justify-center bg-gray-100 cursor-pointer group"
                  onClick={() => openVideo(committee.id)}
                >
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-navy/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <committee.icon className="h-8 w-8 text-navy" />
                    </motion.div>
                    <p className="text-gray-500 text-sm mb-2">Committee Video</p>
                    <motion.button
                      className="inline-flex items-center gap-2 px-4 py-2 bg-coral hover:bg-coral/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-4 w-4" fill="currentColor" />
                      <span>Play Video</span>
                    </motion.button>
                  </div>
                </div>

                {/* Committee Info */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center mr-3">
                      <committee.icon className="h-5 w-5 text-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {committee.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {committee.description}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-1">
                    {committee.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-navy rounded-full mr-2 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Popup Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center px-4"
            style={{ top: `${scrollY}px` }} // Keep modal at current scroll position
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-black rounded-2xl overflow-hidden w-full max-w-[400px] aspect-[9/16] shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src={
                  committees.find((c) => c.id === activeVideo)?.videoUrl || ""
                }
                width="100%"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold"
                onClick={closeVideo}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Committees;
