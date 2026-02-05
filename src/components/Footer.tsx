import { Instagram, Youtube, MessageCircle, ArrowUp } from "lucide-react";
import logoWhite from "@/assets/logo_full_white.png";

const Footer = () => {
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
    "Comercial",
    "Compras",
    "Produção",
    "Financeiro",
    "Fiscal",
    "BCDocs",
    "MDF-e",
    "SPED",
    "Report",
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/5532999851183",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/bc3tecnologia/",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@BC3Tecnologia",
    },
  ];

  return (
    <footer className="section-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoWhite}
              alt="BC3 Tecnologia"
              className="h-16 w-auto mb-6"
            />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              ERP industrial completo e integrado para indústrias de cartonagem
              e papelão ondulado. Foco em eficiência, controle e tomada de
              decisão baseada em dados.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-6">
              Módulos KRP
            </h4>
            <ul className="space-y-3">
              {modules.map((module) => (
                <li key={module}>
                  <a
                    href="#modulos"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {module}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/5532999851183"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                +55 32 9985-1183
              </a>
              <a
                href="https://www.instagram.com/bc3tecnologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-5 h-5 text-primary" />
                @bc3tecnologia
              </a>
              <a
                href="https://www.youtube.com/@BC3Tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Youtube className="w-5 h-5 text-primary" />
                BC3 Tecnologia
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/5532999851183?text=Olá! Gostaria de conhecer o ERP KRP."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary text-sm px-6 py-3 mt-6 inline-flex"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} BC3 Tecnologia em Software. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
