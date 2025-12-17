import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import insideiimLogo from "@/assets/platforms/insideiim-logo.png";
import insidekampusLogo from "@/assets/platforms/insidekampus-logo.png";
import altuniLogo from "@/assets/platforms/altuni-logo.png";
import altunilabsLogo from "@/assets/altuni-labs-logo.png";

interface Platform {
  id: number;
  name: string;
  description: string;
  link: string;
  logo: string;
  bgColor: string;
  textColor: string;
  logoFilter: string;
}

const platforms: Platform[] = [
  {
    id: 1,
    name: "InsideIIM",
    description: "India's most trusted career and MBA platform. From exam prep to placements, from interview training to employer insights, InsideIIM is where learners plan, practice, and progress.",
    link: "https://insideiim.com/",
    logo: insideiimLogo,
    bgColor: "bg-[#1a1a1a]",
    textColor: "text-white",
    logoFilter: "brightness-0 invert",
  },
  {
    id: 2,
    name: "InsideKampus",
    description: "Launched to digitise campus engagement and hiring. Students discover opportunities. Employers run competitions, events, and hiring journeys with less friction and better data.",
    link: "https://insidekampus.com/",
    logo: insidekampusLogo,
    bgColor: "bg-white",
    textColor: "text-black",
    logoFilter: "brightness-0",
  },
  {
    id: 3,
    name: "AltUni",
    description: "An alternative digital university focused on job-ready skills and outcomes. Programs are built with industry and designed to help professionals pivot and grow.",
    link: "https://altuni.in/",
    logo: altuniLogo,
    bgColor: "bg-[#b62100]",
    textColor: "text-white",
    logoFilter: "brightness-0 invert",
  },
  {
    id: 4,
    name: "AltUni Labs",
    description: "Our AI lab builds products that multiply human potential. We are shipping practical AI for finance, retail, job-tech, and admissions — always with transparent value for learners and employers.",
    link: "/",
    logo: altunilabsLogo,
    bgColor: "bg-[#1a1a1a]",
    textColor: "text-white",
    logoFilter: "brightness-0 invert",
  },
];

const OurPlatforms = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const getExpandedPlatform = () => platforms.find(p => p.id === expandedCard);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-16 bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <NetworkBackground lines={5} distance={6} className="brightness-150" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Platforms
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              A unique ecosystem connecting MBA students, high-potential aspirants, and employers that value merit and outcomes.
            </motion.p>
          </div>
        </section>

        {/* Platforms Grid - Case Studies Style */}
        <section className="relative bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <NetworkBackground lines={5} distance={6} className="brightness-150" />
          </div>
          
          <div className="container px-6 py-16 relative z-10">
            <div className="relative max-w-6xl mx-auto">
              {/* Desktop Grid */}
              <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    className={`relative h-[400px] ${platform.bgColor} ${platform.textColor} p-8 flex flex-col cursor-pointer group transition-opacity duration-300 ${
                      expandedCard && expandedCard !== platform.id ? "opacity-30 pointer-events-none" : "opacity-100"
                    }`}
                    onClick={() => setExpandedCard(expandedCard === platform.id ? null : platform.id)}
                  >
                    {/* Logo at top */}
                    <div className="flex-shrink-0 mb-auto h-20 flex items-start">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className={`h-12 w-auto object-contain ${platform.logoFilter}`}
                      />
                    </div>

                    {/* Platform name */}
                    <div className="flex flex-col">
                      <p className="text-xl font-sans font-semibold leading-tight mb-2">
                        {platform.name}
                      </p>
                      
                      {/* Expand indicator */}
                      <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Desktop Expanded overlay - curtain animation */}
                <AnimatePresence>
                  {expandedCard && (
                    <motion.div
                      initial={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
                      animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                      exit={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute inset-0 bg-white text-black z-30"
                    >
                      {(() => {
                        const platform = getExpandedPlatform();
                        if (!platform) return null;
                        
                        return (
                          <div className="h-full p-10 md:p-12 flex flex-col">
                            {/* Close button */}
                            <button 
                              className="absolute top-6 right-6 p-2 hover:bg-black/5 transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedCard(null);
                              }}
                            >
                              <X size={24} strokeWidth={1.5} />
                            </button>

                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 h-full">
                              {/* Left Column */}
                              <div className="flex flex-col">
                                {/* Logo */}
                                <div className="mb-8">
                                  <img
                                    src={platform.logo}
                                    alt={`${platform.name} logo`}
                                    className="h-14 w-auto object-contain"
                                  />
                                </div>

                                {/* Name */}
                                <h3 className="text-2xl font-sans font-bold mb-4">{platform.name}</h3>

                                {/* Visit Link */}
                                <a
                                  href={platform.link}
                                  target={platform.link.startsWith("http") ? "_blank" : undefined}
                                  rel={platform.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                  className="mt-auto inline-flex items-center gap-2 text-[#b62100] hover:underline font-medium"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Visit Platform
                                  <ArrowRight size={16} />
                                </a>
                              </div>

                              {/* Right Column - Description */}
                              <div className="flex items-center">
                                <div className="pl-6 border-l-2 border-[#b62100]">
                                  <p className="text-base text-black/70 leading-relaxed font-sans">
                                    {platform.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Stack */}
              <div className="md:hidden flex flex-col gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    className={`relative ${platform.bgColor} ${platform.textColor} p-6 cursor-pointer group transition-all duration-300`}
                    onClick={() => setExpandedCard(expandedCard === platform.id ? null : platform.id)}
                  >
                    {/* Logo */}
                    <div className="mb-4">
                      <img
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className={`h-10 w-auto object-contain ${platform.logoFilter}`}
                      />
                    </div>

                    {/* Platform name */}
                    <p className="text-lg font-sans font-semibold mb-2">
                      {platform.name}
                    </p>
                    
                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 opacity-70 text-sm">
                      <span>{expandedCard === platform.id ? 'Tap to close' : 'Tap to read more'}</span>
                      <ArrowRight size={14} className={`transition-transform ${expandedCard === platform.id ? 'rotate-90' : ''}`} />
                    </div>

                    {/* Mobile Expanded Content */}
                    <AnimatePresence>
                      {expandedCard === platform.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-4 border-t border-current/20">
                            {/* Description */}
                            <p className="text-sm font-sans leading-relaxed mb-4">
                              {platform.description}
                            </p>

                            {/* Visit Link */}
                            <a
                              href={platform.link}
                              target={platform.link.startsWith("http") ? "_blank" : undefined}
                              rel={platform.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="inline-flex items-center gap-2 text-sm font-medium underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Visit Platform
                              <ArrowRight size={14} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-6"
            >
              The InsideIIM Community Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              InsideIIM is a unique ecosystem connecting MBA students and alumni from India's top B-schools, high-potential aspirants from leading universities, and employers and institutions that value merit and outcomes.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed"
            >
              Every year, about 5 million unique users read, watch, prepare, and make career decisions with us. Many go on to top companies. Some build their own.
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurPlatforms;
