import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Shield, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "212787558851";

const DETAILS = {
  "Assurance Auto": {
    intro: "L'assurance automobile est obligatoire au Maroc. Au-delà de la couverture minimale légale (responsabilité civile), nous vous proposons des garanties étendues pour protéger votre véhicule, vos passagers et vous-même.",
    garanties: [
      "Responsabilité Civile (obligatoire) — couvre les dommages causés aux tiers",
      "Dommages tous accidents — couvre votre véhicule en cas de collision, vol ou incendie",
      "Vol et incendie — indemnisation en cas de vol total ou partiel",
      "Bris de glaces — pare-brise, lunette, vitres latérales",
      "Assistance 24h/24 — dépannage, remorquage, véhicule de prêt",
      "Protection du conducteur — capital en cas de décès ou invalidité",
    ],
    conseils: "Pensez à déclarer votre bonus/malus pour bénéficier d'une tarification juste. Nous comparons les offres de plusieurs compagnies pour vous obtenir le meilleur tarif selon votre profil.",
  },
  "Assurance Habitation": {
    intro: "Votre logement est l'un de vos biens les plus précieux. Que vous soyez propriétaire ou locataire, nous vous proposons une couverture complète adaptée à votre situation et à votre budget.",
    garanties: [
      "Incendie et risques annexes — feu, fumée, explosion, foudre",
      "Dégâts des eaux — fuites, infiltrations, débordements",
      "Vol et vandalisme — cambriolage, effraction, dégradation",
      "Bris de glaces — fenêtres, baies vitrées, vitrines",
      "Responsabilité civile vie privée — dommages causés à autrui",
      "Catastrophes naturelles — séisme, inondation, tempête",
    ],
    conseils: "Estimez correctement la valeur de votre mobilier et de vos biens. Une sous-estimation peut entraîner une indemnisation insuffisante en cas de sinistre.",
  },
  "Assurance Vie & Épargne": {
    intro: "L'assurance vie vous permet de protéger vos proches tout en constituant une épargne pour l'avenir. C'est un outil essentiel de prévoyance et de transmission de patrimoine.",
    garanties: [
      "Capital décès — versement d'un capital aux bénéficiaires désignés",
      "Capital invalidité — indemnisation en cas d'invalidité absolue",
      "Épargne retraite — constitution d'un capital pour vos vieux jours",
      "Fiscalité avantageuse — bénéfices fiscaux sur les primes versées",
      "Souplesse de versement — libre ou programmé",
      "Avance et rachat — possibilité de récupérer tout ou partie du capital",
    ],
    conseils: "Plus vous commencez tôt, plus votre épargne fructifie grâce aux intérêts composés. Un plan sur 10-15 ans optimise considérablement votre capital final.",
  },
  "Assurance Entreprise": {
    intro: "Nous protégeons votre activité professionnelle avec des solutions sur mesure : TPE, PME, grande entreprise, artisan ou profession libérale. Chaque métier a ses risques spécifiques.",
    garanties: [
      "Multirisque professionnelle — locaux, matériel, marchandises",
      "Responsabilité Civile Professionnelle — erreurs, négligences, fautes",
      "Responsabilité Civile Exploitation — dommages causés aux tiers",
      "Accidents de travail — couverture obligatoire des employés",
      "Protection juridique — frais de justice et conseils",
      "Flotte automobile — couverture de vos véhicules professionnels",
    ],
    conseils: "Faites un audit complet de vos risques avec notre équipe. Une couverture insuffisante peut menacer la survie de votre entreprise en cas de sinistre majeur.",
  },
  "Assurance Voyage": {
    intro: "Voyagez l'esprit tranquille ! Notre assurance voyage vous couvre où que vous alliez, pour un séjour ou toute l'année, avec une assistance 24h/24 dans le monde entier.",
    garanties: [
      "Frais médicaux à l'étranger — consultation, hospitalisation, médicaments",
      "Rapatriement sanitaire — retour en France en cas de besoin médical",
      "Annulation de voyage — remboursement des frais non utilisés",
      "Bagages — perte, vol ou détérioration de vos effets personnels",
      "Retard de vol — indemnisation pour les frais engagés",
      "Assistance juridique à l'étranger — conseils et avance de frais",
    ],
    conseils: "Vérifiez les exclusions de votre carte bancaire. Une assurance dédiée offre souvent une couverture plus large et des plafonds plus élevés.",
  },
  "Assurance Santé": {
    intro: "La santé n'a pas de prix. Notre complémentaire santé couvre vos frais médicaux et ceux de votre famille, en complément du régime obligatoire (CNSS/AMO).",
    garanties: [
      "Hospitalisation — frais de séjour, chirurgie, anesthésie",
      "Consultations — généralistes et spécialistes",
      "Pharmacie — médicaments prescrits",
      "Dentaire — soins, prothèses, orthodontie",
      "Optique — lunettes, lentilles, montures",
      "Maternité — frais liés à la grossesse et l'accouchement",
    ],
    conseils: "Choisissez un niveau de couverture adapté à vos besoins réels. Une famille avec enfants aura intérêt à inclure l'optique et le dentaire.",
  },
  "Assurance Agricole": {
    intro: "L'agriculture est un secteur exposé aux aléas climatiques. Nous protégeons vos récoltes, votre cheptel et votre matériel pour sécuriser votre exploitation.",
    garanties: [
      "Assurance récolte — grêle, gel, sécheresse, excès d'eau",
      "Assurance cheptel — mortalité des animaux (bovins, ovins, caprins)",
      "Assurance serres — structures et cultures sous serre",
      "Matériel agricole — tracteurs, moissonneuses, équipements",
      "Responsabilité civile agricole — dommages causés aux tiers",
      "Pertes d'exploitation — suite à un sinistre couvert",
    ],
    conseils: "Déclarez vos surfaces et votre cheptel avec précision. Une déclaration inexacte peut réduire votre indemnisation en cas de sinistre.",
  },
  "Assurance Maritime": {
    intro: "Spécialistes du transport de marchandises, nous couvrons vos expéditions par voie maritime, aérienne, routière ou ferroviaire, ainsi que la responsabilité du transporteur.",
    garanties: [
      "Transport de marchandises — maritime, aérien, routier, ferroviaire",
      "Corps de navire — dommages au navire lui-même",
      "Responsabilité civile transporteur — dommages causés aux marchandises",
      "Frais de sauvetage et de general average",
      "Facultés — marchandises transportées",
      "Risque de guerre et de grèves — extensions de garantie",
    ],
    conseils: "Vérifiez les Incoterms de votre contrat de vente. Selon les termes (FOB, CIF, etc.), l'obligation d'assurance incombe à l'acheteur ou au vendeur.",
  },
};

export default function UFServiceModal({ service, onClose }) {
  const [form, setForm] = useState({ nom: "", telephone: "", message: "" });
  const detail = DETAILS[service];

  if (!detail) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Bonjour Union Frères,\n\nJe suis intéressé(e) par : ${service}\n\nNom : ${form.nom}\nTéléphone : ${form.telephone}\n${form.message ? `\nMessage : ${form.message}` : ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    onClose();
  };

  const Icon = Shield;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl my-8 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#1e3a5f] px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c8a84b] rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">{service}</h3>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{detail.intro}</p>

            <h4 className="font-bold text-[#1e3a5f] mb-3 text-sm uppercase tracking-wide">Garanties incluses</h4>
            <ul className="space-y-2 mb-6">
              {detail.garanties.map((g, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#c8a84b]/10 border-l-4 border-[#c8a84b] rounded-r-xl px-4 py-3 mb-6">
              <p className="text-sm text-gray-700">
                <strong className="text-[#1e3a5f]">💡 Notre conseil : </strong>
                {detail.conseils}
              </p>
            </div>

            {/* Form */}
            <div className="border-t border-gray-100 pt-5">
              <h4 className="font-bold text-[#1e3a5f] mb-1">Demandez votre devis gratuit</h4>
              <p className="text-gray-400 text-xs mb-4">Recevez une offre personnalisée via WhatsApp</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    placeholder="Nom complet *"
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition"
                  />
                  <input
                    required
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    placeholder="Téléphone *"
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition"
                  />
                </div>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Précisez votre demande (optionnel)..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bc5c] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Envoyer ma demande via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}