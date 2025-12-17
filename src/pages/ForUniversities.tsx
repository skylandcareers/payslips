import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";
import ContactFormDialog from "@/components/ContactFormDialog";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  MessageSquare, 
  ClipboardCheck, 
  Youtube, 
  Instagram,
  Facebook,
  Linkedin,
  Mic,
  Bot,
  Phone,
  Globe,
  Shield,
  Languages,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Upload,
  SlidersHorizontal,
  ListOrdered,
  Timer,
  Link2,
  FileText
} from "lucide-react";
import konversationsCafeLogo from "@/assets/konversations-cafe-logo.png";
import kareersCafeLogo from "@/assets/kareers-cafe-logo.png";
import post1 from "@/assets/posts/post-1.avif";
import post2 from "@/assets/posts/post-2.avif";
import post3 from "@/assets/posts/post-3.avif";
import post4 from "@/assets/posts/post-4.avif";
import post5 from "@/assets/posts/post-5.avif";
import carousel1 from "@/assets/carousels/carousel-1.jpg";
import carousel2 from "@/assets/carousels/carousel-2.jpg";
import carousel3 from "@/assets/carousels/carousel-3.jpg";

const services = [
  {
    phase: "ATTRACT",
    title: "Build Credibility On India's Most Engaged MBA Audience",
    description: "Branded Content Campaigns on InsideIIM's high-traffic platforms",
    icon: Megaphone,
    color: "bg-primary/10 text-primary",
    features: [
      "Dedicated YouTube videos, reels, and shorts",
      "Infographics and carousel posts on Instagram",
      "Webinars and editorial integrations",
      "Offline events like Konversations Café",
      "Guaranteed views, impressions, and CTA placements"
    ]
  },
  {
    phase: "ENGAGE",
    title: "Nurture Leads With Conversations That Scale",
    description: "Ayana AI Chat + Voice Agent - Always-on, trained on your FAQs",
    icon: MessageSquare,
    color: "bg-blue-500/10 text-blue-500",
    features: [
      "24/7 AI Chat Counsellor for instant query resolution",
      "AI Voice Follow-Ups for incomplete applications",
      "Custom Program Microsite with CRM Integration",
      "High-Trust Video Content from InsideIIM's expert team",
      "Multi-lingual support (Hindi, Tamil, English, and more)"
    ]
  },
  {
    phase: "SHORTLIST",
    title: "Smart, Fast, Bias-Free Shortlisting",
    description: "Potential AI Admit – Intelligent Shortlisting Tool",
    icon: ClipboardCheck,
    color: "bg-green-500/10 text-green-500",
    features: [
      "Upload 1000s of profiles with ease",
      "Define customized shortlisting rules",
      "Get ranked, bias-free shortlists in hours",
      "Drastically reduce manual screening effort",
      "Direct CRM integration for seamless workflow"
    ]
  }
];

const contentFormats = [
  { icon: Youtube, label: "YouTube Videos & Shorts", metric: "10mn+ views/year" },
  { icon: Instagram, label: "Instagram Reels & Carousels", metric: "530K+ followers" },
  { icon: Mic, label: "Webinars & YouTube Lives", metric: "9mn+ reach/year" },
];

const ayanaFeatures = [
  { icon: Languages, title: "Multi-Lingual Support", description: "Speaks Hindi, Tamil, English, and more" },
  { icon: Shield, title: "Secure & Private", description: "Dedicated server with data isolation" },
  { icon: Phone, title: "Voice + Chat Combined", description: "Seamless interaction across channels" },
  { icon: Bot, title: "Human-Like Tone", description: "Warm, persuasive, and credible responses" },
  { icon: Globe, title: "CRM Integration", description: "Works with Meritto, LeadSquared, and more" },
  { icon: Users, title: "Contextual Replies", description: "Trained on your brochures, FAQs, and deadlines" },
];

const partnerSchools = [
  "SPJIMR", "Great Lakes", "TAPMI", "SDA Bocconi", "BITSOM", "GIM", "MICA"
];

const stats = [
  { value: "100K+", label: "Registered MBA Aspirants" },
  { value: "2.25M", label: "Annual Unique Visitors" },
  { value: "530K+", label: "Social Media Followers" },
  { value: "395K+", label: "YouTube Subscribers" },
];

const words = ["Attract", "Engage", "Shortlist"];

const platformLogos = [
  { icon: Youtube, name: "YouTube" },
  { icon: Instagram, name: "Instagram" },
  { icon: Facebook, name: "Facebook" },
  { icon: Linkedin, name: "LinkedIn" },
];

const formatContent: Record<string, { type: "youtube" | "instagram" | "article"; links: string[]; thumbnails?: string[] }> = {
  Videos: {
    type: "youtube",
    links: [
      "https://www.youtube.com/watch?v=e_r0_LwZ4CQ",
      "https://www.youtube.com/watch?v=85ngiuzY7pE",
      "https://www.youtube.com/watch?v=eC3pn3_F70s",
      "https://www.youtube.com/watch?v=naZBwuCPRS4"
    ]
  },
  Posts: {
    type: "article",
    links: [
      "https://insideiim.com/learn-more-about-ifmr",
      "https://insideiim.com/invest-in-education-when-the-market-isnt-hiring-ft-dean-ifmr-gsb",
      "https://insideiim.com/would-you-survive-the-mba-shark-tank",
      "https://insideiim.com/i-said-mujhe-sales-nahi-karna-hai-give-me-marketingft-kalyani-tanishq",
      "https://insideiim.com/uncover-the-future-of-mba-education-and-what-it-means-for-your-career"
    ],
    thumbnails: [post1, post2, post3, post4, post5]
  },
  Webinars: {
    type: "youtube",
    links: [
      "https://www.youtube.com/watch?v=M_27-O519jQ",
      "https://www.youtube.com/watch?v=uvuANZi4ZDI",
      "https://www.youtube.com/watch?v=--5-IqVmodw",
      "https://www.youtube.com/watch?v=F17bL3Yatkw"
    ]
  },
  "Reels/Shorts": {
    type: "youtube",
    links: [
      "https://youtube.com/shorts/LbUI8dT0YNo",
      "https://youtube.com/shorts/BCkc_btVYno",
      "https://youtube.com/shorts/Mu9Tvl0cEK4",
      "https://youtube.com/shorts/9z2fFTyNDCM"
    ]
  },
  Carousels: {
    type: "instagram",
    links: [
      "https://www.instagram.com/p/DR1bNnZjJ5I/",
      "https://www.instagram.com/p/DSJmAxvjY8p/",
      "https://www.instagram.com/p/DRo4UuFiSk0/"
    ],
    thumbnails: [carousel1, carousel2, carousel3]
  }
};

const onlineFormats = ["Webinars", "Reels/Shorts", "Videos", "Carousels", "Posts"];

const getYouTubeVideoId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/shorts\/)([^&?/]+)/);
  return match ? match[1] : null;
};

const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : "";
};

const ForUniversities = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [attractMode, setAttractMode] = useState<"online" | "offline">("online");
  const [shortlistMode, setShortlistMode] = useState<"potential" | "konverse">("potential");
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.5;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Auto-loop carousel
  useEffect(() => {
    if (!selectedFormat || !formatContent[selectedFormat]) return;
    
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
        
        if (isAtEnd) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth * 0.5, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedFormat]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 80;
    const pauseTime = isDeleting ? 150 : 1200;

    if (!isDeleting && displayText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-20 bg-black overflow-hidden">
          <StaticNetworkBackground className="opacity-30" density={80} />
          <div className="absolute inset-0 bg-[url('/lovable-uploads/circuit-pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Your University Growth Stack Just Got Better
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 h-16 flex items-center justify-center"
            >
              <span className="text-primary inline-block">
                {displayText}
              </span>
              <span className="text-white ml-2">the best candidates</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              Every part of your admissions journey — now powered by AI
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => setIsFormOpen(true)}>
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="#services">Explore Solutions</a>
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

        {/* Services Section - Timeline Layout */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-4xl font-sans font-semibold text-foreground mb-4">
                The Three Pillars of Admissions Success
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                End-to-end marketing solutions for universities seeking to attract, engage, and shortlist the best candidates.
              </p>
            </motion.div>

            {/* Timeline Layout */}
            <div className="relative">
              {services.map((service, index) => {
                const isLast = index === services.length - 1;
                
                return (
                  <motion.div
                    key={service.phase}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] gap-8 md:gap-12"
                  >
                    {/* Left Column - Timeline with Pillar Name */}
                    <div className="relative flex flex-col items-start">
                      {/* Timeline dot */}
                      <div className="flex items-center gap-4">
                        <div className="relative group">
                          <div className="w-4 h-4 rounded-full bg-primary/60 shadow-[0_0_12px_4px_hsl(var(--primary)/0.3)] transition-all duration-300 group-hover:scale-125" />
                          <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping opacity-0 group-hover:opacity-100" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-light text-muted-foreground/70">
                          {service.phase.charAt(0) + service.phase.slice(1).toLowerCase()}
                        </h3>
                      </div>
                      
                      {/* Timeline vertical line */}
                      {!isLast && (
                        <div className="absolute left-[5px] top-6 w-px h-full bg-border" />
                      )}
                    </div>

                    {/* Right Column - Content */}
                    <div className={`pb-16 ${isLast ? 'pb-0' : ''}`}>
                      <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h4>
                      
                      {service.phase === "ATTRACT" ? (
                        <>
                          {/* Online/Offline Toggle Buttons */}
                          <div className="flex gap-3 mb-6">
                            <Button
                              variant={attractMode === "online" ? "default" : "outline"}
                              onClick={() => setAttractMode("online")}
                              className="px-6"
                            >
                              Online
                            </Button>
                            <Button
                              variant={attractMode === "offline" ? "default" : "outline"}
                              onClick={() => { setAttractMode("offline"); setSelectedFormat(null); }}
                              className="px-6"
                            >
                              Offline
                            </Button>
                          </div>

                          {attractMode === "online" ? (
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                Branded Content Campaigns on InsideIIM's high-traffic platforms
                              </p>
                              
                              {/* Platform Logos */}
                              <div className="flex items-center gap-6 mb-4">
                                {platformLogos.map((platform) => (
                                  <div key={platform.name} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                                    <platform.icon className="h-6 w-6" />
                                    <span className="text-sm font-medium">{platform.name}</span>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Formats */}
                              <div className="flex flex-wrap gap-2">
                                {onlineFormats.map((format) => (
                                  <button
                                    key={format}
                                    onClick={() => setSelectedFormat(selectedFormat === format ? null : format)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all cursor-pointer ${
                                      selectedFormat === format
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-primary/10 text-primary hover:bg-primary/20"
                                    }`}
                                  >
                                    {format}
                                  </button>
                                ))}
                              </div>

                              {/* Thumbnails Carousel */}
                              {selectedFormat && formatContent[selectedFormat] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-4 relative"
                                >
                                  {/* Navigation Arrows */}
                                  <button
                                    onClick={() => scrollCarousel("left")}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                                  >
                                    <ChevronLeft className="w-5 h-5 text-foreground" />
                                  </button>
                                  <button
                                    onClick={() => scrollCarousel("right")}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                                  >
                                    <ChevronRight className="w-5 h-5 text-foreground" />
                                  </button>

                                  <div 
                                    ref={carouselRef}
                                    className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                                  >
                                    {formatContent[selectedFormat].links.map((link, idx) => {
                                      const thumbnails = formatContent[selectedFormat].thumbnails;
                                      const thumbnail = thumbnails?.[idx];
                                      
                                      return (
                                        <div
                                          key={idx}
                                          className="flex-shrink-0 w-[85%] md:w-[48%] snap-start rounded-xl overflow-hidden border border-border"
                                        >
                                          {formatContent[selectedFormat].type === "youtube" ? (
                                            <div className="aspect-video bg-muted">
                                              <img
                                                src={getYouTubeThumbnail(link)}
                                                alt={`${selectedFormat} thumbnail ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                              />
                                            </div>
                                          ) : thumbnail ? (
                                            <div className="bg-muted">
                                              <img
                                                src={thumbnail}
                                                alt={`${selectedFormat} thumbnail ${idx + 1}`}
                                                className="w-full h-auto object-contain"
                                              />
                                            </div>
                                          ) : formatContent[selectedFormat].type === "instagram" ? (
                                            <div className="aspect-square bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                                              <Instagram className="w-12 h-12 text-white" />
                                            </div>
                                          ) : (
                                            <div className="p-4 bg-card aspect-video flex flex-col justify-center">
                                              <p className="text-sm text-muted-foreground line-clamp-3">
                                                {link.split("/").pop()?.replace(/-/g, " ").slice(0, 80)}...
                                              </p>
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                Engage first-hand with high-intent leads through exclusive offline events
                              </p>
                              
                              {/* Cafe Logos */}
                              <div className="mt-4 flex gap-6 items-center">
                                <img 
                                  src={konversationsCafeLogo} 
                                  alt="Konversations Cafe 2025" 
                                  className="h-24 object-contain"
                                />
                                <img 
                                  src={kareersCafeLogo} 
                                  alt="Kareers Cafe" 
                                  className="h-24 object-contain"
                                />
                              </div>
                            </div>
                          )}
                        </>
                      ) : service.phase === "ENGAGE" ? (
                        <>
                          {/* Ayana AI Features */}
                          <div className="mt-4">
                            <h4 className="text-lg font-bold text-foreground mb-3">Meet Ayana AI</h4>
                            <p className="text-muted-foreground text-sm mb-4">
                              Your AI-powered nurturing engine that automates follow-ups and improves conversions.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                              {ayanaFeatures.map((feature) => (
                                <div key={feature.title} className="flex items-start gap-2">
                                  <feature.icon className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="text-xs font-medium text-foreground">{feature.title}</p>
                                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : service.phase === "SHORTLIST" ? (
                        <>
                          {/* PotentialAI / KonverseAI Toggle Buttons */}
                          <div className="flex gap-3 mb-6">
                            <Button
                              variant={shortlistMode === "potential" ? "default" : "outline"}
                              onClick={() => setShortlistMode("potential")}
                              className="px-6"
                            >
                              PotentialAI Admit
                            </Button>
                            <Button
                              variant={shortlistMode === "konverse" ? "default" : "outline"}
                              onClick={() => setShortlistMode("konverse")}
                              className="px-6"
                            >
                              KonverseAI Admit
                            </Button>
                          </div>

                          {shortlistMode === "potential" ? (
                            <div className="space-y-4">
                              <p className="text-muted-foreground mb-4">
                                Intelligent Shortlisting Tool for bias-free evaluation
                              </p>
                              <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                  <Upload className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Upload 1000s of profiles with ease</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <SlidersHorizontal className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Define customized shortlisting rules</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <ListOrdered className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Get ranked, bias-free shortlists in hours</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <Timer className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Drastically reduce manual screening effort</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <Link2 className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Direct CRM integration for seamless workflow</span>
                                </li>
                              </ul>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <p className="text-muted-foreground mb-4">
                                AI-Led Autonomous Interviews - Smarter, Scalable, Bias-Free
                              </p>
                              <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                  <Mic className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Voice-first, natural conversation experience</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <Languages className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Bilingual support (English, Hindi, Hinglish)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <Timer className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">24/7 availability - scales to thousands of candidates</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <Bot className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">AI conducts full interview autonomously with dynamic follow-ups</span>
                                </li>
                                <li className="flex items-start gap-3">
                                  <FileText className="h-4 w-4 mt-1 flex-shrink-0 text-red-500" />
                                  <span className="text-foreground/80 text-sm">Competency-mapped scores with detailed transcripts & recommendations</span>
                                </li>
                              </ul>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <p className="text-muted-foreground mb-4">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                <span className="text-foreground/80 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* Partner Schools */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-muted-foreground mb-8"
            >
              Trusted by India's Top B-Schools
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {partnerSchools.map((school) => (
                <span
                  key={school}
                  className="px-6 py-3 bg-background border border-border rounded-full text-foreground font-medium"
                >
                  {school}
                </span>
              ))}
            </motion.div>
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
              className="text-2xl md:text-4xl font-sans font-semibold mb-6"
            >
              Ready to Transform Your Admissions?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
            >
              Join 100+ universities that trust InsideIIM for their end-to-end marketing solutions. Schedule a demo to see how we can help you attract, engage, and shortlist the best candidates.
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

export default ForUniversities;
