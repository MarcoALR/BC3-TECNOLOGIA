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
}

const PageLayout = ({ title, description, canonical, scrollTo, seoHeading, seoSlug }: PageLayoutProps) => {
  useEffect(() => {
    if (scrollTo) {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [scrollTo]);

  return (
    <ThemeProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
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
