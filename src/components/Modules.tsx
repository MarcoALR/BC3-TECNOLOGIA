import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ShoppingCart, Package, Factory, DollarSign, FileText,
  FileCheck, Truck, Database, BarChart3, ChevronRight,
} from "lucide-react";

const Modules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const handleChange = (e: any) => {
      if (typeof e.detail === 'number') setActiveModule(e.detail);
    };
    window.addEventListener('changeModule', handleChange);
    return () => window.removeEventListener('changeModule', handleChange);
  }, []);

  // Preload all module images on mount
  useEffect(() => {
    modules.forEach((m) => {
      if (m.image) {
        const img = new Image();
        img.src = m.image;
      }
    });
  }, []);

  const modules = [
    { id: "comercial", icon: ShoppingCart, title: "Comercial", description: "Gestão completa do ciclo de vendas: orçamentos, pedidos, faturamento e acompanhamento de clientes. Controle de comissões e metas da equipe comercial.", features: ["Orçamentos e Pedidos", "Faturamento Automático", "Gestão de Clientes", "Comissões e Metas"], image: "/modulos/comercial.jpeg" },
    { id: "compras", icon: Package, title: "Compras", description: "Controle de requisições, cotações, pedidos de compra e recebimento de materiais. Gestão de fornecedores e análise de custos.", features: ["Requisições de Compra", "Cotações Automáticas", "Controle de Recebimento", "Gestão de Fornecedores"], image: "/modulos/compras.jpeg" },
    { id: "producao", icon: Factory, title: "Produção", description: "Planejamento e controle da produção, ordens de fabricação, apontamentos e rastreabilidade completa do processo produtivo industrial.", features: ["Ordens de Produção", "Apontamento de Produção", "PCP Integrado", "Rastreabilidade"], image: "/modulos/producao.jpeg" },
    { id: "financeiro", icon: DollarSign, title: "Financeiro", description: "Contas a pagar, contas a receber, fluxo de caixa, conciliação bancária e gestão completa das finanças da empresa.", features: ["Contas a Pagar/Receber", "Fluxo de Caixa", "Conciliação Bancária", "Relatórios Financeiros"], image: "/modulos/financeiro.jpeg" },
    { id: "fiscal", icon: FileText, title: "Fiscal", description: "Emissão de NF-e, NFC-e, CT-e com validação automática. Escrituração fiscal completa e atualização constante da legislação.", features: ["Emissão NF-e/NFC-e", "Escrituração Fiscal", "Apuração de Impostos", "Atualizações Legais"], image: "/modulos/fiscal.jpeg" },
    { id: "bc3docs", icon: FileCheck, title: "BC3Docs", description: "Automação fiscal inteligente: captura automática de documentos, validação de XMLs e integração com sistemas fiscais.", features: ["Captura de XMLs", "Validação Automática", "Manifestação de Destinatário", "Arquivo Centralizado"], image: "/modulos/docs.jpeg" },
    { id: "mdfe", icon: Truck, title: "MDF-e", description: "Emissão e gestão de Manifesto Eletrônico de Documentos Fiscais para operações de transporte interestadual e intermunicipal.", features: ["Emissão MDF-e", "Encerramento Automático", "Integração Logística", "Controle de Viagens"], image: "/modulos/mdfe.jpeg" },
    { id: "sped", icon: Database, title: "SPED", description: "Geração automatizada de todos os arquivos SPED: EFD ICMS/IPI, EFD Contribuições, ECD, ECF e Bloco K.", features: ["EFD ICMS/IPI", "EFD Contribuições", "Bloco K", "Validação Prévia"], image: "/modulos/sped.jpeg" },
    { id: "report", icon: BarChart3, title: "Report", description: "Relatórios gerenciais, dashboards e indicadores de desempenho para tomada de decisão baseada em dados confiáveis.", features: ["Dashboards Gerenciais", "Indicadores KPI", "Relatórios Customizados", "Exportação de Dados"], image: "/modulos/report.jpeg" },
  ];

  const currentModule = modules[activeModule];

  return (
    <section id="modulos" className="py-16 sm:py-24 section-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="particles-bg" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Módulos do Sistema
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 sm:mb-6">
            ERP <span className="text-gradient-gold">KRP</span> Completo e Integrado
          </h2>
          <p className="text-sm sm:text-lg text-secondary-foreground/70">
            Todos os módulos trabalham de forma integrada, garantindo fluxo de informações
            preciso e dados confiáveis para a gestão da sua indústria.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-2"
          >
            {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeModule === index
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-secondary/50 text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <module.icon className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">{module.title}</span>
                {activeModule === index && <ChevronRight className="w-5 h-5 ml-auto" />}
              </button>
            ))}
          </motion.div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentModule.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10 overflow-hidden">
                  <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                    <img 
                      src={currentModule.image} 
                      alt={`Módulo ${currentModule.title}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <currentModule.icon className="w-8 h-8 text-primary" />
                      <h3 className="font-display text-2xl font-bold text-secondary-foreground">
                        {currentModule.title}
                      </h3>
                    </div>
                    <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
                      {currentModule.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {currentModule.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile - show image for each module */}
        <div className="lg:hidden space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card/10 backdrop-blur-sm rounded-xl border border-secondary-foreground/10 overflow-hidden"
            >
              {/* Module image on mobile */}
              <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                <img 
                  src={module.image} 
                  alt={`Módulo ${module.title}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <module.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <h3 className="font-display text-lg font-bold text-secondary-foreground">
                    {module.title}
                  </h3>
                </div>
                <p className="text-sm text-secondary-foreground/60 mb-3">
                  {module.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {module.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-1.5 text-xs text-secondary-foreground/70">
                      <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
