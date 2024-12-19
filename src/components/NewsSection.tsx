import { useEffect, useState } from 'react';
import { NewsCard } from './NewsCard';

export const NewsSection = () => {
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

    const element = document.getElementById('news-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const news = [
    {
      title: "The Future of Technology",
      description: "Exploring the latest trends in tech and their impact on society",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology"
    },
    {
      title: "Digital Innovation",
      description: "How companies are transforming in the digital age",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Business"
    },
    {
      title: "Remote Work Revolution",
      description: "The changing landscape of work in modern times",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Workplace"
    }
  ];

  return (
    <section id="news-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <NewsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};