import { useState } from "react";
import PageShell from "../components/PageShell";
import { NEURON_PARTS } from "../data/neuronData";

export default function PageMateri({ onBack, onNext }) {
  const [activePart, setActivePart] = useState(null);

  const selected = NEURON_PARTS.find((p) => p.id === activePart);

  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Materi</h1>
        <p className="text-slate-800 font-semibold mt-1">
          sentuh kolom untuk melihat materi
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 shadow-[5px_5px_0_#1e293b] min-h-[380px] relative overflow-hidden">
          <div className="relative w-full h-[320px]">
            <div className="absolute left-[14%] top-[30%] w-24 h-24 rounded-full bg-sky-300 border-4 border-slate-800" />
            <div className="absolute left-[20%] top-[38%] w-10 h-10 rounded-full bg-purple-300 border-3 border-slate-800" />
            <div className="absolute left-[8%] top-[18%] w-12 h-1 bg-slate-800 rotate-[25deg]" />
            <div className="absolute left-[6%] top-[32%] w-14 h-1 bg-slate-800 rotate-[5deg]" />
            <div className="absolute left-[8%] top-[55%] w-12 h-1 bg-slate-800 -rotate-[15deg]" />
            <div className="absolute left-[32%] top-[48%] w-[55%] h-2 bg-slate-700 rounded-full" />
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute top-[46%] h-4 bg-orange-400 border-2 border-slate-800 rounded-full"
                style={{ left: `${36 + i * 12}%`, width: "8%" }}
              />
            ))}
            <div className="absolute right-[6%] top-[44%] w-8 h-8 rounded-full bg-emerald-400 border-3 border-slate-800" />

            {NEURON_PARTS.map((part) => (
              <button
                key={part.id}
                type="button"
                onClick={() => setActivePart(part.id)}
                className={`absolute ${part.posisi} z-10 text-[10px] sm:text-xs font-extrabold px-2 py-1 border-2 border-slate-900 rounded-md shadow-[2px_2px_0_#1e293b] transition-transform hover:scale-105 ${
                  activePart === part.id
                    ? "bg-emerald-400 text-slate-900"
                    : "bg-white text-slate-800 hover:bg-emerald-200"
                }`}
              >
                {part.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 content-start">
          {NEURON_PARTS.map((part) => (
            <button
              key={part.id}
              type="button"
              onClick={() => setActivePart(part.id)}
              className={`text-left p-4 border-3 border-slate-800 rounded-xl font-bold text-sm uppercase shadow-[3px_3px_0_#1e293b] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#1e293b] transition-all ${
                activePart === part.id
                  ? "bg-emerald-400"
                  : "bg-white/90 hover:bg-emerald-100"
              }`}
            >
              {part.label}
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4"
          onClick={() => setActivePart(null)}
          role="presentation"
        >
          <div
            className="w-full max-w-lg bg-white border-4 border-slate-900 rounded-2xl shadow-[8px_8px_0_#1e293b] p-6 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="neuron-dialog-title"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2
                id="neuron-dialog-title"
                className="text-xl font-extrabold uppercase text-emerald-700"
              >
                {selected.label}
              </h2>
              <button
                type="button"
                onClick={() => setActivePart(null)}
                className="w-8 h-8 bg-red-400 border-2 border-slate-900 rounded-lg font-bold hover:bg-red-300"
                aria-label="Tutup"
              >
                ×
              </button>
            </div>
            <p className="text-slate-800 leading-relaxed">{selected.definisi}</p>
          </div>
        </div>
      )}
    </PageShell>
  );
}
