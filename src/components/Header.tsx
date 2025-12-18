import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/altuni-labs-logo-white.png";
import ContactFormDialog from "./ContactFormDialog";

const MotionLink = motion(Link);

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const dropdownItems = [
    { label: "Our Story", href: "/our-story" },
    { label: "Our Platforms", href: "/our-platforms" },
    { label: "Our Investors", href: "/our-investors" },
    { label: "Our People", href: "/our-team" },
  ];

  const solutionsItems = [
    { label: "For Employers", href: "/for-employers" },
    { label: "For Universities", href: "/for-universities" },
  ];

  const navLinks = [
    { href: "case-studies", label: "Case Studies" },
    { href: "products", label: "Products" },
    { href: "team", label: "The Team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  // If we navigated to home with a pending scroll target, perform it after layout settles.
  useEffect(() => {
    const pending = sessionStorage.getItem("scrollTo");
    if (pending && location.pathname === "/") {
      sessionStorage.removeItem("scrollTo");
      setTimeout(() => performScroll(pending), 300);
    }
  }, [location.pathname]);

  const performScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Use scroll-margin on sections to account for the fixed header.
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollTo", id);
      setIsMobileMenuOpen(false);
      navigate("/");
      return;
    }

    const wasMenuOpen = isMobileMenuOpen;
    setIsMobileMenuOpen(false);

    // Wait for the mobile menu collapse animation so the final scroll position is correct.
    setTimeout(() => performScroll(id), wasMenuOpen ? 360 : 0);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const element = document.getElementById("hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleGetInTouch = () => {
    setIsMobileMenuOpen(false);
    setIsFormOpen(true);
  };

  // Determine if we're on the home page hero section
  const isHomePage = location.pathname === "/";

  return (
    <>
      <motion.header 
        id="site-header"
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: scrolled ? 0.98 : 1,
        }}
        style={{
          backgroundColor: isHomePage && !scrolled ? "transparent" : "rgba(0, 0, 0, 0.95)",
          backdropFilter: scrolled || !isHomePage ? "blur(12px)" : "blur(0px)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
              <img 
                src={logo} 
                alt="AltUni Labs" 
                className="h-9 md:h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white transition-colors font-medium text-sm"
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 shadow-xl z-50 overflow-hidden"
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

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white transition-colors font-medium text-sm"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {solutionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-white/10 shadow-xl z-50 overflow-hidden"
                    >
                      {solutionsItems.map((item, index) => (
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

              {/* Nav Links */}
              {navLinks.map(({ href, label }) => (
                <motion.button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="group relative overflow-hidden px-4 py-2 text-white/80 hover:text-white font-medium text-sm"
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
                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    {label}
                  </span>
                </motion.button>
              ))}

              {/* Get in touch button */}
              <motion.button
                onClick={handleGetInTouch}
                className="inline-flex items-center relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-white px-4 py-2 font-medium text-sm"
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
                <span className="relative z-10 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Get in touch
                </span>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 relative z-50 text-white"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-2">
                {/* About Accordion */}
                <div>
                  <button 
                    className="w-full flex items-center justify-between text-white/80 hover:text-white py-3 text-lg font-medium"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  >
                    About
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        {dropdownItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="flex items-center gap-2 text-white/60 hover:text-white py-2 text-base"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <ArrowRight className="w-4 h-4" />
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Solutions Accordion */}
                <div>
                  <button 
                    className="w-full flex items-center justify-between text-white/80 hover:text-white py-3 text-lg font-medium"
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  >
                    Solutions
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4"
                      >
                        {solutionsItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.href}
                            className="flex items-center gap-2 text-white/60 hover:text-white py-2 text-base"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <ArrowRight className="w-4 h-4" />
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Nav Links */}
                {navLinks.map(({ href, label }) => (
                  <button
                    key={href}
                    className="flex items-center gap-2 text-white/80 hover:text-white py-3 text-lg font-medium text-left"
                    onClick={() => scrollToSection(href)}
                  >
                    <ArrowRight className="w-4 h-4 opacity-50" />
                    {label}
                  </button>
                ))}

                {/* Get in touch button */}
                <button
                  className="mt-4 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-6 font-medium text-lg"
                  onClick={handleGetInTouch}
                >
                  <ChevronRight className="w-5 h-5" />
                  Get in touch
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Header;
