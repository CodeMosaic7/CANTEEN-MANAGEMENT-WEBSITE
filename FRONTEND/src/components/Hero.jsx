import { useState } from "react";

export default function Hero() {
  const [location, setLocation] = useState("Your Location");

  return (
    <div className="relative w-full h-screen min-h-[600px]">
      {/* Hero Image with Gradient Overlay */}
      <img
        src="../../public/hero.jpg"
        alt="Delicious food ready for delivery"
        className="w-full h-full object-cover"
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Location Indicator */}
        <div className="mb-4 flex items-center text-white/90 text-sm md:text-base">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Delivering to: </span>
          <button
            onClick={() => setLocation("Change Location")}
            className="ml-1 underline hover:text-orange-300 transition-colors"
          >
            {location}
          </button>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl">
          ORDER YOUR
          <span className="text-orange-400"> MEAL</span>
          <br />
          IN SECONDS!
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
          Fast delivery from your favorite restaurants. Fresh ingredients, hot
          meals delivered right to your doorstep.
        </p>

        {/* Value Propositions */}
        <div className="flex flex-wrap gap-6 mb-8 text-white/80 text-sm md:text-base">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
            30 min delivery
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
            1000+ restaurants
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
            Live order tracking
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-orange-500/25 flex items-center justify-center min-w-[200px]">
            <svg
              className="w-5 h-5 mr-2 group-hover:animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Order Now
          </button>

          <button className="group bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center min-w-[200px]">
            <svg
              className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Schedule Order
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center text-white/70 text-sm">
          <div className="flex -space-x-2 mr-3">
            <div className="w-8 h-8 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
              4.8
            </div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
              ⭐
            </div>
          </div>
          <span>Trusted by 50K+ happy customers</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Explore Menu</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
