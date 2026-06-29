"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Cog } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <div className="w-9 h-9 bg-[#1E3A8A] rounded-lg flex items-center justify-center group-hover:bg-[#172e6e] transition-colors">
              <Cog size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-[#1E3A8A] tracking-widest uppercase">SVMI</p>
              <p className="text-[10px] text-slate-500 leading-none hidden sm:block">Moteurs Industriels</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#1E3A8A] text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-[#1E3A8A]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Demander un devis
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#1E3A8A] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm w-full justify-center"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
