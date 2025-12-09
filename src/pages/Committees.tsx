import React, { useState } from 'react';
import {
  Users, Brain, Car, Palette, UserCheck, Megaphone, Camera, Globe, Wind, Wrench, Lightbulb, Play, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Committees = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

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
      videoUrl: 'https://drive.google.com/file/d/FILE_ID/preview'
    },
    {
      id: 3,
      name: 'Graphic Design Committee',
      icon: Palette,
      description: 'Creates visual content and branding materials for Pascal...',
      responsibilities: ['Visual branding', 'Social media graphics', 'Event materials design', 'Website graphics'],
      image: '/committee-placeholder.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUTUBE_VIDEO_ID'
    }
    // Add more committees...
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Pascal's Committees
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Video Section */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
                          style={{ border: 'none' }}
                          allow="autoplay; encrypted-media; picture-in-picture"
                          allowFullScreen
                          title={committee.name}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                        onClick={() => setPlayingVideo(committee.id)}
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Committee Info */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center mr-3">
                      <committee.icon className="h-5 w-5 text-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{committee.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{committee.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Responsibilities:</h4>
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

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setPlayingVideo(null)}
          >
            <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, type: 'spring', damping: 25 }}
                className="relative bg-black rounded-lg sm:rounded-2xl shadow-2xl overflow-hidden mx-auto"
                style={{ width: 'min(600px, calc(100vw - 2rem))', aspectRatio: '16/9' }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  className="absolute top-3 right-3 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg"
                  onClick={() => setPlayingVideo(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.button>

                {/* Video Embed */}
                <div className="w-full h-full">
                  <iframe
                    src={committees.find(c => c.id === playingVideo)?.videoUrl}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="Committee Video"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Committees;
