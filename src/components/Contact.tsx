import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, MapPin, Instagram, Youtube, Linkedin, Clock, Headphones, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const googleMapsRouteUrl = "https://www.google.com/maps/dir/?api=1&destination=Rua+Sumaúma,+56,+Ubá+-+MG,+36504-148";
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.444760548171!2d-42.9463519!3d-21.4117564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbb332f327328d1%3A0xf132bfd3ef3f7fde!2sRua%20Suma%C3%BAma%2C%2056%20-%20Suma%C3%BAma%2C%20Ub%C3%A1%20-%20MG%2C%2036504-148!5e0!3m2!1spt-BR!2sbr!4v1707164400000!5m2!1spt-BR!2sbr";

  const contactInfo = [
    { icon: Instagram, title: "Instagram", value: "@bc3tecnologia", link: "https://www.instagram.com/bc3tecnologia/" },
    { icon: Youtube, title: "YouTube", value: "BC3 Tecnologia", link: "https://www.youtube.com/@BC3Tecnologia" },
    { icon: Linkedin, title: "LinkedIn", value: "BC3 Tecnologia", link: "https://www.linkedin.com/company/bc3/" },
    { icon: Mail, title: "E-mail Suporte", value: "suporte@bc3.com.br", link: "mailto:suporte@bc3.com.br" },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24 section-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Canais de Atendimento
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4 sm:mb-6">
            Conecte-se com a <span className="text-gradient-gold">BC3 Tecnologia</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-6"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 sm:p-5 rounded-2xl bg-secondary/30 border border-secondary-foreground/10 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <info.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <h3 className="text-secondary-foreground font-bold text-xs sm:text-sm mb-1">{info.title}</h3>
                  <p className="text-secondary-foreground/50 text-[10px] sm:text-xs truncate">{info.value}</p>
                </a>
              ))}
            </div>

            <div className="flex-grow p-5 sm:p-8 rounded-2xl bg-secondary/30 border border-secondary-foreground/10 flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-secondary-foreground font-bold text-sm sm:text-base">Horário de Operação</h4>
                  <p className="text-secondary-foreground/60 text-xs sm:text-sm">Segunda a Sexta: 08h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/10">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-secondary-foreground font-bold text-xs sm:text-sm">Nossa Sede</h4>
                  <p className="text-secondary-foreground/60 text-[10px] sm:text-xs leading-relaxed">
                    Rua Sumaúma, 56, Bairro Sumaúma<br />
                    Ubá - MG | CEP 36504-148
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-secondary-foreground/10 relative h-[300px] sm:h-[400px] lg:h-auto group"
          >
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute bottom-4 right-4">
              <a 
                href={googleMapsRouteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold shadow-2xl hover:bg-bc3-gold-dark transition-all hover:scale-105"
              >
                Como Chegar <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-secondary-foreground">Agende uma demonstração</h3>
              <p className="text-secondary-foreground/60 text-sm">Veja o ERP KRP em ação na sua indústria.</p>
            </div>
          </div>
          <a
            href="https://wa.me/5532999851183?text=Olá! Gostaria de agendar uma demonstração do ERP KRP."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary whitespace-nowrap text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Demonstração
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
