import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";

export type ShowcaseStep = {
  id: string;
  title: string;
  text: string;
};

export type ProductImage = {
  label: string;
  src: string;
  alt?: string;
};

export type ProductTab = {
  value: string;
  label: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  steps: ShowcaseStep[];
  images: ProductImage[];
};

const products: ProductTab[] = [
  {
    value: "profile-evaluation",
    label: "Profile Evaluation",
    eyebrow: "EVALUATION ENGINE",
    title: "PotentialAI",
    tagline: "Your evaluation process automated, unbiased, and instant.",
    description: "An evaluation engine that understands roles, scores candidates like your best hiring manager, and scales your team's judgment.",
    steps: [
      { id: "1", title: "Fully Customised for Each Role", text: "Built around your competencies, your context, and your hiring expectations." },
      { id: "2", title: "Consistent Scoring Across All Candidates", text: "One evaluation standard your entire team can rely on." },
      { id: "3", title: "Instant Shortlists, Even at Scale", text: "Processes and ranks thousands of applicants in minutes." },
    ],
    images: [{ label: "Dashboard", src: "", alt: "PotentialAI Dashboard" }],
  },
  {
    value: "assessments",
    label: "Custom Assessments",
    eyebrow: "ASSESSMENT ENGINE",
    title: "SignalAI",
    tagline: "Fully custom, role-aligned simulations that reflect your real work.",
    description: "A role-specific assessment engine that mirrors real work, measures real performance, and delivers far stronger hiring decisions.",
    steps: [
      { id: "1", title: "Evaluates On-the-Job Skills", text: "Assesses candidates through decisions and tasks pulled directly from the role." },
      { id: "2", title: "Built From Scratch", text: "Each simulation is custom-designed for your workflows, competencies, and performance expectations." },
      { id: "3", title: "Built & Live in 48-72 Hours", text: "Designed and launched quickly - complete with secure proctoring." },
    ],
    images: [{ label: "Assessment", src: "", alt: "SignalAI Interface" }],
  },
  {
    value: "interview-copilot",
    label: "Interview Co-Pilot",
    eyebrow: "INTERVIEW ASSISTANT",
    title: "KonverseAI",
    tagline: "Real-time guidance for consistent, comprehensive interviews.",
    description: "An interview copilot that stays active throughout the conversation - helping panels stay consistent, and walk away with clearer decisions.",
    steps: [
      { id: "1", title: "Works Across Offline & Virtual Panels", text: "Sits beside your interviewers in any format - guiding, listening, and capturing insights without disrupting the flow." },
      { id: "2", title: "Adaptive Follow-Ups & Probing", text: "Surfaces relevant follow-ups and lines of inquiry based on the candidate's answers and background." },
      { id: "3", title: "Instant, Structured Interview Reports", text: "Produces panel-ready summaries within seconds: strengths, risks, patterns, and a clear recommendation." },
    ],
    images: [{ label: "Co-Pilot", src: "", alt: "KonverseAI Interface" }],
  },
];

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = React.useState(products[0].value);
  const [activeImageIndex, setActiveImageIndex] = React.useState<Record<string, number>>({});

  const getActiveImageIndex = (productValue: string) => activeImageIndex[productValue] ?? 0;

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StaticNetworkBackground density={35} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-sans font-semibold text-foreground mb-4">
            Our AI Suite
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Customizable solutions that plug into your existing workflow.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex h-auto bg-transparent p-0 border-b border-muted/30 rounded-none flex-wrap justify-center gap-2 mb-8">
            {products.map((product) => (
              <TabsTrigger
                key={product.value}
                value={product.value}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-all rounded-none border-b-2 border-transparent font-sans",
                  "data-[state=active]:border-primary data-[state=active]:text-foreground",
                  "data-[state=inactive]:text-muted-foreground hover:text-foreground"
                )}
              >
                {product.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent key={product.value} value={product.value} className="mt-0">
              <motion.div 
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Content Side */}
                <div className="flex flex-col justify-center">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-2 font-sans">
                    {product.eyebrow}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 font-sans">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 font-sans">
                    {product.description}
                  </p>

                  <div className="space-y-0">
                    {product.steps.map((step) => (
                      <div key={step.id} className="border-l-2 border-primary pl-4 py-3">
                        <h4 className="text-base font-semibold text-foreground mb-1 font-sans">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground text-sm font-sans">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Image Side */}
                <div className="relative bg-muted rounded-lg overflow-hidden min-h-[300px] md:min-h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className="text-sm md:text-base text-foreground font-sans">
                      {product.tagline}
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={getActiveImageIndex(product.value)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="text-muted-foreground font-sans">
                        [Product Screenshot]
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {product.images.length > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 z-30 bg-background/50 backdrop-blur-sm">
                      <div className="flex">
                        {product.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(prev => ({ ...prev, [product.value]: idx }))}
                            className={cn(
                              "px-4 py-2 text-sm font-medium transition-all font-sans",
                              getActiveImageIndex(product.value) === idx
                                ? "bg-foreground text-background"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {img.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureShowcase;
