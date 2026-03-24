import { Code2, Smartphone, Cpu, Palette, Wrench, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";
import aboutMe from "@/assets/aboutme.jpg";

// ─── Skill categories ─────────────────────────────────────────────────────────

const skillGroups = [
  {
    label: "Full Stack",
    tags: ["React", "React Native", "Express", "Node.js", "Neon PostgreSQL", "Tailwind CSS"],
  },
  {
    label: "IoT",
    tags: ["Arduino", "ESP32", "Raspberry Pi", "Firebase"],
  },
  {
    label: "Automation",
    tags: ["n8n", "Python"],
  },
  {
    label: "Programming Language",
    tags: ["C++", "Python", "PHP", "JavaScript", "Java"],
  },
  {
    label: "Tools",
    tags: ["VS Code", "Git", "Postman", "Claude", "ChatGPT"],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.3 });
  const { setRef: setSkillRef, visibleItems } = useStaggeredReveal(4, { threshold: 0.3 });

  return (
    <section id="about" className="py-20 lg:py-32 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* ── Section Header ── */}
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-reveal ${sectionVisible ? "revealed" : ""}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <div
              className="h-1 bg-primary mx-auto mb-6"
              style={{
                width: sectionVisible ? "80px" : "0px",
                transition: "width 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate developer dedicated to creating meaningful digital experiences
            </p>
          </div>

          {/* ── Profile + Bio + Skills ── */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

            {/* Profile image */}
            <div
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className={`scroll-reveal-left ${imageVisible ? "revealed" : ""}`}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8 hover-lift transition-all duration-500 hover:rotate-1">
                <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center overflow-hidden group">
                  <img
                    src={aboutMe}
                    alt="My Profile"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Bio + Top Skills */}
            <div
              ref={textRef as React.RefObject<HTMLDivElement>}
              className={`space-y-8 scroll-reveal-right ${textVisible ? "revealed" : ""}`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Transforming Ideas Into Digital Reality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a web and mobile app developer focused on building practical and
                  user-friendly digital solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I create systems that solve real problems and improve how people work or
                  interact with technology.
                </p>
              </div>

              {/* Top Skills */}
              <div className="space-y-4">
                <h5 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Top Skills
                </h5>

                <div className="space-y-3">
                  {skillGroups.map((group, gIdx) => (
                    <div key={group.label} className="flex items-start gap-3">
                      {/* Category label */}
                      <span
                        className="text-xs font-semibold text-primary/70 uppercase tracking-wider min-w-[72px] pt-1"
                        style={{
                          opacity: textVisible ? 1 : 0,
                          transition: `opacity 0.5s ease ${gIdx * 80}ms`,
                        }}
                      >
                        {group.label}
                      </span>

                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {group.tags.map((tag, tIdx) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                            style={{
                              opacity: textVisible ? 1 : 0,
                              transform: textVisible ? "translateY(0)" : "translateY(8px)",
                              transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${(gIdx * 4 + tIdx) * 50}ms`,
                            }}
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
