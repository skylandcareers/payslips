import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import OfferLetter from "./pages/OfferLetter";
import PayslipGenerator from "./pages/PayslipGenerator";
import LetterheadGenerator from "./pages/LetterheadGenerator";

import MouriIndex from "./pages/MouriIndex";
import MouriOfferLetter from "./pages/MouriOfferLetter";
import MouriPayslipGenerator from "./pages/MouriPayslipGenerator";
import MouriLetterheadGenerator from "./pages/MouriLetterheadGenerator";

import AvisoIndex from "./pages/AvisoIndex";
import SathyabamaIndex from "./pages/SathyabamaIndex";
import SathyabamaLetterheadGenerator from "./pages/SathyabamaLetterheadGenerator";

import KluIndex from "./pages/KluIndex";
import KluLetterheadGenerator from "./pages/KluLetterheadGenerator";

import WoxsenIndex from "./pages/WoxsenIndex";
import WoxsenLetterheadGenerator from "./pages/WoxsenLetterheadGenerator";

import SastraIndex from "./pages/SastraIndex";
import SastraLetterheadGenerator from "./pages/SastraLetterheadGenerator";
import PalamuruIndex from "./pages/PalamuruIndex";
import PalamuruLetterheadGenerator from "./pages/PalamuruLetterheadGenerator";

import CaIndex from "./pages/CaIndex";
import CaLetterheadGenerator from "./pages/CaLetterheadGenerator";

import SpoorthiIndex from "./pages/SpoorthiIndex";
import SpoorthiLetterheadGenerator from "./pages/SpoorthiLetterheadGenerator";

import HighradiusIndex from "./pages/HighradiusIndex";
import HighradiusOfferLetter from "./pages/HighradiusOfferLetter";
import HighradiusPayslipGenerator from "./pages/HighradiusPayslipGenerator";
import HighradiusLetterheadGenerator from "./pages/HighradiusLetterheadGenerator";

import MaruthiGlassIndex from "./pages/MaruthiGlassIndex";
import MaruthiGlassLetterheadGenerator from "./pages/MaruthiGlassLetterheadGenerator";

import TechnoIndiaIndex from "./pages/TechnoIndiaIndex";
import TechnoIndiaLetterheadGenerator from "./pages/TechnoIndiaLetterheadGenerator";

import SriYogeshwaraIndex from "./pages/SriYogeshwaraIndex";
import SriYogeshwaraLetterheadGenerator from "./pages/SriYogeshwaraLetterheadGenerator";

import ImperialLeatherLetterheadGenerator from "./pages/ImperialLeatherLetterheadGenerator";
import StandardEngineeringLetterheadGenerator from "./pages/StandardEngineeringLetterheadGenerator";
import MedicalEquipmentsLetterheadGenerator from "./pages/MedicalEquipmentsLetterheadGenerator";
import HomeFurnitureLetterheadGenerator from "./pages/HomeFurnitureLetterheadGenerator";
import RakshaGlobalLetterheadGenerator from "./pages/RakshaGlobalLetterheadGenerator";
import SriSaravanaLetterheadGenerator from "./pages/SriSaravanaLetterheadGenerator";
import UnionBankStatementGenerator from "./pages/UnionBankStatementGenerator";
import SBIStatementGenerator from "./pages/SBIStatementGenerator";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/aviso" element={<AvisoIndex />} />
          <Route path="/offer-letter" element={<OfferLetter />} />
          <Route path="/payslips" element={<PayslipGenerator />} />
          <Route path="/letterhead" element={<LetterheadGenerator />} />

          <Route path="/mouri" element={<MouriIndex />} />
          <Route path="/mouri/offer-letter" element={<MouriOfferLetter />} />
          <Route path="/mouri/payslips" element={<MouriPayslipGenerator />} />
          <Route path="/mouri/letterhead" element={<MouriLetterheadGenerator />} />

          <Route path="/sathyabama" element={<SathyabamaIndex />} />
          <Route path="/sathyabama/letterhead" element={<SathyabamaLetterheadGenerator />} />
          
          <Route path="/klu" element={<KluIndex />} />
          <Route path="/klu/letterhead" element={<KluLetterheadGenerator />} />
          
          <Route path="/woxsen" element={<WoxsenIndex />} />
          <Route path="/woxsen/letterhead" element={<WoxsenLetterheadGenerator />} />

          <Route path="/sastra" element={<SastraIndex />} />
          <Route path="/sastra/letterhead" element={<SastraLetterheadGenerator />} />
          <Route path="/palamuru" element={<PalamuruIndex />} />
          <Route path="/palamuru/letterhead" element={<PalamuruLetterheadGenerator />} />
          
          <Route path="/ca" element={<CaIndex />} />
          <Route path="/ca/letterhead" element={<CaLetterheadGenerator />} />

          <Route path="/spoorthi" element={<SpoorthiIndex />} />
          <Route path="/spoorthi/letterhead" element={<SpoorthiLetterheadGenerator />} />

          <Route path="/highradius" element={<HighradiusIndex />} />
          <Route path="/highradius/offer-letter" element={<HighradiusOfferLetter />} />
          <Route path="/highradius/payslips" element={<HighradiusPayslipGenerator />} />
          <Route path="/highradius/letterhead" element={<HighradiusLetterheadGenerator />} />

          <Route path="/maruthi-glass" element={<MaruthiGlassIndex />} />
          <Route path="/maruthi-glass/letterhead" element={<MaruthiGlassLetterheadGenerator />} />

          <Route path="/techno-india" element={<TechnoIndiaIndex />} />
          <Route path="/techno-india/letterhead" element={<TechnoIndiaLetterheadGenerator />} />

          <Route path="/sri-yogeshwara" element={<SriYogeshwaraIndex />} />
          <Route path="/sri-yogeshwara/letterhead" element={<SriYogeshwaraLetterheadGenerator />} />

          <Route path="/imperial-leather/letterhead" element={<ImperialLeatherLetterheadGenerator />} />
          <Route path="/standard-engineering/letterhead" element={<StandardEngineeringLetterheadGenerator />} />
          <Route path="/medical-equipments/letterhead" element={<MedicalEquipmentsLetterheadGenerator />} />
          <Route path="/home-furniture/letterhead" element={<HomeFurnitureLetterheadGenerator />} />
          <Route path="/raksha-global/letterhead" element={<RakshaGlobalLetterheadGenerator />} />
          <Route path="/sri-saravana" element={<SriSaravanaLetterheadGenerator />} />


          <Route path="/union-bank" element={<UnionBankStatementGenerator />} />
          <Route path="/union-bank/statement" element={<UnionBankStatementGenerator />} />

          <Route path="/sbi" element={<SBIStatementGenerator />} />
          <Route path="/sbi/statement" element={<SBIStatementGenerator />} />

          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
