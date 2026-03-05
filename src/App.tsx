import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SeoRedirect from "./pages/SeoRedirect";

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
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {seoRoutes.map((route) => (
            <Route key={route} path={`/${route}`} element={<SeoRedirect />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
