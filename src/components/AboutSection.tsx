import { useEffect, useState } from 'react';
import { Button } from "./ui/button";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about-section" className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
              alt="Suzanne Collins"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">About Suzanne Collins</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Suzanne Collins is the author of the groundbreaking Hunger Games trilogy and The Underland Chronicles. Her work has been praised for its imaginative world-building, complex characters, and powerful themes.
            </p>
            <Button 
              className="hover:scale-105 transition-transform duration-300"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};