
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/lovable-uploads/82b93cff-c17f-4053-97bb-352fe29e0899.png" 
              alt="HFC Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Serving the best chicken dishes with love and passion since 2020. Come taste the difference!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-yellow-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="text-yellow-400 mr-3" />
                <span className="text-gray-300">123 Chicken Street, Food City</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-yellow-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-yellow-400 mr-3" />
                <span className="text-gray-300">info@hfcrestaurant.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock size={18} className="text-yellow-400 mr-3" />
                <div className="text-gray-300">
                  <p>Mon - Thu: 11am - 10pm</p>
                  <p>Fri - Sat: 11am - 11pm</p>
                  <p>Sunday: 12pm - 9pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 HFC Restaurant. All rights reserved. Made with ❤️ for chicken lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
