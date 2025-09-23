import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Twitter, Square } from "lucide-react";
import logoImage from "@/assets/blueprynt-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Work", path: "/work" },
      { name: "Blog", path: "/blog" },
    ],
    collaborate: [
      { name: "Brand Enquiry", path: "/brand-enquiry" },
      { name: "Influencer Register", path: "/influencer-register" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <img
                src={logoImage}
                alt="BluePrynt"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
              Where vision becomes reality. We turn raw potential into structures that stand tall.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-inter text-muted-foreground hover:text-cyan transition-colors duration-300 group relative"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborate Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Collaborate</h3>
            <ul className="space-y-3">
              {footerLinks.collaborate.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-inter text-muted-foreground hover:text-cyan transition-colors duration-300 group relative"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-inter text-muted-foreground hover:text-cyan transition-colors duration-300 group relative"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-inter text-muted-foreground text-sm">
            © {currentYear} BluePrynt. All rights reserved.
          </p>
          <p className="font-inter text-muted-foreground text-sm flex items-center">
            Find your missing piece.
            <Square className="ml-2 w-3 h-3 text-cyan animate-pulse transform rotate-45" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;