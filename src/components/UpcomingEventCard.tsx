import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const UpcomingEventCard: React.FC = () => {
  const upcomingEvent = {
    title: 'Mecha Verse',
    date: '2025-08-02',
    time: '2:00 PM - 5:00 PM',
    location: 'Ministry of Finance Club',
    description:
      'Get ready for an engineering experience that bridges creativity, innovation, and real industry impact! Mecha Verse is the first-ever exhibition in Egypt dedicated to showcasing mechanical engineering graduation projects, where the brightest ideas meet real opportunities.',
    capacity: 500,
    registered: 450,
    image: '/verse5.jpeg', // Place this in your public folder
  };

  const progressPercentage = (upcomingEvent.registered / upcomingEvent.capacity) * 100;

  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden hover-lift"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="md:flex">
        <motion.div
          className="md:w-1/2 relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-64 sm:h-72 md:h-full">
            <img
              src={upcomingEvent.image}
              alt={upcomingEvent.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <div className="md:w-1/2 p-8">
          <motion.div
            className="uppercase tracking-wide text-sm text-navy font-semibold mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Upcoming Event
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {upcomingEvent.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {upcomingEvent.description}
          </motion.p>

          <motion.div
            className="space-y-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center text-gray-600"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="h-5 w-5 mr-3 text-navy" />
              <span>{new Date(upcomingEvent.date).toLocaleDateString()} • {upcomingEvent.time}</span>
            </motion.div>
            <motion.div
              className="flex items-center text-gray-600"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="h-5 w-5 mr-3 text-navy" />
              <span>{upcomingEvent.location}</span>
            </motion.div>
            <motion.div
              className="flex items-center text-gray-600"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Users className="h-5 w-5 mr-3 text-navy" />
              <span>{upcomingEvent.registered}/{upcomingEvent.capacity} registered</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Registration Progress</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {Math.round(progressPercentage)}%
              </motion.span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-navy h-2 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                transition={{ delay: 0.7, duration: 1.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          <motion.a
            href="/events"
            className="inline-flex items-center bg-navy hover:bg-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Your Spot
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingEventCard;
