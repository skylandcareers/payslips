import { useState } from "react";
import ContactFormDialog from "./ContactFormDialog";
import NetworkBackground from "./NetworkBackground";
import HeroSection2 from "./ui/hero-section-2";
import { LogoCloud } from "./ui/logo-cloud";
import logo from "@/assets/altuni-labs-logo.png";
import { useNavigate, useLocation } from "react-router-dom";

// Partner logos
import hul from "@/assets/partners/hul.png";
import asianPaints from "@/assets/partners/asian-paints.png";
import colgate from "@/assets/partners/colgate.png";
import reckitt from "@/assets/partners/reckitt.png";
import mondelez from "@/assets/partners/mondelez.png";
import gsk from "@/assets/partners/gsk.png";
import jsw from "@/assets/partners/jsw.png";
import mahindra from "@/assets/partners/mahindra-new.png";
import shell from "@/assets/partners/shell.jpg";
import sunPharma from "@/assets/partners/sun-pharma.png";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Network background configuration (0-10 scale)
  const networkLines = 7;
  const networkDistance = 6;

  const navLinks = [
    { href: "case-studies", label: "Case Studies" },
    { href: "products", label: "Products" },
    { href: "team", label: "The Team" },
  ];

  const dropdownItems = [
    { label: "Our Story", href: "/our-story" },
    { label: "Our Platforms", href: "/our-platforms" },
    { label: "Our Investors", href: "/our-investors" },
  ];

  const partnerLogos = [
    { src: hul, alt: "HUL" },
    { src: asianPaints, alt: "Asian Paints" },
    { src: colgate, alt: "Colgate" },
    { src: reckitt, alt: "Reckitt" },
    { src: mondelez, alt: "Mondelez" },
    { src: gsk, alt: "GSK" },
    { src: jsw, alt: "JSW" },
    { src: mahindra, alt: "Mahindra" },
    { src: shell, alt: "Shell" },
    { src: sunPharma, alt: "Sun Pharma" },
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
          dropdownItems={dropdownItems}
          dropdownLabel="About"
          onNavClick={scrollToSection}
          onJoinClick={() => setIsFormOpen(true)}
          title="We Make AI That Makes Humans Better."
          description="Automate the routine. Elevate your people. Scale your revenue."
          ctaText="Get in touch"
          onCtaClick={() => setIsFormOpen(true)}
          footerVersion="From the Makers of InsideIIM"
        >
          <LogoCloud 
            logos={partnerLogos} 
            subtitle="Trusted by leading enterprises"
            className="mt-8"
          />
        </HeroSection2>
      </section>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Hero;
