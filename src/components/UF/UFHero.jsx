import React from "react";
import { motion } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";

const PRODUCTS = ["Auto", "Habitation", "Vie & Épargne", "Entreprise", "Voyage", "Santé", "Agriculture", "Maritime"];

export default function UFHero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Casablanca skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/70 to-[#1e3a5f]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-[#c8a84b]" />
              <span className="text-[#c8a84b] text-sm font-semibold tracking-widest">COURTIER EN ASSURANCE — CASABLANCA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Votre sécurité,<br />
              <span className="text-[#c8a84b]">notre priorité</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Union Frères D'Assurance vous accompagne avec des solutions sur mesure pour protéger ce qui compte le plus — votre famille, vos biens et votre entreprise.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-[#c8a84b] hover:bg-[#b8973b] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg">
                Obtenir un Devis Gratuit
              </a>
              <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] font-semibold px-8 py-4 rounded-full transition-all">
                Nos Produits
              </a>
            </div>
          </motion.div>

          {/* Product pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-14 flex flex-wrap gap-2"
          >
            {PRODUCTS.map((p) => (
              <span key={p} className="text-xs text-white/80 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full">
                {p}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
        >
          {[
            { val: "15+", label: "Années d'expérience" },
            { val: "10+", label: "Compagnies partenaires" },
            { val: "5000+", label: "Clients satisfaits" },
            { val: "24/7", label: "Assistance sinistre" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl px-5 py-4 border border-white/20">
              <p className="text-[#c8a84b] text-2xl font-bold">{s.val}</p>
              <p className="text-white/70 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </a>
    </section>
  );
}