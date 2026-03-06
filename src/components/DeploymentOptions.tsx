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
import cloudRdp from "@/assets/cloud-rdp.png";

const DeploymentOptions = () => {
  return (
    <section
      id="implantacao"
      className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Escolha a Melhor Forma de Usar o{" "}
            <span className="text-yellow-400">ERP KRP</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Flexibilidade total: instale localmente na sua empresa ou acesse
            pela nuvem de qualquer lugar do mundo.
          </p>
        </motion.div>


        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* SISTEMA LOCAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-yellow-400 blur-xl opacity-20 rounded-2xl group-hover:opacity-40 transition" />

            <div className="relative bg-card border border-gray-800 rounded-2xl p-8 h-full flex flex-col">

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg">
                  <Server className="w-8 h-8 text-black" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Sistema Local
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Instalado na sua empresa
                  </p>
                </div>
              </div>


              {/* IMAGEM */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-muted/30">
                <img
                  src={sistemaLocal}
                  alt="Sistema Local BC3"
                  className="max-h-full object-contain scale-110"
                />

                <div className="absolute bottom-3 left-3 flex gap-2">
                  <img
                    src={backupIcon}
                    alt="Backup automático"
                    className="w-10 h-10 rounded-lg bg-white/90 p-1 shadow"
                  />
                </div>
              </div>


              {/* LISTA */}
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  { icon: HardDrive, text: "Dados armazenados no seu servidor" },
                  { icon: Shield, text: "Segurança total dos dados" },
                  { icon: RefreshCw, text: "Backup automático programado" },
                  { icon: Lock, text: "Controle completo do ambiente" },
                  { icon: Monitor, text: "Velocidade máxima na rede local" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-yellow-400" />
                    </div>

                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>


              {/* CAIXA */}
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-yellow-400">
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
            <div className="absolute -inset-1 bg-yellow-400 blur-xl opacity-20 rounded-2xl group-hover:opacity-40 transition" />

            <div className="relative bg-card border border-gray-800 rounded-2xl p-8 h-full flex flex-col">

              <div className="absolute -top-3 right-6">
                <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  ⭐ MAIS POPULAR
                </span>
              </div>

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg">
                  <Cloud className="w-8 h-8 text-black" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Sistema Cloud
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Acesse de qualquer lugar
                  </p>
                </div>
              </div>


              {/* ICONES */}
              <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-muted/30">
                <div className="flex gap-8 items-center">

                  <div className="flex flex-col items-center gap-1">
                    <Monitor className="w-10 h-10 text-yellow-400" />
                    <span className="text-xs text-gray-400">Desktop</span>
                  </div>

                  <Wifi className="w-6 h-6 text-yellow-400" />

                  <div className="flex flex-col items-center gap-1">
                    <Cloud className="w-10 h-10 text-yellow-400" />
                    <span className="text-xs text-gray-400">Cloud</span>
                  </div>

                  <Wifi className="w-6 h-6 text-yellow-400" />

                  <div className="flex flex-col items-center gap-1">
                    <Database className="w-10 h-10 text-yellow-400" />
                    <span className="text-xs text-gray-400">Servidor</span>
                  </div>

                </div>
              </div>


              {/* LISTA */}
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  { icon: Wifi, text: "Acesse de qualquer lugar via RDP" },
                  { icon: Shield, text: "Segurança com criptografia avançada" },
                  { icon: RefreshCw, text: "Backup automático em nuvem" },
                  { icon: Database, text: "Servidores de alta performance" },
                  { icon: CheckCircle2, text: "Sem necessidade de infraestrutura" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-yellow-400" />
                    </div>

                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4 text-center">
                <p className="text-sm font-semibold text-yellow-400">
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
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">

            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Por que escolher o ERP KRP da BC3 Tecnologia?
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed text-center mb-6">
              O ERP KRP é o sistema mais completo para indústrias de cartonagem e
              papelão ondulado do Brasil.
            </p>

            {/* KEYWORDS */}
            <div className="flex flex-wrap justify-center gap-3">
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
      className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-yellow-400 hover:border-yellow-400/60 hover:shadow-[0_0_8px_rgba(250,204,21,0.3)] transition-all"
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