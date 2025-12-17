import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatureHighlight } from "@/components/ui/feature-highlight";
import { Entropy } from "@/components/ui/entropy";
import { ChevronDown } from "lucide-react";

const capabilities = [
  "Agentic Workflows",
  "Intelligent Scoring Systems",
  "Knowledge Retrieval Engines",
  "Multi-Agent Collaboration",
  "Automated Reporting & Insights",
  "Data Enrichment Layers",
  "Contextual Conversational AI",
  "Simulation & Practice Models",
  "Adaptive Learning Models",
  "Real-Time Interview Intelligence",
  "Profile Screening Intelligence",
];

const AICapabilities = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature list */}
          <FeatureHighlight
            title="Our AI Capabilities"
            features={capabilities.map((cap, index) => (
              <span key={index}>{cap}</span>
            ))}
            footer={
              <p className="text-sm text-muted-foreground mt-4">
                Powering intelligent solutions across the enterprise
              </p>
            }
          />

          {/* Right side - Entropy animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Entropy size={400} />
          </motion.div>
        </div>

        {/* Mobile Layout - Collapsible */}
        <div className="md:hidden">
          {/* Header with expand toggle */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <h2 className="text-xl font-bold text-foreground">
              Our AI Capabilities
            </h2>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-1"
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </button>

          {/* Expandable content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-6">
                  {/* Entropy animation - smaller for mobile */}
                  <div className="flex justify-center mb-6">
                    <Entropy size={200} />
                  </div>

                  {/* Capabilities list */}
                  <ul className="space-y-3">
                    {capabilities.map((cap, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {cap}
                      </motion.li>
                    ))}
                  </ul>

                  <p className="text-xs text-muted-foreground mt-6">
                    Powering intelligent solutions across the enterprise
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
