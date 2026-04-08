import { ThemeProvider } from "@/hooks/use-theme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Modules from "@/components/Modules";
import Integrations from "@/components/Integrations";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DeploymentOptions from "@/components/DeploymentOptions";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <ThemeProvider>
      <Helmet>
        <title>ERP para Cartonagem | Sistema para Papelão Ondulado - BC3 Tecnologia</title>
        <meta name="description" content="BC3 Tecnologia: o melhor ERP para cartonagem e papelão ondulado do Brasil. Sistema KRP completo com módulos de produção, PCP, comercial, compras, financeiro, fiscal, NF-e, SPED e MDF-e. Mais de 25 clientes. Demonstração gratuita." />
        <meta name="keywords" content="ERP cartonagem, sistema cartonagem, software cartonagem, ERP papelão ondulado, sistema papelão ondulado, melhor ERP cartonagem, BC3 Tecnologia, ERP KRP, sistema KRP, ERP industrial cartonagem, gestão industrial cartonagem, software gestão cartonagem, ERP embalagens papelão ondulado, sistema gestão industrial, ERP fábrica caixas, sistema produção cartonagem, PCP cartonagem, cálculo custo caixa papelão, ERP nuvem cartonagem, sistema online cartonagem, software indústria embalagens, ERP indústria gráfica, NF-e cartonagem, SPED cartonagem, MDF-e cartonagem, controle produção cartonagem, orçamento cartonagem, gestão fábrica papelão, software fabricante caixa papelão, sistema ERP industrial, ERP Brasil cartonagem, ERP caixa papelão, sistema caixa papelão, software papelão ondulado, ERP embalagens, programa cartonagem, software fábrica papelão, gestão cartonagem, automação cartonagem, controle cartonagem, ERP completo cartonagem, melhor sistema cartonagem, melhor software cartonagem, sistema integrado cartonagem, ERP especializado cartonagem, sistema fiscal cartonagem, sistema vendas cartonagem, ERP produção papelão, software orçamento caixa papelão, cálculo gramatura papelão, composição chapa papelão ondulado, sistema expedição cartonagem, software estoque papelão ondulado, ERP pequena empresa cartonagem, gestão embalagens papelão, sistema flexografia cartonagem, software corte vinco cartonagem, ERP onduladeira, sistema gerenciamento cartonagem, empresa software cartonagem" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="BC3 Tecnologia | Melhor ERP para Cartonagem e Papelão Ondulado" />
        <meta property="og:description" content="Sistema ERP KRP: o mais completo do Brasil para indústrias de cartonagem e papelão ondulado. Produção, PCP, comercial, financeiro, fiscal e mais." />
        <meta property="og:url" content="https://bc3.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BC3 Tecnologia" />
        <meta property="og:locale" content="pt_BR" />
        <link rel="canonical" href="https://bc3.com.br" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "BC3 Tecnologia",
            "url": "https://bc3.com.br",
            "logo": "https://bc3.com.br/logos/logo.png",
            "description": "Empresa especializada em ERP para cartonagem e papelão ondulado. O melhor sistema de gestão industrial para fábricas de caixas de papelão do Brasil.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-32-99985-1183",
              "contactType": "sales",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://www.instagram.com/bc3tecnologia/",
              "https://www.youtube.com/@BC3Tecnologia"
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ERP KRP",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "description": "O melhor ERP para cartonagem e papelão ondulado do Brasil. Sistema completo de gestão industrial com módulos de produção, PCP, comercial, compras, financeiro, fiscal, NF-e, SPED e MDF-e.",
            "url": "https://bc3.com.br",
            "provider": { "@type": "Organization", "name": "BC3 Tecnologia" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL", "description": "Demonstração gratuita" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "25", "bestRating": "5" }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen" data-react-root>
        <Header />
        <Hero />
        <About />
        <Modules />
        <Integrations />
        <DeploymentOptions />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
