import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Download, MessageCircle, Headphones } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Módulos", href: "#modulos" },
    { name: "Integrações", href: "#integracoes" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "navbar-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="BC3 Tecnologia" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary-foreground/90 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            {/* Dropdown Suporte */}
            <div className="relative">
              <button
                onClick={() => setIsSupportOpen(!isSupportOpen)}
                className="flex items-center gap-2 text-sm font-medium text-secondary-foreground/90 hover:text-primary transition-colors duration-200"
              >
                <Headphones className="w-4 h-4" />
                Suporte
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isSupportOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isSupportOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-strong overflow-hidden z-50"
                  >
                    <a
                      href="https://anydesk.com/pt/downloads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors"
                    >
                      <Download className="w-4 h-4 text-primary" />
                      Baixar AnyDesk
                    </a>
                    <a
                      href="https://wa.me/5532999851183?text=Olá! Preciso de suporte técnico."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors border-t border-border"
                    >
                      <MessageCircle className="w-4 h-4 text-primary" />
                      Chamar Suporte WhatsApp
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA Button */}
          <a
            href="https://wa.me/5532999851183?text=Olá! Gostaria de conhecer o ERP KRP."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex btn-hero-primary text-sm px-6 py-3"
          >
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-secondary-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-secondary-foreground/90 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="border-t border-border pt-4 space-y-3">
                  <a
                    href="https://anydesk.com/pt/downloads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4 text-primary" />
                    Baixar AnyDesk
                  </a>
                  <a
                    href="https://wa.me/5532999851183?text=Olá! Preciso de suporte técnico."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Suporte WhatsApp
                  </a>
                </div>

                <a
                  href="https://wa.me/5532999851183?text=Olá! Gostaria de conhecer o ERP KRP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-primary text-sm px-6 py-3 mt-2"
                >
                  Fale Conosco
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close dropdown */}
      {isSupportOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsSupportOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
