import { useState, useEffect } from "react";
import { Instagram, Youtube, MessageCircle, ArrowUp, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo_full_white.png";

interface FooterProps {
  seoHeading?: string;
  seoSlug?: string;
}

const Footer = ({ seoHeading, seoSlug }: FooterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const CNPJ = "12.779.137/0001-75";

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
      <div className="absolute inset-0 grid-lines opacity-10" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="py-10 sm:py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 border-b border-secondary-foreground/10">
          <div className="col-span-2 lg:col-span-1">
            <img src={logoWhite} alt="BC3 Tecnologia" className="h-12 sm:h-16 w-auto mb-4 sm:mb-6" />
            <p className="text-secondary-foreground/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              ERP industrial completo e integrado para indústrias de cartonagem e papelão ondulado. 
              Foco em eficiência e controle baseado em dados.
            </p>
            
            {/* CNPJ 
            <div className="text-secondary-foreground/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              <span className="block text-[10px] sm:text-xs uppercase tracking-[0.18em] text-secondary-foreground/50 mb-1">
               Dados empresariais
              </span>
              <span className="whitespace-nowrap">
                CNPJ {CNPJ}
              </span>
            </div>
            */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold text-secondary-foreground mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold text-secondary-foreground mb-4 sm:mb-6">Módulos KRP</h4>
            <ul className="space-y-2 sm:space-y-3">
              {modules.map((module, index) => (
                <li key={module}>
                  <button
                    onClick={() => {
                      document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' });
                      window.dispatchEvent(new CustomEvent('changeModule', { detail: index }));
                    }}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-xs sm:text-sm text-left"
                  >
                    {module}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-base sm:text-lg font-semibold text-secondary-foreground mb-4 sm:mb-6">Fale Conosco</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col gap-3">
                <a href="mailto:suporte@bc3.com.br" className="flex items-center gap-2 text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Mail size={14} className="text-primary"/> suporte@bc3.com.br
                </a>
                <a href="https://www.instagram.com/bc3tecnologia/" target="_blank" className="flex items-center gap-2 text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Instagram size={14} className="text-primary"/> @bc3tecnologia
                </a>
                <a href="https://www.youtube.com/@BC3Tecnologia" target="_blank" className="flex items-center gap-2 text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Youtube size={14} className="text-primary"/> BC3 Tecnologia
                </a>
              </div>
            </div>
            <a href="https://wa.me/5532999851183" className="btn-hero-primary text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 mt-4 sm:mt-6 inline-flex">
              Fale Conosco
            </a>
          </div>
        </div>

        {/* SEO Pages Links */}
        <div className="py-8 sm:py-10 border-b border-secondary-foreground/10">
          <h4 className="font-display text-base sm:text-lg font-semibold text-secondary-foreground mb-4 sm:mb-6 text-center">
            Soluções para Cartonagem e Papelão Ondulado
          </h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { slug: "erp-cartonagem", label: "ERP para Cartonagem" },
              { slug: "sistema-cartonagem", label: "Sistema para Cartonagem" },
              { slug: "software-cartonagem", label: "Software para Cartonagem" },
              { slug: "sistema-papelao-ondulado", label: "Sistema Papelão Ondulado" },
              { slug: "erp-industria-papelao", label: "ERP Indústria de Papelão" },
              { slug: "software-industria-embalagens", label: "Software Indústria de Embalagens" },
              { slug: "sistema-gestao-cartonagem", label: "Sistema de Gestão Cartonagem" },
              { slug: "sistema-erp-cartonagem", label: "Sistema ERP Cartonagem" },
              { slug: "programa-cartonagem", label: "Programa para Cartonagem" },
              { slug: "sistema-pcp-cartonagem", label: "Sistema PCP Cartonagem" },
              { slug: "software-fabricante-caixa-papelao", label: "Software Fabricante Caixa Papelão" },
              { slug: "sistema-controle-cartonagem", label: "Sistema Controle Cartonagem" },
              { slug: "erp-cartonagem-nuvem", label: "ERP Cartonagem Nuvem" },
              { slug: "sistema-calculo-cartonagem", label: "Sistema Cálculo Cartonagem" },
              { slug: "software-papelao-ondulado", label: "Software Papelão Ondulado" },
              { slug: "sistema-industria-papelao-ondulado", label: "Sistema Indústria Papelão Ondulado" },
              { slug: "gestao-industrial-cartonagem", label: "Gestão Industrial Cartonagem" },
              { slug: "sistema-caixa-papelao", label: "Sistema Caixa de Papelão" },
              { slug: "erp-industria-grafica", label: "ERP Indústria Gráfica" },
              { slug: "software-industria-caixa-papelao", label: "Software Indústria Caixa Papelão" },
              { slug: "calculo-custo-caixa-papelao-ondulado", label: "Cálculo Custo Caixa Papelão" },
              { slug: "empresa-software-cartonagem", label: "Empresa Software Cartonagem" },
              { slug: "sistema-gerenciamento-cartonagem", label: "Sistema Gerenciamento Cartonagem" },
              { slug: "erp-embalagens-papelao", label: "ERP Embalagens de Papelão" },
              { slug: "sistema-producao-cartonagem", label: "Sistema Produção Cartonagem" },
              { slug: "software-gestao-embalagens", label: "Software Gestão Embalagens" },
              { slug: "erp-fabrica-caixas", label: "ERP Fábrica de Caixas" },
              { slug: "sistema-orcamento-cartonagem", label: "Sistema Orçamento Cartonagem" },
              { slug: "software-nfe-cartonagem", label: "Software NF-e Cartonagem" },
              { slug: "erp-cartonagem-sao-paulo", label: "ERP Cartonagem São Paulo" },
              { slug: "erp-cartonagem-minas-gerais", label: "ERP Cartonagem Minas Gerais" },
              { slug: "erp-cartonagem-parana", label: "ERP Cartonagem Paraná" },
              { slug: "erp-cartonagem-santa-catarina", label: "ERP Cartonagem Santa Catarina" },
              { slug: "erp-cartonagem-rio-grande-do-sul", label: "ERP Cartonagem Rio Grande do Sul" },
              { slug: "erp-cartonagem-goias", label: "ERP Cartonagem Goiás" },
              { slug: "erp-cartonagem-rio-de-janeiro", label: "ERP Cartonagem Rio de Janeiro" },
              { slug: "erp-cartonagem-bahia", label: "ERP Cartonagem Bahia" },
              { slug: "erp-cartonagem-nordeste", label: "ERP Cartonagem Nordeste" },
              { slug: "sistema-flexografia-cartonagem", label: "Sistema Flexografia Cartonagem" },
              { slug: "software-corte-vinco-cartonagem", label: "Software Corte e Vinco" },
              { slug: "erp-onduladeira", label: "ERP para Onduladeira" },
              { slug: "sistema-expedicao-cartonagem", label: "Sistema Expedição Cartonagem" },
              { slug: "software-estoque-papelao-ondulado", label: "Software Estoque Papelão" },
              { slug: "erp-cartonagem-pequena-empresa", label: "ERP Pequena Empresa" },
              { slug: "sistema-fiscal-cartonagem", label: "Sistema Fiscal Cartonagem" },
              { slug: "sistema-vendas-cartonagem", label: "Sistema Vendas Cartonagem" },
              { slug: "software-orcamento-caixa-papelao", label: "Software Orçamento Caixa Papelão" },
              // Commercial
              { slug: "preco-erp-cartonagem", label: "Preço ERP Cartonagem" },
              { slug: "preco-software-cartonagem", label: "Preço Software Cartonagem" },
              { slug: "preco-sistema-cartonagem", label: "Preço Sistema Cartonagem" },
              { slug: "valor-erp-cartonagem", label: "Valor ERP Cartonagem" },
              { slug: "valor-sistema-cartonagem", label: "Valor Sistema Cartonagem" },
              { slug: "valor-software-cartonagem", label: "Valor Software Cartonagem" },
              { slug: "orcamento-erp-cartonagem", label: "Orçamento ERP Cartonagem" },
              { slug: "orcamento-software-cartonagem", label: "Orçamento Software Cartonagem" },
              // Company
              { slug: "empresa-sistema-cartonagem", label: "Empresa Sistema Cartonagem" },
              { slug: "empresa-erp-cartonagem", label: "Empresa ERP Cartonagem" },
              { slug: "empresa-especialista-cartonagem", label: "Empresa Especialista Cartonagem" },
              { slug: "empresa-sistema-industrial", label: "Empresa Sistema Industrial" },
              // Industrial solutions
              { slug: "solucao-erp-cartonagem", label: "Solução ERP Cartonagem" },
              { slug: "solucao-industria-cartonagem", label: "Solução Indústria Cartonagem" },
              { slug: "software-industria-cartonagem", label: "Software Indústria Cartonagem" },
              { slug: "sistema-industria-embalagens", label: "Sistema Indústria Embalagens" },
              { slug: "erp-industria-embalagens", label: "ERP Indústria Embalagens" },
              // Features
              { slug: "sistema-controle-producao-cartonagem", label: "Controle Produção Cartonagem" },
              { slug: "sistema-estoque-papelao", label: "Sistema Estoque Papelão" },
              { slug: "software-orcamento-caixas", label: "Software Orçamento Caixas" },
              { slug: "sistema-financeiro-cartonagem", label: "Sistema Financeiro Cartonagem" },
              // Educational
              { slug: "calculo-custo-cartonagem", label: "Cálculo Custo Cartonagem" },
              { slug: "calculo-custo-caixa-papelao", label: "Cálculo Custo Caixa Papelão" },
              { slug: "como-calcular-caixa-papelao", label: "Como Calcular Caixa Papelão" },
              { slug: "como-gerenciar-cartonagem", label: "Como Gerenciar Cartonagem" },
              { slug: "controle-producao-cartonagem", label: "Controle Produção Cartonagem" },
              { slug: "gestao-producao-cartonagem", label: "Gestão Produção Cartonagem" },
              { slug: "controle-industria-papelao", label: "Controle Indústria Papelão" },
              { slug: "como-funciona-pcp-cartonagem", label: "Como Funciona PCP Cartonagem" },
              { slug: "gestao-industrial-embalagens", label: "Gestão Industrial Embalagens" },
              // Geographic
              { slug: "erp-cartonagem-brasil", label: "ERP Cartonagem Brasil" },
            ].map((page) => (
              <Link
                key={page.slug}
                to={`/${page.slug}`}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs bg-secondary/20 text-secondary-foreground/60 hover:bg-primary/20 hover:text-primary border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="py-8 sm:py-12 flex flex-col items-center gap-3 sm:gap-4">
          <p className="text-secondary-foreground/40 text-[10px] sm:text-xs text-center uppercase tracking-widest">
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

        {/* SEO Content */}
        {seoHeading && (
          <div className="sr-only" aria-hidden="true">
            <h2>{seoHeading}</h2>
            <p>
              A BC3 Tecnologia é referência em {seoHeading.toLowerCase()} no Brasil. 
              Nosso ERP KRP é um sistema completo para indústrias de cartonagem e papelão ondulado, 
              oferecendo módulos integrados de produção, PCP, comercial, compras, financeiro, fiscal, 
              MDF-e, SPED e relatórios gerenciais. Com mais de 25 clientes atendidos em todo o território nacional, 
              somos a empresa de software para cartonagem que mais cresce no mercado.
            </p>
            <p>
              O sistema de gestão para cartonagem da BC3 Tecnologia permite o cálculo de custo de caixas de papelão ondulado, 
              controle completo de produção, planejamento e controle de produção (PCP), gestão de pedidos, 
              emissão de notas fiscais eletrônicas (NF-e), manifestação de documentos fiscais eletrônicos (MDF-e), 
              SPED Fiscal e Contribuições, além de relatórios gerenciais e dashboards em tempo real.
            </p>
            <p>
              Nosso ERP para cartonagem na nuvem é acessível de qualquer lugar, sem necessidade de instalação local. 
              O software para fabricante de caixa de papelão inclui cálculo automático de gramatura, 
              composição de chapas, otimização de corte, controle de estoque de matéria-prima e produto acabado, 
              gestão de expedição e logística, contas a pagar e receber, fluxo de caixa e conciliação bancária.
            </p>
            <p>
              Se você busca um programa para cartonagem, sistema de controle para cartonagem, 
              software para indústria de embalagens, ERP para indústria gráfica, sistema para caixa de papelão, 
              gestão industrial para cartonagem ou sistema de gerenciamento para cartonagem, 
              o KRP da BC3 Tecnologia é a solução ideal para sua empresa. 
              Entre em contato e solicite uma demonstração gratuita do melhor ERP para cartonagem do Brasil.
            </p>
            {seoSlug && (
              <p>
                Página otimizada para: {seoSlug.replace(/-/g, ' ')}. 
                BC3 Tecnologia - sistema ERP especializado para cartonagem, papelão ondulado, 
                indústria de embalagens e indústria gráfica. Software de gestão industrial completo 
                com módulos de produção, comercial, compras, financeiro, fiscal, documentos eletrônicos e relatórios.
              </p>
            )}
          </div>
        )}
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary shadow-gold flex items-center justify-center text-primary-foreground transition-all duration-500 hover:scale-110 active:scale-95 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>
    </footer>
  );
};

export default Footer;
