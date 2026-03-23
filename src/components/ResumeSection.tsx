import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

// ─── Data ─────────────────────────────────────────────────────────────────────

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

const ResumeSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-reveal ${sectionVisible ? "revealed" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Experience & Education
            </h2>
            <div
              className="h-1 bg-primary mx-auto mb-6"
              style={{
                width: sectionVisible ? "80px" : "0px",
                transition: "width 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              My academic background and professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* ── Experience Column ── */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex items-center justify-between group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shadow shrink-0 z-10 transition-transform duration-300 group-hover:scale-125">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <Card className="w-[calc(100%-3.5rem)] border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{exp.role}</h4>
                        <p className="text-sm font-medium text-foreground/80 mb-3">{exp.company}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-medium rounded-md uppercase tracking-wider">
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

            {/* ── Education Column ── */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-center justify-between group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shadow shrink-0 z-10 transition-transform duration-300 group-hover:scale-125">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <Card className="w-[calc(100%-3.5rem)] border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{edu.degree}</h4>
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
    </section>
  );
};

export default ResumeSection;
