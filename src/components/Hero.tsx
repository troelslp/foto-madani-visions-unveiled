
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-fotomadani-navy/70 to-fotomadani-navy/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80" 
          alt="Spectacular landscape" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-6 animate-fade-up">
            Capturing Life's Most Beautiful Moments
          </h1>
          <p className="text-lg md:text-xl mb-10 text-fotomadani-cream/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Professional photography services for weddings, portraits, landscapes, and commercial projects.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              className="bg-white text-fotomadani-navy hover:bg-fotomadani-beige transition-colors flex items-center gap-2 text-base"
              asChild
            >
              <a href="#portfolio">
                View Portfolio <ArrowRight size={16} />
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 transition-colors text-base"
              asChild
            >
              <a href="#contact">
                Book a Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
