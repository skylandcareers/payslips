import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
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
          <p className="text-muted-foreground text-lg font-sans">
            Here's how Tata Consumer Products ran this flow for{" "}
            <span className="text-primary font-semibold">14,000 applicants</span>
          </p>
        </motion.div>

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
                        animate={{ opacity: isActive ? 1 : 0.5 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0"
                          animate={{ scale: isActive ? [1, 1.4, 1] : 1 }}
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
                    {!step.isAI && (
                      <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-muted-foreground/30" />
                    )}
                    
                    {isActive && (
                      <motion.div 
                        className="absolute inset-[-4px] rounded-full bg-primary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.3, 0.1, 0.3], scale: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    
                    <motion.div 
                      className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center text-center p-3 transition-all duration-300 ${
                        step.isAI 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-foreground border border-muted-foreground/20"
                      }`}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      whileHover={{ scale: 1.08 }}
                    >
                      <span className="text-[10px] font-semibold whitespace-pre-line leading-tight font-sans">
                        {step.label}
                      </span>
                    </motion.div>
                  </div>

                  {/* Description Below */}
                  <div className="h-24 flex items-start pt-4">
                    {step.descBelow && (
                      <motion.div 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: isActive ? 1 : 0.5 }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div 
                          className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 flex-shrink-0"
                          animate={{ scale: isActive ? [1, 1.4, 1] : 1 }}
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
                    <div className="absolute top-1/2 left-full w-[calc(100%-6rem)] h-0.5 bg-muted-foreground/20 -translate-y-1/2 z-0">
                      {activeIndex === i + 1 && (
                        <motion.div 
                          className="absolute top-[-4px] w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/50"
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

        {/* Flow Visualization - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => {
            const isActive = activeIndex === i;
            
            return (
              <motion.div
                key={step.id}
                className={`p-4 border rounded-lg transition-all duration-300 ${
                  isActive ? "border-muted-foreground/40 bg-muted/30" : "border-muted/20"
                }`}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-center ${
                    step.isAI 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-foreground border border-muted-foreground/20"
                  }`}>
                    <span className="text-[8px] font-semibold whitespace-pre-line leading-tight font-sans">
                      {step.label.split('\n')[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground font-sans">
                      {step.label.replace(/\n/g, ' ')}
                    </p>
                    {(step.descAbove || step.descBelow) && (
                      <p className="text-xs text-muted-foreground mt-1 font-sans">
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Case Study Credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground font-sans italic">
            Case Study: Tata Consumer Products Summer Hiring Process across 50+ top campuses
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringFlow;
