"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import MotorCard from "@/components/MotorCard";
import { MOTORS, CATEGORIES, type MotorCategory } from "@/lib/data";

export default function CataloguePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<MotorCategory | "Tous">("Tous");
  const [onlyInStock, setOnlyInStock] = useState(false);

  const filtered = useMemo(() => {
    return MOTORS.filter((m) => {
      const matchCat = activeCategory === "Tous" || m.category === activeCategory;
      const matchSearch =
        search === "" ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
        m.applications.some((a) => a.toLowerCase().includes(search.toLowerCase()));
      const matchStock = !onlyInStock || m.inStock;
      return matchCat && matchSearch && matchStock;
    });
  }, [search, activeCategory, onlyInStock]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("Tous");
    setOnlyInStock(false);
  };

  const hasFilters = search !== "" || activeCategory !== "Tous" || onlyInStock;

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="hero-gradient text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-2">SVMI</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Notre catalogue</h1>
          <p className="text-blue-200 max-w-xl">
            Toutes nos références de moteurs industriels — filtrez par technologie, puissance ou disponibilité.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un moteur, une application..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
              />
            </div>

            {/* Stock toggle */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none shrink-0">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                />
                <div className={`w-10 h-5 rounded-full transition-colors ${onlyInStock ? "bg-[#1E3A8A]" : "bg-slate-200"}`} />
                <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${onlyInStock ? "translate-x-5" : ""}`} />
              </div>
              <span className="text-sm font-medium text-slate-700">En stock uniquement</span>
            </label>

            {/* Clear */}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-500 transition-colors shrink-0"
              >
                <X size={15} /> Réinitialiser
              </button>
            )}
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {(["Tous", ...CATEGORIES] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as MotorCategory | "Tous")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === cat
                    ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-2 mb-6 text-sm text-slate-500">
          <SlidersHorizontal size={15} />
          <span>
            <strong className="text-slate-800">{filtered.length}</strong> résultat{filtered.length > 1 ? "s" : ""}
            {activeCategory !== "Tous" && (
              <span> dans <strong className="text-[#1E3A8A]">{activeCategory}</strong></span>
            )}
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((motor) => (
              <MotorCard key={motor.id} motor={motor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-slate-400" />
            </div>
            <p className="text-slate-700 font-semibold text-lg mb-1">Aucun résultat</p>
            <p className="text-slate-400 text-sm mb-5">Essayez de modifier vos filtres ou votre recherche.</p>
            <button onClick={clearFilters} className="btn-primary text-sm">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
