import React from 'react';
import { Facebook, Mail, MapPin, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          
          <div className="col-span-1 md:col-span-2">
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gold p-2 rounded-lg">
                <Users className="h-6 w-6 text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pascal</h3>
                <p className="text-sm text-gray-300">CUFE</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A nonprofit student organization at Cairo University Faculty of Engineering, 
              dedicated to fostering community engagement and professional development 
              among students.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/PascalCUFE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href=" youssefhassanm3@gmail.com"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <p className="text-gray-300 text-sm"> youssefhassanm3@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Pascal CUFE. All rights reserved. Made with by Pascal Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;