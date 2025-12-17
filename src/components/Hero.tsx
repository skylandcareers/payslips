import { ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import ContactFormDialog from "./ContactFormDialog";
import NetworkBackground from "./NetworkBackground";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Network background configuration (0-10 scale)
  const networkLines = 6; // Connection density
  const networkDistance = 5; // Max connection distance

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={heroRef} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Network Background */}
        <NetworkBackground 
          lines={networkLines} 
          distance={networkDistance}
          className="z-0"
        />

        <div className="container relative z-10 px-4 md:px-6 text-center flex flex-col h-full justify-between py-32 md:py-24">
          {/* Eyebrow at top */}
          <p 
            className={`text-[10px] md:text-sm font-medium tracking-widest uppercase px-2 pt-8 md:pt-0 transition-all duration-1000 text-white/90 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`} 
            style={{ textShadow: '0 0 20px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.3)', transitionDelay: '0.3s' }}
          >
            Built on a decade of trust. Powered by AI that works.
          </p>
          
          {/* Title centered */}
          <div 
            className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'}`} 
            style={{ transitionDelay: '0.6s' }}
          >
            <h1 
              className="text-2xl md:text-5xl lg:text-6xl font-sans font-bold text-white leading-tight"
              style={{ textShadow: '0 0 40px rgba(255,255,255,0.2), 0 2px 8px rgba(0,0,0,0.4)' }}
            >
              We Make AI That Makes Humans Better.
            </h1>
          </div>
          
          {/* Subtitle and CTA at bottom */}
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}
            style={{ transitionDelay: '0.9s' }}
          >
            <p 
              className="text-sm md:text-lg font-sans text-white/80 max-w-2xl mx-auto leading-relaxed px-2 mb-6"
              style={{ textShadow: '0 0 15px rgba(255,255,255,0.2), 0 2px 6px rgba(0,0,0,0.4)' }}
            >
              Automate the routine. Elevate your people. Scale your revenue.
            </p>
            
            {/* Get in touch CTA */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 border-2 border-primary text-foreground font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </span>
              <span className="text-gray-800">Get in touch</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Hero;
