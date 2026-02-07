import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProcessPage from "./pages/ProcessPage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servizi" element={<ServicesPage />} />
              <Route path="/processo" element={<ProcessPage />} />
              <Route path="/competenze" element={<SkillsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contatti" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
