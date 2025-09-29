import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const UpcomingEventCard: React.FC = () => {
  // No upcoming events currently
  const hasUpcomingEvent = false;

  if (!hasUpcomingEvent) {
    return (
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden text-center py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="px-8">
          <motion.div
            className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
          >
            <Calendar className="h-12 w-12 text-gray-400" />
          </motion.div>
          
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            No Upcoming Events
          </motion.h3>
          
          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We're planning exciting new events for our community. Follow us on social media to be the first to know about our upcoming activities and workshops!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/events"
              className="inline-flex items-center bg-navy hover:bg-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Past Events
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://facebook.com/PascalCUFE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow Us
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // This code would be used when there are upcoming events
  return (
    <div>
      {/* Future upcoming event content would go here */}
    </div>
  );
};

export default UpcomingEventCard;
