import { useState, useEffect } from "react";
import { Instagram, Youtube, MessageCircle, ArrowUp } from "lucide-react";
import logoWhite from "@/assets/logo_full_white.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora a rolagem para mostrar/esconder o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Módulos", href: "#modulos" },
    { name: "Integrações", href: "#integracoes" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contato", href: "#contato" },
  ];

  const modules = [
    "Comercial", "Compras", "Produção", "Financeiro", 
    "Fiscal", "BCDocs", "MDF-e", "SPED", "Report",
  ];

  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/5532999851183" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/bc3tecnologia/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@BC3Tecnologia" },
  ];

  return (
    <footer className="section-dark relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 grid-lines opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Conteúdo Principal */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-secondary-foreground/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoWhite} alt="BC3 Tecnologia" className="h-16 w-auto mb-6" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              ERP industrial completo e integrado para indústrias de cartonagem e papelão ondulado. 
              Foco em eficiência e controle baseado em dados.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-6">Módulos KRP</h4>
            <ul className="space-y-3">
              {modules.map((module, index) => (
                <li key={module}>
                  <button
                    onClick={() => {
                      document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' });
                      window.dispatchEvent(new CustomEvent('changeModule', { detail: index }));
                    }}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm text-left"
                  >
                    {module}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato Direto */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-6">Fale Conosco</h4>
            <div className="space-y-4">
              <p className="text-secondary-foreground/70 text-sm italic mb-2 font-light">suporte@bc3.com.br</p>
              <div className="flex flex-col gap-3">
                 <a href="https://www.instagram.com/bc3tecnologia/" target="_blank" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    <Instagram size={16} className="text-primary"/> @bc3tecnologia
                 </a>
                 <a href="https://www.youtube.com/@BC3Tecnologia" target="_blank" className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    <Youtube size={16} className="text-primary"/> BC3 Tecnologia
                 </a>
              </div>
            </div>
            <a href="https://wa.me/5532999851183" className="btn-hero-primary text-sm px-6 py-3 mt-6 inline-flex">
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Bottom Bar Centralizada */}
        <div className="py-12 flex flex-col items-center gap-4">
          <p className="text-secondary-foreground/40 text-xs text-center uppercase tracking-widest">
            © {new Date().getFullYear()} BC3 Tecnologia em Software. Todos os direitos reservados.
          </p>

          <a 
            href="https://www.instagram.com/marco_032_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary-foreground/10 hover:text-primary/30 transition-colors text-[9px] uppercase tracking-[4px] font-light mt-2"
          >
            By Marco
          </a>
        </div>
      </div>

      {/* BOTÃO SUBIR MELHORADO (Fixo no canto da tela) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary shadow-gold flex items-center justify-center text-primary-foreground transition-all duration-500 hover:scale-110 active:scale-95 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;