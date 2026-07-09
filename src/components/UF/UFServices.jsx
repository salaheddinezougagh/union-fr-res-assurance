import React, { useState } from "react";
import { motion } from "framer-motion";
import { Car, Home, Heart, Briefcase, Plane, Activity, Leaf, Anchor, ArrowRight } from "lucide-react";
import UFServiceModal from "./UFServiceModal";

const SERVICES = [
  {
    icon: Car,
    title: "Assurance Auto",
    desc: "Responsabilité civile, tous risques, vol et incendie. Protégez votre véhicule avec la couverture adaptée à votre profil.",
    color: "bg-blue-50 text-blue-600",
    accent: "#2563eb",
  },
  {
    icon: Home,
    title: "Assurance Habitation",
    desc: "Propriétaire ou locataire, protégez votre logement contre l'incendie, le vol, les dégâts des eaux et les catastrophes naturelles.",
    color: "bg-emerald-50 text-emerald-600",
    accent: "#059669",
  },
  {
    icon: Heart,
    title: "Assurance Vie & Épargne",
    desc: "Mettez vos proches à l'abri et constituez une épargne pour l'avenir. Plans de retraite et prévoyance sur mesure.",
    color: "bg-rose-50 text-rose-600",
    accent: "#e11d48",
  },
  {
    icon: Briefcase,
    title: "Assurance Entreprise",
    desc: "RC professionnelle, multirisque entreprise, accidents de travail. Solutions complètes pour les TPE, PME et grandes entreprises.",
    color: "bg-purple-50 text-purple-600",
    accent: "#7c3aed",
  },
  {
    icon: Plane,
    title: "Assurance Voyage",
    desc: "Partez serein à l'étranger. Couverture médicale, rapatriement, annulation et assistance 24h/24 dans le monde entier.",
    color: "bg-sky-50 text-sky-600",
    accent: "#0284c7",
  },
  {
    icon: Activity,
    title: "Assurance Santé",
    desc: "Complémentaire santé, hospitalisation, soins dentaires et optiques. Une protection adaptée à votre budget.",
    color: "bg-teal-50 text-teal-600",
    accent: "#0d9488",
  },
  {
    icon: Leaf,
    title: "Assurance Agricole",
    desc: "Protection des récoltes, du cheptel et du matériel agricole. Solutions dédiées aux exploitants du secteur agricole marocain.",
    color: "bg-lime-50 text-lime-600",
    accent: "#65a30d",
  },
  {
    icon: Anchor,
    title: "Assurance Maritime",
    desc: "Transport de marchandises par voie maritime, fluviale ou aérienne. Corps de navire et responsabilités du transporteur.",
    color: "bg-indigo-50 text-indigo-600",
    accent: "#4338ca",
  },
];

export default function UFServices() {
  const [selected, setSelected] = useState(null);

  return (
    <>
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a84b] text-sm font-semibold tracking-widest">NOS PRODUITS</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mt-3 mb-4">
            Des solutions pour chaque besoin
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            En tant que courtier indépendant, nous sélectionnons les meilleures offres parmi nos partenaires assureurs pour vous proposer la couverture la plus adaptée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onClick={() => setSelected(s.title)}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#1e3a5f] text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: s.accent }}>
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#16304f] transition-colors shadow-lg">
            Obtenir un devis personnalisé <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
    {selected && <UFServiceModal service={selected} onClose={() => setSelected(null)} />}
    </>
  );
}