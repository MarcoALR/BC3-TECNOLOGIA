import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Módulos", href: "/#modulos" },
    { name: "Integrações", href: "/#integracoes" },
    { name: "Clientes", href: "/#clientes" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <div className="min-h-screen bg-bc3-industrial flex flex-col">
      {/* Header simples */}
      <header className="w-full border-b border-secondary-foreground/10 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="BC3 Tecnologia" className="h-12 w-auto object-contain" />
          </a>
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-secondary-foreground/50">
          <a href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            Home
          </a>
          <span>›</span>
          <span className="text-primary font-medium">Erro 404: Página não encontrada</span>
        </div>
      </div>

      {/* Título vermelho */}
      <div className="container mx-auto px-4 mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-red-500">
          Erro 404: Página não encontrada
        </h1>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[10rem] sm:text-[14rem] font-black leading-none text-secondary-foreground/10 select-none"
          >
            404
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="-mt-12 sm:-mt-16"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-foreground mb-3">
              Ops! Página não encontrada.
            </h2>
            <p className="text-secondary-foreground/60 mb-2 text-sm sm:text-base">
              Navegue pelo site da BC3 Tecnologia e encontre o que está procurando.
            </p>
            <p className="text-secondary-foreground/50 text-sm mb-8">
              Escolha abaixo a página que deseja visualizar.
            </p>

            <h3 className="text-base font-bold text-secondary-foreground mb-4">
              O que deseja fazer?
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar à página inicial
              </a>
              <a
                href="https://wa.me/5532999851183?text=Olá! Preciso de ajuda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500/30 text-green-400 font-bold rounded-xl hover:bg-green-500/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com suporte
              </a>
            </div>

            {/* Links de navegação */}
            <div className="flex flex-wrap gap-2 justify-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer simples */}
      <footer className="border-t border-secondary-foreground/10 px-4 py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="BC3 Tecnologia" className="h-8 w-auto object-contain" />
            <span className="text-xs text-secondary-foreground/50">
              ERP KRP — Sistema para Cartonagem e Papelão Ondulado
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-secondary-foreground/40">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>•</span>
            <a href="/#contato" className="hover:text-primary transition-colors">Contato</a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              (32) 99985-1183
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
