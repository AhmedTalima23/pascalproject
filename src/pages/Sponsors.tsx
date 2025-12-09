import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Target, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: 'ROCOL Egypt',
      logo: '/sponsors/rocol-logo.png',
      category: 'Annual Sponsor',
      description: 'Globally known for speciality lubrication and maintenance solutions, supporting industries with high-performance products that keep machines running at their best.',
      parentCompany: 'Atlantic International Corporation',
      vicePresident: 'Anas Alryan',
      ceo: 'Amr Elzaky',
      signingDate: 'This week',
      image: '/sponsors/rocol-banner.jpg',
      features: [
        'Technical exposure to industry leaders',
        'Industry partnerships and collaborations',
        'Future career pathways',
        'Innovation and development opportunities'
      ]
    }
  ];

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
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gold/20 text-gold rounded-full mb-6 border border-gold/30"
              variants={itemVariants}
            >
              <Award className="h-5 w-5 mr-2" />
              <span className="font-semibold">Our Valued Sponsors</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Our Sponsors
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We're honored to partner with industry-leading organizations that believe in our mission to empower engineers and drive innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Sponsor Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Sponsor Header with Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center">
                  <span className="inline-flex items-center px-4 py-2 bg-gold/20 text-navy rounded-full text-sm font-bold border border-gold/30 mb-4">
                    <Target className="h-4 w-4 mr-2" />
                    {sponsor.category}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-2">
                  {sponsor.name}
                </h2>
                <p className="text-lg text-gray-600 italic">Under {sponsor.parentCompany}</p>
              </div>

              {/* Main Content Grid */}
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Left: Logo and Key Info */}
                <motion.div
                  className="flex flex-col gap-8"
                  variants={itemVariants}
                >
                  {/* Logo Display */}
                  <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center h-64">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=ROCOL+Egypt';
                      }}
                    />
                  </div>

                  {/* Executive Info Card */}
                  <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-xl p-6 border border-navy/20">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Partnership Highlights</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 font-semibold uppercase">Signing Authority</p>
                        <p className="text-gray-900 font-semibold">Pascal VP: {sponsor.vicePresident}</p>
                        <p className="text-gray-900 font-semibold">ROCOL CEO: {sponsor.ceo}</p>
                      </div>
                      <div className="pt-4 border-t border-navy/20">
                        <p className="text-sm text-gray-600 font-semibold uppercase">Signed</p>
                        <p className="text-gray-900 font-semibold">{sponsor.signingDate}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right: Description and Benefits */}
                <motion.div
                  className="flex flex-col gap-6"
                  variants={itemVariants}
                >
                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About {sponsor.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {sponsor.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Partnering with such an innovative brand is a milestone for Pascal. This sponsorship opens new doors and creates even more opportunities for our community.
                    </p>
                  </div>

                  {/* Features/Benefits List */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">What This Partnership Brings</h4>
                    <div className="space-y-3">
                      {sponsor.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <Zap className="h-5 w-5 text-gold" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Accent Line */}
              <motion.div
                className="h-1 bg-gradient-to-r from-gold via-coral to-navy rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Why Partner with Pascal Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Pascal?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with a vibrant community of 150+ engineering students and shape the future of the industry.
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
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Talented Pool</h3>
              <p className="text-gray-600">
                Access to 150+ talented engineering students passionate about innovation, learning, and real-world applications.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brand Visibility</h3>
              <p className="text-gray-600">
                Showcase your brand at high-impact events, workshops, and initiatives that reach future engineering leaders and innovators.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-navy/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Impact</h3>
              <p className="text-gray-600">
                Be part of a mission that empowers students, drives innovation, and strengthens the engineering ecosystem.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
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
            Interested in Becoming a Sponsor?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us in empowering the next generation of engineers. Let's create opportunities together.
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
              href="/partners"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold rounded-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              View All Partners
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;