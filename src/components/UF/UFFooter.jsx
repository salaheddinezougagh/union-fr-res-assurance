import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { UFLogo } from "./UFNavbar";

const NAV = {
  "Nos Services": ["Assurance Auto", "Assurance Habitation", "Assurance Vie & Épargne", "Assurance Entreprise", "Assurance Voyage", "Assurance Santé"],
  "À Propos": ["Notre Cabinet", "Notre Équipe", "Nos Partenaires", "Rejoindre l'équipe"],
  "Informations": ["FAQ", "Lexique de l'assurance", "Déclaration de sinistre", "Mentions légales"],
};

export default function UFFooter() {
  return (
    <footer className="bg-[#0f2340] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <UFLogo size={48} />
              <div>
                <div className="font-bold text-xl leading-tight">UNION FRÈRES</div>
                <div className="text-[11px] tracking-[0.2em] text-white/60">D'ASSURANCE</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Courtier en assurance agréé ACAPS, Union Frères D'Assurance vous accompagne avec expertise et proximité pour toutes vos assurances au Maroc.
            </p>
            <div className="space-y-3">
              <a href="tel:0522981982" className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 text-[#c8a84b]" /> 05 22 981 982 / 06 52 21 83 35
              </a>
              <a href="mailto:Ufassurances@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-[#c8a84b]" /> Ufassurances@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-[#c8a84b] mt-0.5 flex-shrink-0" />
                <span>Quartier Oasis 7 Bd Taddart, B Living Offices Étage 4 N°406, Casablanca</span>
              </div>
            </div>
          </div>

          {/* Nav groups */}
          {Object.entries(NAV).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-bold text-white mb-5 text-sm tracking-wide">{group}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#services" className="text-white/60 hover:text-[#c8a84b] text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Union Frères D'Assurance — Courtier en Assurance Agréé ACAPS
          </p>
          <p className="text-white/40 text-sm">
            Directeur : Abdelilah ZOUGAGH — Casablanca, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}