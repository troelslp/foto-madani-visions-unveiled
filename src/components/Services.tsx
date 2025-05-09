
import { Camera, Image, Home, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// Service cards data
const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Capture your special day with our professional wedding photography services. We focus on the emotions, details, and beautiful moments.",
    bgColor: "bg-fotomadani-beige/20",
    borderColor: "border-fotomadani-beige"
  },
  {
    icon: Image,
    title: "Portrait Sessions",
    description: "Individual, family, or group portraits that capture personality and emotion in studio or outdoor settings.",
    bgColor: "bg-fotomadani-mauve/20",
    borderColor: "border-fotomadani-mauve"
  },
  {
    icon: MapPin,
    title: "Landscape Photography",
    description: "Stunning nature and landscape photography for art prints, decor, or your personal collection.",
    bgColor: "bg-fotomadani-slate/20",
    borderColor: "border-fotomadani-slate"
  },
  {
    icon: Home,
    title: "Commercial Photography",
    description: "Professional photography for businesses, products, real estate, and corporate events.",
    bgColor: "bg-fotomadani-navy/10",
    borderColor: "border-fotomadani-navy"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-fotomadani-slate">
            Professional photography services tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-lg p-6 border-l-4 transition-all hover:-translate-y-1 hover:shadow-lg",
                service.bgColor,
                service.borderColor
              )}
            >
              <div className="mb-4">
                <service.icon size={32} className="text-fotomadani-navy" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-fotomadani-navy">{service.title}</h3>
              <p className="text-fotomadani-slate">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif mb-4">Custom Photography Packages</h3>
          <p className="max-w-2xl mx-auto text-fotomadani-slate mb-8">
            We offer customized photography packages to meet your specific needs and budget. 
            Contact us to discuss how we can create the perfect photography experience for you.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
