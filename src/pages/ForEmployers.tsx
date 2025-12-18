import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmployerHero from "@/components/employers/EmployerHero";
import TrustedBySection from "@/components/employers/TrustedBySection";
import WhatAIUnlocks from "@/components/employers/WhatAIUnlocks";
import HiringFlow from "@/components/employers/HiringFlow";
import FeatureShowcase from "@/components/employers/FeatureShowcase";
import CTASection from "@/components/employers/CTASection";

const ForEmployers = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      
      <main>
        <EmployerHero />
        <TrustedBySection />
        <WhatAIUnlocks />
        <HiringFlow />
        <FeatureShowcase />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ForEmployers;
