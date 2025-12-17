import logo from "@/assets/altuni-labs-logo.png";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Header strip with logo and section titles */}
      <div className="bg-white border-t-4 border-primary">
        <div className="container px-6">
          <div className="hidden md:grid md:grid-cols-3 items-center">
            <img src={logo} alt="AltUni Labs" className="h-12 md:h-16" />
            <h4 className="font-semibold text-primary">About Us</h4>
            <h4 className="font-semibold text-primary">Get In Touch</h4>
          </div>
          <div className="md:hidden">
            <img src={logo} alt="AltUni Labs" className="h-12" />
          </div>
        </div>
      </div>
      
      {/* Main footer content */}
      <div className="pt-4 pb-12 bg-primary">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="text-white/90 leading-relaxed mb-4">
                Making AI that makes humans better. Training humans who make AI better.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/insideiim/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.facebook.com/insideiim/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/insideiim/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.youtube.com/@InsideIIMKonversations" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4 md:hidden">About Us</h4>
              <ul className="space-y-2">
                <li><Link to="/our-story" className="text-white/90 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/our-platforms" className="text-white/90 hover:text-white transition-colors">Our Platforms</Link></li>
                <li><Link to="/our-team" className="text-white/90 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link to="/our-investors" className="text-white/90 hover:text-white transition-colors">Our Investors</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4 md:hidden">Get In Touch</h4>
              <ul className="space-y-2">
                <li><Link to="/for-universities" className="text-white/90 hover:text-white transition-colors">For Universities</Link></li>
                <li><Link to="/for-corporates" className="text-white/90 hover:text-white transition-colors">For Corporates</Link></li>
                <li><Link to="/partner-with-us" className="text-white/90 hover:text-white transition-colors">Partner With Us</Link></li>
                <li><a href="/#contact" className="text-white/90 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70 text-sm">
              © 2024 AltUni Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
