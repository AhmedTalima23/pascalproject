import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import EventCard from '../components/EventCard';
import TicketReservationModal from '../components/TicketReservationModal';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Mecha Verse',
      date: '2025-8-2',
      time: '2:00 PM - 5:00 PM',
      location: 'Ministry of Finance Club',
      description: 'Get ready for an engineering experience that bridges creativity, innovation, and real industry impact! Mecha Verse is the first-ever exhibition in Egypt dedicated to showcasing mechanical engineering graduation projects, where the brightest ideas meet real opportunities.',
      
      image: '/verse.jpg',
      category: 'Event'
    }
  ];

  const pastEvents = [
    {
      id: 2,
      title: 'Mecha Magic',
      date: '2025-2-28',
      description: 'Pascal Academy brought together over 500 engineering students from across Egypt for a full day of learning, networking, and inspiration',
      participants: '500+',
      images: [
        '/m.jpg',
        '/mechaM3.jpg',
        '/mechaM4.jpg'
      ],
      highlights: [
        'Participation from 13+ student activities and organizations representing different universities',
        'Guest Speakers: 8 industry-leading experts in mechanical and industrial engineering'
      ]
    }
  ];

  const handleReserveTicket = (event: any) => {
    setSelectedEvent(event);
    setIsReservationModalOpen(true);
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Events</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover our upcoming events and explore the amazing activities we've organized
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss these exciting upcoming events!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div
                        className="bg-navy h-2 rounded-full"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {event.capacity - event.registered} spots left
                    </span>
                  </div>

                  <button
                    onClick={() => handleReserveTicket(event)}
                    className="w-full mt-4 bg-navy hover:bg-primary-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                    disabled={event.registered >= event.capacity}
                  >
                    {event.registered >= event.capacity ? 'Event Full' : 'Reserve Your Spot'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Past Events
            </h2>
            <p className="text-xl text-gray-600">
              Take a look at our successful past events and their impact
            </p>
          </div>

          <div className="space-y-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Reservation Modal */}
      {isReservationModalOpen && selectedEvent && (
        <TicketReservationModal
          event={selectedEvent}
          isOpen={isReservationModalOpen}
          onClose={() => setIsReservationModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Events;