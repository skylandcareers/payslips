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
      {/* Main Content - Header is now handled by the global Header component */}
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
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white leading-[1.1] tracking-tight mb-8"
              style={{ textShadow: '0 0 40px rgba(255,255,255,0.2), 0 2px 8px rgba(0,0,0,0.4)' }}
            >
              {title}
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12 font-sans font-normal tracking-wide"
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
              <motion.button
                onClick={onCtaClick}
                className="group relative inline-flex items-center gap-3 bg-white font-medium py-4 px-8 rounded-full shadow-lg overflow-hidden"
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 z-0 origin-left rounded-full"
                  style={{ backgroundColor: "hsl(var(--primary))" }}
                  variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.span 
                  className="relative z-10 flex items-center justify-center w-8 h-8 bg-primary group-hover:bg-white/20 rounded-full transition-colors duration-300"
                  variants={{
                    initial: { x: 0 },
                    hover: { x: [0, 4, 0] },
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 }}
                >
                  <ChevronRight className="w-5 h-5 text-primary-foreground group-hover:text-white transition-colors duration-300" />
                </motion.span>
                <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">{ctaText}</span>
              </motion.button>
            )}

            {/* Additional children content */}
            {children}
          </div>
        </div>
      </main>

    </div>
  );
}
