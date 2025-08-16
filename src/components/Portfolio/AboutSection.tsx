import { Card } from "@/components/ui/card";
import {
  Code,
  Palette,
  Rocket,
  Users,
  Star,
  Coffee,
  Heart,
  Zap,
} from "lucide-react";
import { Parallax } from "react-scroll-parallax";

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "React, TypeScript, JavaScript, Tailwind CSS, Shadcn, Ant Design",
    },
    {
      icon: Rocket,
      title: "Backend Development",
      description: "Python, PostgreSQL",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma",
    },
    {
      icon: Users,
      title: "Management",
      description: "Azure DevOps",
    },
  ];

  const floatingIcons = [
    { Icon: Star, position: "top-10 left-10", delay: 0 },
    { Icon: Coffee, position: "top-20 right-20", delay: 1 },
    { Icon: Heart, position: "bottom-20 left-20", delay: 2 },
    { Icon: Zap, position: "bottom-10 right-10", delay: 3 },
    { Icon: Code, position: "top-1/3 left-16", delay: 1.5 },
    { Icon: Rocket, position: "bottom-1/3 right-16", delay: 2.5 },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <Parallax
          key={index}
          translateY={[-20, 20]}
          translateX={[-10, 10]}
          speed={3 + delay}
          rotate={[0, 360]}
        >
          <div
            className={`absolute ${position} opacity-10 animate-pulse`}
            style={{ animationDelay: `${delay}s` }}
          >
            <Icon className="w-8 h-8 text-primary/30" />
          </div>
        </Parallax>
      ))}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Despre</span> mine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sunt un dezvoltator full-stack pasionat, cu peste 2 ani de
            experiență în crearea de aplicații web scalabile. Îmi place să
            transform probleme complexe în soluții simple și design-uri
            atractive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 card-hover surface text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <skill.icon className="h-8 w-8 text-white-500" />
              </div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Povestea Mea</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mi-am început călătoria în 2022 ca un dezvoltator curios,
                fascinat de intersecția dintre tehnologie și design. Ce a
                început ca niște sesiuni de programare s-a transformat rapid
                într-o pasiune pentru crearea de experiențe digitale
                semnificative.
              </p>
              <p>
                Astăzi, colaborez cu antreprenori pentru a construi produse pe
                care utilizatorii le adoră. Cred în cod curat, design gândit cu
                atenție și puterea colaborării.
              </p>
              <p>
                Când nu programez, mă vei găsi explorând tehnologii noi,
                contribuind la proiecte open-source sau mentorând dezvoltatori
                aspiranți.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Date esențiale</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 surface-light rounded-lg">
                <div className="text-2xl font-bold text-white-500">50+</div>
                <div className="text-sm text-muted-foreground">
                  Proiecte completate
                </div>
              </div>
              <div className="p-4 surface-light rounded-lg">
                <div className="text-2xl font-bold text-white-500">2+</div>
                <div className="text-sm text-muted-foreground">
                  Ani de experienta
                </div>
              </div>
              <div className="p-4 surface-light rounded-lg">
                <div className="text-2xl font-bold text-white-500">10+</div>
                <div className="text-sm text-muted-foreground">
                  Clienti fericiti
                </div>
              </div>
              <div className="p-4 surface-light rounded-lg">
                <div className="text-2xl font-bold text-white-500">∞</div>
                <div className="text-sm text-muted-foreground">Cafele</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
