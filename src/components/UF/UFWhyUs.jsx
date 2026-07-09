import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Award, TrendingUp, Headphones } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Courtier Agréé",
    desc: "Agréé par l'Autorité de Contrôle des Assurances et de la Prévoyance Sociale (ACAPS), nous exerçons dans le strict respect de la réglementation marocaine.",
  },
  {
    icon: Users,
    title: "Conseil Personnalisé",
    desc: "Chaque client est unique. Nous prenons le temps d'analyser vos besoins pour vous proposer la couverture la plus adaptée à votre situation.",
  },
  {
    icon: TrendingUp,
    title: "Indépendance Totale",
    desc: "En tant que courtier indépendant, nous comparons les offres de plus de 10 compagnies d'assurance pour vous garantir le meilleur rapport qualité-prix.",
  },
  {
    icon: Clock,
    title: "Réactivité 24/7",
    desc: "Un sinistre ne prévient pas. Notre équipe est disponible pour vous accompagner dans vos démarches à tout moment, même en dehors des heures de bureau.",
  },
  {
    icon: Award,
    title: "15 Ans d'Expertise",
    desc: "Forts de plus de 15 ans d'expérience sur le marché marocain, nous maîtrisons toutes les branches de l'assurance pour vous offrir un service expert.",
  },
  {
    icon: Headphones,
    title: "Gestion des Sinistres",
    desc: "Nous vous accompagnons de A à Z lors de chaque sinistre — déclaration, suivi, négociation et indemnisation — pour que vous récupériez ce qui vous est dû.",
  },
];

export default function UFWhyUs() {
  return (
    <section id="pourquoi" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=900&q=80"
                alt="Équipe Union Frères"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1e3a5f] text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold text-[#c8a84b]">5000+</p>
              <p className="text-sm text-white/80 mt-1">Clients protégés</p>
            </div>
          </motion.div>

          {/* Right content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#c8a84b] text-sm font-semibold tracking-widest">POURQUOI NOUS CHOISIR</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
                Un partenaire de confiance à Casablanca
              </h2>
              <p className="text-gray-500 mb-10">
                Abdelilah ZOUGAGH et son équipe mettent leur expertise au service de votre protection depuis plus de 15 ans. Notre engagement : vous offrir les meilleures garanties au meilleur prix.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REASONS.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-[#1e3a5f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a5f] mb-1">{r.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}