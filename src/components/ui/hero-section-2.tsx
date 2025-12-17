import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

interface HeroSection2Props {
  logoElement?: React.ReactNode;
  navLinks?: NavLink[];
  avatarSrcList?: string[];
  userCount?: number;
  title: string;
  description: string;
  placeholder?: string;
  ctaText?: string;
  onSubmit?: (email: string) => void;
  onCtaClick?: () => void;
  footerVersion?: string;
  onNavClick?: (href: string) => void;
  onJoinClick?: () => void;
  showEmailForm?: boolean;
  children?: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

export default function HeroSection2({
  logoElement,
  navLinks = [],
  avatarSrcList = [],
  userCount = 0,
  title,
  description,
  placeholder = "Enter your email",
  ctaText = "Get Started",
  onSubmit,
  onCtaClick,
  footerVersion,
  onNavClick,
  onJoinClick,
  showEmailForm = false,
  children,
  sidebarContent,
}: HeroSection2Props) {
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !onSubmit) return;
    onSubmit(email);
    setEmail("");
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header with scroll animation */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ opacity: 1, backgroundColor: "transparent" }}
        animate={{ 
          opacity: scrolled ? 0.95 : 1,
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {logoElement}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => onNavClick?.(href)}
                  className="text-white/80 hover:text-white transition-colors font-medium text-sm"
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Join Button */}
            <Button
              onClick={onJoinClick}
              variant="outline"
              className="hidden md:inline-flex bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Get in touch
            </Button>
          </div>
          
          {/* Sub-navigation menu */}
          {sidebarContent && (
            <div className="mt-6 pt-4 border-t border-white/10">
              {sidebarContent}
            </div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Avatar Stack & User Count */}
            {avatarSrcList.length > 0 && (
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex -space-x-3">
                  {avatarSrcList.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`User ${idx + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                {userCount > 0 && (
                  <span className="text-white/70 text-sm">
                    {userCount.toLocaleString()} users have joined
                  </span>
                )}
              </div>
            )}


            {/* Title */}
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: '0 0 40px rgba(255,255,255,0.2), 0 2px 8px rgba(0,0,0,0.4)' }}
            >
              {title}
            </h1>

            {/* Description */}
            <p 
              className="text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
              style={{ textShadow: '0 0 15px rgba(255,255,255,0.2)' }}
            >
              {description}
            </p>

            {/* Email Form or CTA Button */}
            {showEmailForm ? (
              <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 rounded-r-none bg-white/90 border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"
                  required
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {ctaText}
                </Button>
              </form>
            ) : (
              <Button
                onClick={onCtaClick}
                size="lg"
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 font-medium py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                  <ChevronRight className="w-5 h-5 text-primary-foreground" />
                </span>
                <span className="text-gray-800">{ctaText}</span>
              </Button>
            )}

            {/* Additional children content */}
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      {footerVersion && (
        <footer className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <p className="text-white/60 text-sm">{footerVersion}</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
