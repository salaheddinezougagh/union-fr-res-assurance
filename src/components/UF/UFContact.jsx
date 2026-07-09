import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const SERVICES_LIST = [
  "Assurance Auto", "Assurance Habitation", "Assurance Vie & Épargne",
  "Assurance Entreprise", "Assurance Voyage", "Assurance Santé",
  "Assurance Agricole", "Autre",
];

export default function UFContact() {
  const [form, setForm] = useState({ nom: "", telephone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Bonjour Union Frères,\n\nJe souhaite un devis pour : ${form.service}\n\nNom : ${form.nom}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\n\n${form.message}`
    );
    window.open(`https://wa.me/212787558851?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a84b] text-sm font-semibold tracking-widest">CONTACT & DEVIS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
            Obtenez votre devis gratuit
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous vous répondons sous 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info cards */}
          <div className="flex flex-col gap-5">
            {[
              { icon: Phone, title: "Téléphone", lines: ["05 22 981 982", "06 52 21 83 35"] },
              { icon: Mail, title: "Email", lines: ["Ufassurances@gmail.com"] },
              { icon: MapPin, title: "Adresse", lines: ["Quartier Oasis 7 Bd Taddart", "B Living Offices Étage 4 N°406", "Casablanca, Maroc"], mapUrl: "https://www.google.com/maps/search/?api=1&query=Quartier+Oasis+7+Bd+Taddart+Casablanca+Maroc" },
              { icon: Clock, title: "Horaires", lines: ["Lun–Ven : 9h00 – 18h00", "Sam : 9h00 – 13h00"] },
            ].map((card) => {
              const Icon = card.icon;
              const Wrapper = card.mapUrl ? "a" : "div";
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4"
                >
                  <div className="w-10 h-10 bg-[#1e3a5f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <Wrapper {...(card.mapUrl ? { href: card.mapUrl, target: "_blank", rel: "noopener noreferrer" } : {})}>
                    <p className="font-semibold text-[#1e3a5f] mb-1">{card.title}</p>
                    {card.lines.map((l, i) => <p key={i} className={`text-sm ${card.mapUrl ? "text-[#1e3a5f] hover:underline cursor-pointer" : "text-gray-500"}`}>{l}</p>)}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Demande de devis</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Nom complet *</label>
                <input
                  required value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Téléphone *</label>
                <input
                  required value={form.telephone}
                  onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                  placeholder="06 XX XX XX XX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
              <input
                type="email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="votre@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition"
              />
            </div>

            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Produit souhaité *</label>
              <select
                required value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition bg-white"
              >
                <option value="">Sélectionnez un produit</option>
                {SERVICES_LIST.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message</label>
              <textarea
                rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Décrivez votre besoin..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              {sent ? (
                <><CheckCircle className="w-5 h-5" /> Envoyé via WhatsApp !</>
              ) : (
                <>Envoyer via WhatsApp</>
              )}
            </button>
            <p className="text-center text-gray-400 text-xs mt-3">Votre message sera envoyé via WhatsApp. Réponse sous 24h.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}