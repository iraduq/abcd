import {
  Code2,
  Database,
  Palette,
  Smartphone,
  Globe,
  Terminal,
  Zap,
  Settings,
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "HTML", icon: Globe },
  { name: "CSS", icon: Palette },
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: Code2 },
  { name: "Node.js", icon: Database },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind", icon: Palette },
  { name: "MongoDB", icon: Database },
  { name: "Express", icon: Settings },
  { name: "Next.js", icon: Zap },
  { name: "Mobile Dev", icon: Smartphone },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-sm"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/10 rounded-full animate-bounce-slow blur-sm"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-neutral/10 rounded-full animate-drift blur-sm"></div>
      <div className="absolute bottom-1/3 left-20 w-8 h-8 bg-primary/20 rounded-full animate-particle"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text animate-glow-pulse">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital
            experiences
          </p>
        </div>

        {/* Circular Skills Animation */}
        <div className="relative flex justify-center items-center mb-20">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Rotating ring */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
            <div
              className="absolute inset-4 border border-accent/30 rounded-full animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            ></div>

            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = 140;
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

              return (
                <div
                  key={skill.name}
                  className="absolute w-16 h-16 lg:w-20 lg:h-20 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group animate-float"
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`,
                    top: `calc(50% + ${y}px - 2rem)`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <skill.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary group-hover:text-accent transition-colors duration-300 group-hover:animate-bounce" />
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-foreground bg-card px-2 py-1 rounded border border-border animate-fade-in-up">
                      {skill.name}
                    </span>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 group-hover:animate-pulse"></div>
                </div>
              );
            })}

            {/* Center element with enhanced effects */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-2xl animate-glow-pulse">
              <span className="text-primary-foreground font-bold text-lg">
                Skills
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Skills Grid with floating effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-bounce">
                  <skill.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
