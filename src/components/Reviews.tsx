import { Star, Heart } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah K",
      rating: 5,
      comment: "Ordered Hot Chicken for the first time and it was delicious! The yam fries were yummy too. We’ll definitely order again and try more flavours.",
      location: "Saskatoon, Canada"
    },
    {
      id: 2,
      name: "Mike R",
      rating: 5,
      comment: "DUDE! These buffalo wings are from another PLANET! My taste buds are still dancing",
      location: "Martensville, Canada"
    },
    {
      id: 3,
      name: "Yuki L.",
      rating: 5,
      comment: "I've found my HAPPY PLACE! The chicken tenders are LIFE-CHANGING! My family thinks I'm crazy but WHO CARES?! 🤪⚡",
      location: "Warman, Canada"
    },
    {
      id: 4,
      name: "Alex P.",
      rating: 5,
      comment: "Best fried chicken in the area! Worth the short drive from Osler.",
      location: "Osler, Canada"
    },
    {
      id: 5,
      name: "Priya S.",
      rating: 5,
      comment: "Super crispy and juicy! The honey garlic sauce is a must-try. Delivery was quick too.",
      location: "Saskatoon, Canada"
    },
    {
      id: 6,
      name: "Jordan T.",
      rating: 5,
      comment: "The Nashville Hot is the real deal! Spicy, crunchy, and addictive. 10/10 would recommend.",
      location: "Martensville, Canada"
    },
    {
      id: 7,
      name: "Emily W.",
      rating: 5,
      comment: "I can't stop thinking about the loaded fries. Portions are generous and the staff is super friendly!",
      location: "Warman, Canada"
    },
    {
      id: 8,
      name: "Carlos M.",
      rating: 5,
      comment: "Great value for money. The chicken sandwich was massive and packed with flavor.",
      location: "Saskatoon, Canada"
    },
    {
      id: 9,
      name: "Linda G.",
      rating: 5,
      comment: "My kids LOVED the popcorn chicken. We’ll be back every week!",
      location: "Osler, Canada"
    },
    {
      id: 10,
      name: "Samir D.",
      rating: 5,
      comment: "Absolutely blown away by the taste and crunch. This place is a hidden gem!",
      location: "Martensville, Canada"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={24}
        className={`${index < rating ? 'text-yellow-400 fill-current animate-pulse' : 'text-gray-300'}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-32 h-32 bg-black rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rotate-45 opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-black rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-black text-sm mb-4 transform -rotate-2">
            <Heart className="w-5 h-5 mr-2 text-black animate-pulse" />
            CUSTOMER LOVE LETTERS
            <Heart className="w-5 h-5 ml-2 text-black animate-pulse" />
          </div>
          <h2 className="text-6xl font-black text-black mb-6 drop-shadow-lg">
            <span className="block">PEOPLE ARE</span>
            <span className="block text-white transform rotate-1">GOING CRAZY! </span>
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto font-bold">
            Don't believe us? Check out these WILD reactions from our customers!
          </p>
        </div>

        {/* Horizontal Infinite Auto Scroll */}
        <div className="relative w-full overflow-x-hidden">
          <div
            className="flex items-stretch gap-8 animate-scroll-reviews"
            style={{
              width: 'max-content',
              animation: 'scroll-reviews 40s linear infinite'
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                style={{maxWidth: '400px'}}
                className={"bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform border-4 border-black min-w-[340px] flex-shrink-0"}
              >
                <div className="flex items-center mb-4">
                  <div className="ml-4 flex-1">
                    <h3 className="font-black text-gray-800 text-lg">{review.name}</h3>
                    <span className="text-black font-bold text-sm">{review.location}</span>
                    <div className="flex mb-2">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-2xl">
                  <p className="text-gray-800 font-bold italic text-lg leading-relaxed">"{review.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-black text-yellow-400 py-10 px-8 rounded-3xl transform -rotate-1 shadow-2xl border-4 border-black">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-4xl font-black mb-4">JOIN THE CHICKEN REVOLUTION!</h3>
            <p className="mb-6 font-bold text-xl">Become part of our CRAZY chicken family!</p>
            <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-12 py-4 rounded-full font-black text-xl transition-all duration-200 transform hover:scale-110 hover:rotate-3 border-4 border-yellow-400 shadow-lg">
              🚀 GET MY CHICKEN FIX!
            </button>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="bg-white text-black px-4 py-2 rounded-full font-black text-sm transform rotate-6">
                💯 SATISFACTION GUARANTEED!
              </div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-black text-sm transform -rotate-6">
                🔥 FLAVOR EXPLOSION!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add the keyframes for the scroll animation */}
      <style>{`
        @keyframes scroll-reviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-reviews {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
