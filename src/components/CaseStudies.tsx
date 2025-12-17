import { useState } from "react";
import hulLogo from "@/assets/partners/hul.png";
import tcplLogo from "@/assets/partners/tcpl.png";
import gimLogo from "@/assets/partners/gim.png";

interface CaseStudy {
  id: number;
  company: string;
  logo: string;
  problemSolution: string;
  fullDescription: string;
  results: string[];
}

const CaseStudies = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: "Unilever",
      logo: hulLogo,
      problemSolution: "Saved 800 hours of HR effort and boosted shortlisted candidate quality by 50% using a scientific framework for automating high-volume screening with PotentialAI.",
      fullDescription: "Hiring managers evaluated 20,000+ candidate profiles every year—a process that consumed weeks of valuable time. By deploying PotentialAI, we transformed their screening workflow, enabling managers to focus on high-quality interactions rather than manual filtering. This saved over 800 hours of HR effort and boosted shortlisted candidate quality by 50%.",
      results: [
        "Reduced screening time by 70%",
        "Improved candidate quality by 50%",
        "Enhanced candidate experience scores"
      ]
    },
    {
      id: 2,
      company: "Tata Consumer Products",
      logo: tcplLogo,
      problemSolution: "Tripled offer conversion rates on large-scale campus drives by replacing manual workflows with our end-to-end suite (PotentialAI + SignalAI) for automated candidate screening and assessments.",
      fullDescription: "Hiring managers covered 75+ campuses and screened 15,000+ candidates every year with a process that simply didn't scale. By replacing manual workflows with our end-to-end suite (PotentialAI + SignalAI), we enabled automated candidate screening and assessments. This tripled their offer conversion rates on large-scale campus drives.",
      results: [
        "Tripled offer conversion rates",
        "Automated screening across 75+ campuses"
      ]
    },
    {
      id: 3,
      company: "GIM Goa",
      logo: gimLogo,
      problemSolution: "Cut application-to-offer timelines by two-thirds by automating manual application evaluations with PotentialAI Admit.",
      fullDescription: "The admissions team processed 8,000+ applications every year—a volume that stretched timelines and strained resources. By deploying PotentialAI Admit, we transformed their evaluation workflow, enabling the team to focus on candidate quality rather than administrative bottlenecks. This reduced their application-to-offer timelines by two-thirds.",
      results: [
        "Application to Offer time reduced by 66%",
        "Improved candidate evaluation consistency",
        "Enhanced admissions team productivity"
      ]
    }
  ];

  const handleCardClick = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
            We Make Life Simple For Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="relative h-[400px] cursor-pointer perspective-1000"
              onClick={() => handleCardClick(study.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCards.includes(study.id) ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden bg-card border border-border rounded-[20%] p-6 flex flex-col items-center justify-center gap-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-center h-24">
                    <img
                      src={study.logo}
                      alt={`${study.company} logo`}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {study.problemSolution}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Click to read more →
                  </p>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-card via-card to-primary/10 border border-border rounded-[20%] p-8 rotate-y-180 shadow-lg overflow-y-auto flex flex-col justify-center">
                  <p className="text-muted-foreground leading-relaxed text-center italic">
                    "{study.fullDescription}"
                  </p>
                  <p className="text-sm text-primary font-medium text-center mt-6">
                    Click to go back ←
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
