import React from 'react';
import { Users, Heart, Lightbulb, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of community and strive to create meaningful connections among CUFE students.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions to address challenges in our community.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve common goals and support each other in our personal and professional growth.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all our activities and maintain high standards in everything we do.'
    }
  ];

  const testimonials = [];

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
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary-800 text-white py-16 overflow-hidden relative">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full opacity-20" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-coral rounded-full opacity-20" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            About Pascal
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Discover our story, mission, and the passionate community behind Pascal CUFE
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Pascal Academy Founded in 2020 at Cairo University
                  Faculty of Engineering , Pascal Academy is a pioneering
                  student-led initiative under the supervision of Prof.
                  Emad El-Kashef, head of the Central Workshops and
                  the Development Research & Technological Planning
                  Centre.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                   Today, Pascal stands as one of the most active and
                    influential student communities in Mechanical
                    engineering education across Egypt
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/mechS.jpeg"
                alt="Pascal team meeting"
                className="rounded-lg shadow-lg"
              />
              <motion.div
                className="absolute inset-0 bg-navy/10 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do at Pascal
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center hover-lift"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="h-8 w-8 text-navy" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
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
            Join Our Community
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to make an impact? Connect with us and be part of our mission to create 
            positive change in the CUFE community.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/events"
              className="inline-flex items-center px-8 py-3 bg-coral hover:bg-coral/90 text-white font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Attend Our Events
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;