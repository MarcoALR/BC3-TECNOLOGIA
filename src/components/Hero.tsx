import { motion } from "framer-motion";
import { ArrowRight, Play, BarChart3, Cog, Shield, ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-bg.mp4";
import iconeBc3 from "@/assets/iconebc3.png";

import zohoLogo from "/logos/zoho.jpeg"; 
import blingLogo from "/logos/bling.jpeg";

const Hero = () => {
  const features = [
    { icon: BarChart3, text: "Gestão Integrada" },
    { icon: Cog, text: "Automação Industrial" },
    { icon: Shield, text: "Dados Conectados" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-bc3-industrial/95 via-bc3-industrial/90 to-bc3-gray-dark/95" />
      </div>

      <div className="particles-bg" />
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          ><br />
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                ERP Especializado para Indústria de Cartonagem
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-4 sm:mb-6">
              Transforme sua{" "}
              <span className="text-gradient-gold">Indústria</span> com o{" "}
              <span className="text-gradient-gold">ERP KRP</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-secondary-foreground/70 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Sistema completo e integrado para indústrias de cartonagem e papelão ondulado.
              Unificamos vendas, compras, produção, financeiro e fiscal em um único ambiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <a
                href="https://wa.me/5532999851183?text=Olá! Gostaria de conhecer o ERP KRP."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary text-sm sm:text-base"
              >
                Solicitar Demonstração
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@BC3Tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-secondary text-sm sm:text-base"
              >
                <Play className="w-5 h-5" />
                Ver no YouTube
              </a>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary/50 rounded-lg border border-secondary-foreground/10"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-secondary-foreground/80">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-150" />
              
              <motion.img
                src={iconeBc3}
                alt="BC3 Tecnologia"
                className="relative w-80 h-80 object-contain drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-white p-3 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={zohoLogo} alt="Zoho Analytics" className="w-full h-full object-contain" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-8 w-20 h-20 bg-white p-3 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img src={blingLogo} alt="Bling ERP" className="w-full h-full object-contain" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[3px] text-secondary-foreground/40 font-medium mb-1">Ver mais</span>
        <motion.div className="flex flex-col items-center">
          <ChevronDown className="w-5 h-5 text-primary" />
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-primary -mt-2.5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
