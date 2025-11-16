import { Code, Smartphone, Database, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
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
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Services I Offer
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive development solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-xl group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
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
