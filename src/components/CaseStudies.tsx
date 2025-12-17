import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain,
} from "@/components/ui/card-curtain-reveal";
import hulLogo from "@/assets/partners/hul.png";
import tcplLogo from "@/assets/partners/tcpl.png";
import gimLogo from "@/assets/partners/gim.png";

interface CaseStudy {
  id: number;
  company: string;
  logo: string;
  hook: React.ReactNode;
  summary: string;
  fullDescription: string;
  bgColor: "black" | "white" | "red";
}

const CaseStudies = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      company: "Hindustan Unilever",
      logo: hulLogo,
      hook: (
        <>
          <span className="underline decoration-2">800+ HR hours</span> eliminated in high-volume hiring
        </>
      ),
      summary: "Saved 800 hours of HR effort and boosted shortlisted candidate quality by 50% using a scientific framework for automating high-volume screening with PotentialAI.",
      fullDescription: "Hiring managers evaluated 20,000+ candidate profiles every year—a process that consumed weeks of valuable time. By deploying PotentialAI, we transformed their screening workflow, enabling managers to focus on high-quality interactions rather than manual filtering. This saved over 800 hours of HR effort and boosted shortlisted candidate quality by 50%.",
      bgColor: "black",
    },
    {
      id: 2,
      company: "Tata Consumer Products",
      logo: tcplLogo,
      hook: (
        <>
          <span className="underline decoration-2">3× improvement</span> in offer conversion at campus scale
        </>
      ),
      summary: "Tripled offer conversion rates on large-scale campus drives by replacing manual workflows with our end-to-end suite (PotentialAI + SignalAI) for automated candidate screening and assessments.",
      fullDescription: "Hiring managers covered 75+ campuses and screened 15,000+ candidates every year with a process that simply didn't scale. By replacing manual workflows with our end-to-end suite (PotentialAI + SignalAI), we enabled automated candidate screening and assessments. This tripled their offer conversion rates on large-scale campus drives.",
      bgColor: "white",
    },
    {
      id: 3,
      company: "Goa Institute of Management",
      logo: gimLogo,
      hook: (
        <>
          Application-to-offer timelines <span className="underline decoration-2">cut by 66%</span>
        </>
      ),
      summary: "Cut application-to-offer timelines by two-thirds by automating manual application evaluations with PotentialAI Admit.",
      fullDescription: "The admissions team processed 8,000+ applications every year—a volume that stretched timelines and strained resources. By deploying PotentialAI Admit, we transformed their evaluation workflow, enabling the team to focus on candidate quality rather than administrative bottlenecks. This reduced their application-to-offer timelines by two-thirds.",
      bgColor: "red",
    },
  ];

  const getCardStyles = (bgColor: "black" | "white" | "red") => {
    switch (bgColor) {
      case "black":
        return {
          card: "bg-black text-white border-white/20",
          logo: "brightness-0 invert", // Makes logo white
          text: "text-white",
          curtain: "bg-white text-black",
          curtainText: "text-black",
        };
      case "white":
        return {
          card: "bg-white text-black border-black/20",
          logo: "brightness-0", // Makes logo black
          text: "text-black",
          curtain: "bg-black text-white",
          curtainText: "text-white",
        };
      case "red":
        return {
          card: "bg-[hsl(var(--destructive))] text-white border-white/20",
          logo: "brightness-0 invert", // Makes logo white
          text: "text-white",
          curtain: "bg-black text-white",
          curtainText: "text-white",
        };
    }
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
          {caseStudies.map((study) => {
            const styles = getCardStyles(study.bgColor);
            return (
              <CardCurtainReveal
                key={study.id}
                className={`h-[450px] border-2 ${styles.card}`}
              >
                <CardCurtainRevealBody className="p-8 justify-center items-center text-center">
                  {/* Logo */}
                  <div className="mb-6">
                    <img
                      src={study.logo}
                      alt={`${study.company} logo`}
                      className={`h-16 w-auto object-contain mx-auto ${styles.logo}`}
                    />
                  </div>

                  {/* Hook Text */}
                  <CardCurtainRevealTitle className={`text-xl md:text-2xl font-bold leading-tight ${styles.text}`}>
                    {study.hook}
                  </CardCurtainRevealTitle>

                  {/* Revealed Description */}
                  <CardCurtainRevealDescription className="mt-6">
                    <p className={`text-sm leading-relaxed ${styles.text} opacity-80`}>
                      {study.summary}
                    </p>
                  </CardCurtainRevealDescription>
                </CardCurtainRevealBody>

                {/* Curtain Reveal with Full Description */}
                <CardCurtainRevealFooter className={`${styles.curtain} p-8 flex flex-col justify-center`}>
                  <div className="mb-4">
                    <img
                      src={study.logo}
                      alt={`${study.company} logo`}
                      className={`h-12 w-auto object-contain mx-auto ${styles.curtainText === "text-white" ? "brightness-0 invert" : "brightness-0"}`}
                    />
                  </div>
                  <p className={`text-sm md:text-base leading-relaxed ${styles.curtainText} text-center italic`}>
                    "{study.fullDescription}"
                  </p>
                </CardCurtainRevealFooter>
              </CardCurtainReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
