import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Clock,
  Headphones,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+55 32 9985-1183",
      link: "https://wa.me/5532999851183?text=Olá! Gostaria de saber mais sobre o ERP KRP.",
      highlight: true,
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@bc3tecnologia",
      link: "https://www.instagram.com/bc3tecnologia/",
      highlight: false,
    },
    {
      icon: Youtube,
      title: "YouTube",
      value: "BC3 Tecnologia",
      link: "https://www.youtube.com/@BC3Tecnologia",
      highlight: false,
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 8h às 18h",
      link: null,
      highlight: false,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background */}
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
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fale com a <span className="text-gradient-gold">BC3 Tecnologia</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para apresentar o ERP KRP e mostrar como ele pode
            transformar a gestão da sua indústria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link || "#"}
                target={info.link ? "_blank" : undefined}
                rel={info.link ? "noopener noreferrer" : undefined}
                className={`group p-6 rounded-2xl border transition-all duration-300 ${
                  info.highlight
                    ? "bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/30"
                } ${info.link ? "cursor-pointer" : "cursor-default"}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    info.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {info.title}
                </h3>
                <p className="text-muted-foreground text-sm">{info.value}</p>
              </a>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-bc3-industrial to-bc3-gray-dark rounded-2xl p-8 lg:p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Solicite uma Demonstração
            </h3>
            <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">
              Nossa equipe está pronta para apresentar todas as funcionalidades
              do ERP KRP e como ele se adapta às necessidades da sua indústria.
            </p>
            <a
              href="https://wa.me/5532999851183?text=Olá! Gostaria de agendar uma demonstração do ERP KRP."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Demonstração
            </a>
            <p className="text-secondary-foreground/50 text-sm mt-6">
              Resposta em até 24 horas úteis
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Sócios Fundadores
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            <strong className="text-foreground">Jeison</strong> e{" "}
            <strong className="text-foreground">Jorge Eduardo</strong> lideram a BC3 Tecnologia
            com expertise técnica e profundo conhecimento do setor industrial, garantindo
            soluções que realmente funcionam para sua empresa.
          </p>
          <p className="text-muted-foreground">
            Nossa equipe de suporte técnico é parte essencial da relação com o cliente,
            oferecendo atendimento humanizado e especializado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
