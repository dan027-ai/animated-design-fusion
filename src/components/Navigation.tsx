import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-serif font-bold hover:text-primary transition-colors duration-300">
            Suzanne Collins
          </div>
          <div className="hidden md:flex space-x-8">
            {['Books', 'About', 'News', 'Contact'].map((item) => (
              <button
                key={item}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item}
              </button>
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