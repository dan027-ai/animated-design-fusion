import { useEffect, useState } from 'react';
import { Dialog } from "@/components/ui/dialog";
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Book {
  id: number;
  title: string;
  series: string;
  cover: string;
  description: string;
  content: string;
}

const Books = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const books: Book[] = [
    {
      id: 1,
      title: "The Hunger Games",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1505063366573-38928ae5567e",
      description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts.",
      content: "The Hunger Games is a compelling story about survival, sacrifice, and the power of one person to inspire change. The novel follows Katniss Everdeen, a 16-year-old girl living in a post-apocalyptic world where children are forced to participate in an annual televised death match."
    },
    {
      id: 2,
      title: "Catching Fire",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
      description: "Against all odds, Katniss Everdeen has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive.",
      content: "Catching Fire continues the story of Katniss Everdeen and her defiance against the Capitol. As unrest spreads through the districts, Katniss becomes the symbol of rebellion, facing even greater challenges in a special edition of the Hunger Games."
    },
    {
      id: 3,
      title: "Mockingjay",
      series: "The Hunger Games Trilogy",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      description: "Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders.",
      content: "Mockingjay brings the trilogy to its powerful conclusion as Katniss takes on the role of the Mockingjay – the symbol of rebellion – in the ultimate fight against the Capitol. This book explores themes of war, propaganda, and the cost of revolution."
    }
  ];

  return (
    <div className={`min-h-screen pt-20 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold mb-12 text-center">Explore Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <Dialog key={book.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white/20">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-4">{book.title}</h3>
                  <p className="text-muted-foreground">{book.series}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif">{book.title}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img src={book.cover} alt={book.title} className="rounded-lg w-full h-[300px] object-cover" />
                  <div>
                    <p className="text-muted-foreground mb-4">{book.description}</p>
                    <p>{book.content}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;