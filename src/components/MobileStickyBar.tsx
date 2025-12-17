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
        <div className="bg-black/80 backdrop-blur-sm px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] flex justify-center">
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-foreground font-medium py-2.5 px-5 rounded-full transition-all duration-300"
          >
            <span className="flex items-center justify-center w-6 h-6 bg-primary rounded-full">
              <ChevronRight className="w-4 h-4 text-white" />
            </span>
            <span className="text-gray-800 text-sm font-semibold">Get in touch</span>
          </button>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default MobileStickyBar;
