import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "gmarbandoy@gmail.com",
      href: "https://mail.google.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gielo-mar-bandoy",
      href: "https://www.linkedin.com/in/gielo-mar-bandoy-b19460339",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/gmarxdev",
      href: "https://github.com/gmarxdev",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-reveal ${sectionVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Contact Me
            </h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-lg mb-12">
              Feel free to reach out to me directly through any of the platforms below!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="border-2 bg-background hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                      <social.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{social.label}</h3>
                    <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors break-all">
                      {social.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
