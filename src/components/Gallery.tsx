
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: "https://www.licious.in/blog/wp-content/uploads/2019/05/Drumsticks-liquidation-plan-05.jpg",
      alt: "Crispy Fried Chicken",
      emoji: "🔥"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Buffalo Wings",
      emoji: "💀"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chicken Tenders",
      emoji: "⭐"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Grilled Chicken",
      emoji: "🏆"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chicken Burger",
      emoji: "🦁"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "BBQ Wings",
      emoji: "😈"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white via-gray-100 to-white relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 animate-ping"
          style={{ transform: `translateY(${scrollY * 0.2}px) translateX(${-scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-32 left-20 w-28 h-28 bg-black rotate-45 opacity-25 animate-bounce"
          style={{ transform: `translateY(${-scrollY * 0.15}px) rotate(${45 + scrollY * 0.1}deg)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-400 rounded-full opacity-30"
          style={{ transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003})` }}
        ></div>
        <div 
          className="absolute top-2/3 left-1/4 w-16 h-16 bg-black opacity-20"
          style={{ transform: `translateY(${scrollY * 0.18}px) translateX(${scrollY * 0.05}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="inline-block bg-black text-yellow-400 px-6 py-2 rounded-full font-black text-sm mb-4 transform rotate-2 animate-bounce">
            📸 PHOTO GALLERY 📸
          </div>
          <h2 className="text-6xl font-black text-black mb-6 drop-shadow-lg">
            <span 
              className="block animate-slide-down"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              FEAST YOUR
            </span>
            <span 
              className="block text-yellow-500 transform -rotate-1 animate-slide-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              EYES! 👀
            </span>
          </h2>
          <p 
            className="text-xl text-black max-w-2xl mx-auto font-bold animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            Warning: These photos might cause EXTREME hunger! View at your own risk! 🚨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${index % 3 === 0 ? 'hover:rotate-3' : index % 3 === 1 ? 'hover:-rotate-3' : 'hover:rotate-1'} border-4 border-black animate-zoom-in`}
              style={{ 
                animationDelay: `${0.8 + index * 0.1}s`, 
                animationFillMode: 'both',
                transform: `translateY(${scrollY * (0.05 + index * 0.02)}px) rotate(${scrollY * 0.01}deg)`
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2 animate-bounce">{image.emoji}</div>
                  <p className="text-yellow-400 text-xl font-black drop-shadow-lg transform hover:scale-110 transition-transform duration-200">
                    {image.alt.toUpperCase()}!
                  </p>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-yellow-400 text-black p-2 rounded-full font-black text-lg animate-pulse">
                {image.emoji}
              </div>
              {index % 2 === 0 && (
                <div className="absolute top-4 right-4 bg-black text-yellow-400 px-2 py-1 rounded-full font-black text-xs transform rotate-12 animate-bounce">
                  WOW!
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          className="text-center mt-16"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <div className="bg-black text-yellow-400 py-8 px-6 rounded-3xl transform rotate-1 shadow-2xl border-4 border-yellow-400 animate-scale-bounce" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
            <h3 className="text-4xl font-black mb-4 animate-pulse">📱 SHARE THE MADNESS!</h3>
            <p className="mb-6 font-bold text-lg">Tag us in your chicken adventures!</p>
            <div className="flex justify-center space-x-4">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-black animate-bounce" style={{ animationDelay: '2s' }}>#ChickenMadness</span>
              <span className="bg-white text-black px-4 py-2 rounded-full font-black animate-bounce" style={{ animationDelay: '2.2s' }}>#CrispyGoodness</span>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-black animate-bounce" style={{ animationDelay: '2.4s' }}>#FlavorExplosion</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-down {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-up {
          0% {
            transform: translateY(50px) rotate(-1deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotate(-1deg);
            opacity: 1;
          }
        }

        @keyframes zoom-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes scale-bounce {
          0% {
            transform: scale(0.5) rotate(1deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) rotate(1deg);
          }
          100% {
            transform: scale(1) rotate(1deg);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-zoom-in {
          animation: zoom-in 0.6s ease-out;
        }

        .animate-scale-bounce {
          animation: scale-bounce 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
