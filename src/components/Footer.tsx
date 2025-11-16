import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              GMB<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building practical digital solutions with clean code and modern design.
              Specializing in web, mobile, and IoT development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/gmarxdev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border-2 border-border hover:border-primary flex items-center justify-center transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gielo-mar-bandoy-b19460339"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background border-2 border-border hover:border-primary flex items-center justify-center transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com"
                className="w-10 h-10 rounded-lg bg-background border-2 border-border hover:border-primary flex items-center justify-center transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Gielo Mar Bandoy. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> and
            lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
