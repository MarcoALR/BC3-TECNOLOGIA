import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Link2, Zap, TrendingUp, ArrowRight, ShoppingBag } from "lucide-react";

const Integrations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const integrations = [
    {
      name: "Zoho Analytics",
      description:
        "Transforme os dados do ERP KRP em análises avançadas, dashboards gerenciais e indicadores estratégicos. Integração oficial que proporciona visão clara, centralizada e inteligente das informações.",
      features: [
        "Dashboards Gerenciais",
        "Indicadores Estratégicos",
        "Análises Avançadas",
        "Relatórios Automatizados",
        "Visão Centralizada",
        "Tomada de Deicão Inteligente",
      ],
      // LOGO ZOHO: Aumentada e centralizada
      logo: "/logos/zoho.jpeg", 
      icon: BarChart3,
      highlight: true,
    },
    {
      name: "Bling",
      description:
        "Comunicação entre sistemas, automação de processos comerciais e fiscais, maior eficiência operacional. Integração que conecta o ERP KRP com marketplaces e e-commerce.",
      features: [
        "Sincronização de Produtos",
        "Integração com Marketplaces",
        "Automação Comercial",
        "Processos Fiscais",
        "E-commerce Integrado",
        "Eficiência Operacional",
      ],
      // LOGO BLING: Aumentada para ocupar melhor o espaço
      logo: "/logos/bling.jpeg",
      icon: ShoppingBag,
      highlight: false,
    },
  ];

  const benefits = [
    {
      icon: Link2,
      title: "Dados Conectados",
      description: "Informações fluem entre sistemas sem retrabalho manual",
    },
    {
      icon: Zap,
      title: "Automação Total",
      description: "Processos automatizados que economizam tempo e reduzem erros",
    },
    {
      icon: TrendingUp,
      title: "Decisões Precisas",
      description: "Base de dados confiável para planejamento estratégico",
    },
  ];

  return (
    <section id="integracoes" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-lines opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Integrações
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Conecte o KRP com{" "}
            <span className="text-gradient-gold">Parceiros Tecnológicos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Amplie as capacidades do seu ERP com integrações que potencializam
            análises, automação e eficiência operacional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden border ${
                integration.highlight
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent shadow-gold"
                  : "border-border bg-card"
              }`}
            >
              {integration.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-bc3-gold-dark" />
              )}

              <div className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  {/* Container da Logo aumentado para w-24 h-24 */}
                  <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/5">
                    {integration.logo ? (
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="w-full h-full object-contain" // Removido p-2 para a logo ocupar mais espaço
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <integration.icon 
                      className={`w-10 h-10 text-primary ${integration.logo ? 'hidden' : ''}`} 
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {integration.name}
                    </h3>
                    {integration.highlight && (
                      <span className="text-xs font-medium text-primary">
                        Parceiro Tecnológico
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {integration.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {integration.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            A combinação entre o ERP KRP e suas integrações proporciona visão clara,
            centralizada e inteligente das informações, eliminando retrabalho e
            melhorando o planejamento estratégico.
          </p>
          <a
            href="https://wa.me/5532999851183?text=Olá! Gostaria de saber mais sobre as integrações do ERP KRP."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            Saiba mais sobre integrações
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;