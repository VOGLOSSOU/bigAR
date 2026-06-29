"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

const INFO = [
  {
    icon: <MapPin size={20} />,
    label: "Adresse",
    value: "150 Avenue Viviani\n69200 Vénissieux, France",
    link: "https://maps.google.com/?q=150+Avenue+Viviani+69200+Venissieux",
  },
  {
    icon: <Phone size={20} />,
    label: "Téléphone",
    value: "+33 (0)4 00 00 00 00",
    link: "tel:+33400000000",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "contact@svmi.fr",
    link: "mailto:contact@svmi.fr",
  },
  {
    icon: <Clock size={20} />,
    label: "Horaires",
    value: "Lun – Ven : 8h00 – 18h00\nSam : 9h00 – 12h00",
    link: null,
  },
];

const SUBJECTS = [
  "Demande de devis",
  "Renseignements sur un produit",
  "Disponibilité / délai",
  "Service après-vente",
  "Partenariat / Fournisseur",
  "Autre",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Header */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/contact-bg.png"
            alt="Équipe technique SVMI"
            fill
            className="object-cover object-top"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f4a]/85 via-[#1E3A8A]/75 to-[#1E3A8A]/55" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-2">SVMI</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Contactez-nous</h1>
          <p className="text-blue-200 max-w-xl">
            Pour un devis, une question technique ou toute autre demande — notre équipe vous répond sous 24h.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info sidebar */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Coordonnées</p>
              <div className="section-divider" />
              <h2 className="text-xl font-extrabold text-slate-900">Nous trouver</h2>
            </div>

            {INFO.map(({ icon, label, value, link }) => (
              <div key={label} className="bg-white rounded-xl border border-slate-200 p-4 flex gap-3.5">
                <div className="w-10 h-10 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center text-[#1E3A8A] shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                  {link ? (
                    <a
                      href={link}
                      target={link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-slate-800 font-medium hover:text-[#1E3A8A] whitespace-pre-line"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-800 font-medium whitespace-pre-line">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <iframe
                title="Localisation SVMI"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.862%2C45.693%2C4.882%2C45.703&layer=mapnik&marker=45.698%2C4.872"
                width="100%"
                height="200"
                className="border-0 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 mb-6">
                    Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais (généralement sous 24h ouvrées).
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="btn-outline text-sm"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-widest mb-2">Formulaire</p>
                    <div className="section-divider" />
                    <h2 className="text-xl font-extrabold text-slate-900">Votre demande</h2>
                    <p className="text-sm text-slate-500 mt-1">Tous les champs marqués * sont obligatoires.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Société
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Nom de votre société"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jean@societe.fr"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Téléphone
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+33 6 00 00 00 00"
                          className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Objet <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] bg-white"
                      >
                        <option value="">Sélectionnez un objet…</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre besoin, la référence du moteur, la puissance requise..."
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Envoi en cours…
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} /> Envoyer le message
                        </span>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
