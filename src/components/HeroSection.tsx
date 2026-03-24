import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/ISOTECH_PROFILE.jpg";

const RESUME_FILE_NAME = "/BANDOY_RESUME.pdf";

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
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-background"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Profile and Name Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8 animate-fade-in">
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
            <img
              src={profileImage}
              alt="Gielo Mar Bandoy"
              className="w-full h-full object-cover rounded-full border-4 border-background shadow-lg shadow-accent/20"
            />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
              Gielo Mar Bandoy
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Software Engineer
            </h2>
          </div>
        </div>

        {/* Short Bio / Stats Line */}
        <div className="max-w-3xl mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Building robust web applications and scalable full-stack solutions
            <br className="hidden md:block" />
            Specialized in integrating complex systems, real-time data, and hardware APIs
          </p>
        </div>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-fade-up w-full max-w-2xl mx-auto"
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("portfolio")}
            className="w-full sm:w-auto rounded-full px-8 h-12 text-base group"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto rounded-full px-8 h-12 text-base"
          >
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="w-full sm:w-auto rounded-full px-8 h-12 text-base group"
          >
            <a href={RESUME_FILE_NAME} download>
              <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-6 pt-10 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="https://github.com/gmarxdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gielo-mar-bandoy-b19460339"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://mail.google.com"
            className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
