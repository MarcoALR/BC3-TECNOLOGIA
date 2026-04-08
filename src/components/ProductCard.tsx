import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/produto/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-secondary aspect-[4/3]">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-body font-semibold uppercase tracking-widest bg-gradient-gold text-primary-foreground rounded-sm">
              Novo
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-3">
          <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{product.material} · {product.type}</p>
        </div>
      </Link>
    </motion.div>
  );
}
