import { useEffect, useState } from 'react';
import { Button } from "./ui/button";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className={`container mx-auto px-6 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 animate-fade-up">
          Welcome to the World of
          <span className="block text-primary">Suzanne Collins</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-up max-w-2xl mx-auto" 
           style={{ animationDelay: '200ms' }}>
          Discover the captivating universes and unforgettable characters brought to life through the power of storytelling
        </p>
        <Button 
          size="lg"
          className="animate-fade-up hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: '400ms' }}
        >
          Explore Books
        </Button>
      </div>
    </div>
  );
};