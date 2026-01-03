import { Code, Smartphone, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";

const ServicesSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const { setRef: setServiceRef, visibleItems } = useStaggeredReveal(4, { threshold: 0.2 });

  const services = [
    {
      icon: Code,
      title: "Web App Development",
      description:
        "Custom web applications built with modern technologies and best practices. From simple websites to complex enterprise systems.",
      features: ["PHP CodeIgniter 4", "Framework7 & Vue.js", "RESTful APIs", "Responsive Design"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: ["React Native", "Cross-platform", "Native Performance", "App Store & Play Store Deployment"],
    },
    {
      icon: Database,
      title: "System Design & Architecture",
      description:
        "Scalable system architecture and database design that grows with your business needs and ensures reliability.",
      features: ["Database Design", "API Architecture", "Cloud Integration", "Security Best Practices"],
    },
    {
      icon: Zap,
      title: "IoT Integration",
      description:
        "Connected device solutions and IoT prototypes that bridge the physical and digital worlds seamlessly.",
      features: ["Arduino, ESP32 & Raspberry Pi", "Sensor Integration", "Real-time Monitoring", "Custom Protocols"],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-reveal ${sectionVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Services I Offer
            </h2>
            <div
              className="h-1 bg-primary mx-auto mb-6 transition-all duration-700"
              style={{
                width: sectionVisible ? '80px' : '0px',
                transition: 'width 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive development solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                ref={setServiceRef(index)}
                className={`border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl group hover-lift hover-glow scroll-scale ${visibleItems.has(index) ? 'revealed' : ''}`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-glow-pulse">
                    <service.icon className="w-8 h-8 transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm group/item hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:w-2 group-hover/item:h-2 transition-all duration-300" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
