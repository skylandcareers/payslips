import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hulLogo from "@/assets/partners/hul.png";
import tcplLogo from "@/assets/partners/tcpl.png";
import gimLogo from "@/assets/partners/gim.png";

interface CaseStudy {
  id: number;
  company: string;
  logo: string;
  hook: React.ReactNode;
  fullDescription: string;
  bgColor: string;
  textColor: string;
  logoFilter: string;
}

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: "Hindustan Unilever Limited",
      logo: hulLogo,
      hook: (
        <>
          <span className="underline decoration-2 underline-offset-4">800+ HR hours</span>
          <br />
          eliminated in high-volume hiring
        </>
      ),
      fullDescription: "Hiring managers evaluated 20,000+ candidate profiles every year—a process that consumed weeks of valuable time. By deploying PotentialAI, we transformed their screening workflow, enabling managers to focus on high-quality interactions rather than manual filtering. This saved over 800 hours of HR effort and boosted shortlisted candidate quality by 50%.",
      bgColor: "bg-black",
      textColor: "text-white",
      logoFilter: "brightness-0 invert",
    },
    {
      id: 2,
      company: "Tata Consumer Products",
      logo: tcplLogo,
      hook: (
        <>
          <span className="underline decoration-2 underline-offset-4">3× improvement</span> in offer
          <br />
          conversion at campus scale
        </>
      ),
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
          timelines <span className="underline decoration-2 underline-offset-4">cut by 66%</span>
        </>
      ),
      fullDescription: "The admissions team processed 8,000+ applications every year—a volume that stretched timelines and strained resources. By deploying PotentialAI Admit, we transformed their evaluation workflow, enabling the team to focus on candidate quality rather than administrative bottlenecks. This reduced their application-to-offer timelines by two-thirds.",
      bgColor: "bg-[#9B8B7A]",
      textColor: "text-white",
      logoFilter: "brightness-0 invert",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-black">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4">
            We Make Life Simple For Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative h-[500px] cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Default State - Hook */}
              <div className={`absolute inset-0 ${study.bgColor} ${study.textColor} p-8 flex flex-col`}>
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
                  <p className="text-xl md:text-2xl font-serif leading-tight">
                    {study.hook}
                  </p>
                </div>
              </div>

              {/* Hover State - Full Description */}
              <AnimatePresence>
                {hoveredCard === study.id && (
                  <motion.div
                    initial={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
                    animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    exit={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 bg-white text-black p-8 flex flex-col items-center justify-center"
                  >
                    {/* Logo centered */}
                    <div className="mb-8">
                      <img
                        src={study.logo}
                        alt={`${study.company} logo`}
                        className="h-16 w-auto object-contain brightness-0"
                      />
                    </div>

                    {/* Full description */}
                    <p className="text-base md:text-lg font-serif italic text-center leading-relaxed px-4">
                      "{study.fullDescription}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
