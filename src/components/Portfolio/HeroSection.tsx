import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/370563684_122115324650007671_3831738859299853245_n.jpg";
import { Parallax } from "react-scroll-parallax";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Blobs cu Parallax */}
      <Parallax translateY={[-40, 40]} speed={-5}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </Parallax>

      <Parallax translateY={[30, -30]} speed={10}>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </Parallax>

      {/* Particule cu Parallax */}
      <Parallax translateY={[-20, 20]} translateX={[-10, 10]} speed={5}>
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary/40 rounded-full"></div>
      </Parallax>

      <Parallax translateY={[15, -15]} speed={3}>
        <div className="absolute bottom-40 right-40 w-2 h-2 bg-accent/50 rounded-full"></div>
      </Parallax>

      <Parallax translateY={[-25, 25]} translateX={[10, -10]} speed={4}>
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-neutral/30 rounded-full"></div>
      </Parallax>

      <Parallax translateY={[20, -20]} speed={6}>
        <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-primary/60 rounded-full"></div>
      </Parallax>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-2xl text-muted-foreground">
                Salut! Sunt Radu
              </h2>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">
                  <Typewriter
                    words={["Full Stack", "Frontend", "Backend"]}
                    loop={0} // 0 = infinit
                    cursor
                    cursorStyle="|"
                    typeSpeed={120}
                    deleteSpeed={80}
                    delaySpeed={2000} // cât stă pe text înainte să înceapă ștergerea
                  />
                </span>
                <br />
                Developer
                <br />
                <span className="text-muted-foreground">Suceava [🇷🇴]</span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-lg">
              Creez experiențe digitale inovatoare folosind tehnologii de ultimă
              generație. Mă specializez în React, Node.js și dezvoltare web.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="btn-hero group"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contactează-mă
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <a href="/Radu_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Vezi CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                onClick={() =>
                  window.open("https://github.com/iraduq", "_blank")
                }
              >
                <Github className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/ivanradu/", "_blank")
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
                onClick={() =>
                  (window.location.href = "mailto:raduivan2003@yahoo.ro")
                }
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground pt-8">
              În domeniu din 2022
            </div>
          </div>

          {/* Right Content - Profile Image cu Parallax */}
          <Parallax translateY={[-20, 20]} scale={[0.9, 1.1]} speed={5}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glow-effect">
                  <img
                    src={profilePhoto}
                    alt="Radu - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <Parallax translateY={[-15, 15]} speed={4}>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full"></div>
                </Parallax>

                <Parallax translateY={[15, -15]} speed={6}>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-full"></div>
                </Parallax>
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
