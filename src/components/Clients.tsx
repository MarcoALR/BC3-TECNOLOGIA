import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-90px" });
  const clients = [
    { name: "Carpell Embalagens", logo: "/logos/carpell.jpeg" },
    { name: "Caixa 10", logo: "/logos/caixadez.jpeg" },
    { name: "L & C", logo: "/logos/lec.jpeg" },
    { name: "Ibelim", logo: "/logos/ibellim.jpeg" },
    { name: "Cartão Embalagens", logo: "/logos/cartao.jpeg" },
    { name: "D'Parma", logo: "/logos/dparma.jpeg" },
    { name: "GM Embalagens", logo: "/logos/gm.jpeg" },
    { name: "HD Embalagens", logo: "/logos/hd.jpeg" },
    { name: "InovaKraft", logo: "/logos/inovakraft.jpeg" },
    { name: "MinasPell", logo: "/logos/minaspell.jpeg" },
    { name: "JE Multitex", logo: "/logos/multitex.jpeg" },
    { name: "OBVI", logo: "/logos/obvi.jpeg" },
    { name: "Ondular", logo: "/logos/ondular.jpeg" },
    { name: "Papers", logo: "/logos/papers.jpeg" },
    { name: "Post_IT", logo: "/logos/postit.jpeg" },
    { name: "Prisma", logo: "/logos/prisma.jpeg" },
    { name: "Royal Box", logo: "/logos/royalbox.jpeg" },
    { name: "Vanolle", logo: "/logos/vanolle.jpeg" },
    { name: "Vyle", logo: "/logos/vyle.jpeg" },
    { name: "JR Decorativo", logo: "/logos/jrdecorativos.jpeg" },
    { name: "PreviatiPack", logo: "/logos/" },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clientes" className="py-16 sm:py-24 section-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-3 sm:px-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Clientes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 sm:mb-6">
            Empresas que <span className="text-gradient-gold">Confiam</span> na BC3
          </h2>
          <p className="text-sm sm:text-lg text-secondary-foreground/70">
            Indústrias de cartonagem e papelão ondulado que transformaram sua gestão
            com o ERP KRP.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bc3-industrial to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bc3-industrial to-transparent z-10" />

          {/* Row 1 */}
          <div className="flex overflow-hidden mb-4 sm:mb-6">
            <div className="flex animate-marquee" style={{ animationDuration: "20s" }}>
              {duplicatedClients.map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-3 w-36 sm:w-40 h-16 sm:h-18 rounded-lg bg-secondary/30 border border-secondary-foreground/10 flex items-center justify-center p-3"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-10 sm:max-h-12 max-w-28 sm:max-w-32 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const span = e.currentTarget.parentElement?.querySelector('span');
                      if (span) (span as HTMLElement).style.display = 'block';
                    }}
                  />
                  <span className="hidden text-secondary-foreground/40 text-xs font-medium text-center">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Reverse */}
          <div className="flex overflow-hidden">
            <div
              className="flex animate-marquee"
              style={{ animationDirection: "reverse", animationDuration: "20s" }}
            >
              {duplicatedClients.slice().reverse().map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 mx-2 sm:mx-3 w-36 sm:w-40 h-16 sm:h-18 rounded-lg bg-secondary/30 border border-secondary-foreground/10 flex items-center justify-center p-3"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-10 sm:max-h-12 max-w-28 sm:max-w-32 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const span = e.currentTarget.parentElement?.querySelector('span');
                      if (span) (span as HTMLElement).style.display = 'block';
                    }}
                  />
                  <span className="hidden text-secondary-foreground/40 text-xs font-medium text-center">
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
          className="container mx-auto px-3 sm:px-4 lg:px-8 mt-10 sm:mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">100+</div>
              <div className="text-xs sm:text-sm text-secondary-foreground/60">Empresas Atendidas</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">16+</div>
              <div className="text-xs sm:text-sm text-secondary-foreground/60">Anos no Mercado</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">99%</div>
              <div className="text-xs sm:text-sm text-secondary-foreground/60">Taxa de Retenção</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-secondary-foreground/60">Suporte Disponível</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
