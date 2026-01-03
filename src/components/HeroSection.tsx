import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Geometric Accent with Float Animation */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Container with Enhanced Animations */}
            <div className="animate-zoom-in order-2 md:order-1 flex justify-center" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-glow-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/20 overflow-hidden bg-secondary flex items-center justify-center hover-lift transform hover:rotate-2 transition-all duration-500">
                  <img
                    src="ISOTECH_PROFILE.jpg"
                    alt="My Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Text Content with Staggered Animations */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
                Web & Mobile App Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block animate-text-reveal" style={{ animationDelay: '0.3s' }}>
                  Hi, I'm{" "}
                </span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-text-reveal" style={{ animationDelay: '0.5s' }}>
                  Gielo Mar Bandoy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.7s' }}>
                I build practical digital solutions with clean code and modern
                design. Specializing in web apps, mobile development, and IoT
                integration.
              </p>
            </div>
          </div>


          {/* Buttons and Social Links with Enhanced Animations */}
          <div className="mt-12 md:col-span-2 flex flex-col items-center md:items-start md:ml-12">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="group shadow-lg hover:shadow-2xl transition-all hover-lift animate-bounce-in hover-glow"
                style={{ animationDelay: '0.9s' }}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="shadow-lg hover:shadow-2xl transition-all hover-lift animate-bounce-in"
                style={{ animationDelay: '1.1s' }}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links with Staggered Animation */}
            <div className="flex gap-4">
              <a
                href="https://github.com/gmarxdev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover-lift animate-scale-in hover:rotate-12 duration-300"
                style={{ animationDelay: '1.3s' }}
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gielo-mar-bandoy-b19460339"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover-lift animate-scale-in hover:rotate-12 duration-300"
                style={{ animationDelay: '1.4s' }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover-lift animate-scale-in hover:rotate-12 duration-300"
                style={{ animationDelay: '1.5s' }}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 hover:border-accent transition-colors duration-300 cursor-pointer">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
