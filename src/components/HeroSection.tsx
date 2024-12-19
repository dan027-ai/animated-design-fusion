import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-600 to-blue-500">
      <div className={`container mx-auto px-6 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-up">
          Welcome to Modern News
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
          Your source for the latest updates, reimagined for the modern web
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '400ms' }}>
          Get Started
        </button>
      </div>
    </div>
  );
};