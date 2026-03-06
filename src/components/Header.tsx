import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Download,
  MessageCircle,
  Headphones,
  Sun,
  Moon,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { useTheme } from "@/hooks/use-theme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // ===== Scroll (mais robusto) =====
  useEffect(() => {
    const getScrollTop = () => {
      const se = document.scrollingElement as HTMLElement | null;
      const docTop =
        se?.scrollTop ??
        document.documentElement.scrollTop ??
        document.body.scrollTop ??
        0;
      const winTop = window.scrollY ?? window.pageYOffset ?? 0;
      return Math.max(docTop, winTop);
    };

    const handleScroll = () => setIsScrolled(getScrollTop() > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, true as any);
    };
  }, []);

  // ===== Mobile menu: trava scroll + ESC + fecha dropdown =====
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    setIsSupportOpen(false);

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Módulos", href: "#modulos" },
    { name: "Integrações", href: "#integracoes" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (!isHome) {
      // Navigate to home first, then scroll to section
      navigate("/");
      if (href !== "#home") {
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const closeMobile = () => setIsMobileMenuOpen(false);

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
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="BC3 Tecnologia"
              className={`transition-all duration-300 object-contain ${
                isScrolled ? "h-10 sm:h-14" : "h-14 sm:h-20"
              }`}
              style={{ width: "auto" }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-bold text-secondary-foreground/90 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-secondary-foreground/10 text-secondary-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Suporte Técnico Dropdown */}
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
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isSupportOpen ? "rotate-180" : ""
                  }`}
                />
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
                      href="https://anydesk.com/pt/downloads/thank-you?dv=win_exe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-4 text-sm font-semibold hover:bg-secondary/50 rounded-xl transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-secondary-foreground font-bold">
                          Baixar AnyDesk
                        </p>
                        <p className="text-[10px] text-secondary-foreground/50 font-normal italic">
                          Acesso remoto rápido
                        </p>
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
                        <p className="text-secondary-foreground font-bold">
                          WhatsApp Suporte
                        </p>
                        <p className="text-[10px] text-secondary-foreground/50 font-normal italic">
                          Fale com um técnico
                        </p>
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

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-secondary-foreground/90 transition-colors z-[60]"
            aria-label="Abrir menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* ===== MENU LATERAL (REFEITO COM CORES DO SITE) ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay (z-index alto pra não bugar no footer) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22 }}
              className="fixed top-0 right-0 h-[100dvh] w-[86%] max-w-sm bg-bc3-industrial border-l border-secondary-foreground/10 shadow-2xl z-[9999] lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              {/* Topo do drawer */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-secondary-foreground/10">
                <img
                  src={logo}
                  alt="BC3"
                  className="h-10 w-auto object-contain"
                />

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-full bg-secondary-foreground/10 text-secondary-foreground/80 hover:bg-primary/20 hover:text-primary transition-all"
                    aria-label="Alternar tema"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    )}
                  </button>

                  <button
                    onClick={closeMobile}
                    className="p-2.5 rounded-full bg-secondary-foreground/10 text-secondary-foreground/90 hover:bg-secondary-foreground/20 transition-all"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Conteúdo rolável */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobile}
                      className="text-lg font-bold text-secondary-foreground/90 hover:text-primary transition-colors border-b border-secondary-foreground/10 pb-3 pt-3"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 space-y-4">
                  <p className="text-xs font-bold text-secondary-foreground/40 uppercase tracking-widest">
                    Suporte ao Cliente
                  </p>

                  <a
                    href="https://anydesk.com/pt/downloads/thank-you?dv=win_exe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-red-500/10 rounded-2xl text-red-400 font-bold border border-red-500/20"
                  >
                    <Download className="w-5 h-5" /> Baixar AnyDesk
                  </a>

                  <a
                    href="https://wa.me/5532999851183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-500/10 rounded-2xl text-green-400 font-bold border border-green-500/20"
                  >
                    <MessageCircle className="w-5 h-5" /> Suporte WhatsApp
                  </a>

                  <a
                    href="https://wa.me/5532999851183?text=Olá! Gostaria de conhecer o ERP KRP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero-primary w-full justify-center py-4 rounded-2xl mt-2 flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" /> Fale Conosco
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Fecha suporte desktop clicando fora */}
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
