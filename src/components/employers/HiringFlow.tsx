import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

const HiringFlow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mobileRef, { once: false, margin: "-100px" });
  const [hasExpanded, setHasExpanded] = useState(false);

  useEffect(() => {
    if (isInView && !hasExpanded) {
      setHasExpanded(true);
    }
  }, [isInView, hasExpanded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Desktop Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 hidden md:block"
        >
          <h2 className="text-2xl md:text-4xl font-sans font-semibold text-foreground mb-4">
            A Full-Stack AI Hiring Flow
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-sans">
            Here's how Tata Consumer Products ran this flow for{" "}
            <span className="text-foreground font-semibold">14,000 applicants</span>
          </p>
        </motion.div>

        {/* Mobile - Auto-expand on scroll */}
        <div className="md:hidden" ref={mobileRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-4 border-b border-muted/30"
          >
            <h2 className="text-xl font-sans font-semibold text-foreground">
              A Full-Stack AI Hiring Flow
            </h2>
            <p className="text-muted-foreground text-xs font-sans mt-1">
              Tata Consumer Products • 14,000 applicants
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: hasExpanded ? "auto" : 0, 
              opacity: hasExpanded ? 1 : 0 
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="py-6 space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hasExpanded ? 1 : 0, 
                    x: hasExpanded ? 0 : -10 
                  }}
                  transition={{ delay: hasExpanded ? i * 0.1 : 0, duration: 0.3 }}
                  className={`flex items-start gap-3 p-3 rounded ${
                    step.isAI ? 'bg-primary/10' : 'bg-muted/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.isAI ? 'bg-primary text-primary-foreground' : 'bg-foreground text-background'
                  }`}>
                    <span className="text-[6px] font-bold font-sans">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-foreground font-sans uppercase tracking-wide">
                      {step.label.replace('\n', ' ')}
                    </p>
                    {(step.descAbove || step.descBelow) && (
                      <p className="text-xs text-muted-foreground font-sans mt-1">
                        {step.descAbove && (
                          <>
                            {step.descAbove.prefix} <span className="text-foreground font-semibold">{step.descAbove.bold}</span> {step.descAbove.suffix}
                          </>
                        )}
                        {step.descBelow && (
                          <>
                            {step.descBelow.prefix} <span className="text-foreground font-semibold">{step.descBelow.bold}</span> {step.descBelow.suffix}
                          </>
                        )}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Flow Visualization - Desktop */}
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
                  {/* Description Above */}
                  <div className="h-24 flex items-end pb-4">
                    {step.descAbove && (
                      <motion.div 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: isActive ? 1 : 0.6 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"
                          animate={{ scale: isActive ? [1, 1.3, 1] : 1 }}
                          transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
                        />
                        <p className="text-xs text-muted-foreground max-w-[140px] font-sans">
                          <span>{step.descAbove.prefix} </span>
                          <span className="text-foreground font-semibold">{step.descAbove.bold}</span>
                          {step.descAbove.suffix && (
                            <span> {step.descAbove.suffix}</span>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Circle */}
                  <div className="relative">
                    {/* Dashed border for non-AI steps */}
                    {!step.isAI && (
                      <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-muted-foreground/40" />
                    )}
                    
                    {/* Glow effect for active */}
                    {isActive && (
                      <motion.div 
                        className="absolute inset-[-4px] rounded-full bg-primary/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.4, 0.1, 0.4], scale: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    
                    {/* Main circle */}
                    <motion.div 
                      className={`relative z-10 w-28 h-28 rounded-full flex items-center justify-center text-center p-3 transition-all duration-300 ${
                        step.isAI 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-foreground text-background"
                      }`}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      whileHover={{ scale: 1.08 }}
                    >
                      <span className="text-[10px] font-bold whitespace-pre-line leading-tight font-sans uppercase tracking-wide">
                        {step.label}
                      </span>
                    </motion.div>
                  </div>

                  {/* Description Below */}
                  <div className="h-28 flex items-start pt-4">
                    {step.descBelow && (
                      <motion.div 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: isActive ? 1 : 0.6 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"
                          animate={{ scale: isActive ? [1, 1.3, 1] : 1 }}
                          transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
                        />
                        <p className="text-xs text-muted-foreground max-w-[140px] font-sans">
                          {step.descBelow.prefix && (
                            <span>{step.descBelow.prefix} </span>
                          )}
                          <span className="text-foreground font-semibold">{step.descBelow.bold}</span>
                          {step.descBelow.suffix && (
                            <span> {step.descBelow.suffix}</span>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Connecting line */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-[calc(100%-7rem)] h-px bg-muted-foreground/20 -translate-y-1/2 z-0">
                      {activeIndex === i + 1 && (
                        <motion.div 
                          className="absolute top-[-3px] w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50"
                          initial={{ left: "0%" }}
                          animate={{ left: "100%" }}
                          transition={{ duration: 3.5, ease: "easeOut" }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Case Study Credit - Desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-muted/20 hidden md:block"
        >
          <p className="text-sm text-muted-foreground font-sans">
            Case Study: <span className="text-foreground font-semibold">Tata Consumer Products</span> Summer Hiring Process across <span className="text-foreground font-semibold">50+ top campuses</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringFlow;
