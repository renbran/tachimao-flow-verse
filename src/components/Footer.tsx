import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background/95 border-t border-glass-border/30 backdrop-blur-md">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                Scholarix Global
              </h3>
              <p className="text-sm text-muted-foreground">
                Machine Speed, Human Expertise. Real Results.
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students to achieve their academic dreams since 2022.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/scholarixglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card glow-hover interactive hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/scholarixglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card glow-hover interactive hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/scholarixglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card glow-hover interactive hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/scholarixglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card glow-hover interactive hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  to="/onboarding-flowchart"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  Onboarding Flow
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Solutions</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">CRM & Lead Scoring</li>
              <li className="text-muted-foreground text-sm">Automated Invoicing</li>
              <li className="text-muted-foreground text-sm">Sales Offer Generation</li>
              <li className="text-muted-foreground text-sm">AI Client Agents</li>
              <li className="text-muted-foreground text-sm">Property Automation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:hello@scholarixglobal.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  hello@scholarixglobal.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Scholarix Global. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
