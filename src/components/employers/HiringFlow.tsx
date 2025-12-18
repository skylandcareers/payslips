import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StepDescription {
  prefix: string | null;
  bold: string;
  suffix: string | null;
}

interface Step {
  id: string;
  label: string;
  isAI: boolean;
  descAbove: StepDescription | null;
  descBelow: StepDescription | null;
}

const steps: Step[] = [
  { 
    id: "outreach", 
    label: "OUTREACH",
    isAI: false,
    descAbove: null,
    descBelow: { prefix: "Reached", bold: "13,800 candidates", suffix: "across top campuses through InsideIIM." }
  },
  { 
    id: "profile", 
    label: "AI PROFILE\nEVALUATION",
    isAI: true,
    descAbove: { prefix: "Shortlisting time reduced from", bold: "weeks → minutes", suffix: null },
    descBelow: null
  },
  { 
    id: "role", 
    label: "ROLE-FIT\nSIMULATION",
    isAI: false,
    descAbove: null,
    descBelow: { prefix: null, bold: "Custom simulation", suffix: "built and deployed in 7 days" }
  },
  { 
    id: "interview", 
    label: "INTERVIEW\nEVALUATION",
    isAI: true,
    descAbove: { prefix: "AI Copilot enabled 100%", bold: "consistent scoring", suffix: "across interview panels" },
    descBelow: null
  },
  { 
    id: "final", 
    label: "FINAL\nSELECTION\nQUALITY",
    isAI: false,
    descAbove: null,
    descBelow: { prefix: "Improved selection efficiency from", bold: "1:10 → 1:3", suffix: "for final offers" }
  }
];

// Mobile step (used in sticky scrollytelling view)
const MobileStep = ({ step }: { step: Step }) => {
  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.98 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="flex flex-col items-center text-center"
    >
      {/* Circle */}
      <div className="relative mb-4">
        {!step.isAI && (
          <div className="absolute inset-[-6px] rounded-full border-2 border-dashed border-muted-foreground/40" />
        )}
        <div
          className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-center ${
            step.isAI ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
          }`}
        >
          <span className="text-[8px] font-bold whitespace-pre-line leading-tight font-sans uppercase tracking-wide">
            {step.label}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[260px]">
        {(step.descAbove || step.descBelow) && (
          <p className="text-xs text-muted-foreground font-sans leading-relaxed">
            {step.descAbove && (
              <>
                {step.descAbove.prefix}{" "}
                <span className="text-foreground font-semibold">{step.descAbove.bold}</span>
                {step.descAbove.suffix ? <> {step.descAbove.suffix}</> : null}
              </>
            )}
            {step.descBelow && (
              <>
                {step.descBelow.prefix ? <>{step.descBelow.prefix}{" "}</> : null}
                <span className="text-foreground font-semibold">{step.descBelow.bold}</span>
                {step.descBelow.suffix ? <> {step.descBelow.suffix}</> : null}
              </>
            )}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const HiringFlow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track which step is active based on scroll (mobile scrollytelling only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newIndex = Math.min(Math.floor(value * steps.length), steps.length - 1);
      setActiveIndex(newIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Desktop auto-rotation (desktop only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background overflow-visible md:overflow-hidden">
      {/* Desktop */}
      <div className="hidden md:block py-16 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-sans font-semibold text-foreground mb-4">
              A Full-Stack AI Hiring Flow
            </h2>
            <p className="text-muted-foreground text-sm md:text-base font-sans">
              Here's how Tata Consumer Products ran this flow for{" "}
              <span className="text-foreground font-semibold">14,000 applicants</span>
            </p>
          </motion.div>

          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative max-w-6xl mx-auto">
              {steps.map((step, i) => {
                const isActive = activeIndex === i;
                
                return (
                  <div 
                    key={step.id}
                    className="flex flex-col items-center relative cursor-pointer"
                    onClick={() => setActiveIndex(i)}
                  >
                    <div className="h-24 flex items-end pb-4">
                      {step.descAbove && (
                        <motion.div 
                          className="flex items-start gap-2"
                          animate={{ opacity: isActive ? 1 : 0.6 }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"
                            animate={{ scale: isActive ? [1, 1.3, 1] : 1 }}
                            transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
                          />
                          <p className="text-xs text-muted-foreground max-w-[140px] font-sans">
                            <span>{step.descAbove.prefix} </span>
                            <span className="text-foreground font-semibold">{step.descAbove.bold}</span>
                            {step.descAbove.suffix && <span> {step.descAbove.suffix}</span>}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    <div className="relative">
                      {!step.isAI && (
                        <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-muted-foreground/40" />
                      )}
                      {isActive && (
                        <motion.div 
                          className="absolute inset-[-4px] rounded-full bg-primary/30"
                          animate={{ opacity: [0.4, 0.1, 0.4], scale: 1 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                      <motion.div 
                        className={`relative z-10 w-28 h-28 rounded-full flex items-center justify-center text-center p-3 ${
                          step.isAI ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
                        }`}
                        animate={{ scale: isActive ? 1.05 : 1 }}
                        whileHover={{ scale: 1.08 }}
                      >
                        <span className="text-[10px] font-bold whitespace-pre-line leading-tight font-sans uppercase tracking-wide">
                          {step.label}
                        </span>
                      </motion.div>
                    </div>

                    <div className="h-28 flex items-start pt-4">
                      {step.descBelow && (
                        <motion.div 
                          className="flex items-start gap-2"
                          animate={{ opacity: isActive ? 1 : 0.6 }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"
                            animate={{ scale: isActive ? [1, 1.3, 1] : 1 }}
                            transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
                          />
                          <p className="text-xs text-muted-foreground max-w-[140px] font-sans">
                            {step.descBelow.prefix && <span>{step.descBelow.prefix} </span>}
                            <span className="text-foreground font-semibold">{step.descBelow.bold}</span>
                            {step.descBelow.suffix && <span> {step.descBelow.suffix}</span>}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {i < steps.length - 1 && (
                      <div className="absolute top-1/2 left-full w-[calc(100%-7rem)] h-px bg-muted-foreground/20 -translate-y-1/2 z-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-8 border-t border-muted/20"
          >
            <p className="text-sm text-muted-foreground font-sans">
              Case Study: <span className="text-foreground font-semibold">Tata Consumer Products</span> Summer Hiring Process
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile - Sticky scroll with step-by-step reveal */}
      <div className="md:hidden" ref={containerRef}>
        <div className="h-[140vh] relative">
          <div className="sticky top-16 px-6 pt-6 pb-6 min-h-[calc(100svh-4rem)] flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-sans font-semibold text-foreground">
                A Full-Stack AI Hiring Flow
              </h2>
              <p className="text-muted-foreground text-xs font-sans mt-1">
                Tata Consumer Products • 14,000 applicants
              </p>
            </div>

            {/* Current step display */}
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <MobileStep step={steps[activeIndex]} />
              </AnimatePresence>
            </div>

            {/* Bottom controls */}
            <div className="mt-auto">
              <div className="flex justify-center gap-2 mb-3">
                {steps.map((step, i) => (
                  <div 
                    key={step.id}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex 
                        ? step.isAI ? 'bg-primary w-6' : 'bg-foreground w-6'
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <div className="h-0.5 bg-muted/30 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                />
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2 font-sans">
                Keep scrolling for the next section
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringFlow;
