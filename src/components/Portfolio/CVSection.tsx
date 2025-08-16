import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Building, Award } from "lucide-react";

const CVSection = () => {
  const experience = [
    {
      position: "Full Stack Developer",
      period: "2023-2024",
      location: "Remote",
      achievements: [
        "Am condus dezvoltarea a unei aplicații web majore pentru platforma online de șah",
        "Am îmbunătățit performanța aplicației cu 40% prin optimizare și refactorizare a codului",
        "Am oferit mentorat colegilor de echipa și am stabilit standarde de codare",
      ],
    },
    {
      company: "Freelance",
      position: "Dezvoltator Full Stack",
      period: "2024 - 2025",
      location: "Remote",
      achievements: [
        "Am creat aplicații web și mobile pentru startup-uri și antreprenori",
        "Am dezvoltat soluții personalizate pentru nevoi specifice ale clienților",
        "Am implementat interfețe moderne și funcționale, optimizate pentru performanță",
      ],
    },
  ];

  const education = [
    {
      institution: "Dual USV",
      degree: "",
      period: "2023 - 2025",
      details: "Colegiul Tehnic 'Samuil Isopescu' - Assist Software",
    },
    {
      institution: "Universitatea 'Ștefan cel Mare' din Suceava",
      degree: "Calculatoare",
      period: "2023 - 2027",
      details: "",
    },
    {
      institution: "Universitatea 'Ștefan cel Mare' din Suceava",
      degree: "Formare psihopedagogică",
      period: "2024 - 2026",
      details: "",
    },
    {
      institution: "Liceul Tehnologic Bucecea",
      degree: "Matematică-Informatică",
      period: "2019 - 2023",
      details: "",
    },
  ];

  const skills = {
    Frontend: ["React", "TypeScript", "Tailwind CSS", "Shadcn", "Ant Design"],
    Backend: ["Python"],
    Database: ["PostgreSQL"],
    Tools: ["Git", "Figma", "Jest", "Webpack", "VS Code"],
  };

  return (
    <section id="cv" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">CV</span> & Experiență
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            O prezentare completă a parcursului meu profesional, a competențelor
            și realizărilor mele.
          </p>
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Building className="h-8 w-8 color-white-500" />
                Experiență
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="p-6 surface card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.position}</h4>
                        <div className="color-white-500 font-semibold">
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-muted-foreground text-sm space-y-1 mt-2 md:mt-0 md:text-right">
                        <div className="flex items-center gap-2 md:justify-end">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 md:justify-end">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <Award className="h-4 w-4 color-white-500 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="h-8 w-8 color-white-500" />
                Educatie
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 surface card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="text-lg font-bold">{edu.degree}</h4>
                        <div className="color-white-500 font-semibold">
                          {edu.institution}
                        </div>
                        <p className="text-muted-foreground text-sm mt-2">
                          {edu.details}
                        </p>
                      </div>
                      <div className="text-muted-foreground text-sm mt-2 md:mt-0">
                        <div className="flex items-center gap-2 md:justify-end">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Sidebar */}
          <div className="space-y-8">
            <Card className="p-6 surface">
              <h3 className="text-2xl font-bold mb-6">
                Skilluri & Technologii
              </h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold color-white-500 mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-primary/20 color-white-500 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 surface">
              <h3 className="text-2xl font-bold mb-4">Certificari</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold">Cambridge - FCE</div>
                </div>
                <div className="border-l-2 border-primary pl-4"></div>
                <div className="border-l-2 border-primary pl-4"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
