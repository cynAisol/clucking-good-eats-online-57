const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "CRISPY BOMB CHICKEN",
      description: "💥 Golden crispy chicken pieces with our SECRET spice blend that'll blow your mind!",
      price: "$12.99",
      emoji: "🔥",
      image: "https://www.licious.in/blog/wp-content/uploads/2019/05/Drumsticks-liquidation-plan-05.jpg"
    },
    {
      id: 2,
      name: "BUFFALO BEAST WINGS",
      description: "🌶️ Spicy buffalo wings that pack a PUNCH! Served with our legendary ranch sauce",
      price: "$9.99",
      emoji: "💀",
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "TENDER MADNESS STRIPS",
      description: "⚡ Tender chicken strips breaded with INSANE crunch factor - you'll be addicted!",
      price: "$8.99",
      emoji: "⭐",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "GRILLED PERFECTION",
      description: "🌿 Juicy grilled chicken breast with herbs that'll transport you to FLAVOR TOWN!",
      price: "$14.99",
      emoji: "🏆",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "CHICKEN BURGER BEAST",
      description: "🍔 Crispy chicken patty stacked HIGH with fresh goodies - it's a MONSTER!",
      price: "$10.99",
      emoji: "🦁",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "BBQ SMOKY DEMONS",
      description: "😈 Smoky BBQ glazed wings with a tangy kick that'll haunt your dreams!",
      price: "$11.99",
      emoji: "🔥",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rotate-45 opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-sm mb-4 transform -rotate-2">
            🍗 MENU MADNESS 🍗
          </div>
          <h2 className="text-6xl font-black text-white mb-6 drop-shadow-lg">
            <span className="block">OUR CRAZY</span>
            <span className="block text-yellow-400 transform rotate-1">CHICKEN MENU!</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-bold">
            Get ready for the WILDEST chicken dishes that'll make your taste buds DANCE! 💃🕺
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={item.id} className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:rotate-2 transition-all duration-300 border-4 ${index % 2 === 0 ? 'border-yellow-400' : 'border-black'}`}>
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-black text-yellow-400 p-2 rounded-full font-black text-2xl animate-bounce">
                  {item.emoji}
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-black text-sm transform rotate-12">
                  POPULAR!
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-gray-800 leading-tight">{item.name}</h3>
                  <span className="text-2xl font-black text-black bg-yellow-400 px-3 py-1 rounded-full transform -rotate-6">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-6 font-semibold">{item.description}</p>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-black to-gray-800 text-yellow-400 py-3 px-6 rounded-full font-black text-lg transform hover:scale-105 transition-all duration-200 cursor-pointer">
                    😋 LOOKS DELICIOUS!
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-yellow-400 text-black py-8 px-6 rounded-3xl transform -rotate-1 shadow-2xl relative overflow-hidden">
            {/* Left side chicken image */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Crispy Chicken" 
                className="w-24 h-24 object-cover rounded-full border-4 border-black transform rotate-12 animate-pulse"
              />
            </div>
            
            {/* Right side chicken image */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Buffalo Wings" 
                className="w-24 h-24 object-cover rounded-full border-4 border-black transform -rotate-12 animate-bounce"
              />
            </div>

            {/* Additional decorative elements */}
            <div className="absolute top-4 left-1/4 bg-black text-yellow-400 p-2 rounded-full font-black text-sm animate-spin">
              🔥
            </div>
            <div className="absolute bottom-4 right-1/4 bg-black text-yellow-400 p-2 rounded-full font-black text-sm animate-ping">
              🍗
            </div>
            
            {/* Main content */}
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-4">🔥 HUNGRY YET? 🔥</h3>
              <p className="mb-6 font-bold text-lg">These dishes are CALLING your name!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-black text-yellow-400 hover:bg-gray-800 px-12 py-4 rounded-full font-black text-xl transition-all duration-200 transform hover:scale-110 hover:rotate-3 border-4 border-black">
                  🚀 LET'S ORDER!
                </button>
                <div className="flex items-center space-x-2">
                  <span className="text-black font-black text-lg">🌟 5.0 RATING</span>
                  <span className="text-black font-black text-lg">🚚 FAST DELIVERY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
