import Link from "next/link";
import Image from "next/image";
import { Cog, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const CATEGORIES = [
  "Moteurs Électriques",
  "Moteurs Thermiques",
  "Moteurs Hydrauliques",
  "Moteurs Pneumatiques",
  "Servo-moteurs",
  "Motoréducteurs",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1f4a] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                <Cog size={20} className="text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-white tracking-wider uppercase">SVMI</p>
                <p className="text-[10px] text-slate-400">Moteurs Industriels</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Société agréée spécialisée dans la vente de moteurs industriels pour tous les secteurs.
              Expertise technique, conseil personnalisé et disponibilité immédiate.
            </p>
            {/* Badge agrément officiel */}
            <div className="mt-3">
              <Image
                src="/img-accueil.jpg"
                alt="Centre VHU agréé — République Française"
                width={160}
                height={72}
                className="rounded-lg bg-white p-2 object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span className="text-[#3b5fc0]">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Nos produits</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/catalogue"
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span className="text-[#3b5fc0]">›</span> {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin size={15} className="text-[#3b5fc0] mt-0.5 shrink-0" />
                <span>150 Avenue Viviani<br />69200 Vénissieux, France</span>
              </li>
              <li>
                <a href="tel:+33400000000" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone size={15} className="text-[#3b5fc0]" />
                  +33 (0)4 00 00 00 00
                </a>
              </li>
              <li>
                <a href="mailto:contact@svmi.fr" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail size={15} className="text-[#3b5fc0]" />
                  contact@svmi.fr
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-5 border-t border-slate-700">
              <Link href="/contact" className="btn-outline text-sm py-2 border-slate-500 text-slate-300 hover:bg-white hover:text-[#1E3A8A] hover:border-white">
                Demander un devis <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SVMI — Société de Vente de Moteurs Industriels. Tous droits réservés.</p>
          <p>Vénissieux, France 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
}
