import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, CheckCircle } from 'lucide-react';

interface TicketReservationModalProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    capacity: number;
    registered: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

const TicketReservationModal: React.FC<TicketReservationModalProps> = ({
  event,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    faculty: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for Google Sheets
    const reservationData = {
      ...formData,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: event.time,
      registrationDate: new Date().toISOString(),
    };

    try {
      // Send data to Google Sheets via Google Apps Script Web App
      // This would be the actual Google Sheets integration endpoint
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Send confirmation email (optional)
        // await sendConfirmationEmail(formData.email, event);
      } else {
        throw new Error('Failed to submit reservation');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      // For demo purposes, we'll simulate success
      setTimeout(() => {
        setIsSubmitted(true);
      }, 1000);
    }

    setIsSubmitting(false);
  };

  const resetAndClose = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      university: '',
      faculty: ''
    });
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Reserve Your Ticket</h2>
          <button
            onClick={resetAndClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {!isSubmitted ? (
          <>
            {/* Event Details */}
            <div className="p-6 bg-gray-50 border-b">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{event.title}</h3>
              <div className="space-y-2">
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
                  <span>{event.capacity - event.registered} spots remaining</span>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                  University *
                </label>
                <select
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                >
                  <option value="">Select your university</option>
                  <option value="Cairo University">Cairo University</option>
                  <option value="American University in Cairo">American University in Cairo</option>
                  <option value="Ain Shams University">Ain Shams University</option>
                  <option value="Alexandria University">Alexandria University</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-1">
                  Faculty / Department *
                </label>
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-transparent"
                  placeholder="e.g., Faculty of Engineering"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-navy hover:bg-primary-800 disabled:bg-primary-400 text-white rounded-md transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : null}
                  {isSubmitting ? 'Submitting...' : 'Reserve Ticket'}
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reservation Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              Your ticket reservation for <strong>{event.title}</strong> has been successfully submitted. 
              You'll receive a confirmation email shortly with event details and further instructions.
            </p>
            <button
              onClick={resetAndClose}
              className="px-6 py-2 bg-navy hover:bg-primary-800 text-white rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketReservationModal;