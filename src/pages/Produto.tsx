import { useParams, Link } from "react-router-dom";
import { MessageCircle, ArrowLeft, Ruler, Layers, User } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { useState } from "react";

export default function Produto() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 text-center">
        <p className="text-muted-foreground">Produto não encontrado.</p>
        <Link to="/catalogo" className="text-primary hover:underline mt-4 inline-block">
          Voltar ao catálogo
        </Link>
      </div>
    );
  }

  const waMsg = encodeURIComponent(
    `Olá! Tenho interesse na ${product.name}. Gostaria de mais informações.`
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/catalogo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body mb-8">
          <ArrowLeft size={16} /> Voltar ao catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="relative overflow-hidden rounded-lg bg-secondary aspect-square">
              <img
                src={product.images[selectedImg]}
                alt={product.name}
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      i === selectedImg ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col justify-center">
            <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">{product.type}</p>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{product.name}</h1>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">{product.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                <Layers size={20} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-body">Material</p>
                  <p className="text-sm text-foreground font-body font-medium">{product.material}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                <Ruler size={20} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-body">Dimensões</p>
                  <p className="text-sm text-foreground font-body font-medium">{product.dimensions}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                <User size={20} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground font-body">Designer</p>
                  <p className="text-sm text-foreground font-body font-medium">{product.designer}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/5532992929822?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={24} />
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
