import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Youssef El Amrani",
    role: "Directeur Commercial",
    text: "Un service exceptionnel ! L'équipe d'Union Frères m'a trouvé une assurance auto complète à un tarif bien meilleur que ce que j'avais avant. Je me sens vraiment bien conseillé.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80&crop=faces",
    stars: 5,
  },
  {
    name: "Amina El Sabti",
    role: "Chef d'entreprise",
    text: "En tant que chef d'entreprise, j'avais besoin d'un partenaire réactif et fiable. Union Frères a su analyser tous nos risques et nous proposer une couverture complète et optimisée. Je recommande vivement !",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=160&q=80&crop=faces",
    stars: 5,
  },
  {
    name: "Khalid Benyahia",
    role: "Client Épargne & Retraite",
    text: "L'équipe a fait preuve d'un grand professionnalisme pour m'accompagner dans la préparation de ma retraite. Leurs explications sont claires et leurs solutions d'épargne très performantes.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&q=80&crop=faces",
    stars: 5,
  },
  {
    name: "Fatima Zohra",
    role: "Cliente Habitation",
    text: "Suite à un dégât des eaux, l'équipe d'Union Frères a géré tout le dossier avec rapidité et efficacité. Tout a été pris en charge, un vrai soulagement dans ces moments difficiles.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80&crop=faces",
    stars: 5,
  },
];

export default function UFTestimonials() {
  return (
    <section id="temoignages" className="py-20 md:py-28 bg-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a84b] text-sm font-semibold tracking-widest">TÉMOIGNAGES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Plus de 5000 clients particuliers et professionnels nous ont confié leur protection à travers le Maroc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#c8a84b] mb-4 opacity-60" />
              <div className="flex gap-1 mb-3">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#c8a84b] text-[#c8a84b]" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}