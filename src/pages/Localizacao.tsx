import { MapPin, ExternalLink } from "lucide-react";

const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.0!2d-42.0967!3d-21.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzAwLjAiUyA0MsKwMDUnNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1";
const MAPS_LINK = "https://www.google.com/maps/search/Av.+Olegário+Maciel,+2165+-+Ponte+Preta,+Ubá+-+MG,+36503-110";

export default function Localizacao() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm mb-2">Visite-nos</p>
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Localização</h1>
        </div>

        <div className="bg-secondary border border-border rounded-lg overflow-hidden mb-8">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização JR Decorativos"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-secondary border border-border rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4 sm:mb-0">
            <MapPin size={20} className="text-primary mt-1" />
            <div>
              <p className="text-foreground font-body font-medium">JR Decorativos</p>
              <p className="text-muted-foreground text-sm font-body">
                Av. Olegário Maciel, 2165 Fundos — Ponte Preta, Ubá/MG — CEP 36503-110
              </p>
            </div>
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-gold text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <ExternalLink size={16} />
            Abrir no Maps
          </a>
        </div>
      </div>
    </div>
  );
}
