import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "212787558851";
const PRESET_MESSAGES = [
  "Bonjour, je souhaite un devis assurance auto",
  "Bonjour, je souhaite un devis assurance habitation",
  "Bonjour, je voudrais des informations sur vos services",
  "Bonjour, j'ai besoin d'aide pour un sinistre",
];

export default function UFWhatsApp() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const send = (msg) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* Chat box */}
      {open && (
        <div className="fixed bottom-28 right-5 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">
              UF
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm">Union Frères Assurance</p>
              <p className="text-white/80 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white/80 inline-block"></span>
                En ligne — répond rapidement
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="bg-[#e5ddd5] px-4 py-5">
            <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm mb-4 max-w-[90%]">
              <p className="text-gray-700 text-sm leading-relaxed">
                👋 Bonjour ! Je suis disponible pour vous conseiller et vous établir un devis gratuit. Comment puis-je vous aider ?
              </p>
              <p className="text-gray-400 text-[10px] mt-2 text-right">Abdelilah Z.</p>
            </div>

            <div className="flex flex-col gap-2">
              {PRESET_MESSAGES.map((m) => (
                <button
                  key={m}
                  onClick={() => send(m)}
                  className="bg-white text-[#1e3a5f] text-sm px-4 py-2.5 rounded-full border border-[#1e3a5f]/20 hover:bg-[#1e3a5f] hover:text-white transition-all text-left shadow-sm"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="bg-white px-4 py-3 flex gap-2 border-t border-gray-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && input && send(input)}
              placeholder="Tapez votre message..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30"
            />
            <button
              onClick={() => input && send(input)}
              disabled={!input}
              className="bg-[#25D366] text-white rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0 disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-5 z-50 bg-[#25D366] hover:bg-[#20bc5c] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8">
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.032 7.766L0 32l8.479-2.003A15.925 15.925 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm7.846 22.558c-.332.933-1.93 1.784-2.644 1.894-.682.106-1.538.15-2.48-.156-.572-.188-1.306-.437-2.242-.858-3.948-1.705-6.52-5.684-6.716-5.947-.196-.262-1.6-2.13-1.6-4.063 0-1.932 1.014-2.882 1.374-3.275.36-.392.785-.49 1.047-.49.262 0 .523.002.752.014.242.012.566-.092.886.675.33.79 1.12 2.724 1.218 2.92.098.196.163.425.033.686-.131.261-.196.425-.392.653-.196.229-.413.51-.588.686-.196.196-.4.408-.172.8.229.392 1.015 1.672 2.178 2.71 1.498 1.334 2.762 1.746 3.154 1.942.392.196.62.163.849-.098.229-.261.98-1.144 1.24-1.537.261-.392.523-.327.883-.196.36.131 2.289 1.08 2.68 1.276.392.196.653.294.752.458.098.163.098.947-.234 1.88z"/>
          </svg>
        )}
      </button>

      {/* Tooltip */}
      {!open && (
        <div className="fixed bottom-[5.5rem] right-5 z-40 bg-[#1e3a5f] text-white text-xs px-3 py-1.5 rounded-full shadow animate-pulse pointer-events-none">
          Devis gratuit 💬
        </div>
      )}
    </>
  );
}