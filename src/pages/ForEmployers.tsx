import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmployerHero from "@/components/employers/EmployerHero";
import TrustedBySection from "@/components/employers/TrustedBySection";
import WhatAIUnlocks from "@/components/employers/WhatAIUnlocks";
import HiringFlow from "@/components/employers/HiringFlow";
import FeatureShowcase from "@/components/employers/FeatureShowcase";
import CTASection from "@/components/employers/CTASection";
import StaticNetworkBackground from "@/components/StaticNetworkBackground";

const ForEmployers = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main className="relative">
        {/* Static Network Background for all sections except hero */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <StaticNetworkBackground density={40} />
        </div>
        
        <div className="relative z-10">
          <EmployerHero />
          <TrustedBySection />
          <WhatAIUnlocks />
          <HiringFlow />
          <FeatureShowcase />
          <CTASection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForEmployers;
