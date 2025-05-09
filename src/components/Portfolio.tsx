
import { useState } from "react";
import { cn } from "@/lib/utils";

// Portfolio categories and images
const categories = [
  {
    id: "all",
    name: "All Work",
  },
  {
    id: "weddings",
    name: "Weddings",
  },
  {
    id: "portraits",
    name: "Portraits",
  },
  {
    id: "landscapes",
    name: "Landscapes",
  },
  {
    id: "commercial",
    name: "Commercial",
  },
];

const portfolioItems = [
  {
    id: 1,
    category: "landscapes",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    title: "Mountain Fog",
    description: "Early morning fog in the mountains",
  },
  {
    id: 2,
    category: "landscapes",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Forest Lake",
    description: "Calm lake surrounded by forest",
  },
  {
    id: 3,
    category: "portraits",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "Elegant Portrait",
    description: "Studio portrait session",
  },
  {
    id: 4,
    category: "weddings",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    title: "Wedding Day",
    description: "Beautiful wedding ceremony",
  },
  {
    id: 5,
    category: "commercial",
    image: "https://images.unsplash.com/photo-1512207736890-5cd8fd228a44?auto=format&fit=crop&w=800&q=80",
    title: "Product Display",
    description: "Commercial product photography",
  },
  {
    id: 6,
    category: "portraits",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    title: "Casual Portrait",
    description: "Natural light portrait session",
  },
  {
    id: 7,
    category: "landscapes",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    title: "Ocean Waves",
    description: "Dramatic coastal scene",
  },
  {
    id: 8,
    category: "commercial",
    image: "https://images.unsplash.com/photo-1516962126636-27bf6dff6e24?auto=format&fit=crop&w=800&q=80",
    title: "Lifestyle Brand",
    description: "Lifestyle commercial photography",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-fotomadani-cream/50">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Portfolio</h2>
          <p className="text-fotomadani-slate">
            Explore our diverse collection of photographic work spanning various styles and subjects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all",
                activeCategory === category.id
                  ? "bg-fotomadani-navy text-white"
                  : "bg-transparent text-fotomadani-slate hover:bg-fotomadani-beige/30"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="group image-hover rounded-lg overflow-hidden bg-white shadow-md">
              <div className="aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-medium text-fotomadani-navy">{item.title}</h3>
                <p className="text-fotomadani-slate text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
