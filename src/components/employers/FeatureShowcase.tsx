import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
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
    eyebrow: "AI-Powered Screening",
    title: "Profile Evaluation",
    tagline: "Screen thousands in minutes",
    description: "AI-powered profile screening that evaluates candidates against your specific role requirements, reducing manual review time by 90%.",
    steps: [
      { id: "1", title: "Upload Resumes", text: "Batch upload candidate profiles in any format" },
      { id: "2", title: "Define Criteria", text: "Set custom evaluation parameters for your role" },
      { id: "3", title: "Get Rankings", text: "Receive scored and ranked candidate lists" },
    ],
    images: [{ label: "Dashboard", src: "", alt: "Profile Evaluation Dashboard" }],
  },
  {
    value: "assessments",
    label: "Assessments",
    eyebrow: "Role-Fit Testing",
    title: "AI Assessments",
    tagline: "Custom simulations in days",
    description: "Deploy custom role-fit simulations that test real job scenarios, not just generic aptitude.",
    steps: [
      { id: "1", title: "Design Assessment", text: "Create custom assessments for your roles" },
      { id: "2", title: "Deploy at Scale", text: "Send to thousands of candidates seamlessly" },
      { id: "3", title: "Analyze Results", text: "Get detailed insights on candidate performance" },
    ],
    images: [{ label: "Assessment", src: "", alt: "Assessment Interface" }],
  },
  {
    value: "interview-copilot",
    label: "Interview Co-Pilot",
    eyebrow: "Consistent Scoring",
    title: "Interview Co-Pilot",
    tagline: "100% consistent evaluations",
    description: "AI-assisted interview scoring that ensures consistency across panels and reduces bias.",
    steps: [
      { id: "1", title: "Define Rubric", text: "Set evaluation criteria for interviews" },
      { id: "2", title: "Real-time Assist", text: "Get AI suggestions during interviews" },
      { id: "3", title: "Score Analysis", text: "Compare scores across interviewers" },
    ],
    images: [{ label: "Co-Pilot", src: "", alt: "Interview Co-Pilot" }],
  },
  {
    value: "ai-interviews",
    label: "AI Interviews",
    eyebrow: "Automated Screening",
    title: "AI-Led Interviews",
    tagline: "Scale your first rounds",
    description: "Automated first-round interviews that screen candidates 24/7 with consistent quality.",
    steps: [
      { id: "1", title: "Configure Questions", text: "Set up interview questions and criteria" },
      { id: "2", title: "Candidate Experience", text: "Candidates complete interviews anytime" },
      { id: "3", title: "Review Highlights", text: "Watch key moments, skip the rest" },
    ],
    images: [{ label: "AI Interview", src: "", alt: "AI Interview Interface" }],
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

                  <Accordion type="single" collapsible className="w-full mb-6">
                    {product.steps.map((step) => (
                      <AccordionItem key={step.id} value={step.id}>
                        <AccordionTrigger className="text-left text-base font-medium font-sans">
                          {step.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-sans">
                          {step.text}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                </div>

                {/* Image Side */}
                <div className="relative bg-muted rounded-lg overflow-hidden min-h-[300px] md:min-h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className="text-xl md:text-2xl font-semibold text-foreground font-sans">
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
