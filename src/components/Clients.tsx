import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // TODO: Adicionar logos dos clientes aqui
  // Substitua os placeholders abaixo pelas logos reais das empresas
  // Exemplo: { name: "Empresa X", logo: "/images/clientes/empresa-x.png" }
  const clients = [
    { name: "Cliente 1", logo: null },
    { name: "Cliente 2", logo: null },
    { name: "Cliente 3", logo: null },
    { name: "Cliente 4", logo: null },
    { name: "Cliente 5", logo: null },
    { name: "Cliente 6", logo: null },
    { name: "Cliente 7", logo: null },
    { name: "Cliente 8", logo: null },
    { name: "Cliente 9", logo: null },
    { name: "Cliente 10", logo: null },
    { name: "Cliente 11", logo: null },
    { name: "Cliente 12", logo: null },
  ];

  // Duplicate array for seamless marquee
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clientes" className="py-24 section-dark relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 px-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Clientes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Empresas que <span className="text-gradient-gold">Confiam</span> na BC3
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Indústrias de cartonagem e papelão ondulado que transformaram sua gestão
            com o ERP KRP.
          </p>
        </motion.div>

        {/* Marquee Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bc3-industrial to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bc3-industrial to-transparent z-10" />

          {/* First Row */}
          <div className="flex overflow-hidden mb-6">
            <div className="flex animate-marquee">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-4 w-48 h-24 rounded-xl bg-secondary/30 border border-secondary-foreground/10 flex items-center justify-center"
                >
                  {/* 
                    TODO: Inserir logo do cliente aqui
                    Quando tiver a logo, substitua o placeholder:
                    {client.logo ? (
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-h-12 max-w-32 object-contain opacity-60 hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <span className="text-secondary-foreground/40 text-sm font-medium">
                        {client.name}
                      </span>
                    )}
                  */}
                  <span className="text-secondary-foreground/40 text-sm font-medium">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="flex overflow-hidden">
            <div
              className="flex animate-marquee"
              style={{ animationDirection: "reverse" }}
            >
              {duplicatedClients.slice().reverse().map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-4 w-48 h-24 rounded-xl bg-secondary/30 border border-secondary-foreground/10 flex items-center justify-center"
                >
                  {/* 
                    TODO: Inserir logo do cliente aqui
                    Mesmo padrão do row1
                  */}
                  <span className="text-secondary-foreground/40 text-sm font-medium">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container mx-auto px-4 lg:px-8 mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                100+
              </div>
              <div className="text-sm text-secondary-foreground/60">Empresas Atendidas</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                15+
              </div>
              <div className="text-sm text-secondary-foreground/60">Anos no Mercado</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                99%
              </div>
              <div className="text-sm text-secondary-foreground/60">Taxa de Retenção</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                24/7
              </div>
              <div className="text-sm text-secondary-foreground/60">Suporte Disponível</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
