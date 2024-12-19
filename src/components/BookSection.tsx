import { useEffect, useState } from 'react';
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface Book {
  id: number;
  title: string;
  series: string;
  cover: string;
  description: string;
  fullContent: string;
}

export const BookSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const books: Book[] = [
    {
      id: 1,
      title: "The Hunger Games",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1505063366573-38928ae5567e",
      description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts.",
      fullContent: "The Hunger Games is the first book in the groundbreaking Hunger Games trilogy. In a dark vision of the near future, twelve boys and twelve girls are forced to appear in a live TV show called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
    },
    {
      id: 2,
      title: "Catching Fire",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      description: "Against all odds, Katniss Everdeen has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive.",
      fullContent: "Catching Fire, the second book in the Hunger Games trilogy, continues the story of Katniss Everdeen and her defiance against the Capitol. Fresh from their improbable victory in the annual Hunger Games, Katniss and Peeta get ready to embark on the Victor's Tour of the districts. Along the way, Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games - a competition that could change Panem forever."
    },
    {
      id: 3,
      title: "Mockingjay",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      description: "Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders.",
      fullContent: "Mockingjay, the final book in the Hunger Games trilogy, brings the story to its powerful conclusion. Katniss Everdeen has survived the Hunger Games twice, but even now she can find no peace. In the powerful finale to the trilogy, Katniss must put everything on the line to save those she loves and become the Mockingjay - the symbol of rebellion - even if it means giving up everything she holds dear."
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

  const handleLearnMore = (book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  return (
    <section id="book-section" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
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
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 mb-2"
                  onClick={() => handleLearnMore(book)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={() => navigate('/books')}
            className="hover:scale-105 transition-transform duration-300"
          >
            Explore All Books
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">{selectedBook?.title}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img 
              src={selectedBook?.cover} 
              alt={selectedBook?.title} 
              className="rounded-lg w-full h-[300px] object-cover"
            />
            <div>
              <p className="text-sm text-primary mb-2">{selectedBook?.series}</p>
              <p className="text-muted-foreground">{selectedBook?.fullContent}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};