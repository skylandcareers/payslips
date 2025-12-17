import { motion } from "framer-motion";
import { FeatureHighlight } from "@/components/ui/feature-highlight";
import { Entropy } from "@/components/ui/entropy";
import { TextScramble } from "@/components/ui/text-scramble";

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
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Feature list */}
          <FeatureHighlight
            title="Our AI Capabilities"
            features={capabilities.map((cap, index) => (
              <TextScramble key={index} text={cap} />
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
            <Entropy size={400} className="hidden md:block" />
            <Entropy size={300} className="md:hidden" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
