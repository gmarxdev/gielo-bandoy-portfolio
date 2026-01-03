import { Code2, Smartphone, Cpu, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.3 });
  const { setRef: setSkillRef, visibleItems } = useStaggeredReveal(4, { threshold: 0.3 });
  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building robust web applications with PHP CodeIgniter 4 and modern JavaScript frameworks",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating intuitive mobile experiences for iOS and Android platforms",
    },
    {
      icon: Cpu,
      title: "IoT Development",
      description: "Developing connected devices and smart systems with Arduino and embedded solutions",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting user-centered designs that combine aesthetics with functionality",
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
                    src="ISOTECH_PROFILE.jpg"
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
                I'm a web and mobile app developer with expertise in creating
                practical, user-friendly digital solutions. My experience spans
                across full-stack web development using PHP CodeIgniter 4,
                modern frontend technologies, and mobile app development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building real-world systems that solve actual
                problems, with a focus on clean code architecture and intuitive
                user experiences. From enterprise web applications to IoT
                prototypes, I bring technical expertise and creative problem-solving
                to every project.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['EMS', 'PHP', 'JavaScript', 'VUE', 'Web Dev', 'Mobile Dev', 'IoT'].map((tech, idx) => (
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
