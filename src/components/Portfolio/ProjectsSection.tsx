import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import dashboardImg from "@/assets/project-dashboard.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import mobileImg from "@/assets/project-mobile.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics platform built with React and D3.js, featuring real-time data visualization and interactive charts.",
      image: dashboardImg,
      tags: ["React", "TypeScript", "D3.js", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with advanced filtering, secure payments, and admin dashboard for inventory management.",
      image: ecommerceImg,
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile Task Manager",
      description:
        "Cross-platform mobile app for task management with offline sync, push notifications, and team collaboration features.",
      image: mobileImg,
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text"></span>
            <br />
            Proiecte importante
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O colecție a lucrărilor mele recente, care evidențiază diferite
            tehnologii și abordări de design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <Card
                key={project.id}
                className="overflow-hidden surface card-hover group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden surface card-hover group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
        </div>

        <div className="text-center mt-12"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;
