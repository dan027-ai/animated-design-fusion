import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Books', path: '/books' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-serif font-bold hover:text-primary transition-colors duration-300">
            Suzanne Collins
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                  location.pathname === item.path ? 'text-primary' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="animate-fade-in"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};