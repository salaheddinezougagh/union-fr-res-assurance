import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Nos Services", href: "#services" },
  { label: "Pourquoi Nous", href: "#pourquoi" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

export default function UFNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <UFLogo size={44} />
          <div>
            <div className={`font-bold text-lg leading-tight tracking-wide ${scrolled ? "text-[#1e3a5f]" : "text-white"}`}>
              UNION FRÈRES
            </div>
            <div className={`text-[10px] tracking-[0.2em] ${scrolled ? "text-[#1e3a5f]/60" : "text-white/70"}`}>
              D'ASSURANCE
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className={`text-sm font-medium hover:text-[#1e3a5f] transition-colors ${scrolled ? "text-gray-600" : "text-white/90"}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0522981982" className="flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] bg-white/90 hover:bg-white px-4 py-2.5 rounded-full shadow transition-all">
            <Phone className="w-4 h-4" />
            05 22 981 982
          </a>
          <a href="#contact" className="bg-[#1e3a5f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#16304f] transition-colors">
            Devis Gratuit
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden ${scrolled ? "text-[#1e3a5f]" : "text-white"}`}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-[#1e3a5f] font-medium py-2 border-b border-gray-100">
              {l.label}
            </a>
          ))}
          <a href="tel:0522981982" className="mt-2 flex items-center gap-2 justify-center bg-[#1e3a5f] text-white py-3 rounded-full font-semibold">
            <Phone className="w-4 h-4" /> Appeler maintenant
          </a>
          <a href="#contact" className="flex items-center justify-center bg-[#c8a84b] text-white py-3 rounded-full font-semibold">
            Devis Gratuit
          </a>
        </div>
      )}
    </header>
  );
}

export function UFLogo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5 L90 22 L90 65 Q90 90 50 105 Q10 90 10 65 L10 22 Z" fill="#1e3a5f" />
      <path d="M50 12 L85 27 L85 65 Q85 87 50 100 Q15 87 15 65 L15 27 Z" fill="none" stroke="white" strokeWidth="1.5" />
      <text x="50" y="68" textAnchor="middle" fill="white" fontSize="38" fontWeight="bold" fontFamily="Arial,sans-serif">UF</text>
    </svg>
  );
}