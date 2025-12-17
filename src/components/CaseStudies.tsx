import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import hulLogo from "@/assets/partners/hul.png";
import tcplLogo from "@/assets/partners/tcpl.png";
import gimLogo from "@/assets/partners/gim.png";

interface CaseStudy {
  id: number;
  company: string;
  logo: string;
  hook: React.ReactNode;
  summary: string;
  product: string;
  fullDescription: string;
  bgColor: string;
  textColor: string;
  logoFilter: string;
}

const CaseStudies = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: "Hindustan Unilever Limited",
      logo: hulLogo,
      hook: (
        <>
          <span className="underline decoration-[#b62100] decoration-[3px] underline-offset-4 font-semibold">800+ HR hours</span>
          <br />
          eliminated in high-volume
          <br />
          hiring
        </>
      ),
      summary: "Saved 800 hours of HR effort and boosted shortlisted candidate quality by 50% using a scientific framework for automating high-volume screening with PotentialAI.",
      product: "PotentialAI",
      fullDescription: "Hiring managers evaluated 20,000+ candidate profiles every year—a process that consumed weeks of valuable time. By deploying PotentialAI, we transformed their screening workflow, enabling managers to focus on high-quality interactions rather than manual filtering. This saved over 800 hours of HR effort and boosted shortlisted candidate quality by 50%.",
      bgColor: "bg-[#1a1a1a]",
      textColor: "text-white",
      logoFilter: "brightness-0 invert",
    },
    {
      id: 2,
      company: "Tata Consumer Products",
      logo: tcplLogo,
      hook: (
        <>
          <span className="underline decoration-[#b62100] decoration-[3px] underline-offset-4 font-semibold">3× improvement</span> in offer
          <br />
          conversion at campus
          <br />
          scale
        </>
      ),
      summary: "Tripled offer conversion rates on large-scale campus drives by replacing manual workflows with our end-to-end suite for automated candidate screening and assessments.",
      product: "PotentialAI + SignalAI",
      fullDescription: "Hiring managers covered 75+ campuses and screened 15,000+ candidates every year with a process that simply didn't scale. By replacing manual workflows with our end-to-end suite (PotentialAI + SignalAI), we enabled automated candidate screening and assessments. This tripled their offer conversion rates on large-scale campus drives.",
      bgColor: "bg-white",
      textColor: "text-black",
      logoFilter: "brightness-0",
    },
    {
      id: 3,
      company: "Goa Institute of Management",
      logo: gimLogo,
      hook: (
        <>
          Application-to-offer
          <br />
          timelines <span className="underline decoration-[#8B0000] decoration-[3px] underline-offset-4 font-semibold">cut by 66%</span>
        </>
      ),
      summary: "Cut application-to-offer timelines by two-thirds by automating manual application evaluations with PotentialAI Admit.",
      product: "PotentialAI Admit",
      fullDescription: "The admissions team processed 8,000+ applications every year—a volume that stretched timelines and strained resources. By deploying PotentialAI Admit, we transformed their evaluation workflow, enabling the team to focus on candidate quality rather than administrative bottlenecks. This reduced their application-to-offer timelines by two-thirds.",
      bgColor: "bg-[#b62100]",
      textColor: "text-white",
      logoFilter: "brightness-0 invert",
    },
  ];

  const getExpandedStudy = () => caseStudies.find(s => s.id === expandedCard);

  return (
    <section id="case-studies" className="py-20 bg-black">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold text-white tracking-tight">
            We Make Life Simple For Our Clients
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`relative h-[400px] ${study.bgColor} ${study.textColor} p-8 flex flex-col cursor-pointer group transition-opacity duration-300 ${
                  expandedCard && expandedCard !== study.id ? "opacity-30 pointer-events-none" : "opacity-100"
                }`}
                onClick={() => setExpandedCard(expandedCard === study.id ? null : study.id)}
              >
                {/* Logo at top */}
                <div className="flex-shrink-0 mb-auto">
                  <img
                    src={study.logo}
                    alt={`${study.company} logo`}
                    className={`h-20 w-auto object-contain ${study.logoFilter}`}
                  />
                </div>

                {/* Hook text - anchored to top of bottom area */}
                <div className="flex flex-col">
                  <p className="text-xl md:text-2xl font-sans leading-tight mb-4">
                    {study.hook}
                  </p>
                  
                  {/* Expand indicator */}
                  <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity mt-2">
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}

            {/* Expanded overlay - covers all cards */}
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
                    const study = getExpandedStudy();
                    if (!study) return null;
                    
                    return (
                      <div className="h-full p-10 md:p-12 flex flex-col">
                        {/* Close button */}
                        <button 
                          className="absolute top-6 right-6 p-2 hover:bg-black/5 transition-colors"
                          onClick={() => setExpandedCard(null)}
                        >
                          <X size={24} strokeWidth={1.5} />
                        </button>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 h-full">
                          {/* Left Column */}
                          <div className="flex flex-col">
                            {/* Logo - original color */}
                            <div className="mb-8">
                              <img
                                src={study.logo}
                                alt={`${study.company} logo`}
                                className="h-14 w-auto object-contain"
                              />
                            </div>

                            {/* Summary */}
                            <p className="text-lg md:text-xl font-sans font-medium leading-relaxed text-black">
                              {study.summary}
                            </p>

                            {/* Product Used */}
                            <div className="mt-auto pt-6 border-t border-black/10">
                              <span className="text-xs uppercase tracking-widest text-black/40 font-sans">Product Used</span>
                              <p className="text-base font-semibold text-[#b62100] mt-1 font-sans">{study.product}</p>
                            </div>
                          </div>

                          {/* Right Column - Full Description */}
                          <div className="flex items-center">
                            <div className="pl-6 border-l-2 border-[#b62100]">
                              <p className="text-sm md:text-base text-black/60 leading-relaxed font-sans italic">
                                "{study.fullDescription}"
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
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
