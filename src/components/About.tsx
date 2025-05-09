
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="heading-lg mb-6 text-fotomadani-navy">About Foto Madani</h2>
            <p className="text-fotomadani-slate mb-6">
              Foto Madani is a premier photography studio specializing in capturing life's most precious moments with artistry and precision. With years of experience and a passion for visual storytelling, we transform ordinary scenes into extraordinary memories.
            </p>
            <p className="text-fotomadani-slate mb-6">
              Our approach blends technical expertise with creative vision, resulting in images that evoke emotion and tell your unique story. Whether it's an intimate wedding, a corporate event, a family portrait, or a stunning landscape, we bring the same level of dedication and artistry to every project.
            </p>
            <p className="text-fotomadani-slate">
              At Foto Madani, we believe that great photography is about more than just taking pictures—it's about creating timeless art that you'll cherish for generations.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 bg-fotomadani-mauve/20 -z-10 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 bg-fotomadani-beige/30 -z-10 rounded-lg"></div>
            <div className="image-hover rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80" 
                alt="Photographer at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
