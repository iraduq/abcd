import MainLayout from "@/components/Layout/MainLayout";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import JourneySection from "@/components/Portfolio/JourneySection";
import CVSection from "@/components/Portfolio/CVSection";
import PricingSection from "@/components/Portfolio/PricingSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-0">
        <div id="home">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="services">
          <PricingSection />
        </div>
        
        <div id="portfolio">
          <ProjectsSection />
        </div>
        
        <JourneySection />
        <CVSection />
        
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
