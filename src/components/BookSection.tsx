import { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface Book {
  title: string;
  series: string;
  cover: string;
  description: string;
}

export const BookSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const books: Book[] = [
    {
      title: "The Hunger Games",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1505063366573-38928ae5567e",
      description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts."
    },
    {
      title: "Catching Fire",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      description: "Against all odds, Katniss Everdeen has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive."
    },
    {
      title: "Mockingjay",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      description: "Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('book-section');
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
    <section id="book-section" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={book.title}
              className={`group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary mb-2">{book.series}</p>
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-muted-foreground mb-4">{book.description}</p>
                <Button 
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  onClick={() => navigate('/books')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
