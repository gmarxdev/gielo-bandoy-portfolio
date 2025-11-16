import { Code2, Smartphone, Cpu, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
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
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Passionate developer dedicated to creating meaningful digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-8">
                <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
                  <img src="ISOTECH_PROFILE.jpg" alt="My Profile" />
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right space-y-6">
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
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  EMS
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  PHP
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  VUE
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Web Dev
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Mobile Dev
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  IoT
                </span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-lg group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">
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
