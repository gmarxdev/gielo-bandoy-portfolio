import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.2 });
  const { setRef: setContactInfoRef, visibleItems } = useStaggeredReveal(3, { threshold: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gmarbandoy@gmail.com",
      link: "https://mail.google.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      link: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 938 200 5896",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={sectionRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 scroll-reveal ${sectionVisible ? 'revealed' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <div
              className="h-1 bg-primary mx-auto mb-6 transition-all duration-700"
              style={{
                width: sectionVisible ? '80px' : '0px',
                transition: 'width 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
              }}
            />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind? Let's discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              ref={formRef as React.RefObject<HTMLDivElement>}
              className={`lg:col-span-2 scroll-reveal-left ${formVisible ? 'revealed' : ''}`}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-500 hover-glow">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        required
                        className="h-12 transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                        required
                        className="h-12 transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell me about your project..."
                        required
                        rows={6}
                        className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover-glow"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  ref={setContactInfoRef(index)}
                  className={`border-2 hover:border-primary transition-all duration-500 hover-lift hover-glow scroll-scale ${visibleItems.has(index) ? 'revealed' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                      </div>
                      <div className="group">
                        <p className="text-sm text-muted-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-medium hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
