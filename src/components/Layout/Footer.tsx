import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">RaduDev</h3>
            <p className="text-foreground/70 text-sm">
              Dezvoltator Full Stack specializat în tehnologii moderne web.
              Creez soluții digitale inovatoare și funcționale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Link-uri Rapide</h4>
            <nav className="flex flex-col space-y-2">
              {["Acasă", "Despre", "Servicii", "Portofoliu", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>raduivan2003@yahoo.ro</p>
              <p>Suceava, România</p>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://github.com/iraduq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ivanradu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:raduivan2003@yahoo.ro"
                className="text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} RaduDev. Toate drepturile rezervate.
            </p>
            <p className="text-foreground/60 text-sm">
              Construit cu React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;