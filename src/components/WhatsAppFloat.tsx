import { MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/5532992929822?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20JR%20Decorativos.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold shadow-lg hover:scale-110 transition-transform glow-gold"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={28} className="text-primary-foreground" />
    </a>
  );
}
