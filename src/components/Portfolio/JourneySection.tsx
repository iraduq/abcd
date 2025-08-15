import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Lightbulb } from "lucide-react";

const JourneySection = () => {
  const milestones = [
    {
      icon: Lightbulb,
      title: "Primele Inspirații",
      period: "2019-2023",
      description:
        "Am început să explorez informatica în liceu, iar pasiunea pentru tehnologie m-a condus către dezvoltarea web. Am construit primele proiecte și am descoperit bucuria de a crea experiențe digitale.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      title: "Etape în carieră",
      period: "2024-2025",
      description:
        "Am lucrat la un proiect de echipă, ghidat de specialiștii de la Assist Software, dezvoltând aplicații web și câștigând experiență valoroasă în colaborare și tehnologii moderne.",
      color: "from-primary to-accent",
    },
    {
      icon: GraduationCap,
      title: "Focus și Viziune Actuală",
      period: "2023-2027",
      description:
        "Studiez la domeniul Calculatoare, Universitatea „Ștefan cel Mare” din Suceava, și mă concentrez pe dezvoltarea full-stack, transformând idei de afaceri în produse digitale folosind tehnologii moderne.",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="journey" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Călătoria mea</span>
            <br />
            pană acum
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            De la un începător curios la un dezvoltator experimentat – iată cum
            pasiunea mea pentru tehnologie mi-a modelat cariera.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <Card
              key={milestone.title}
              className="relative overflow-hidden surface card-hover group text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative p-8">
                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${milestone.color} p-0.5`}
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <milestone.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < milestones.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-primary font-semibold">
                    {milestone.period}
                  </div>
                  <h3 className="text-2xl font-bold">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline Connector for Mobile */}
        <div className="md:hidden flex justify-center mt-8">
          <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
