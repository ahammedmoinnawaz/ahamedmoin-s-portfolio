import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Phone, MapPin, FileText } from "lucide-react";

const BottomNavigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/ahammed-moin-nawaz",
      color: "hover:text-blue-600"
    },
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/ahammedmoinnawaz",
      color: "hover:text-gray-800"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:ahammedmoinnawaz@gmail.com",
      color: "hover:text-red-600"
    }
  ];

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Ahammed Moin Nawaz</h4>
            <p className="text-sm text-muted-foreground">
              Data Analyst & Business Intelligence Specialist
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Bellary, Karnataka
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91-8762218913
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                ahammedmoinnawaz@gmail.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.id)}
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-primary justify-start"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Data Analysis & Visualization</div>
              <div>Power BI Dashboard Development</div>
              <div>Excel Advanced Analytics</div>
              <div>Business Intelligence</div>
              <div>Data Cleaning & Processing</div>
            </div>
          </div>

          {/* Connect & Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    asChild
                    className={`hover:scale-105 transition-transform ${link.color}`}
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
            <Button className="w-full gap-2" size="sm">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Ahammed Moin Nawaz. All rights reserved. | 
            <span className="ml-2">Built with passion for data-driven insights</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BottomNavigation;