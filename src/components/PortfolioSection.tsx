import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Enterprise Management System",
      description:
        "Full-stack web application built with PHP CodeIgniter 4 for managing business operations, inventory, and reporting.",
      image: project1,
      tags: ["PHP", "MySQL", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "Cross-platform mobile application with intuitive UI for online shopping, payment integration, and order tracking.",
      image: project2,
      tags: ["React Native", "Firebase", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "IoT Automated Seaweed Dryer System",
      description:
        "IoT prototype using Arduino and sensors for home automation, with web dashboard for remote monitoring and control.",
      image: project3,
      tags: ["ESP32", "IoT", "React Native", "Firebase", "WebSocket", "PlatformIO"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of my recent work showcasing web, mobile, and IoT development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
