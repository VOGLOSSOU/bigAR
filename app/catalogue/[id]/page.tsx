import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  CheckCircle,
  XCircle,
  ShieldCheck,
  FileText,
  Tag,
  ChevronRight,
} from "lucide-react";
import { getMotorById, getMotorsByCategory, MOTORS } from "@/lib/data";
import MotorCard from "@/components/MotorCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MOTORS.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const motor = getMotorById(id);
  if (!motor) return { title: "Produit introuvable" };
  return {
    title: motor.name,
    description: motor.shortDesc,
  };
}

const SPEC_ROWS = [
  { key: "power", label: "Puissance" },
  { key: "voltage", label: "Alimentation" },
  { key: "rpm", label: "Vitesse de rotation" },
  { key: "torque", label: "Couple nominal" },
  { key: "weight", label: "Poids" },
  { key: "protection", label: "Indice de protection" },
] as const;

export default async function MotorDetailPage({ params }: Props) {
  const { id } = await params;
  const motor = getMotorById(id);
  if (!motor) notFound();

  const related = getMotorsByCategory(motor.category)
    .filter((m) => m.id !== motor.id)
    .slice(0, 3);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#1E3A8A]">Accueil</Link>
          <ChevronRight size={14} />
          <Link href="/catalogue" className="hover:text-[#1E3A8A]">Catalogue</Link>
          <ChevronRight size={14} />
          <span className="text-slate-800 font-medium truncate max-w-xs">{motor.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/catalogue" className="inline-flex items-center gap-1.5 text-sm text-[#1E3A8A] font-medium hover:underline mb-8">
          <ArrowLeft size={16} /> Retour au catalogue
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* Image */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
              <div className="w-28 h-28 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center">
                <Zap size={52} className="text-[#1E3A8A]" />
              </div>
              {motor.featured && (
                <span className="absolute top-4 left-4 badge bg-[#1E3A8A] text-white text-xs">
                  ★ Produit vedette
                </span>
              )}
              <span
                className={`absolute top-4 right-4 badge border text-xs ${
                  motor.inStock
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-orange-50 text-orange-700 border-orange-200"
                }`}
              >
                {motor.inStock ? "En stock" : "Sur commande"}
              </span>
            </div>

            {/* Certifications */}
            <div className="p-5 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Certifications &amp; normes
              </p>
              <div className="flex flex-wrap gap-2">
                {motor.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="flex items-center gap-1 badge bg-[#1E3A8A]/8 text-[#1E3A8A] border border-[#1E3A8A]/20 text-xs"
                  >
                    <ShieldCheck size={12} /> {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="badge bg-blue-50 text-blue-700 border border-blue-200 text-xs mb-3">
              {motor.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug mb-3">
              {motor.name}
            </h1>
            <div className="flex items-center gap-2 mb-5">
              {motor.inStock ? (
                <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                  <CheckCircle size={16} /> Disponible en stock
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-sm font-semibold text-orange-500">
                  <XCircle size={16} /> Disponible sur commande
                </span>
              )}
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">{motor.description}</p>

            {/* Specs table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-6">
              <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                <FileText size={15} className="text-[#1E3A8A]" />
                <p className="text-sm font-semibold text-slate-700">Caractéristiques techniques</p>
              </div>
              <div className="divide-y divide-slate-100">
                {SPEC_ROWS.map(({ key, label }) => {
                  const val = motor[key];
                  if (!val) return null;
                  return (
                    <div key={key} className="flex items-center justify-between px-5 py-3">
                      <span className="text-sm text-slate-500">{label}</span>
                      <span className="text-sm font-semibold text-slate-900">{val}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Applications */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Tag size={13} /> Applications typiques
              </p>
              <div className="flex flex-wrap gap-2">
                {motor.applications.map((app) => (
                  <span key={app} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary flex-1 justify-center">
                Demander un devis
              </Link>
              <Link href="/contact" className="btn-outline flex-1 justify-center">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        {related.length > 0 && (
          <div>
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">
                {motor.category}
              </p>
              <div className="section-divider" />
              <h2 className="text-2xl font-extrabold text-slate-900">Produits similaires</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((m) => (
                <MotorCard key={m.id} motor={m} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
