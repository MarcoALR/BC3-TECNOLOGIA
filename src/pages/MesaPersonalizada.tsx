import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function MesaPersonalizada() {
  const [form, setForm] = useState({
    nome: "", telefone: "", email: "", cidade: "",
    tipo: "Redonda", tamanho: "", material: "", descricao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá, quero uma mesa personalizada:\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nEmail: ${form.email}\nCidade: ${form.cidade}\nTipo: ${form.tipo}\nTamanho: ${form.tamanho}\nMaterial: ${form.material}\nDescrição: ${form.descricao}`
    );
    window.open(`https://wa.me/5532992929822?text=${msg}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Exclusividade</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Mesa Personalizada</h1>
          <p className="text-muted-foreground font-body mt-3">
            Descreva a mesa dos seus sonhos. Você também pode enviar fotos de referência pelo WhatsApp.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} required className={inputClass} />
            <input name="telefone" placeholder="Telefone / WhatsApp" value={form.telefone} onChange={handleChange} required className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} className={inputClass} />
            <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} required className={inputClass} />
          </div>
          <select name="tipo" value={form.tipo} onChange={handleChange} className={inputClass}>
            <option>Redonda</option>
            <option>Oval</option>
            <option>Retangular</option>
            <option>Outra</option>
          </select>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="tamanho" placeholder="Tamanho desejado" value={form.tamanho} onChange={handleChange} className={inputClass} />
            <input name="material" placeholder="Material desejado" value={form.material} onChange={handleChange} className={inputClass} />
          </div>
          <textarea name="descricao" placeholder="Descreva sua mesa ideal..." rows={4} value={form.descricao} onChange={handleChange} className={inputClass} />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-bold text-lg rounded-lg hover:opacity-90 transition-opacity mt-4"
          >
            <MessageCircle size={22} />
            Enviar para WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
