import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { BookSection } from "../components/BookSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <BookSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;