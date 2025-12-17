import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurStory from "./pages/OurStory";
import OurPlatforms from "./pages/OurPlatforms";
import OurTeam from "./pages/OurTeam";
import OurInvestors from "./pages/OurInvestors";

import ForCorporates from "./pages/ForCorporates";
import ForUniversities from "./pages/ForUniversities";
import PartnerWithUs from "./pages/PartnerWithUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-platforms" element={<OurPlatforms />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-investors" element={<OurInvestors />} />
          
          <Route path="/for-corporates" element={<ForCorporates />} />
          <Route path="/for-universities" element={<ForUniversities />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
