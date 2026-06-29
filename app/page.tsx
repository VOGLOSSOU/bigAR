import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Flame,
  Waves,
  Wind,
  Settings2,
  Cog,
  ShieldCheck,
  Truck,
  HeadphonesIcon,
  Award,
  ChevronRight,
} from "lucide-react";
import MotorCard from "@/components/MotorCard";
import { getFeaturedMotors } from "@/lib/data";

const CATEGORIES = [
  {
    icon: <Zap size={28} />,
    label: "Moteurs Électriques",
    desc: "Asynchrones, synchrones, brushless — IE3 et au-delà",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    href: "/catalogue?category=Électrique",
  },
  {
    icon: <Flame size={28} />,
    label: "Moteurs Thermiques",
    desc: "Diesel et essence pour engins mobiles et groupes électrogènes",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    href: "/catalogue?category=Thermique",
  },
  {
    icon: <Waves size={28} />,
    label: "Moteurs Hydrauliques",
    desc: "Orbitaux et à pistons pour applications haute pression",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    href: "/catalogue?category=Hydraulique",
  },
  {
    icon: <Wind size={28} />,
    label: "Moteurs Pneumatiques",
    desc: "À palettes, certifiés ATEX pour zones explosives",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    href: "/catalogue?category=Pneumatique",
  },
  {
    icon: <Settings2 size={28} />,
    label: "Servo-moteurs",
    desc: "Haute précision pour CNC, robots et automatismes",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    href: "/catalogue?category=Servo-moteur",
  },
  {
    icon: <Cog size={28} />,
    label: "Motoréducteurs",
    desc: "Solutions intégrées moteur + réducteur, montage universel",
    color: "bg-slate-100 text-slate-700 border-slate-200",
    href: "/catalogue?category=Réducteur",
  },
];

const STATS = [
  { value: "+500", label: "Références en stock" },
  { value: "6", label: "Familles de moteurs" },
  { value: "48h", label: "Délai de livraison moyen" },
  { value: "100%", label: "Société agréée française" },
];

const ATOUTS = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Qualité certifiée",
    desc: "Tous nos moteurs sont conformes aux normes CE, IE3 et aux directives européennes en vigueur.",
  },
  {
    icon: <Truck size={24} />,
    title: "Livraison rapide",
    desc: "Stock permanent sur les références courantes. Expédition sous 24 à 48h depuis notre entrepôt à Vénissieux.",
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: "Conseil expert",
    desc: "Notre équipe technique vous accompagne dans le choix du moteur adapté à votre application spécifique.",
  },
  {
    icon: <Award size={24} />,
    title: "Société agréée",
    desc: "Structure officielle agréée en France, garantissant traçabilité, conformité et service après-vente professionnel.",
  },
];

export default function HomePage() {
  const featured = getFeaturedMotors();

  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── */}
      <section className="hero-gradient text-white relative overflow-hidden">
        {/* subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block badge bg-white/15 text-white border border-white/25 mb-5 text-xs">
              🇫🇷 Société Française Agréée — Vénissieux (69)
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up">
              Votre spécialiste en
              <span className="block text-blue-200">moteurs industriels</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-100">
              Électriques, thermiques, hydrauliques, pneumatiques — nous proposons
              toutes les technologies de motorisation pour répondre aux exigences
              les plus pointues de l'industrie française.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link
                href="/catalogue"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Voir le catalogue <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="relative h-16">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path d="M0 64L1440 64L1440 0C1200 48 960 64 720 56C480 48 240 16 0 0L0 64Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A]">{value}</p>
                <p className="text-sm text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATÉGORIES ─── */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Nos familles</p>
            <div className="section-divider" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Toutes les technologies<br className="hidden md:block" /> de motorisation
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl">
              Du moteur électrique basse tension au motoréducteur industriel, nous couvrons l'ensemble des besoins en motorisation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map(({ icon, label, desc, color, href }) => (
              <Link key={label} href={href}>
                <div className={`card-hover bg-white border-2 ${color.split(" ")[2]} rounded-2xl p-6 flex flex-col gap-3`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color.split(" ")[0]} ${color.split(" ")[1]}`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{label}</h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                  <span className={`self-start flex items-center gap-1 text-xs font-semibold mt-1 ${color.split(" ")[1]}`}>
                    Voir les produits <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUITS VEDETTES ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Sélection</p>
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Produits vedettes</h2>
            </div>
            <Link href="/catalogue" className="btn-outline text-sm self-start sm:self-auto">
              Tout le catalogue <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((motor) => (
              <MotorCard key={motor.id} motor={motor} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOS ATOUTS ─── */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Pourquoi nous choisir</p>
            <div className="section-divider mx-auto" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Notre engagement</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATOUTS.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="w-11 h-11 bg-[#1E3A8A]/10 rounded-xl flex items-center justify-center text-[#1E3A8A] mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Un projet ? Un besoin spécifique ?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Notre équipe technique est disponible pour vous conseiller et établir
            un devis personnalisé sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1E3A8A] font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Nous contacter <ArrowRight size={18} />
            </Link>
            <Link
              href="/catalogue"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Parcourir le catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
