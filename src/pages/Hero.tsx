import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGdyb3VwJTIwYXBwYXJ0bWVudHxlbnwwfHx8fDE2OTI1NTQ5MjA&ixlib=rb-4.0.3&q=80&w=1080')`,
      }}
      id="hero"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Find Your Perfect Residence
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow">
          Discover curated living spaces designed for comfort, community, and convenience.  
          Browse apartments, townhomes, and luxury suites in top neighborhoods.
        </p>
        <a href="#about">
            <button
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer"
            >
            Explore Residencies
            </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
