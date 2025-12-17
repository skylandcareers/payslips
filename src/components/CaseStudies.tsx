import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
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
          <span className="underline decoration-[hsl(var(--destructive))] decoration-[3px] underline-offset-4 font-semibold">800+ HR hours</span>
          <br />
          eliminated in high-volume hiring
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
          <span className="underline decoration-[hsl(var(--destructive))] decoration-[3px] underline-offset-4 font-semibold">3× improvement</span> in offer
          <br />
          conversion at campus scale
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
          timelines <span className="underline decoration-[hsl(var(--destructive))] decoration-[3px] underline-offset-4 font-semibold">cut by 66%</span>
        </>
      ),
      summary: "Cut application-to-offer timelines by two-thirds by automating manual application evaluations with PotentialAI Admit.",
      product: "PotentialAI Admit",
      fullDescription: "The admissions team processed 8,000+ applications every year—a volume that stretched timelines and strained resources. By deploying PotentialAI Admit, we transformed their evaluation workflow, enabling the team to focus on candidate quality rather than administrative bottlenecks. This reduced their application-to-offer timelines by two-thirds.",
      bgColor: "bg-[hsl(var(--destructive))]",
      textColor: "text-white",
      logoFilter: "brightness-0 invert",
    },
  ];

  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-20 bg-black">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-white mb-4 tracking-tight">
            We Make Life Simple For Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              layout
              className="relative cursor-pointer overflow-hidden"
              onClick={() => handleCardClick(study.id)}
            >
              <AnimatePresence mode="wait">
                {expandedCard === study.id ? (
                  // Expanded State
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black p-8"
                  >
                    {/* Close button */}
                    <button 
                      className="absolute top-4 right-4 p-2 hover:bg-black/10 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(null);
                      }}
                    >
                      <X size={20} />
                    </button>

                    {/* Logo */}
                    <div className="mb-6">
                      <img
                        src={study.logo}
                        alt={`${study.company} logo`}
                        className="h-12 w-auto object-contain brightness-0"
                      />
                    </div>

                    {/* Summary */}
                    <p className="text-lg font-sans font-medium leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    {/* Product Used */}
                    <div className="mb-6 py-3 border-t border-b border-black/10">
                      <span className="text-sm text-black/50 uppercase tracking-wider">Product Used</span>
                      <p className="text-base font-semibold text-[hsl(var(--destructive))]">{study.product}</p>
                    </div>

                    {/* Full Description */}
                    <div className="relative pl-4 border-l-2 border-[hsl(var(--destructive))]">
                      <p className="text-sm text-black/70 leading-relaxed italic">
                        "{study.fullDescription}"
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  // Collapsed State - Hook
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`h-[500px] ${study.bgColor} ${study.textColor} p-8 flex flex-col group`}
                  >
                    {/* Logo at top */}
                    <div className="flex-shrink-0">
                      <img
                        src={study.logo}
                        alt={`${study.company} logo`}
                        className={`h-20 w-auto object-contain ${study.logoFilter}`}
                      />
                    </div>

                    {/* Hook text at bottom */}
                    <div className="mt-auto">
                      <p className="text-xl md:text-2xl font-sans leading-tight mb-4">
                        {study.hook}
                      </p>
                      
                      {/* Click indicator */}
                      <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm">Click to expand</span>
                        <ChevronDown size={16} className="animate-bounce" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
