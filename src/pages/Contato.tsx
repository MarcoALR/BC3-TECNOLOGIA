import { useState } from "react";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";

const WA_URL = "https://wa.me/5532992929822";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Contato via site:\n\nNome: ${form.nome}\nEmail: ${form.email}\nMensagem: ${form.mensagem}`);
    window.open(`${WA_URL}?text=${msg}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Fale Conosco</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Contato</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-secondary border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-gold">
                <MessageCircle size={22} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-foreground font-body font-medium">WhatsApp</p>
                <p className="text-primary text-sm font-body">(32) 99292-9822</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 bg-secondary border border-border rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-body font-medium">Endereço</p>
                <p className="text-muted-foreground text-sm font-body">Av. Olegário Maciel, 2165 — Ubá/MG</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-secondary border border-border rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-muted">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-body font-medium">Telefone</p>
                <p className="text-muted-foreground text-sm font-body">(32) 99292-9822</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="nome" placeholder="Seu nome" value={form.nome} onChange={handleChange} required className={inputClass} />
            <input name="email" type="email" placeholder="Seu e-mail" value={form.email} onChange={handleChange} className={inputClass} />
            <textarea name="mensagem" placeholder="Sua mensagem..." rows={5} value={form.mensagem} onChange={handleChange} required className={inputClass} />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-gold text-primary-foreground font-body font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
