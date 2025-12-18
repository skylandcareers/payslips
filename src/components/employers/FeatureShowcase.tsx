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
import { ChevronLeft, ChevronRight } from "lucide-react";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";
import potentialAiDashboard from "@/assets/products/potential-ai-dashboard.png";
import signalAiDashboard from "@/assets/products/signal-ai-dashboard.png";
import konverseAiDashboard from "@/assets/products/konverse-ai-dashboard.png";

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
    images: [{ label: "Dashboard", src: potentialAiDashboard, alt: "PotentialAI Dashboard" }],
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
    images: [{ label: "Assessment", src: signalAiDashboard, alt: "SignalAI Interface" }],
  },
  {
    value: "interview-copilot",
    label: "Interview Co-Pilot",
    eyebrow: "INTERVIEW CO-PILOT",
    title: "KonverseAI",
    tagline: "Real-time guidance for consistent, comprehensive interviews.",
    description: "An interview copilot that stays active throughout the conversation - helping panels stay consistent, and walk away with clearer decisions.",
    steps: [
      { id: "1", title: "Works Across Offline & Virtual Panels", text: "Sits beside your interviewers in any format - guiding, listening, and capturing insights without disrupting the flow." },
      { id: "2", title: "Adaptive Follow-Ups & Probing", text: "Surfaces relevant follow-ups and lines of inquiry based on the candidate's answers and background." },
      { id: "3", title: "Instant, Structured Interview Reports", text: "Produces panel-ready summaries within seconds: strengths, risks, patterns, and a clear recommendation." },
    ],
    images: [{ label: "Co-Pilot", src: konverseAiDashboard, alt: "KonverseAI Interface" }],
  },
];

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = React.useState(products[0].value);
  const [activeImageIndex, setActiveImageIndex] = React.useState<Record<string, number>>({});
  const [mobileIndex, setMobileIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const getActiveImageIndex = (productValue: string) => activeImageIndex[productValue] ?? 0;

  const scrollToProduct = (index: number) => {
    setMobileIndex(index);
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / products.length;
      carouselRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollWidth = container.scrollWidth / products.length;
    const newIndex = Math.round(container.scrollLeft / scrollWidth);
    if (newIndex !== mobileIndex) {
      setMobileIndex(newIndex);
    }
  };

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <StaticNetworkBackground density={35} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-4xl font-sans font-semibold text-foreground mb-2 md:mb-4">
            Our AI Suite
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-sans">
            Customizable solutions that plug into your existing workflow.
          </p>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex h-auto bg-transparent p-0 border-b border-muted/30 rounded-none flex-wrap justify-start gap-2 mb-8">
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
                    <span className="text-primary text-xs font-semibold uppercase tracking-wide mb-2 font-sans">
                      {product.eyebrow}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 font-sans">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 font-sans">
                      {product.description}
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      {product.steps.map((step) => (
                        <AccordionItem 
                          key={step.id} 
                          value={step.id}
                          className="border-b border-muted-foreground/30 border-t-0 border-l-0 border-r-0"
                        >
                          <AccordionTrigger className="text-left text-sm font-medium font-sans py-4 hover:no-underline">
                            {step.title}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm font-sans pb-4">
                            {step.text}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  {/* Image Side */}
                  <div className="flex flex-col">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={getActiveImageIndex(product.value)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                      >
                        {product.images[getActiveImageIndex(product.value)]?.src ? (
                          <img 
                            src={product.images[getActiveImageIndex(product.value)].src} 
                            alt={product.images[getActiveImageIndex(product.value)].alt || "Product screenshot"}
                            className="w-full h-auto object-contain"
                          />
                        ) : (
                          <div className="text-muted-foreground font-sans py-20">
                            [Product Screenshot]
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                    
                    <p className="text-sm text-foreground font-sans text-center mt-6">
                      {product.tagline}
                    </p>

                    {product.images.length > 1 && (
                      <div className="flex justify-center gap-2 mt-4">
                        {product.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(prev => ({ ...prev, [product.value]: idx }))}
                            className={cn(
                              "px-4 py-2 text-sm font-medium transition-all font-sans border",
                              getActiveImageIndex(product.value) === idx
                                ? "bg-foreground text-background border-foreground"
                                : "text-muted-foreground hover:text-foreground border-muted"
                            )}
                          >
                            {img.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {products.map((product, idx) => (
                <button
                  key={product.value}
                  onClick={() => scrollToProduct(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    mobileIndex === idx ? "bg-primary w-6" : "bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollToProduct(Math.max(0, mobileIndex - 1))}
                disabled={mobileIndex === 0}
                className="p-2 border border-muted rounded disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToProduct(Math.min(products.length - 1, mobileIndex + 1))}
                disabled={mobileIndex === products.length - 1}
                className="p-2 border border-muted rounded disabled:opacity-30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div 
            ref={carouselRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div 
                key={product.value} 
                className="flex-shrink-0 w-[85vw] snap-center"
              >
                <div className="bg-card/50 border border-muted/30 p-4">
                  {/* Image */}
                  {product.images[0]?.src && (
                    <img 
                      src={product.images[0].src} 
                      alt={product.images[0].alt || product.title}
                      className="w-full h-40 object-contain mb-4"
                    />
                  )}
                  
                  {/* Content */}
                  <span className="text-primary text-[10px] font-semibold uppercase tracking-wide font-sans">
                    {product.eyebrow}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-xs font-sans mb-4">
                    {product.description}
                  </p>

                  {/* Steps Accordion */}
                  <Accordion type="single" collapsible className="w-full">
                    {product.steps.map((step) => (
                      <AccordionItem 
                        key={step.id} 
                        value={step.id}
                        className="border-b border-muted-foreground/20 border-t-0 border-l-0 border-r-0"
                      >
                        <AccordionTrigger className="text-left text-xs font-medium font-sans py-3 hover:no-underline">
                          {step.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-xs font-sans pb-3">
                          {step.text}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
