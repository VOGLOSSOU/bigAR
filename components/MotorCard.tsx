import Link from "next/link";
import { Zap, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Motor } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  "Électrique":    "bg-blue-50 text-blue-700 border-blue-200",
  "Thermique":     "bg-orange-50 text-orange-700 border-orange-200",
  "Hydraulique":   "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Pneumatique":   "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Servo-moteur":  "bg-purple-50 text-purple-700 border-purple-200",
  "Réducteur":     "bg-slate-100 text-slate-700 border-slate-200",
};

interface Props {
  motor: Motor;
}

export default function MotorCard({ motor }: Props) {
  return (
    <Link href={`/catalogue/${motor.id}`} className="block h-full">
      <div className="card-hover h-full bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
          <div className="w-20 h-20 bg-[#1E3A8A]/10 rounded-full flex items-center justify-center">
            <Zap size={36} className="text-[#1E3A8A]" />
          </div>
          {motor.featured && (
            <span className="absolute top-3 left-3 badge bg-[#1E3A8A] text-white text-[10px]">
              ★ Vedette
            </span>
          )}
          <span className={`absolute top-3 right-3 badge border text-[10px] ${CATEGORY_COLORS[motor.category] || "bg-slate-100 text-slate-700"}`}>
            {motor.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-bold text-slate-900 text-base leading-snug mb-1">{motor.name}</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{motor.shortDesc}</p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-slate-50 rounded-lg p-2.5">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Puissance</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">{motor.power}</p>
            </div>
            {motor.rpm && (
              <div className="bg-slate-50 rounded-lg p-2.5">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Vitesse</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">{motor.rpm}</p>
              </div>
            )}
            {!motor.rpm && motor.torque && (
              <div className="bg-slate-50 rounded-lg p-2.5">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Couple</p>
                <p className="text-sm font-bold text-slate-800 mt-0.5">{motor.torque}</p>
              </div>
            )}
          </div>

          {/* Stock + CTA */}
          <div className="flex items-center justify-between">
            <span className={`flex items-center gap-1.5 text-xs font-semibold ${motor.inStock ? "text-emerald-600" : "text-red-500"}`}>
              {motor.inStock
                ? <><CheckCircle size={14} /> En stock</>
                : <><XCircle size={14} /> Sur commande</>}
            </span>
            <span className="flex items-center gap-1 text-[#1E3A8A] font-semibold text-sm group-hover:gap-2 transition-all">
              Voir la fiche <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
