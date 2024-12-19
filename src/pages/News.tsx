import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

const News = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "The Ballad of Songbirds and Snakes Movie Release",
      date: "2023-11-17",
      excerpt: "The prequel to The Hunger Games hits theaters worldwide",
      content: "Experience the story of a young Coriolanus Snow and the 10th annual Hunger Games in this thrilling adaptation of Suzanne Collins' latest novel.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
    },
    {
      id: 2,
      title: "Book Signing Tour Announced",
      date: "2024-01-15",
      excerpt: "Meet Suzanne Collins in person during her upcoming tour",
      content: "Join Suzanne Collins as she meets readers and signs books across major cities. Check tour dates and locations for your nearest venue.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
    },
    {
      id: 3,
      title: "New Special Edition Release",
      date: "2024-02-01",
      excerpt: "Collector's edition of The Hunger Games trilogy announced",
      content: "A stunning new collector's edition of The Hunger Games trilogy featuring exclusive artwork and bonus content will be released this spring.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    },
  ];

  return (
    <div className={`min-h-screen pt-20 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold mb-12 text-center">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="p-6 bg-card">
                      <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.excerpt}</p>
                      <Button variant="link" className="mt-4">Read More</Button>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                </DialogHeader>
                <img src={item.image} alt={item.title} className="w-full h-[300px] object-cover rounded-lg mb-4" />
                <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                <p>{item.content}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;