import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import JourneySection from "@/components/Portfolio/JourneySection";
import CVSection from "@/components/Portfolio/CVSection";
import PricingSection from "@/components/Portfolio/PricingSection";
import ContactSection from "@/components/Portfolio/ContactSection";
import AnimatedBackground from "@/components/Portfolio/AnimatedBackground";
// Index
const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />

      <main className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>

        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <CVSection />
        <PricingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2025 Radu I.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
