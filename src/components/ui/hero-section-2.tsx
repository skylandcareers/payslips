import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

interface NavLink {
  href: string;
  label: string;
}

interface DropdownItem {
  label: string;
  href: string;
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
  dropdownItems?: DropdownItem[];
  dropdownLabel?: string;
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
  dropdownItems = [],
  dropdownLabel = "About",
}: HeroSection2Props) {
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: scrolled ? 0.98 : 1,
        }}
        style={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {logoElement}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Dropdown Menu */}
              {dropdownItems.length > 0 && (
                <div 
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-white/80 hover:text-white transition-colors font-medium text-sm"
                  >
                    {dropdownLabel}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden"
                      >
                        {dropdownItems.map((item, index) => (
                          <MotionLink
                            key={index}
                            to={item.href}
                            className="group relative block overflow-hidden px-4 py-3 text-white/80 hover:text-white text-sm border-b border-white/10 last:border-b-0"
                            initial="initial"
                            whileHover="hover"
                          >
                            <motion.span
                              className="absolute inset-0 z-0 origin-left"
                              style={{ backgroundColor: "hsl(var(--primary))" }}
                              variants={{
                                initial: { scaleX: 0 },
                                hover: { scaleX: 1 },
                              }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                            <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2">
                              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                              {item.label}
                            </span>
                          </MotionLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

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
