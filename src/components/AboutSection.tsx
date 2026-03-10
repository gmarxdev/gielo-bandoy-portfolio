import { Code2, Smartphone, Cpu, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";
import profileImage from "@/assets/ISOTECH_PROFILE.jpg";

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.3 });
  const { setRef: setSkillRef, visibleItems } = useStaggeredReveal(4, { threshold: 0.3 });
  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building robust web applications with strong, secured, and modern web technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating intuitive mobile experiences for iOS and Android platforms",
    },
    {
      icon: Cpu,
      title: "IoT Development",
      description: "Developing connected devices and smart systems with strong and modern microcontrollers and embedded solutions",
    },
    {
      icon: Palette,
      title: "User-Friendly Design",
      description: "Crafting user-centered and user-friendly designs that combine aesthetics with functionality",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-reveal ${sectionVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About Me
            </h2>
            <div
              className="h-1 bg-primary mx-auto mb-6 transition-all duration-700"
              style={{
                width: sectionVisible ? '80px' : '0px',
                transition: 'width 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate developer dedicated to creating meaningful digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className={`scroll-reveal-left ${imageVisible ? 'revealed' : ''}`}
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8 hover-lift transition-all duration-500 hover:rotate-1">
                <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center overflow-hidden group">
                  <img
                    src={profileImage}
                    alt="My Profile"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div
              ref={textRef as React.RefObject<HTMLDivElement>}
              className={`space-y-6 scroll-reveal-right ${textVisible ? 'revealed' : ''}`}
            >
              <h3 className="text-2xl md:text-3xl font-bold">
                Transforming Ideas Into Digital Reality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m a web and mobile app developer focused on building practical and user-friendly digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I create systems that solve real problems and improve how people work or interact with technology.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Full Stack[React, React Native, Express, Neon PostgreSQL, Tailwind CSS]', 'Automation Tools[n8n]', 'IoT Solutions[Arduino, ESP32, Raspberry Pi, Firebase], Tools[VS Code, Git, Postman, Claude, ChatGPT]',].map((tech, idx) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-110 hover:-rotate-3"
                    style={{
                      animationDelay: `${idx * 100}ms`,
                      opacity: textVisible ? 1 : 0,
                      transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 100}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                ref={setSkillRef(index)}
                className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl group hover-lift hover-glow scroll-scale ${visibleItems.has(index) ? 'revealed' : ''}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <skill.icon className="w-8 h-8 transition-transform duration-500" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
