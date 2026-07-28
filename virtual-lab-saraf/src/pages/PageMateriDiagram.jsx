import PageShell from "../components/PageShell";
import { NEURON_PARTS } from "../data/neuronData";

export default function PageMateriDiagram({ onBack, onSelectOrganel }) {
  return (
    <PageShell onBack={onBack} showNext={false} wide>
      <div className="mb-4 md:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase">
          Materi
        </h1>
        <p className="text-slate-800 font-semibold mt-1 text-sm sm:text-base">
          sentuh kolom untuk melihat materi
        </p>
      </div>

      <div className="content-card min-h-[320px] sm:min-h-[420px] relative overflow-hidden mb-4">
        <div className="relative w-full h-[300px] sm:h-[360px] md:h-[400px]">
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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-full">
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
    </PageShell>
  );
}
