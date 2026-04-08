import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

const regioes = [
  {
    regiao: "Zona da Mata — MG",
    representantes: [
      { nome: "Carlos Mendes", cidade: "Ubá", telefone: "(32) 99999-0001" },
      { nome: "Fernanda Lima", cidade: "Juiz de Fora", telefone: "(32) 99999-0002" },
    ],
  },
  {
    regiao: "Grande BH — MG",
    representantes: [
      { nome: "Roberto Alves", cidade: "Belo Horizonte", telefone: "(31) 99999-0003" },
    ],
  },
  {
    regiao: "Rio de Janeiro — RJ",
    representantes: [
      { nome: "Ana Paula Costa", cidade: "Rio de Janeiro", telefone: "(21) 99999-0004" },
    ],
  },
  {
    regiao: "São Paulo — SP",
    representantes: [
      { nome: "Marcos Oliveira", cidade: "São Paulo", telefone: "(11) 99999-0005" },
    ],
  },
];

export default function Representantes() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Onde Encontrar</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Representantes</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {regioes.map((r, i) => (
            <motion.div
              key={r.regiao}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary border border-border rounded-lg p-6"
            >
              <h3 className="font-display text-lg text-primary mb-4 flex items-center gap-2">
                <MapPin size={18} /> {r.regiao}
              </h3>
              <div className="flex flex-col gap-3">
                {r.representantes.map((rep) => (
                  <div key={rep.nome} className="flex items-center justify-between">
                    <div>
                      <p className="text-foreground font-body font-medium text-sm">{rep.nome}</p>
                      <p className="text-muted-foreground text-xs font-body">{rep.cidade}</p>
                    </div>
                    <a href={`tel:${rep.telefone}`} className="flex items-center gap-1 text-primary text-sm font-body hover:underline">
                      <Phone size={14} /> {rep.telefone}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
