import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";
import ContactFormDialog from "@/components/ContactFormDialog";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Brain, 
  TrendingUp, 
  Users,
  FileSearch,
  ClipboardCheck,
  Mic,
  Bot,
  Gamepad2,
  MessageSquare,
  Award,
  BarChart3,
  Video,
  Building2,
  GraduationCap,
  Upload,
  SlidersHorizontal,
  ListOrdered,
  Timer,
  Link2,
  FileText,
  Languages,
  CheckCircle
} from "lucide-react";

// Partner logos
import unileverLogo from "@/assets/partners/unilever-logo.png";
import abgLogo from "@/assets/partners/abg.png";
import tasLogo from "@/assets/partners/tas.png";
import colgateLogo from "@/assets/partners/colgate.png";
import gskLogo from "@/assets/partners/gsk.png";
import asianPaintsLogo from "@/assets/partners/asian-paints.png";
import jswLogo from "@/assets/partners/jsw.png";
import mondelezLogo from "@/assets/partners/mondelez.png";
import mahindraLogo from "@/assets/partners/mahindra-new.png";
import reckittLogo from "@/assets/partners/reckitt.png";
import axisLogo from "@/assets/partners/axis-bank-logo.png";
import hulLogo from "@/assets/partners/hul.png";

const partnerLogos = [
  { name: "Unilever", logo: unileverLogo },
  { name: "Aditya Birla Group", logo: abgLogo },
  { name: "TAS", logo: tasLogo },
  { name: "Colgate", logo: colgateLogo },
  { name: "GSK", logo: gskLogo },
  { name: "Asian Paints", logo: asianPaintsLogo },
  { name: "JSW", logo: jswLogo },
  { name: "Mondelez", logo: mondelezLogo },
  { name: "Mahindra", logo: mahindraLogo },
  { name: "Reckitt", logo: reckittLogo },
  { name: "Axis Bank", logo: axisLogo },
  { name: "HUL", logo: hulLogo },
];

const services = [
  {
    phase: "SHORTLIST",
    title: "AI-Powered Resume Screening at Scale",
    description: "Screen faster. Assess better. Remove guesswork.",
    icon: FileSearch,
    color: "bg-primary/10 text-primary",
  },
  {
    phase: "ASSESS",
    title: "Evaluate What Scores Can't",
    description: "Custom assessments for domain readiness, agility, and originality.",
    icon: ClipboardCheck,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    phase: "ENGAGE",
    title: "Build Your Employer Brand on Campus",
    description: "Competitions, content, and AI tools to attract top talent.",
    icon: Award,
    color: "bg-green-500/10 text-green-500",
  }
];

const aiTools = [
  {
    id: "potential",
    name: "PotentialAI",
    tagline: "AI-powered resume shortlisting",
    description: "Ranks CVs using job-role fit, skills, and behavioral cues — no manual scanning needed.",
    useFor: "Large-scale shortlisting",
    outcome: "Faster, bias-free, high-quality shortlists",
    features: [
      { icon: Upload, text: "Upload 1000s of resumes with ease" },
      { icon: SlidersHorizontal, text: "Define customized shortlisting rules" },
      { icon: ListOrdered, text: "Get ranked, bias-free shortlists in hours" },
      { icon: Timer, text: "Drastically reduce manual screening effort" },
      { icon: Link2, text: "Direct ATS/CRM integration" },
    ]
  },
  {
    id: "signal",
    name: "SignalAI",
    tagline: "Assessments & Business Simulations",
    description: "Test for domain readiness, agility, and originality with adaptive assessments and real-world business simulations that evaluate decision-making and judgment.",
    useFor: "Pre-interview filtering, Advanced screening & Branding",
    outcome: "Clearer signals on fit, potential, and business acumen",
    features: [
      { icon: Brain, text: "Role-specific adaptive assessments" },
      { icon: Gamepad2, text: "Realistic business simulations" },
      { icon: Target, text: "Decision-making & judgment evaluation" },
      { icon: BarChart3, text: "Competency-mapped scoring" },
      { icon: FileText, text: "Detailed candidate reports & analytics" },
    ]
  },
  {
    id: "konverse",
    name: "KonverseAI",
    tagline: "AI Copilot for Smarter Interviews",
    description: "Turns interviews into structured, objective evaluations with live guidance, auto-transcripts, and competency-based scoring.",
    useFor: "Campus & lateral hiring interviews",
    outcome: "Smarter, consistent, data-backed decisions",
    features: [
      { icon: Mic, text: "Voice-first, natural conversation experience" },
      { icon: Languages, text: "Bilingual support (English, Hindi, Hinglish)" },
      { icon: Timer, text: "24/7 availability - scales to thousands" },
      { icon: Bot, text: "AI conducts full interview autonomously" },
      { icon: FileText, text: "Competency-mapped scores with transcripts" },
    ]
  },
  {
    id: "assistant",
    name: "AI Campus Assistant",
    tagline: "Always-on branded student tools",
    description: "A branded chatbot that answers FAQs, shares past interview patterns, and reinforces your EVP.",
    useFor: "Branding + 24/7 engagement",
    outcome: "Better-informed applicants, zero bandwidth drain",
    features: [
      { icon: MessageSquare, text: "24/7 AI-powered responses" },
      { icon: Building2, text: "Branded experience for your company" },
      { icon: GraduationCap, text: "Interview prep assistance" },
      { icon: Users, text: "Company culture & values showcase" },
      { icon: Bot, text: "Trained on your FAQs & processes" },
    ]
  },
];

const campusSolutions = [
  {
    title: "Brand Perception Study",
    description: "13th year of running India's largest employer perception survey. Use our insights to shape your hiring and campus messaging strategy.",
    outcome: "Shape positioning, sharpen messaging, and plan campus activations with data",
    icon: BarChart3,
  },
  {
    title: "Campus Competitions",
    description: "Go beyond aptitude tests. Use real business dilemmas, AI case bots, and behavioral signals to evaluate role and culture fit — at scale.",
    outcome: "Engage top talent early, evaluate through structured formats, and build a qualified pipeline",
    icon: Award,
  },
  {
    title: "Social + Video Storytelling",
    description: "High-recall content through short videos, reels, explainers, and testimonials.",
    outcome: "Humanize your brand, influence top-of-funnel awareness, and extend recall",
    icon: Video,
  },
  {
    title: "Custom Simulations",
    description: "Realistic role-fit simulations aligned to your domain. Completely customized simulation/evaluation engines built from scratch for your brand.",
    outcome: "Evaluate candidates early and build a pipeline before Day Zero",
    icon: Gamepad2,
  },
  {
    title: "Employer Academy",
    description: "Co-created learning programs for students on target campuses with real business context.",
    outcome: "Build trust and mentor future hires through brand aligned upskilling",
    icon: GraduationCap,
  },
  {
    title: "Branded Microsites",
    description: "Career hubs with roles, journeys, alumni stories, and live content.",
    outcome: "One-click access to everything a candidate needs to know about you",
    icon: Building2,
  },
];

const stats = [
  { value: "100+", label: "Corporates Served" },
  { value: "50+", label: "Campus Competitions Run" },
  { value: "1M+", label: "Students Reached" },
  { value: "100K+", label: "Profiles Screened" },
];

const words = ["Shortlisting", "Competitions", "Assessments", "Employer Branding", "Business Simulations"];

const ForCorporates = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string>("potential");

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  const selectedToolData = aiTools.find(tool => tool.id === selectedTool);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-20 bg-black overflow-hidden">
          <StaticNetworkBackground className="opacity-30" density={80} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              AI-Enabled Campus Hiring
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 h-16 flex items-center justify-center"
            >
              <span className="text-primary inline-block min-w-[280px]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              One platform to execute your campus strategy - shortlisting, assessment, branding, and hiring
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" onClick={() => setIsFormOpen(true)}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="#ai-tools">Explore AI Tools</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted by Top Employers */}
        <section className="py-16 bg-muted/30 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-muted-foreground mb-8 text-center"
            >
              Trusted by Top Employers
            </motion.h3>
            
            {/* Top row - moves left to right */}
            <div className="relative mb-6">
              <div className="flex animate-scroll-right">
                {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                  <div key={`top-${idx}`} className="flex-shrink-0 mx-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border border-border flex items-center justify-center p-2 hover:border-primary/50 transition-colors">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row - moves right to left */}
            <div className="relative">
              <div className="flex animate-scroll-left">
                {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                  <div key={`bottom-${idx}`} className="flex-shrink-0 mx-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border border-border flex items-center justify-center p-2 hover:border-primary/50 transition-colors">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Campus Solutions Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Full-Funnel Campus Hiring & Branding
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From large-scale competitions to branded prep tools — we help you attract, engage, and convert the right talent, before Day 0.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campusSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <solution.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                  <p className="text-xs text-primary font-medium">{solution.outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section id="ai-tools" className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Tools for Smarter Campus Hiring
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Screen faster. Assess better. Remove guesswork.
              </p>
            </motion.div>

            {/* Tool Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {aiTools.map((tool) => (
                <Button
                  key={tool.id}
                  variant={selectedTool === tool.id ? "default" : "outline"}
                  onClick={() => setSelectedTool(tool.id)}
                  className="px-6"
                >
                  {tool.name}
                </Button>
              ))}
            </div>

            {/* Selected Tool Content */}
            {selectedToolData && (
              <motion.div
                key={selectedToolData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {selectedToolData.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{selectedToolData.name}</h3>
                    <p className="text-muted-foreground mb-6">{selectedToolData.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm"><span className="font-semibold text-foreground">Use for:</span> <span className="text-muted-foreground">{selectedToolData.useFor}</span></p>
                      <p className="text-sm"><span className="font-semibold text-foreground">Outcome:</span> <span className="text-muted-foreground">{selectedToolData.outcome}</span></p>
                    </div>

                    <Button onClick={() => setIsFormOpen(true)}>
                      Try {selectedToolData.name}
                    </Button>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedToolData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <feature.icon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* What Our Partners Say */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Partners Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Their survey insights have helped us know our desirability amongst our FMCG peers, and get extensive campus intelligence that will be incorporated into our campus proposition. A super creative and driven team.",
                  name: "Yashaswini Chouhan",
                  role: "Ex Lead – Campus, Early Careers & Employer Branding, Reckitt",
                  logo: reckittLogo
                },
                {
                  quote: "Konversations Café has given us great reach and an opportunity to network with top students across Tier 1 campuses. It also helped position ABG's culture beyond just roles.",
                  name: "Soma Banik",
                  role: "Ex – Campus Recruitment & Engagement, ABG Group HR",
                  logo: abgLogo
                },
                {
                  quote: "InsideIIM's brand perception report offers deep insights on what influences student preferences and how we benchmark against peers. It helps us make sharper employer brand decisions.",
                  name: "Nikhita George",
                  role: "Employer Brand & Future Leaders Program Manager, Unilever",
                  logo: unileverLogo
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center p-2">
                      <img 
                        src={testimonial.logo} 
                        alt="" 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground text-sm mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Campus Hiring?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
            >
              Join 100+ corporates that trust InsideIIM for their end-to-end campus hiring solutions. Schedule a demo to see how we can help you shortlist, assess, and engage the best talent.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => setIsFormOpen(true)}
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
};

export default ForCorporates;
