import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Download, MessageCircle, Headphones } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
        isScrolled 
          ? "bg-bc3-industrial/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="BC3 Tecnologia"
              className={`transition-all duration-300 object-contain ${
                isScrolled ? "h-10 sm:h-14" : "h-14 sm:h-20"
              }`}
              style={{ width: 'auto' }}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-secondary-foreground/90 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsSupportOpen(!isSupportOpen)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                  isSupportOpen 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-secondary-foreground/10 text-secondary-foreground/90 border-secondary-foreground/20 hover:bg-secondary-foreground/20"
                }`}
              >
                <Headphones className="w-4 h-4" />
                Suporte Técnico
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSupportOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isSupportOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 w-64 bg-bc3-industrial border border-secondary-foreground/20 rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                  >
                    <div className="px-3 py-2 text-[10px] font-bold text-secondary-foreground/40 uppercase tracking-widest">
                      Atendimento Remoto
                    </div>
                    
                    <a
                      href="https://anydesk.com/pt/downloads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-4 text-sm font-semibold hover:bg-secondary/50 rounded-xl transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-secondary-foreground font-bold">Baixar AnyDesk</p>
                        <p className="text-[10px] text-secondary-foreground/50 font-normal italic">Acesso remoto rápido</p>
                      </div>
                    </a>
                    
                    <div className="my-1 border-t border-secondary-foreground/10" />
                    
                    <a
                      href="https://wa.me/5532999851183?text=Olá! Preciso de suporte técnico."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-4 text-sm font-semibold hover:bg-secondary/50 rounded-xl transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-secondary-foreground font-bold">WhatsApp Suporte</p>
                        <p className="text-[10px] text-secondary-foreground/50 font-normal italic">Fale com um técnico</p>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://wa.me/5532999851183?text=Olá! Gostaria de conhecer o ERP KRP."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-gold"
            >
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-secondary-foreground/90 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-bc3-industrial shadow-2xl z-[60] p-6 lg:hidden"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-secondary-foreground">
                  <X className="w-8 h-8" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-secondary-foreground border-b border-secondary-foreground/10 pb-2"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="space-y-4 pt-4">
                  <p className="text-xs font-bold text-secondary-foreground/40 uppercase tracking-widest">Suporte ao Cliente</p>
                  <a
                    href="https://anydesk.com/pt/downloads"
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-red-500/10 rounded-2xl text-red-400 font-bold"
                  >
                    <Download className="w-5 h-5" /> Baixar AnyDesk
                  </a>
                  <a
                    href="https://wa.me/5532999851183"
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-green-500/10 rounded-2xl text-green-400 font-bold"
                  >
                    <MessageCircle className="w-5 h-5" /> Suporte WhatsApp
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isSupportOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsSupportOpen(false)} />
      )}
    </header>
  );
};

export default Header;
