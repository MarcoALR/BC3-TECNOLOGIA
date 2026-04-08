import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl text-primary mb-3">JR Decorativos</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Mesas de jantar e móveis planejados de alto padrão. Fabricação própria em Ubá - MG.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm text-foreground mb-3 uppercase tracking-widest">Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/catalogo", label: "Catálogo" },
              { to: "/mesa-personalizada", label: "Mesa Personalizada" },
              { to: "/representantes", label: "Representantes" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm text-foreground mb-3 uppercase tracking-widest">Contato</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Av. Olegário Maciel, 2165 - Ubá/MG
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              (32) 99292-9822
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} JR Decorativos — CNPJ 38.231.587/0001-12. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
