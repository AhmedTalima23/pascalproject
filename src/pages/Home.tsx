import React from 'react';
import { Calendar, Users, Target, ArrowRight, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import UpcomingEventCard from '../components/UpcomingEventCard';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Calendar, label: 'Events Organized', value: '7+' },
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
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
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

      {/* Upcoming Event Highlight */}
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
              Upcoming Event
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss our next exciting event!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <UpcomingEventCard />
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
