import { useState } from "react";
import ContactFormDialog from "./ContactFormDialog";
import NetworkBackground from "./NetworkBackground";
import HeroSection2 from "./ui/hero-section-2";
import logo from "@/assets/altuni-labs-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Network background configuration (0-10 scale)
  const networkLines = 7; // Increased for more density
  const networkDistance = 6; // Increased connection distance

  const navLinks = [
    { href: "case-studies", label: "Case Studies" },
    { href: "products", label: "Products" },
    { href: "team", label: "The Team" },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen overflow-hidden">
        {/* Brighter Network Background */}
        <div className="absolute inset-0 z-0">
          <NetworkBackground 
            lines={networkLines} 
            distance={networkDistance}
            className="brightness-125"
          />
        </div>

        {/* Hero Content */}
        <HeroSection2
          logoElement={
            <img 
              src={logo} 
              alt="AltUni Labs" 
              className="h-10 md:h-12 w-auto cursor-pointer filter brightness-0 invert"
              onClick={handleLogoClick}
            />
          }
          navLinks={navLinks}
          onNavClick={scrollToSection}
          onJoinClick={() => setIsFormOpen(true)}
          eyebrow="Built on a decade of trust. Powered by AI that works."
          title="We Make AI That Makes Humans Better."
          description="Automate the routine. Elevate your people. Scale your revenue."
          ctaText="Get in touch"
          onCtaClick={() => setIsFormOpen(true)}
          footerVersion="From the Makers of InsideIIM"
        />
      </section>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Hero;
