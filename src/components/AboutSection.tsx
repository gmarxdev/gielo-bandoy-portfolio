import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutMe from "@/assets/aboutme.jpg";

// ─── Skill categories ─────────────────────────────────────────────────────────

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

// ─── Component ────────────────────────────────────────────────────────────────

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          <div 
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center scroll-reveal ${sectionVisible ? "revealed" : ""}`}
          >
            {/* ── Profile Image ── */}
            <div className="relative order-2 md:order-1 flex justify-center w-full">
              <div className="relative w-64 h-64 md:w-full md:aspect-square max-w-[400px]">
                {/* Clean, minimalist image container without excessive padding or rings */}
                <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6 transition-transform duration-500 hover:rotate-0" />
                <img
                  src={aboutMe}
                  alt="About Gielo"
                  className="relative w-full h-full object-cover rounded-2xl shadow-lg border border-border/50"
                />
              </div>
            </div>

            {/* ── Bio & Skills ── */}
            <div className="order-1 md:order-2 space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>
                
                {/* Stat Sheet Info */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-border pb-4">
                    <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider min-w-[100px]">
                      Role
                    </span>
                    <span className="text-foreground font-medium">
                      Software Engineer & IoT Specialist
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-border pb-4">
                    <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider min-w-[100px]">
                      Education
                    </span>
                    <span className="text-foreground font-medium">
                      BS Computer Engineering (Expected 2026)
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-border pb-4">
                    <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider min-w-[100px]">
                      Focus
                    </span>
                    <span className="text-foreground font-medium">
                      Web Apps, Hardware Automation, Data Logging
                    </span>
                  </div>
                </div>
              </div>

              {/* Minimalist Skills List */}
              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                  Technical Stack
                </h3>
                
                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                      <span className="text-xs font-semibold text-primary/70 uppercase tracking-wider min-w-[100px]">
                        {group.label}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded bg-background border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
