import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import JourneySection from "@/components/Portfolio/JourneySection";
import CVSection from "@/components/Portfolio/CVSection";
import PricingSection from "@/components/Portfolio/PricingSection";
import ContactSection from "@/components/Portfolio/ContactSection";
import AnimatedBackground from "@/components/Portfolio/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Fundal animat pe toată pagina */}
      <AnimatedBackground />

      {/* Conținutul deasupra fundalului */}
      <div className="relative z-10">
        <Navigation />

        <main>
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

        <footer className="py-8 border-t border-border text-center">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground">© 2025 Radu I.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
