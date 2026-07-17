import { useState } from "react";
import PageShell from "../components/PageShell";

export default function PageSimPenghubung({ onBack, onNext }) {
  const [impulsePos, setImpulsePos] = useState(0);
  const [done, setDone] = useState(false);

  const dorongImpuls = () => {
    if (done) return;
    if (impulsePos < 100) {
      setImpulsePos((p) => Math.min(p + 34, 100));
      if (impulsePos + 34 >= 100) setDone(true);
    }
  };

  return (
    <PageShell onBack={onBack} onNext={onNext} nextDisabled={!done}>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
          Simulasi — Tahap Penghubung
        </h1>
        <p className="text-slate-800 font-semibold mt-2 bg-white/80 border-3 border-slate-800 rounded-xl px-4 py-3 inline-block shadow-[3px_3px_0_#1e293b]">
          Dorong impuls kearah saraf penghubung...
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-8 shadow-[5px_5px_0_#1e293b]">
          <p className="font-bold mb-4 uppercase text-sm tracking-wide">
            Instruksi
          </p>
          <p className="text-slate-800 leading-relaxed mb-6">
            Klik tombol di bawah untuk mendorong impuls melalui interneuron di
            dalam sumsum tulang belakang menuju saraf motorik.
          </p>
          <button
            type="button"
            onClick={dorongImpuls}
            disabled={done}
            className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 border-4 border-slate-900 text-white font-extrabold py-4 rounded-xl shadow-[4px_4px_0_#1e293b] uppercase tracking-wide transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#1e293b]"
          >
            {done ? "Impuls Terdorong ✓" : "Dorong Impuls →"}
          </button>
        </div>

        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 shadow-[5px_5px_0_#1e293b] min-h-[300px] relative">
          <div className="text-center mb-4">
            <p className="font-extrabold uppercase">Sumsum Tulang Belakang</p>
          </div>

          <div className="relative mx-auto w-full max-w-md h-40 bg-slate-200 border-4 border-slate-800 rounded-xl overflow-hidden">
            <div className="absolute inset-y-4 left-[20%] right-[20%] bg-purple-300/60 border-2 border-dashed border-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold uppercase text-purple-900 text-center px-2">
                Interneuron
                <br />
                (Saraf Penghubung)
              </span>
            </div>

            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-orange-500 border-2 border-slate-900 rounded-full shadow-[0_0_10px_#fb923c] transition-all duration-700 ease-in-out z-10"
              style={{ left: `calc(${impulsePos * 0.7 + 5}% - 10px)` }}
            />

            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-bold">
              Sensorik
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold">
              Motorik
            </div>
          </div>

          <div className="mt-4 h-3 bg-slate-300 border-2 border-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-700"
              style={{ width: `${impulsePos}%` }}
            />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
