import { ThemeProvider } from "@/hooks/use-theme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Modules from "@/components/Modules";
import Integrations from "@/components/Integrations";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface PageLayoutProps {
  title: string;
  description: string;
  canonical: string;
  scrollTo?: string;
  seoHeading?: string;
  seoSlug?: string;
  keywords?: string;
}

const PageLayout = ({ title, description, canonical, scrollTo, seoHeading, seoSlug, keywords }: PageLayoutProps) => {
  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [scrollTo]);

  const defaultKeywords = "ERP cartonagem, sistema cartonagem, software cartonagem, ERP papelão ondulado, melhor ERP cartonagem, BC3 Tecnologia, ERP KRP, sistema KRP, gestão industrial cartonagem, PCP cartonagem, cálculo custo caixa papelão, ERP nuvem cartonagem, NF-e cartonagem, SPED cartonagem, MDF-e cartonagem, ERP fábrica caixas, software papelão ondulado, ERP embalagens, sistema produção cartonagem, controle produção cartonagem";

  return (
    <ThemeProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BC3 Tecnologia" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://bc3.com.br/logos/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://bc3.com.br/logos/logo.png" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Modules />
        <Integrations />
        <Clients />
        <Contact />
        <Footer seoHeading={seoHeading} seoSlug={seoSlug} />
      </div>
    </ThemeProvider>
  );
};

export default PageLayout;
