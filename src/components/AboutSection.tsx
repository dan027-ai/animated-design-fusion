import { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fullBio = `Suzanne Collins is the author of the groundbreaking Hunger Games trilogy: The Hunger Games, Catching Fire, and Mockingjay. She is also the author of the picture book Year of the Jungle, a Publishers Weekly Best Book of the Year, and the New York Times bestselling Underland Chronicles series for middle-grade readers, which started with Gregor the Overlander.

  Suzanne Collins began her career writing for children's television. She has worked on the staffs of several Nickelodeon shows, including the Emmy-nominated hit Clarissa Explains it All and The Mystery Files of Shelby Woo.
  
  Her inspiration for The Hunger Games came from channel surfing between reality TV programming and actual war coverage. The result was a story about the devastating effects of war and violence on youth, which has gone on to become a global phenomenon. The books have sold more than 100 million copies globally and have been translated into 54 languages.
  
  Collins lives in Connecticut with her family and a pair of feral kittens they adopted from their backyard. The final book in The Hunger Games trilogy, Mockingjay, was published in August of 2010. In 2020, she released "The Ballad of Songbirds and Snakes," a prequel to the original trilogy, which delves into the early days of Panem and the origins of the Hunger Games.`;

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
              onClick={() => setIsDialogOpen(true)}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">About Suzanne Collins</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c" 
              alt="Suzanne Collins"
              className="rounded-lg w-full max-h-[400px] object-cover"
            />
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};