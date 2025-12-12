import React from 'react';
import { Calendar, Users, Target, ArrowRight, Facebook, MapPin, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import UpcomingEventCard from '../components/UpcomingEventCard';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Calendar, label: 'Events Organized', value: '8' },
    // Replace Opportunities Offered stat with a creative breakdown
    {
      icon: Target,
      label: (
        <span>
          Opportunities Offered
          <div className="flex justify-center gap-2 mt-2">
            <span className="inline-flex items-center px-2 py-1 bg-gold/20 text-navy rounded-full text-xs font-semibold">
              <span className="mr-1">7</span>
              <span className="mr-1">Field Trips</span>
            </span>
            <span className="inline-flex items-center px-2 py-1 bg-coral/20 text-coral rounded-full text-xs font-semibold">
              <span className="mr-1">2</span>
              <span>Internships</span>
            </span>
          </div>
        </span>
      ),
      value: '',
    },
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

  const pascalLetters = ['P', 'a', 's', 'c', 'a', 'l'];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-24 h-24 bg-coral/10 rounded-full"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/5 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Add logo above the heading */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/pascal new logo.png"
                alt="Pascal CUFE Logo"
                className="h-16 w-auto mx-auto rounded-lg shadow-lg bg-white"
                style={{ maxWidth: '80px' }}
              />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Welcome to{' '}
              <motion.span
                className="pascal-logo relative inline-block"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
              >
                {pascalLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="pascal-letter"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: 'easeOut'
                    }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}

                {/* Decorative elements around Pascal */}
                <motion.div
                  className="absolute -top-4 -right-4 w-3 h-3 bg-coral rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-2 h-2 bg-gold rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Empowering CUFE students through innovation, community service, and professional development
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.a
                href="/events"
                className="inline-flex items-center px-8 py-3 bg-coral hover:bg-coral/90 text-white font-semibold rounded-lg transition-all duration-300 group hover-lift"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(255, 102, 99, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Events
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://facebook.com/PascalCUFE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold rounded-lg transition-all duration-300 hover-glow"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="mr-2 h-5 w-5" />
                Follow Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group hover-lift"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4 group-hover:bg-gold/30 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-navy" />
                </motion.div>
                {/* Opportunities Offered stat: show creative breakdown, others show value */}
                {index < 2 ? (
                  <motion.div
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                ) : (
                  <div className="mb-2" />
                )}
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Latest News - ROCOL Sponsorship Announcement */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-gold/5 via-coral/5 to-navy/5 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left: Badge and Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Exclusive Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold/30 text-navy rounded-full mb-6 border-2 border-gold font-bold text-sm"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(218, 165, 32, 0.4)',
                    '0 0 0 10px rgba(218, 165, 32, 0)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="h-5 w-5" />
                LATEST NEWS - EXCLUSIVE
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Exciting New Sponsorship with <span className="text-gold">ROCOL Egypt</span>
              </motion.h2>

              <motion.div
                className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p>
                  🎉 <span className="font-bold">We're thrilled to announce our new annual sponsorship with ROCOL Egypt</span>, one of the leading companies under Atlantic International Corporation!
                </p>
                <p>
                  Earlier this week, our Vice President, <span className="font-semibold">Anas Alryan</span>, signed the sponsorship contract with <span className="font-semibold">Mr. Amr Elzaky</span>, CEO of ROCOL Egypt, marking the beginning of a powerful collaboration.
                </p>
                <p>
                  ROCOL is globally known for its speciality lubrication and maintenance solutions, supporting industries with high-performance products that keep machines running at their best. Partnering with such an innovative brand is a milestone for Pascal.
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">What This Partnership Opens:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl leading-none">✓</span>
                    <span className="text-gray-700"><span className="font-semibold">Technical Exposure</span> to industry leaders and innovation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl leading-none">✓</span>
                    <span className="text-gray-700"><span className="font-semibold">Industry Partnerships</span> and collaboration opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl leading-none">✓</span>
                    <span className="text-gray-700"><span className="font-semibold">Future Career Pathways</span> with a globally-recognized company</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl leading-none">✓</span>
                    <span className="text-gray-700"><span className="font-semibold">Community Growth</span> and enhanced opportunities for Pascal members</span>
                  </li>
                </ul>
              </motion.div>

              <motion.p
                className="text-xl font-bold text-navy mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                ⭐ Stay tuned, the best is yet to come!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a
                  href="/sponsors"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-coral hover:from-gold/90 hover:to-coral/90 text-white font-bold rounded-lg transition-all duration-300 group text-lg"
                >
                  Learn More About Our Sponsors
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right: Visual Showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Card with Shadow and Border */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30 bg-white"
                whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(218, 165, 32, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for ROCOL Image - with fallback gradient */}
                <div className="bg-gradient-to-br from-navy via-primary-900 to-navy h-96 md:h-[480px] relative flex items-center justify-center">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-6 left-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-6 right-6 w-32 h-32 bg-coral/20 rounded-full blur-2xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />

                  {/* Content Overlay */}
                  <div className="relative z-10 text-center">
                    {/* <motion.div
                      className="inline-block"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 7, repeat: Infinity }} */}
                    {/* > */}
                      <img
                        src="/sponsor/rocol.png"
                        alt="ROCOL Egypt Logo"
                        className="h-64 w-auto mx-auto mb-6 rounded-lg shadow-lg bg-white"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    {/* </motion.div> */}
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">ROCOL Egypt</h3>
                    <p className="text-gold text-lg font-semibold">Annual Partnership 2025</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We aim to bridge the gap between academic education and professional requirements.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="h-6 w-6 text-navy" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To empower future engineers with the tools and experience necessary to lead, innovate, and succeed.

              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="h-6 w-6 text-coral" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Goals</h3>
              <p className="text-gray-600">
                Raising awareness about mechanical engineering, breaking misconceptions, and guiding students toward successful, impactful careers.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="h-6 w-6 text-green-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impactful Events</h3>
              <p className="text-gray-600">
                Organizing meaningful events, workshops, and community service projects
                that create lasting positive impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Event (replaces previous Upcoming Event Highlight) */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Left: Banner with badges */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/MAIN BANNER final ver. 169.png"
                alt="Featured Event Banner"
                className="w-full h-80 object-cover md:h-[460px]"
              />

              {/* Small ribbon */}
              <div className="absolute top-4 left-4 bg-navy text-white px-3 py-1 rounded-md text-sm font-semibold">
                Featured
              </div>

              {/* Date & stats badges */}
              <div className="absolute right-4 bottom-4 flex flex-col sm:flex-row gap-3">
                <div className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold shadow">
                  Feb 8, 2025
                </div>
                <div className="bg-coral text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                  450+ Attendees
                </div>
              </div>

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </motion.div>

            {/* Right: Details + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Mecha Verse 2025 — Graduation Projects Exhibition
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl">
                A premier showcase where graduating teams present their capstone mechanical engineering projects.
                Connect with industry mentors, explore hands-on demos, and discover recruitment and collaboration opportunities.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-navy mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Date</div>
                    <div className="font-semibold">Feb 8, 2025</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-navy mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-semibold">CUFE Campus — Main Hall</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-navy mt-1" />
                  <div>
                    <div className="text-sm text-gray-500">Attendees</div>
                    <div className="font-semibold">450+</div>
                  </div>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 max-w-xl">
                <li>Live demonstrations of mechanical capstone projects.</li>
                <li>Workshops & mentorship sessions led by industry experts.</li>
                <li>Networking opportunities with partner companies.</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/events"
                  className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-primary-800 transition-all"
                >
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-navy text-navy rounded-lg hover:bg-navy hover:text-white transition-all"
                >
                  Reserve Your Spot
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;