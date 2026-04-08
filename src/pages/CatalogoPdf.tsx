import { FileDown, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/5532992929822?text=Olá!%20Gostaria%20de%20receber%20o%20catálogo%20completo%20em%20PDF.";

export default function CatalogoPdf() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Download</p>
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-6">Catálogo PDF</h1>
        <p className="text-muted-foreground font-body mb-8">
          Baixe nosso catálogo completo ou solicite via WhatsApp para receber a versão mais atualizada.
        </p>

        <div className="bg-secondary rounded-lg p-8 border border-border mb-8">
          <div className="flex items-center justify-center h-64 text-muted-foreground font-body">
            <p>Adicione seu PDF aqui — Visualizador embutido</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-body font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
            <FileDown size={18} />
            Baixar Catálogo
          </button>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} />
            Solicitar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
