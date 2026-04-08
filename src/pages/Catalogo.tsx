import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products, types, materials } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Catalogo() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [materialFilter, setMaterialFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q);
      const matchType = !typeFilter || p.type === typeFilter;
      const matchMaterial = !materialFilter || p.material === materialFilter;
      return matchSearch && matchType && matchMaterial;
    });
  }, [search, typeFilter, materialFilter]);

  const hasActiveFilters = typeFilter || materialFilter;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Catálogo</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Nossas Mesas</h1>
        </div>

        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nome, tipo ou material..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Filter toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <SlidersHorizontal size={16} />
            Filtros
          </button>
          {hasActiveFilters && (
            <button
              onClick={() => {
                setTypeFilter("");
                setMaterialFilter("");
              }}
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-body"
            >
              <X size={14} /> Limpar
            </button>
          )}
        </div>

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Todos os tipos</option>
              {types.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
            <select
              value={materialFilter}
              onChange={(e) => setMaterialFilter(e.target.value)}
              className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Todos os materiais</option>
              {materials.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        )}

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-body text-lg mb-4">Não encontrou o que procura?</p>
            <Link
              to="/mesa-personalizada"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Criar Mesa Personalizada
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
