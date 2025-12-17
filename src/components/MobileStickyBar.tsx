import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const MobileStickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-primary px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
          <button
            onClick={() => setIsFormOpen(true)}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-foreground font-medium py-3 px-6 rounded-full transition-all duration-300"
          >
            <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
              <ChevronRight className="w-5 h-5 text-white" />
            </span>
            <span className="text-gray-800 font-semibold">Get in touch</span>
          </button>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default MobileStickyBar;
