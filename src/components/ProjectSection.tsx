import { ExternalLink, Github, Laptop, Cpu, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import banca1 from "@/assets/banca1.jpg";
import dms1 from "@/assets/dms1.png";
import seaweed1 from "@/assets/seaweed-dryer-monitoring.jpg";
import powerConsumptionMonitoring from "@/assets/power-consumption.jpg";
import restaurantPOS from "@/assets/restaurant-pos.png";

import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: "web-mobile" | "iot-hardware";
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Dormitory Management System",
    description:
      "Developed a full-stack dormitory management web application supporting tenant management, room reservations, billing/payments, reporting, and role-based access control.",
    image: dms1,
    tags: ["PHP", "CodeIgniter 4", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web-mobile",
  },
  {
    title: "Point of Sale System",
    description:
      "Developed a robust POS system for cafes/restaurants featuring real-time inventory management, sales tracking, analytical reporting, and receipt generator.",
    image: restaurantPOS,
    tags: ["Ionic", "Vue", "Web SQL", "Local Storage"],
    liveUrl: "#",
    githubUrl: "#",
    category: "web-mobile",
  },
  {
    title: "Smart Indoor Rice Cultivator with Grow Light",
    description:
      "Built an ESP32-based IoT rice cultivation system with automated sensors, grow light schedules, environmental monitoring, and mobile dashboard integration.",
    image: powerConsumptionMonitoring,
    tags: ["ESP32", "IoT", "PlatformIO", "Sensors", "Grow Lights"],
    liveUrl: "#",
    githubUrl: "#",
    category: "iot-hardware",
  },
  {
    title: "BANCA Mobile App",
    description:
      "Contributed to a mobile sea transport optimization platform designed to improve logistics, ticketing, and route planning for island tourism in Surigao del Norte.",
    image: banca1,
    tags: ["React Native", "Express", "Neon PostgreSQL", "PayMongo"],
    liveUrl: "https://banca-prototype.vercel.app/",
    githubUrl: "#",
    category: "web-mobile",
  },
  {
    title: "IoT Automated Seaweed Dryer System (Capstone)",
    description:
      "Developed a custom Capstone IoT solution automating seaweed drying with sensor arrays (temp/humidity), actuator control, C++ firmware, and real-time Firebase monitoring.",
    image: seaweed1,
    tags: ["ESP32", "IoT", "C++", "Vue", "Django", "Firebase"],
    liveUrl: "https://seaweed-dryer-monitoring.web.app/dashboard",
    githubUrl: "#",
    category: "iot-hardware",
  },
];

// ─── Sub-component: ProjectGallery ───────────────────────────────────────────

const ProjectGallery = ({ projectsList }: { projectsList: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in justify-center">
      {projectsList.map((project, index) => (
        <Card key={index} className="group overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl flex flex-col h-full bg-card/50 backdrop-blur-sm">
          {/* Image */}
          <div className="relative overflow-hidden aspect-video bg-secondary shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay with Links */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
              <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Button size="sm" variant="secondary" asChild className="hover:scale-110 transition-transform">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live
                  </a>
                </Button>
                <Button size="sm" variant="secondary" asChild className="hover:scale-110 transition-transform">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <CardContent className="p-6 flex flex-col flex-grow">
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-110"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

type Tab = "all" | "web-mobile" | "iot-hardware";

const ProjectSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 scroll-reveal ${sectionVisible ? "revealed" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div
              className="h-1 bg-primary mx-auto mb-6"
              style={{
                width: sectionVisible ? "80px" : "0px",
                transition: "width 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A curated selection of my software and IoT engineering work
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full border-2 border-primary/20 p-1 gap-1 bg-secondary/40 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Show all projects"
              >
                <Layers className="h-4 w-4" />
                All
              </button>
              <button
                onClick={() => setActiveTab("web-mobile")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "web-mobile"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Show web and mobile projects"
              >
                <Laptop className="h-4 w-4" />
                Web & Mobile
              </button>
              <button
                onClick={() => setActiveTab("iot-hardware")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "iot-hardware"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Show IoT and hardware projects"
              >
                <Cpu className="h-4 w-4" />
                IoT & Hardware
              </button>
            </div>
          </div>

          {/* Category Label */}
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6 font-semibold">
            {activeTab === "all" && "📂 All Selected Projects"}
            {activeTab === "web-mobile" && "💻 Web & Mobile Applications"}
            {activeTab === "iot-hardware" && "⚡ IoT & Hardware Solutions"}
          </p>

          {/* Gallery */}
          <ProjectGallery projectsList={filteredProjects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
