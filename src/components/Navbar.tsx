
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-fotomadani-cream shadow-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-fotomadani-navy">
          Foto Madani
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="btn-secondary">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          <Menu className="text-fotomadani-navy" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-fotomadani-cream shadow-md py-4 animate-fade-in">
          <div className="container-wide flex flex-col space-y-4">
            <a 
              href="#about" 
              className="py-2 px-4 hover:bg-fotomadani-beige/20 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#portfolio" 
              className="py-2 px-4 hover:bg-fotomadani-beige/20 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              className="py-2 px-4 hover:bg-fotomadani-beige/20 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="py-2 px-4 bg-fotomadani-navy text-white rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
