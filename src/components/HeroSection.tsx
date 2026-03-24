import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/ISOTECH_PROFILE.jpg";

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
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content: Text & Actions */}
          <div className="flex-1 text-center md:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase rounded-full">
                Software Engineer & IoT Developer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                Hi, I'm <br className="hidden md:block" />
                <span className="text-primary">Gielo Mar Bandoy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                I build practical, modern digital solutions specializing in web apps, mobile development, and IoT integration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
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
            </div>

            <div className="flex items-center justify-center md:justify-start gap-5 pt-4">
              <a
                href="https://github.com/gmarxdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gielo-mar-bandoy-b19460339"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://mail.google.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content: Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end w-full animate-fade-in">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px] -z-10" />
              <img
                src={profileImage}
                alt="Gielo Mar Bandoy Profile"
                className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
