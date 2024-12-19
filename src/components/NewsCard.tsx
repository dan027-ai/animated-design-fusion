interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export const NewsCard = ({ title, description, imageUrl, category }: NewsCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-4">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};