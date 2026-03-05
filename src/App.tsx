import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SeoRedirect from "./pages/SeoRedirect";
import Sobre from "./pages/Sobre";
import Modulos from "./pages/Modulos";
import Integracoes from "./pages/Integracoes";
import Clientes from "./pages/Clientes";
import Contato from "./pages/Contato";

const queryClient = new QueryClient();

const seoRoutes = [
  "erp-cartonagem",
  "sistema-cartonagem",
  "software-cartonagem",
  "sistema-papelao-ondulado",
  "erp-industria-papelao",
  "software-industria-embalagens",
  "sistema-gestao-cartonagem",
  "sistema-erp-cartonagem",
  "programa-cartonagem",
  "sistema-pcp-cartonagem",
  "software-fabricante-caixa-papelao",
  "sistema-controle-cartonagem",
  "erp-cartonagem-nuvem",
  "sistema-calculo-cartonagem",
  "software-papelao-ondulado",
  "sistema-industria-papelao-ondulado",
  "gestao-industrial-cartonagem",
  "sistema-caixa-papelao",
  "erp-industria-grafica",
  "software-industria-caixa-papelao",
  "calculo-custo-caixa-papelao-ondulado",
  "empresa-software-cartonagem",
  "sistema-gerenciamento-cartonagem",
  // New routes
  "erp-embalagens-papelao",
  "sistema-producao-cartonagem",
  "software-gestao-embalagens",
  "erp-fabrica-caixas",
  "sistema-orcamento-cartonagem",
  "software-nfe-cartonagem",
  "erp-cartonagem-sao-paulo",
  "erp-cartonagem-minas-gerais",
  "erp-cartonagem-parana",
  "erp-cartonagem-santa-catarina",
  "erp-cartonagem-rio-grande-do-sul",
  "erp-cartonagem-goias",
  "erp-cartonagem-rio-de-janeiro",
  "erp-cartonagem-bahia",
  "erp-cartonagem-nordeste",
  "sistema-flexografia-cartonagem",
  "software-corte-vinco-cartonagem",
  "erp-onduladeira",
  "sistema-expedicao-cartonagem",
  "software-estoque-papelao-ondulado",
  "erp-cartonagem-pequena-empresa",
  "sistema-fiscal-cartonagem",
  "sistema-vendas-cartonagem",
  "software-orcamento-caixa-papelao",
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/integracoes" element={<Integracoes />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/contato" element={<Contato />} />
            {seoRoutes.map((route) => (
              <Route key={route} path={`/${route}`} element={<SeoRedirect />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
