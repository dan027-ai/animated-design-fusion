export const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">ModernNews</div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Technology', 'Business', 'Culture', 'Contact'].map((item) => (
              <button
                key={item}
                className="text-secondary hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};