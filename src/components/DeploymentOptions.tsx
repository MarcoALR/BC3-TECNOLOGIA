import { motion } from "framer-motion";
import {
  Shield,
  Server,
  Cloud,
  Monitor,
  HardDrive,
  Lock,
  RefreshCw,
  Wifi,
  Database,
  CheckCircle2,
} from "lucide-react";

import backupIcon from "@/assets/backup-icon.png";
import sistemaLocal from "@/assets/sistema-local.jpeg";

const DeploymentOptions = () => {
  return (
    <section
      id="implantacao"
      className="py-16 sm:py-20 section-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-3 sm:px-4">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-foreground mb-3 sm:mb-4">
            Escolha a Melhor Forma de Usar o{" "}
            <span className="text-gradient-gold">ERP KRP</span>
          </h2>

          <p className="text-secondary-foreground/60 text-sm sm:text-lg max-w-2xl mx-auto">
            Flexibilidade total: instale localmente na sua empresa ou acesse
            pela nuvem de qualquer lugar do mundo.
          </p>
        </motion.div>


        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* SISTEMA LOCAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-primary blur-xl opacity-20 rounded-2xl group-hover:opacity-40 transition" />

            <div className="relative bg-card border border-border rounded-2xl p-5 sm:p-8 h-full flex flex-col">

              {/* HEADER */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                  <Server className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-foreground">
                    Sistema Local
                  </h3>
                  <p className="text-secondary-foreground/60 text-xs sm:text-sm">
                    Instalado na sua empresa
                  </p>
                </div>
              </div>


              {/* IMAGEM */}
              <div className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-4 sm:mb-6 flex items-center justify-center bg-muted/30">
                <img
                  src={sistemaLocal}
                  alt="Sistema Local BC3"
                  className="max-h-full object-contain scale-110"
                  loading="lazy"
                />

                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 flex gap-2">
                  <img
                    src={backupIcon}
                    alt="Backup automático"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary-foreground/90 p-1 shadow"
                    loading="lazy"
                  />
                </div>
              </div>


              {/* LISTA */}
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                {[
                  { icon: HardDrive, text: "Dados armazenados no seu servidor" },
                  { icon: Shield, text: "Segurança total dos dados" },
                  { icon: RefreshCw, text: "Backup automático programado" },
                  { icon: Lock, text: "Controle completo do ambiente" },
                  { icon: Monitor, text: "Velocidade máxima na rede local" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-secondary-foreground/60">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </div>

                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>


              {/* CAIXA */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  🖥️ Ideal para fábricas com infraestrutura própria
                </p>
              </div>

            </div>
          </motion.div>


          {/* CLOUD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-primary blur-xl opacity-20 rounded-2xl group-hover:opacity-40 transition" />

            <div className="relative bg-card border border-border rounded-2xl p-5 sm:p-8 h-full flex flex-col">

              <div className="absolute -top-3 right-4 sm:right-6">
                <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg">
                  ⭐ MAIS POPULAR
                </span>
              </div>

              {/* HEADER */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                  <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-foreground">
                    Sistema Cloud
                  </h3>
                  <p className="text-secondary-foreground/60 text-xs sm:text-sm">
                    Acesse de qualquer lugar
                  </p>
                </div>
              </div>


              {/* ICONES */}
              <div className="relative w-full h-32 sm:h-44 rounded-xl overflow-hidden mb-4 sm:mb-6 flex items-center justify-center bg-muted/30">
                <div className="flex gap-4 sm:gap-8 items-center">

                  <div className="flex flex-col items-center gap-1">
                    <Monitor className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                    <span className="text-[10px] sm:text-xs text-secondary-foreground/60">Desktop</span>
                  </div>

                  <Wifi className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />

                  <div className="flex flex-col items-center gap-1">
                    <Cloud className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                    <span className="text-[10px] sm:text-xs text-secondary-foreground/60">Cloud</span>
                  </div>

                  <Wifi className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />

                  <div className="flex flex-col items-center gap-1">
                    <Database className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                    <span className="text-[10px] sm:text-xs text-secondary-foreground/60">Servidor</span>
                  </div>

                </div>
              </div>


              {/* LISTA */}
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                {[
                  { icon: Wifi, text: "Acesse de qualquer lugar via RDP" },
                  { icon: Shield, text: "Segurança com criptografia avançada" },
                  { icon: RefreshCw, text: "Backup automático em nuvem" },
                  { icon: Database, text: "Servidores de alta performance" },
                  { icon: CheckCircle2, text: "Sem necessidade de infraestrutura" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-secondary-foreground/60">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </div>

                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 sm:p-4 text-center">
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  ☁️ Ideal para acesso remoto e múltiplas filiais
                </p>
              </div>

            </div>
          </motion.div>

        </div>


        {/* POR QUE ESCOLHER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 backdrop-blur-sm">

            <h3 className="text-lg sm:text-xl font-bold text-secondary-foreground mb-3 sm:mb-4 text-center">
              Por que escolher o ERP KRP da BC3 Tecnologia?
            </h3>

            <p className="text-secondary-foreground/60 text-xs sm:text-sm leading-relaxed text-center mb-4 sm:mb-6">
              O ERP KRP é o sistema mais completo para indústrias de cartonagem e
              papelão ondulado do Brasil.
            </p>

            {/* KEYWORDS */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "ERP local cartonagem",
                "ERP nuvem cartonagem",
                "sistema cloud papelão ondulado",
                "acesso remoto ERP industrial",
                "RDP cartonagem",
                "backup automático ERP",
                "segurança dados cartonagem",
                "servidor nuvem cartonagem",
                "ERP online papelão",
                "sistema local fábrica caixas",
                "cloud computing cartonagem",
                "ERP SaaS embalagens",
                "sistema remoto cartonagem",
                "infraestrutura cloud ERP",
                "servidor dedicado cartonagem",
                "ERP multi-filial cartonagem",
                "acesso web ERP cartonagem",
                "sistema offline cartonagem",
                "backup nuvem papelão ondulado",
                "ERP híbrido cartonagem",
                "desktop remoto ERP",
                "sistema escalável cartonagem",
                "ERP cartonagem alta disponibilidade",
                "segurança criptografia ERP",
                "armazenamento nuvem cartonagem",
              ].map((kw, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-border text-primary hover:border-primary/60 hover:shadow-gold transition-all"
                >
                  {kw}
                </span>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DeploymentOptions;
