import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Philosophy from "@/components/Philosophy";
import CaseStudies from "@/components/CaseStudies";
import Products from "@/components/Products";
import AICapabilities from "@/components/AICapabilities";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Wiggling background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-wiggle" />
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-wiggle" style={{ animationDelay: '4s' }} />
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-wiggle" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Partners />
        <Philosophy />
        <CaseStudies />
        <Products />
        <AICapabilities />
        <Team />
        <Contact />
        <Footer />
      </div>
      <MobileStickyBar />
    </div>
  );
};

export default Index;
