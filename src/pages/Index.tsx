import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Modules from "@/components/Modules";
import Integrations from "@/components/Integrations";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Modules />
      <Integrations />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
