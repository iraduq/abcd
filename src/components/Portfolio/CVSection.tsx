import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Building, Award } from "lucide-react";

const CVSection = () => {
  const experience = [
    {
      position: "Frontend Developer",
      period: "2024",
      location: "Remote",
      achievements: [
        "Led development of 3 major web applications serving 10k+ users",
        "Improved application performance by 40% through optimization",
        "Mentored junior developers and established coding standards",
      ],
    },
    {
      company: "InnovateLab",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      location: "Remote",
      achievements: [
        "Built e-commerce platform generating $2M+ in revenue",
        "Developed RESTful APIs supporting mobile and web applications",
        "Collaborated with design team to implement pixel-perfect UIs",
      ],
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2019 - 2020",
      location: "Suceava",
      achievements: [
        "Created responsive web applications using React and TypeScript",
        "Implemented real-time features using WebSocket connections",
        "Reduced bug reports by 60% through comprehensive testing",
      ],
    },
  ];

  const education = [
    {
      institution: "Stanford University",
      degree: "Master of Science in Computer Science",
      period: "2017 - 2019",
      details:
        "Specialized in Software Engineering and Human-Computer Interaction",
    },
    {
      institution: "UC Berkeley",
      degree: "Bachelor of Science in Computer Science",
      period: "2013 - 2017",
      details: "Magna Cum Laude, Dean's List for 6 semesters",
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
          <Button className="btn-hero">
            <Download className="mr-2 h-4 w-4" />
            Download PDF CV
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Building className="h-8 w-8 text-primary" />
                Experiență
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="p-6 surface card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.position}</h4>
                        <div className="text-primary font-semibold">
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
                          <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
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
                <Award className="h-8 w-8 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 surface card-hover">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="text-lg font-bold">{edu.degree}</h4>
                        <div className="text-primary font-semibold">
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
                    <h4 className="font-semibold text-primary mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
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
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold">
                    AWS Certified Solutions Architect
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Amazon Web Services
                  </div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold">Google Cloud Professional</div>
                  <div className="text-sm text-muted-foreground">
                    Google Cloud Platform
                  </div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="font-semibold">
                    React Developer Certification
                  </div>
                  <div className="text-sm text-muted-foreground">Meta</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
