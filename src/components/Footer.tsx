
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-10 right-20 w-20 h-20 bg-yellow-400 rounded-full opacity-10"
          style={{ transform: `translateY(${scrollY * 0.1}px) translateX(${-scrollY * 0.05}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-16 h-16 bg-white opacity-10 rotate-45"
          style={{ transform: `translateY(${-scrollY * 0.08}px) rotate(${45 + scrollY * 0.05}deg)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-12 h-12 bg-yellow-400 opacity-15"
          style={{ transform: `translateY(${scrollY * 0.12}px) scale(${1 + scrollY * 0.0002})` }}
        ></div>
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <img 
              src="/lovable-uploads/82b93cff-c17f-4053-97bb-352fe29e0899.png" 
              alt="HFC Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert hover:scale-110 transition-transform duration-300"
            />
            <p className="text-gray-300 mb-4">
              Serving the best chicken dishes with love and passion since 2020. Come taste the difference!
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 inline-block transform duration-200">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 inline-block transform duration-200">Menu</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 inline-block transform duration-200">Gallery</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-yellow-400 transition-colors hover:scale-105 inline-block transform duration-200">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center hover:transform hover:scale-105 transition-transform duration-200">
                <MapPin size={18} className="text-yellow-400 mr-3 animate-pulse" />
                <span className="text-gray-300">123 Chicken Street, Food City</span>
              </div>
              <div className="flex items-center hover:transform hover:scale-105 transition-transform duration-200">
                <Phone size={18} className="text-yellow-400 mr-3 animate-pulse" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center hover:transform hover:scale-105 transition-transform duration-200">
                <Mail size={18} className="text-yellow-400 mr-3 animate-pulse" />
                <span className="text-gray-300">info@hfcrestaurant.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock size={18} className="text-yellow-400 mr-3 animate-pulse" />
                <div className="text-gray-300">
                  <p>Mon - Thu: 11am - 10pm</p>
                  <p>Fri - Sat: 11am - 11pm</p>
                  <p>Sunday: 12pm - 9pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="border-t border-gray-700 mt-8 pt-8 text-center animate-fade-in-delayed"
          style={{ animationDelay: '1s', animationFillMode: 'both' }}
        >
          <p className="text-gray-300">
            © 2024 HFC Restaurant. All rights reserved. Made with ❤️ for chicken lovers.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-up {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
