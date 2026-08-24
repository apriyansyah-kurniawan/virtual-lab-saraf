import React from "react";
import PageShell from "../components/PageShell";

const TUJUAN_ITEMS = [
  "Mengidentifikasi struktur dan bagian-bagian sel saraf (Neuron).",
  "Menganalisis mekanisme perambatan impuls pada sistem saraf.",
  "Menjelaskan alur lengkung refleks pada gerak refleks manusia."
];

export default function PageTujuan({ onBack, onNext }) {
  return (
    <PageShell className="p-0" onBack={onBack} onNext={onNext}>
      <div className="min-h-[calc(100dvh-8rem)] flex items-center justify-center p-4">
        {/* Card Frame Ukuran Compact Terkunci */}
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] p-6 sm:p-8 w-full max-w-[580px] mx-auto">

          {/* Judul Halaman */}
          <h1 className="font-['Press_Start_2P'] text-sm sm:text-base text-slate-900 text-center tracking-wide mb-6">
            TUJUAN PRAKTIKUM
          </h1>

          {/* List Poin Tujuan */}
          <div className="space-y-3.5">
            {TUJUAN_ITEMS.map((text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-[#E0F2FE] border-[2.5px] border-slate-900 rounded-2xl shadow-[3px_3px_0px_#000]"
              >
                <span className="w-8 h-8 shrink-0 bg-[#5CB85C] border-2 border-slate-900 rounded-xl flex items-center justify-center font-['Press_Start_2P'] text-xs text-white">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageShell>
  );
}