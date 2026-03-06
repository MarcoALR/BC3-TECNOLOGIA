import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ShoppingCart,
  Package,
  Factory,
  DollarSign,
  FileText,
  FileCheck,
  Truck,
  Database,
  BarChart3,
  ChevronRight,
  Maximize
} from "lucide-react";

const Modules = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const handleChange = (e: any) => {
      if (typeof e.detail === "number") setActiveModule(e.detail);
    };

    window.addEventListener("changeModule", handleChange);

    return () => window.removeEventListener("changeModule", handleChange);
  }, []);

  const openFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const modules = [
    {
      id: "comercial",
      icon: ShoppingCart,
      title: "Comercial",
      description:
        "Gestão completa do ciclo de vendas: orçamentos, pedidos, faturamento e acompanhamento de clientes.",
      features: [
        "Orçamentos e Pedidos",
        "Emissão de NF-e",
        "Gestão de Clientes",
        "Comissões e Metas"
      ],
      video: "/modulos/comercial.mp4"
    },
    {
      id: "compras",
      icon: Package,
      title: "Compras",
      description:
        "Controle de requisições, cotações e pedidos de compra com gestão completa de fornecedores.",
      features: [
        "Requisições de Compra",
        "Entradas de NF",
        "Controle de Recebimento",
        "Gestão de Fornecedores"
      ],
      video: "/modulos/compras.mp4"
    },
    {
      id: "producao",
      icon: Factory,
      title: "Produção",
      description:
        "Planejamento e controle da produção com ordens de fabricação e rastreabilidade completa.",
      features: [
        "Ordens de Produção",
        "Apontamento de Produção",
        "PCP Integrado",
        "Fluxo por Máquina"
      ],
      video: "/modulos/producao.mp4"
    },
    {
      id: "financeiro",
      icon: DollarSign,
      title: "Financeiro",
      description:
        "Contas a pagar, contas a receber e fluxo de caixa integrado com o ERP.",
      features: [
        "Contas a Pagar/Receber",
        "Fluxo de Caixa",
        "Conciliação Bancária",
        "Relatórios Financeiros"
      ],
      video: "/modulos/financeiro.mp4"
    },
    {
      id: "fiscal",
      icon: FileText,
      title: "Fiscal",
      description:
        "Escrituração fiscal completa com atualização constante da legislação.",
      features: [
        "Relatório do Inventário",
        "Escrituração Fiscal",
        "Apuração de Impostos",
        "Atualizações Legais"
      ],
      video: "/modulos/fiscal.mp4"
    },
    {
      id: "bc3docs",
      icon: FileCheck,
      title: "BC3Docs",
      description:
        "Automação fiscal inteligente com captura automática de documentos.",
      features: [
        "Captura de XMLs",
        "Validação Automática",
        "Manifestação de Destinatário",
        "Arquivo Centralizado"
      ],
      video: "/modulos/docs.mp4"
    },
    {
      id: "mdfe",
      icon: Truck,
      title: "MDF-e",
      description:
        "Emissão e gestão de Manifesto Eletrônico de Documentos Fiscais.",
      features: [
        "Emissão MDF-e",
        "Encerramento Automático",
        "Integração Logística",
        "Controle de Viagens"
      ],
      video: "/modulos/mdfe.mp4"
    },
    {
      id: "sped",
      icon: Database,
      title: "SPED",
      description:
        "Geração automatizada de todos os arquivos SPED fiscais.",
      features: [
        "EFD ICMS/IPI",
        "EFD Contribuições",
        "Bloco K",
        "Validação Prévia"
      ],
      video: "/modulos/sped.mp4"
    },
    {
      id: "report",
      icon: BarChart3,
      title: "Report",
      description:
        "Relatórios gerenciais e dashboards para tomada de decisão.",
      features: [
        "Dashboards Gerenciais",
        "Indicadores KPI",
        "Relatórios Customizados",
        "Exportação de Dados"
      ],
      video: "/modulos/report.mp4"
    }
  ];

  const currentModule = modules[activeModule];

  return (
    <section
      id="modulos"
      className="py-16 sm:py-24 section-dark relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">

        <div className="hidden lg:grid lg:grid-cols-12 gap-8">

          {/* MENU */}
          <div className="lg:col-span-4 space-y-2">
            {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                  activeModule === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50"
                }`}
              >
                <module.icon className="w-6 h-6" />
                <span>{module.title}</span>
                {activeModule === index && (
                  <ChevronRight className="ml-auto w-5 h-5" />
                )}
              </button>
            ))}
          </div>

          {/* VIDEO */}
          <div className="lg:col-span-8">

            <AnimatePresence mode="wait">

              <motion.div
                key={currentModule.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >

                <div className="bg-card/10 rounded-2xl border border-secondary-foreground/10 overflow-hidden">

                  <div className="aspect-video relative group">

                    <video
                      ref={videoRef}
                      src={currentModule.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover"
                    />

                    {/* BOTÃO FULLSCREEN */}
                    <button
                      onClick={openFullscreen}
                      className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition"
                    >
                      <Maximize className="w-5 h-5 text-white" />
                    </button>

                  </div>

                  <div className="p-8">

                    <div className="flex items-center gap-3 mb-4">
                      <currentModule.icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">
                        {currentModule.title}
                      </h3>
                    </div>

                    <p className="mb-6">
                      {currentModule.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">

                      {currentModule.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
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

      </div>
    </section>
  );
};

export default Modules;