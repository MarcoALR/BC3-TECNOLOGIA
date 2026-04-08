import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Index from "./pages/Index";
import Catalogo from "./pages/Catalogo";
import Produto from "./pages/Produto";
import CatalogoPdf from "./pages/CatalogoPdf";
import MesaPersonalizada from "./pages/MesaPersonalizada";
import Representantes from "./pages/Representantes";
import Localizacao from "./pages/Localizacao";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/catalogo-pdf" element={<CatalogoPdf />} />
            <Route path="/mesa-personalizada" element={<MesaPersonalizada />} />
            <Route path="/representantes" element={<Representantes />} />
            <Route path="/localizacao" element={<Localizacao />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
