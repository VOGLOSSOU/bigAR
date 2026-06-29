import Link from "next/link";
import Image from "next/image";

import {
  ShieldCheck,
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Cog,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez SVMI, société française agréée spécialisée dans la vente de moteurs industriels depuis Vénissieux.",
};

const VALUES = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Fiabilité",
    desc: "Chaque moteur que nous proposons est vérifié et conforme aux normes CE et directives européennes.",
  },
  {
    icon: <Award size={22} />,
    title: "Expertise",
    desc: "Notre équipe technique maîtrise l'ensemble des technologies de motorisation pour vous guider.",
  },
  {
    icon: <Users size={22} />,
    title: "Proximité",
    desc: "Un interlocuteur dédié pour chaque client, avec un suivi personnalisé de A à Z.",
  },
  {
    icon: <Globe size={22} />,
    title: "Réactivité",
    desc: "Stock permanent sur les références courantes. Réponse à toute demande de devis sous 24h.",
  },
];

const ENGAGEMENTS = [
  "Conformité aux normes CE et directives européennes",
  "Traçabilité complète de chaque produit vendu",
  "Garantie constructeur sur l'ensemble des références",
  "Conseil technique indépendant et désintéressé",
  "Livraison sécurisée partout en France et Europe",
  "Service après-vente réactif et professionnel",
];

export default function AProposPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/a-propos-bg.jpeg"
            alt="Moteurs industriels SVMI"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f4a]/92 via-[#1E3A8A]/85 to-[#1E3A8A]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-2">Notre histoire</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">À propos de SVMI</h1>
          <p className="text-blue-200 max-w-2xl">
            Société de Vente de Moteurs Industriels — votre partenaire de confiance basé à Vénissieux, au cœur de la région lyonnaise.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Notre mission</p>
              <div className="section-divider" />
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
                Un seul interlocuteur pour tous vos besoins en motorisation
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                SVMI est une société française agréée dédiée exclusivement à la vente de moteurs industriels.
                Notre vocation : être le partenaire de référence des industriels, PME, bureaux d'études et
                installateurs qui recherchent des solutions fiables, conformes et livrées rapidement.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Basés à Vénissieux (69200), au cœur du tissu industriel rhônalpin, nous couvrons l'ensemble
                des technologies de motorisation : électrique, thermique, hydraulique, pneumatique, servo-motorisation
                et motoréduction.
              </p>
              <Link href="/contact" className="btn-primary">
                Nous contacter <ArrowRight size={16} />
              </Link>
            </div>

            {/* Badge agrément officiel + identité */}
            <div className="flex flex-col gap-6">
              {/* Badge VHU agréé */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col items-center justify-center gap-4">
                <Image
                  src="/img-accueil.jpg"
                  alt="Centre VHU agréé — République Française"
                  width={280}
                  height={126}
                  className="object-contain"
                />
                <p className="text-sm text-slate-500 text-center">
                  Société officiellement agréée par la République Française,
                  garantissant traçabilité et conformité de nos prestations.
                </p>
              </div>
              {/* Identité */}
              <div className="bg-[#1E3A8A] rounded-2xl p-6 text-white flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-1">
                  <Cog size={30} className="text-white" />
                </div>
                <p className="text-2xl font-extrabold tracking-wide">SVMI</p>
                <p className="text-blue-200 text-sm">Société de Vente de Moteurs Industriels</p>
                <p className="text-blue-300 text-xs mt-1">150 Avenue Viviani · 69200 Vénissieux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Ce qui nous définit</p>
            <div className="section-divider mx-auto" />
            <h2 className="text-3xl font-extrabold text-slate-900">Nos valeurs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon, title, desc }) => (
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

      {/* Engagements */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Notre promesse</p>
              <div className="section-divider" />
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Des engagements concrets
              </h2>
              <ul className="space-y-3">
                {ENGAGEMENTS.map((eng) => (
                  <li key={eng} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#1E3A8A] mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm leading-relaxed">{eng}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1E3A8A] text-white rounded-2xl p-10">
              <h3 className="text-2xl font-extrabold mb-3">Pourquoi faire confiance à SVMI ?</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                En tant que société agréée française, nous sommes soumis à des obligations strictes en matière
                de traçabilité, de conformité des produits et de qualité de service. Ce n'est pas qu'un label :
                c'est un cadre légal qui vous protège en tant qu'acheteur professionnel.
              </p>
              <p className="text-blue-200 leading-relaxed mb-8">
                Notre implantation à Vénissieux, dans la dynamique industrielle du Grand Lyon, nous permet de
                servir rapidement les clients de la région Auvergne-Rhône-Alpes et bien au-delà.
              </p>
              <Link
                href="/catalogue"
                className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                Découvrir nos produits <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Prêt à travailler ensemble ?</h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Contactez notre équipe pour toute demande de devis ou de renseignements techniques.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Prendre contact <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
