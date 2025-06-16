import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-teal-400">VIVAA</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Long-Lasting Solutions for Your Skin, Hair, & Body.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Services
              </Link>
              <Link to="/courses" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Courses
              </Link>
              <Link to="/locations" className="block text-gray-300 hover:text-teal-400 transition-colors">
                Locations
              </Link>
            </div>
          </div>

          {/* Column 3: Our Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-teal-400 mb-1">HSR Layout</div>
                <div className="text-gray-300 leading-relaxed">
                  2ND FLOOR, 556, 14th Main Rd, above Karma Ayurveda Clinic, 
                  Sector 3, HSR Layout, Bengaluru, Karnataka 560102
                </div>
              </div>
              <div>
                <div className="font-semibold text-teal-400 mb-1">Banashankari</div>
                <div className="text-gray-300 leading-relaxed">
                  572, 3rd Floor, 30th Main Rd, 7 Block, CG Chinnappa Naidu Layout, 
                  Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300">81230 02386</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 VIVAA Wellness Aesthetic Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;