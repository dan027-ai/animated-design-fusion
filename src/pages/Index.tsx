import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { NewsSection } from "../components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <NewsSection />
    </div>
  );
};

export default Index;