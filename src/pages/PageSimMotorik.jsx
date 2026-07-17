import { useState } from "react";
import PageShell from "../components/PageShell";

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
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
          Simulasi — Tahap Motorik
        </h1>
        <p className="text-slate-800 font-semibold mt-2 bg-white/80 border-3 border-slate-800 rounded-xl px-4 py-3 inline-block shadow-[3px_3px_0_#1e293b]">
          Dorong impuls kearah saraf pusat untuk melihat pergerakan
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-8 shadow-[5px_5px_0_#1e293b]">
          <p className="font-bold mb-4 uppercase text-sm tracking-wide">
            Instruksi
          </p>
          <p className="text-slate-800 leading-relaxed mb-6">
            Dorong impuls melalui saraf motorik menuju otot efektor. Perhatikan
            gerakan refleks menarik tangan menjauhi sumber panas.
          </p>
          <button
            type="button"
            onClick={dorongImpuls}
            disabled={done}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 border-4 border-slate-900 text-white font-extrabold py-4 rounded-xl shadow-[4px_4px_0_#1e293b] uppercase tracking-wide transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            {done ? "Gerak Refleks Terjadi ✓" : "Dorong Impuls →"}
          </button>
        </div>

        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 shadow-[5px_5px_0_#1e293b] min-h-[320px]">
          <div className="relative h-[260px]">
            <div className="absolute left-[8%] top-[20%] w-[28%] h-16 bg-slate-300 border-3 border-slate-800 rounded-lg flex items-center justify-center text-xs font-bold text-center px-1">
              Sumsum Tulang Belakang
            </div>

            <div className="absolute left-[38%] top-[38%] right-[10%] h-2 bg-slate-700 rounded-full">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 border-2 border-slate-900 rounded-full shadow-[0_0_8px_#fb923c] transition-all duration-500"
                style={{ left: `${impulsePos * 0.85}%` }}
              />
            </div>
            <p className="absolute left-[42%] top-[48%] text-[10px] font-bold uppercase">
              Saraf Motorik
            </p>

            <div
              className={`absolute right-[8%] top-[15%] transition-transform duration-700 origin-bottom-left ${
                armFlex ? "-rotate-[35deg] -translate-y-4" : ""
              }`}
            >
              <div className="text-6xl">💪</div>
              <p className="text-xs font-bold uppercase text-center mt-1">
                Otot Efektor
              </p>
            </div>

            <div
              className={`absolute right-[18%] top-[8%] transition-transform duration-700 origin-bottom-right ${
                armFlex ? "-rotate-[40deg] -translate-x-6 -translate-y-2" : ""
              }`}
            >
              <div className="text-5xl">🖐️</div>
              <p className="text-[10px] font-bold uppercase text-center">
                Tangan
              </p>
            </div>

            {armFlex && (
              <p className="absolute bottom-2 left-0 right-0 text-center text-sm font-extrabold text-emerald-700 uppercase animate-pulse">
                ⚡ Gerak refleks — tangan ditarik!
              </p>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
