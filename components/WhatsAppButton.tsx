"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "33600000000"; // à remplacer par le vrai numéro
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour, je souhaite obtenir des informations sur vos moteurs industriels."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bulle */}
      {tooltip && (
        <div className="flex items-center gap-2 bg-white text-slate-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 animate-fade-in-up max-w-[220px]">
          <span>Écrivez-nous sur WhatsApp !</span>
          <button
            onClick={() => setTooltip(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Bouton principal */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        {/* Anneaux de pulse doux */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-soft-pulse" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-soft-pulse-delay" />

        {/* Icône WhatsApp SVG officielle */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 relative z-10"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.797-1.797A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.9 0-3.68-.533-5.197-1.457l-.37-.222-4.63 1.066 1.1-4.518-.238-.382A9.955 9.955 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.47 5.47c-.22 0-.576.082-.878.408-.301.326-1.15 1.124-1.15 2.74 0 1.615 1.178 3.177 1.342 3.397.163.22 2.32 3.538 5.62 4.963 2.78 1.196 3.342.958 3.945.898.602-.06 1.94-.793 2.213-1.56.274-.766.274-1.422.192-1.56-.082-.136-.302-.218-.632-.381-.33-.163-1.94-.956-2.24-1.066-.3-.11-.518-.163-.736.163-.22.326-.85 1.066-1.04 1.286-.19.22-.383.245-.713.082-.33-.163-1.39-.513-2.65-1.636-.98-.874-1.64-1.953-1.833-2.28-.192-.326-.02-.503.145-.665.149-.146.33-.381.493-.571.163-.19.217-.326.327-.544.11-.218.055-.408-.027-.571-.082-.163-.723-1.745-.99-2.387-.261-.628-.527-.543-.736-.553l-.627-.01z" />
        </svg>
      </a>
    </div>
  );
}
