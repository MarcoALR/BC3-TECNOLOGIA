import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const WA_URL = "https://wa.me/5532992929822?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20JR%20Decorativos.";

export default function Index() {
  const newProducts = products.filter((p) => p.isNew);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Showroom JR Decorativos" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-4"
          >
            JR Decorativos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-6xl leading-tight text-foreground"
          >
            Mesas de Jantar e Móveis Planejados de{" "}
            <span className="text-gradient-gold">Alto Padrão</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground mt-6 text-lg font-body"
          >
            Fabricação própria em madeira maciça. Design exclusivo para sua casa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              Fale no WhatsApp
            </a>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ver Catálogo
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Novidades 2026 */}
      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Coleção</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Novidades 2026</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
            >
              Ver catálogo completo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Desde 2020</p>
          <h2 className="font-display text-3xl text-foreground mb-6">Tradição e Qualidade</h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Localizada em Ubá, polo moveleiro de Minas Gerais, a JR Decorativos transforma madeira nobre em peças exclusivas. 
            Cada mesa é projetada sob medida, unindo design contemporâneo à tradição artesanal mineira.
          </p>
          <Link
            to="/mesa-personalizada"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Criar Mesa Personalizada
          </Link>
        </div>
      </section>
    </div>
  );
}
