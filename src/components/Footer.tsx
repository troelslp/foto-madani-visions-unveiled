
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fotomadani-navy text-white py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Foto Madani</h3>
            <p className="text-fotomadani-cream/70 mb-6">
              Capturing life's most beautiful moments with artistry and precision.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-fotomadani-slate/20 p-2 rounded-full hover:bg-fotomadani-slate/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-fotomadani-slate/20 p-2 rounded-full hover:bg-fotomadani-slate/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-fotomadani-slate/20 p-2 rounded-full hover:bg-fotomadani-slate/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-fotomadani-cream/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-fotomadani-cream/70 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#portfolio" className="text-fotomadani-cream/70 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#services" className="text-fotomadani-cream/70 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-fotomadani-cream/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-fotomadani-cream/70">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-fotomadani-slate/20 mt-8 pt-8 text-center text-fotomadani-cream/50">
          <p>&copy; {new Date().getFullYear()} Foto Madani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
