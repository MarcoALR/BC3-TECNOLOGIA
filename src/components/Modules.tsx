import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ShoppingCart,
  Package,
  Factory,
  DollarSign,
  FileText,
  FileCheck,
  Truck,
  Database,
  Settings,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const Modules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      id: "comercial",
      icon: ShoppingCart,
      title: "Comercial",
      description:
        "Gestão completa do ciclo de vendas: orçamentos, pedidos, faturamento e acompanhamento de clientes. Controle de comissões e metas da equipe comercial.",
      features: ["Orçamentos e Pedidos", "Faturamento Automático", "Gestão de Clientes", "Comissões e Metas"],
      // TODO: Inserir imagem do módulo Comercial aqui
      // <img src="/images/modulos/comercial.png" alt="Módulo Comercial" />
      imagePlaceholder: "Screenshot do Módulo Comercial",
    },
    {
      id: "compras",
      icon: Package,
      title: "Compras",
      description:
        "Controle de requisições, cotações, pedidos de compra e recebimento de materiais. Gestão de fornecedores e análise de custos.",
      features: ["Requisições de Compra", "Cotações Automáticas", "Controle de Recebimento", "Gestão de Fornecedores"],
      // TODO: Inserir imagem do módulo Compras aqui
      // <img src="/images/modulos/compras.png" alt="Módulo Compras" />
      imagePlaceholder: "Screenshot do Módulo Compras",
    },
    {
      id: "producao",
      icon: Factory,
      title: "Produção",
      description:
        "Planejamento e controle da produção, ordens de fabricação, apontamentos e rastreabilidade completa do processo produtivo industrial.",
      features: ["Ordens de Produção", "Apontamento de Produção", "PCP Integrado", "Rastreabilidade"],
      // TODO: Inserir imagem do módulo Produção aqui
      // <img src="/images/modulos/producao.png" alt="Módulo Produção" />
      imagePlaceholder: "Screenshot do Módulo Produção",
    },
    {
      id: "financeiro",
      icon: DollarSign,
      title: "Financeiro",
      description:
        "Contas a pagar, contas a receber, fluxo de caixa, conciliação bancária e gestão completa das finanças da empresa.",
      features: ["Contas a Pagar/Receber", "Fluxo de Caixa", "Conciliação Bancária", "Relatórios Financeiros"],
      // TODO: Inserir imagem do módulo Financeiro aqui
      // <img src="/images/modulos/financeiro.png" alt="Módulo Financeiro" />
      imagePlaceholder: "Screenshot do Módulo Financeiro",
    },
    {
      id: "fiscal",
      icon: FileText,
      title: "Fiscal",
      description:
        "Emissão de NF-e, NFC-e, CT-e com validação automática. Escrituração fiscal completa e atualização constante da legislação.",
      features: ["Emissão NF-e/NFC-e", "Escrituração Fiscal", "Apuração de Impostos", "Atualizações Legais"],
      // TODO: Inserir imagem do módulo Fiscal aqui
      // <img src="/images/modulos/fiscal.png" alt="Módulo Fiscal" />
      imagePlaceholder: "Screenshot do Módulo Fiscal",
    },
    {
      id: "bcdocs",
      icon: FileCheck,
      title: "BCDocs",
      description:
        "Automação fiscal inteligente: captura automática de documentos, validação de XMLs e integração com sistemas fiscais.",
      features: ["Captura de XMLs", "Validação Automática", "Manifestação de Destinatário", "Arquivo Centralizado"],
      // TODO: Inserir imagem do módulo BCDocs aqui
      // <img src="/images/modulos/bcdocs.png" alt="Módulo BCDocs" />
      imagePlaceholder: "Screenshot do Módulo BCDocs",
    },
    {
      id: "mdfe",
      icon: Truck,
      title: "MDF-e",
      description:
        "Emissão e gestão de Manifesto Eletrônico de Documentos Fiscais para operações de transporte interestadual e intermunicipal.",
      features: ["Emissão MDF-e", "Encerramento Automático", "Integração Logística", "Controle de Viagens"],
      // TODO: Inserir imagem do módulo MDF-e aqui
      // <img src="/images/modulos/mdfe.png" alt="Módulo MDF-e" />
      imagePlaceholder: "Screenshot do Módulo MDF-e",
    },
    {
      id: "sped",
      icon: Database,
      title: "SPED",
      description:
        "Geração automatizada de todos os arquivos SPED: EFD ICMS/IPI, EFD Contribuições, ECD, ECF e Bloco K.",
      features: ["EFD ICMS/IPI", "EFD Contribuições", "Bloco K", "Validação Prévia"],
      // TODO: Inserir imagem do módulo SPED aqui
      // <img src="/images/modulos/sped.png" alt="Módulo SPED" />
      imagePlaceholder: "Screenshot do Módulo SPED",
    },
    {
      id: "config",
      icon: Settings,
      title: "Configuração Local",
      description:
        "Personalização e parametrização do sistema conforme as necessidades específicas da sua empresa e processos industriais.",
      features: ["Parâmetros do Sistema", "Configuração de Usuários", "Permissões de Acesso", "Backup e Segurança"],
      // TODO: Inserir imagem do módulo Configuração aqui
      // <img src="/images/modulos/config.png" alt="Módulo Configuração" />
      imagePlaceholder: "Screenshot do Módulo Configuração",
    },
    {
      id: "report",
      icon: BarChart3,
      title: "Report",
      description:
        "Relatórios gerenciais, dashboards e indicadores de desempenho para tomada de decisão baseada em dados confiáveis.",
      features: ["Dashboards Gerenciais", "Indicadores KPI", "Relatórios Customizados", "Exportação de Dados"],
      // TODO: Inserir imagem do módulo Report aqui
      // <img src="/images/modulos/report.png" alt="Módulo Report" />
      imagePlaceholder: "Screenshot do Módulo Report",
    },
  ];

  const currentModule = modules[activeModule];

  return (
    <section id="modulos" className="py-24 section-dark relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="particles-bg" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Módulos do Sistema
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            ERP <span className="text-gradient-gold">KRP</span> Completo e Integrado
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Todos os módulos trabalham de forma integrada, garantindo fluxo de informações
            preciso e dados confiáveis para a gestão da sua indústria.
          </p>
        </motion.div>

        {/* Modules Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Module List */}
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
                {activeModule === index && (
                  <ChevronRight className="w-5 h-5 ml-auto" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Module Detail */}
          <motion.div
            key={currentModule.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10 overflow-hidden">
              {/* Image Placeholder */}
              <div className="aspect-video bg-secondary/30 flex items-center justify-center border-b border-secondary-foreground/10">
                {/* 
                  TODO: Inserir imagem/screenshot real do módulo aqui
                  Substituir este placeholder pela imagem correspondente:
                  <img 
                    src={`/images/modulos/${currentModule.id}.png`} 
                    alt={`Módulo ${currentModule.title}`}
                    className="w-full h-full object-cover"
                  />
                */}
                <div className="text-center p-8">
                  <currentModule.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-secondary-foreground/50 text-sm">
                    {currentModule.imagePlaceholder}
                  </p>
                  <p className="text-secondary-foreground/30 text-xs mt-2">
                    Imagem do módulo será inserida aqui
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
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
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-secondary-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modules Grid - Mobile */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card/10 backdrop-blur-sm rounded-xl border border-secondary-foreground/10 p-6"
            >
              <module.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-secondary-foreground mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-secondary-foreground/60 line-clamp-3">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
