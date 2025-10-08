import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Partners = () => {
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/partners/Achem.png' },
    { id: 2, name: 'Partner 2', logo: '/partners/placeholder2.png' },
    { id: 3, name: 'Partner 3', logo: '/partners/placeholder3.png' },
    { id: 4, name: 'Partner 4', logo: '/partners/placeholder4.png' },
    { id: 5, name: 'Partner 5', logo: '/partners/placeholder5.png' },
    { id: 6, name: 'Partner 6', logo: '/partners/placeholder6.png' },
    { id: 7, name: 'Partner 7', logo: '/partners/placeholder7.png' },
    { id: 8, name: 'Partner 8', logo: '/partners/placeholder8.png' },
  ];

  
  const duplicatedPartners = [...partners, ...partners];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full opacity-20" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-coral rounded-full opacity-20" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Our Partners
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We're proud to collaborate with leading organizations that share our vision for innovation, education, and engineering excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <AnimatedSection className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partnerships span across academic institutions, technology companies, and engineering firms
            </p>
          </motion.div>
        </div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{
                width: 'fit-content',
              }}
              whileHover={{
                animationPlayState: 'paused',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-64 h-40 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-navy/10 to-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-navy/20 group-hover:to-gold/20 transition-all duration-300">
                      <div className="text-navy font-bold text-2xl">{partner.name.split(' ')[1]}</div>
                    </div>
                    <p className="text-gray-700 font-semibold group-hover:text-navy transition-colors duration-300">
                      {partner.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Strategic Partner</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Partnership Benefits Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together, we create opportunities that empower students and drive innovation
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-navy/5 to-navy/10 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Impact</h3>
              <p className="text-gray-600">
                Provide students with real-world insights, mentorship, and hands-on learning experiences that bridge the gap between academia and industry.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gold/5 to-gold/10 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Collaboration</h3>
              <p className="text-gray-600">
                Co-create innovative solutions and research projects that advance engineering excellence and technological development.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-coral/5 to-coral/10 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Building</h3>
              <p className="text-gray-600">
                Strengthen the engineering community by fostering connections between students, professionals, and organizations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <section className="py-16 bg-navy text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-coral rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Become a Partner
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Interested in collaborating with Pascal Academy? Join our growing network of partners driving innovation and learning opportunities.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-coral hover:bg-coral/90 text-white font-semibold rounded-lg transition-all duration-300 group"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 102, 99, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold rounded-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
