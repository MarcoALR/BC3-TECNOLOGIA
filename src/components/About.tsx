import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, Headphones, Target, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "16+", label: "Anos de Experiência", icon: Clock },
    { number: "100+", label: "Clientes Ativos", icon: Users },
    { number: "24/7", label: "Suporte Técnico", icon: Headphones },
    { number: "99%", label: "Satisfação", icon: Award },
  ];

  const differentials = [
    {
      icon: Target,
      title: "Foco no Segmento",
      description: "Especialistas exclusivos em cartonagem e papelão ondulado, entendemos as particularidades do seu negócio.",
    },
    {
      icon: TrendingUp,
      title: "Evolução Contínua",
      description: "Sistema em constante evolução, acompanhando as mudanças fiscais e tecnológicas do mercado.",
    },
    {
      icon: Headphones,
      title: "Suporte Humanizado",
      description: "Equipe técnica dedicada e acessível, pronta para resolver suas dúvidas com agilidade.",
    },
    {
      icon: Award,
      title: "Confiabilidade",
      description: "Base sólida de dados que garante segurança e precisão nas informações da sua empresa.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-lines opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sobre a BC3
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Desenvolvendo{" "}
            <span className="text-gradient-gold">Soluções Inteligentes</span>{" "}
            para a Indústria
          </h2>
          <p className="text-lg text-muted-foreground">
            A BC3 Tecnologia é especializada no desenvolvimento de software ERP industrial,
            com foco exclusivo em indústrias de cartonagem e papelão ondulado. Nossa missão
            é transformar dados em decisões estratégicas.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              O ERP KRP vai além do controle operacional
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O ERP KRP é um sistema completo e integrado que atende toda a operação industrial,
              unificando vendas, compras, produção, financeiro, fiscal, documentos eletrônicos
              e relatórios gerenciais em um único ambiente.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Mais do que um sistema de gestão, o KRP oferece uma base sólida de dados confiáveis
              para a gestão do negócio, permitindo análises avançadas e apoiando decisões mais
              seguras e precisas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fundada por <strong className="text-foreground">Jeison</strong> e{" "}
              <strong className="text-foreground">Jorge Eduardo</strong>, a BC3 Tecnologia
              combina expertise técnica com profundo conhecimento do setor industrial,
              garantindo soluções que realmente funcionam para sua empresa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {differentials.map((diff, index) => (
              <div
                key={diff.title}
                className="card-module group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <diff.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {diff.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {diff.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
