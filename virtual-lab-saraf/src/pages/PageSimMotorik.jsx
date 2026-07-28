import { useState } from "react";
import PageShell from "../components/PageShell";
import { SIM_PROMPTS } from "../data/tujuanData";

export default function PageSimMotorik({ onBack, onNext }) {
  const [impulsePos, setImpulsePos] = useState(0);
  const [armFlex, setArmFlex] = useState(false);
  const [done, setDone] = useState(false);

  const dorongImpuls = () => {
    if (done) return;
    const next = Math.min(impulsePos + 25, 100);
    setImpulsePos(next);
    if (next >= 100) {
      setDone(true);
      setTimeout(() => setArmFlex(true), 400);
    }
  };

  return (
    <PageShell onBack={onBack} onNext={onNext} nextDisabled={!done}>
      <p className="prompt-line mb-4 md:mb-6">{SIM_PROMPTS.motorik}</p>

      <div className="sim-layout items-stretch">
        <div className="sim-card flex items-center">
          <button
            type="button"
            onClick={dorongImpuls}
            disabled={done}
            className="interactive-btn-primary select-none w-full max-w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 border-4 border-slate-900 text-white font-extrabold py-4 rounded-xl shadow-[4px_4px_0_#1e293b] uppercase tracking-wide text-sm sm:text-base"
          >
            {done ? "Gerak Refleks Terjadi ✓" : "Dorong Impuls →"}
          </button>
        </div>

        <div className="sim-card sim-diagram-card">
          <div className="relative w-full min-h-[220px] h-[220px] sm:h-[260px] md:h-[280px]">
            <div className="absolute left-[4%] sm:left-[8%] top-[18%] w-[34%] sm:w-[28%] min-h-[3.5rem] sm:min-h-[4rem] bg-slate-300 border-3 border-slate-800 rounded-lg flex items-center justify-center text-[11px] sm:text-xs font-bold text-center px-1 leading-tight">
              Sumsum Tulang Belakang
            </div>

            <div className="absolute left-[34%] sm:left-[38%] top-[40%] right-[8%] sm:right-[10%] h-2 sm:h-2.5 bg-slate-700 rounded-full">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 border-2 border-slate-900 rounded-full shadow-[0_0_8px_#fb923c] transition-all duration-500"
                style={{ left: `${impulsePos * 0.85}%` }}
              />
            </div>
            <p className="absolute left-[36%] sm:left-[42%] top-[52%] text-[11px] sm:text-xs font-bold uppercase">
              Saraf Motorik
            </p>

            <div
              className={`absolute right-[4%] sm:right-[8%] top-[12%] transition-transform duration-700 origin-bottom-left ${
                armFlex ? "-rotate-[35deg] -translate-y-4" : ""
              }`}
            >
              <div className="text-5xl sm:text-6xl">💪</div>
              <p className="text-[11px] sm:text-xs font-bold uppercase text-center mt-1">
                Efektor (Otot)
              </p>
            </div>

            <div
              className={`absolute right-[14%] sm:right-[18%] top-[6%] transition-transform duration-700 origin-bottom-right ${
                armFlex ? "-rotate-[40deg] -translate-x-6 -translate-y-2" : ""
              }`}
            >
              <div className="text-4xl sm:text-5xl">🖐️</div>
            </div>

            {armFlex && (
              <p className="absolute bottom-0 sm:bottom-2 left-0 right-0 text-center text-xs sm:text-sm font-extrabold text-emerald-700 uppercase animate-pulse px-2">
                ⚡ Gerak refleks — tangan ditarik!
              </p>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
