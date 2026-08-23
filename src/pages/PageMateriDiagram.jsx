import { useState } from "react";
import PixelNav from "../components/PixelNav";
import { NEURON_PARTS } from "../data/neuronData";
import { neuronFull } from "../constants/assets";

export default function PageMateriDiagram({ onBack, onSelectOrganel }) {
  return (
    <div className="min-h-screen w-screen bg-[#9ee4ff] overflow-hidden flex flex-col p-6 relative">
      {/* Back button at bottom-left */}
      <button
        onClick={onBack}
        className="absolute bottom-6 left-6 z-50 pointer-events-auto pixel-btn pixel-btn-nav select-none hover:bg-green-500 active:scale-95 transition-transform duration-150"
        aria-label="Navigasi kiri"
      >
        <span className="pixel-arrow pixel-arrow-left" />
      </button>

      {/* Main content area - takes remaining space */}
      <div className="flex-1 flex flex-col items-center w-full">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase">
            Materi
          </h1>
          <p className="text-slate-800 font-semibold mt-1 text-sm sm:text-base">
            sentuh kolom untuk melihat materi
          </p>
        </div>

        {/* Diagram container with limited height */}
        <div className="flex-1 w-full">
          <div className="content-card min-h-[320px] sm:min-h-[420px] relative overflow-hidden mb-4 flex items-center justify-center">
            {/* Limited height area for the white diagram box */}
            <div className="max-h-[55vh] w-full flex items-center justify-center p-2">
              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[400px]">
                <img
                  src={neuronFull}
                  alt="Struktur Neuron Lengkap"
                  className="mx-auto mt-8 w-[280px] h-auto object-contain rounded-2xl border-4 border-slate-900 shadow-[5px_5px_0_#1e293b]"
                />
                <div className="absolute left-[14%] top-[28%] w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-sky-300 border-4 border-slate-800" />
                <div className="absolute left-[20%] top-[36%] w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-purple-300 border-3 border-slate-800" />
                <div className="absolute left-[6%] top-[16%] w-14 h-1 bg-slate-800 rotate-[25deg]" />
                <div className="absolute left-[4%] top-[30%] w-16 h-1 bg-slate-800 rotate-[5deg]" />
                <div className="absolute left-[6%] top-[52%] w-14 h-1 bg-slate-800 -rotate-[15deg]" />
                <div className="absolute left-[6%] top-[66%] w-12 h-1 bg-slate-800 -rotate-[30deg]" />
                <div className="absolute left-[32%] top-[46%] w-[58%] h-2 bg-slate-700 rounded-full" />
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute top-[44%] h-4 bg-orange-400 border-2 border-slate-800 rounded-full"
                    style={{ left: `${36 + i * 12}%`, width: "8%" }}
                  />
                ))}
                <div className="absolute right-[5%] top-[42%] w-8 h-8 rounded-full bg-emerald-400 border-3 border-slate-800" />

                {/* Anatomy hotspot buttons */}
                {NEURON_PARTS.map((part) => (
                  <button
                    key={part.id}
                    type="button"
                    onClick={() => onSelectOrganel(part.id)}
                    className={`organel-btn select-none absolute ${part.posisi} z-10 text-[8px] sm:text-xs font-extrabold px-1.5 sm:px-2 py-1 sm:py-1.5 border-2 border-slate-900 rounded-md shadow-[2px_2px_0_#1e293b] bg-white uppercase`}
                  >
                    {part.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Anatomy option buttons grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-full mt-4">
          {NEURON_PARTS.map((part) => (
            <button
              key={part.id}
              type="button"
              onClick={() => onSelectOrganel(part.id)}
              className="organel-grid-btn select-none text-center p-2.5 sm:p-3 border-3 border-slate-800 rounded-xl font-bold text-[10px] sm:text-xs uppercase shadow-[3px_3px_0_#1e293b] bg-white/90"
            >
              {part.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}