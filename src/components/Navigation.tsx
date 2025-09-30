import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/blueprynt-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-glow"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500" />
            <img
              src={logoImage}
              alt="BluePrynt - Premium Marketing Agency"
              className="h-56 w-auto transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 drop-shadow-2xl relative z-10"
              style={{ filter: 'drop-shadow(0 0 40px rgba(14, 165, 255, 0.6))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-body font-semibold text-base transition-all duration-500 hover:text-cyan relative group ${
                  location.pathname === item.path ? "text-cyan" : "text-foreground"
                }`}
                style={{ 
                  animation: `fade-in 0.5s ease-out ${index * 0.1}s backwards`
                }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-500 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button 
              variant="outline" 
              asChild 
              className="hover:scale-105 transition-all duration-300 border-2 hover:border-cyan hover:shadow-glow font-semibold"
            >
              <Link to="/brand-enquiry">Start Your BluePrynt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-cyan/10 transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="transition-transform duration-300 rotate-90" /> : <Menu className="transition-transform duration-300" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in border-t border-border pt-6">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-body font-semibold text-lg py-2 transition-all duration-300 hover:text-cyan hover:translate-x-2 ${
                    location.pathname === item.path ? "text-cyan" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    animation: `fade-in 0.3s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <Button variant="outline" className="w-full hover:scale-105 transition-transform duration-300" asChild>
                  <Link to="/brand-enquiry">Start Your BluePrynt</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;