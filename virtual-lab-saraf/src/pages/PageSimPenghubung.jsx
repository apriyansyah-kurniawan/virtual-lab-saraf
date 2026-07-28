import { useState } from "react";
import PageShell from "../components/PageShell";
import { SIM_PROMPTS } from "../data/tujuanData";

export default function PageSimPenghubung({ onBack, onNext }) {
  const [impulsePos, setImpulsePos] = useState(0);
  const [done, setDone] = useState(false);

  const dorongImpuls = () => {
    if (done) return;
    const next = Math.min(impulsePos + 34, 100);
    setImpulsePos(next);
    if (next >= 100) setDone(true);
  };

  return (
    <PageShell onBack={onBack} onNext={onNext} nextDisabled={!done}>
      <p className="prompt-line mb-4 md:mb-6">{SIM_PROMPTS.penghubung}</p>

      <div className="sim-layout items-stretch">
        <div className="sim-card flex items-center">
          <button
            type="button"
            onClick={dorongImpuls}
            disabled={done}
            className="interactive-btn-primary select-none w-full max-w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 border-4 border-slate-900 text-white font-extrabold py-4 rounded-xl shadow-[4px_4px_0_#1e293b] uppercase tracking-wide text-sm sm:text-base"
          >
            {done ? "Impuls Terdorong ✓" : "Dorong Impuls →"}
          </button>
        </div>

        <div className="sim-card sim-diagram-card">
          <div className="text-center mb-3 md:mb-4">
            <p className="font-extrabold uppercase text-sm sm:text-base">
              Sumsum Tulang Belakang
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-full min-h-[180px] h-[180px] sm:h-[200px] md:h-44 bg-slate-200 border-4 border-slate-800 rounded-xl overflow-hidden">
            <div className="absolute inset-y-4 left-[15%] right-[15%] sm:left-[20%] sm:right-[20%] bg-purple-300/60 border-2 border-dashed border-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase text-purple-900 text-center px-2 leading-snug">
                Interneuron
                <br />
                (Saraf Penghubung)
              </span>
            </div>

            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 border-2 border-slate-900 rounded-full shadow-[0_0_10px_#fb923c] transition-all duration-700 ease-in-out z-10"
              style={{ left: `calc(${impulsePos * 0.7 + 5}% - 10px)` }}
            />

            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-bold">
              Sensorik
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs sm:text-sm font-bold">
              Motorik
            </div>
          </div>

          <p className="text-center text-sm font-bold text-orange-600 mt-3 uppercase">
            Impuls
          </p>
        </div>
      </div>
    </PageShell>
  );
}
