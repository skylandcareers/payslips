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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
