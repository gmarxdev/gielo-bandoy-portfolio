import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    label: "Core",
    tags: ["React", "Express", "Node.js", "Neon PostgreSQL"],
  },
  {
    label: "IoT & Hardware",
    tags: ["ESP32", "Arduino", "Raspberry Pi", "Firebase"],
  },
  {
    label: "Languages",
    tags: ["C++", "Python", "PHP", "JavaScript"],
  },
];

const experiences = [
  {
    role: "Freelance Web & IoT Developer",
    company: "Client-Based Projects",
    period: "2023 - Present",
    description: "Designed, developed, and deployed fully functional systems for various clients. Key projects include a Restaurant POS, Smart Egg Grader & Sorter, Dormitory Management System, and an IoT Automated Seaweed Dryer System.",
    tags: ["Full Stack Development", "IoT System Design", "UX/UI"],
  },
  {
    role: "Web Developer (OJT)",
    company: "On-the-Job Training Experience",
    period: "Recent",
    description: "Developed an Admin-Role Homestay Booking System web application. Handled the backend architecture, database schema, and frontend integration.",
    tags: ["PHP", "MySQL", "JQuery", "Bootstrap", "Croppy/Dropzone", "MPDF"],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "Surigao del Norte State University",
    period: "Aug 2022 - June 2026",
    description: "Currently enrolled. Gained strong fundamentals in software engineering, embedded systems, microcontrollers, and full-stack development. Active in building capstone hardware/software integrations.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          
          <div 
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`scroll-reveal ${sectionVisible ? "revealed" : ""}`}
          >
            {/* Section Header */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Background</h2>
              <div className="w-16 h-1.5 bg-primary rounded-full" />
            </div>

            {/* ── Top Half: Stats & Skills ── */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
              
              {/* Stat Sheet Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6 text-foreground">Summary</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-border/60 pb-4 hover:border-primary transition-colors">
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider min-w-[100px]">
                    Role
                  </span>
                  <span className="text-foreground font-medium">
                    Software Engineer
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-border/60 pb-4 hover:border-primary transition-colors">
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider min-w-[100px]">
                    Focus
                  </span>
                  <span className="text-foreground font-medium">
                    Full-Stack Development, System Architecture, API Integration
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-border/60 pb-4 hover:border-primary transition-colors">
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider min-w-[100px]">
                    Location
                  </span>
                  <span className="text-foreground font-medium">
                    Philippines
                  </span>
                </div>
              </div>

              {/* Minimalist Skills List */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6 text-foreground">Technical Arsenal</h3>
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 border-b border-border/60 pb-4 hover:border-primary transition-colors">
                      <span className="text-xs font-bold text-primary/80 uppercase tracking-wider min-w-[100px]">
                        {group.label}
                      </span>
                      <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                        {group.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded bg-secondary/80 text-[11px] font-semibold text-secondary-foreground uppercase tracking-widest cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Bottom Half: Experience & Education Timeline ── */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Experience Column */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Experience</h3>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative flex items-center justify-between group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shadow shrink-0 z-10 transition-transform duration-300 group-hover:scale-125">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <Card className="w-[calc(100%-3.5rem)] border-2 bg-background hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{exp.role}</h4>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 opacity-80 shrink-0 text-xs font-semibold text-primary">
                              <Calendar className="w-3.5 h-3.5 hidden sm:block" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-foreground/80 mb-3">{exp.company}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-accent/10 text-accent-foreground text-[10px] font-bold rounded-md uppercase tracking-wider">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
                  {education.map((edu, index) => (
                    <div key={index} className="relative flex items-center justify-between group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shadow shrink-0 z-10 transition-transform duration-300 group-hover:scale-125">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <Card className="w-[calc(100%-3.5rem)] border-2 bg-background hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{edu.degree}</h4>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 opacity-80 shrink-0 text-xs font-semibold text-primary">
                              <Calendar className="w-3.5 h-3.5 hidden sm:block" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-foreground/80 mb-3">{edu.school}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
