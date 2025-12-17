import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/altuni-labs-logo.png";
import ContactFormDialog from "./ContactFormDialog";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    // If not on home page, navigate to home first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      scrollToSection("hero");
    }
  };

  const handleNavigate = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleGetInTouch = () => {
    setIsMobileMenuOpen(false);
    setIsFormOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="AltUni Labs" 
                className="h-8 md:h-10 w-auto cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 hover:bg-primary/10"
                onClick={() => scrollToSection("case-studies")}
              >
                Case Studies
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 hover:bg-primary/10"
                onClick={() => scrollToSection("products")}
              >
                Products
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 hover:bg-primary/10"
                onClick={() => scrollToSection("team")}
              >
                The Team
              </Button>
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsFormOpen(true)}
              >
                Get in touch
              </Button>
            </nav>

            <button 
              className="md:hidden p-2 relative z-50"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
        
        <div className="py-1 bg-primary">
          <div className="container mx-auto px-6">
            <p className="text-white text-xs md:text-sm text-center font-medium">
              From the Makers of InsideIIM
            </p>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[96px] bg-white z-40 overflow-y-auto">
            <nav className="flex flex-col p-6 gap-4">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-primary hover:text-primary/80 hover:bg-primary/10 text-lg py-4"
                onClick={() => scrollToSection("case-studies")}
              >
                Case Studies
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-primary hover:text-primary/80 hover:bg-primary/10 text-lg py-4"
                onClick={() => scrollToSection("products")}
              >
                Products
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-primary hover:text-primary/80 hover:bg-primary/10 text-lg py-4"
                onClick={() => scrollToSection("team")}
              >
                The Team
              </Button>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-4 mt-4"
                onClick={handleGetInTouch}
              >
                Get in touch
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Header;
