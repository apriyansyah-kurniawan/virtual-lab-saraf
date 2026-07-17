import PageShell from "../components/PageShell";
import { TUJUAN_PRAKTIKUM } from "../data/tujuanData";

export default function PageTujuan({ onBack, onNext }) {
  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="bg-white/90 border-4 border-slate-800 rounded-2xl shadow-[6px_6px_0_#1e293b] p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase text-center mb-8">
          Tujuan Praktikum
        </h1>

        <ol className="space-y-5 max-w-2xl mx-auto">
          {TUJUAN_PRAKTIKUM.map((tujuan, index) => (
            <li
              key={tujuan}
              className="flex gap-4 items-start bg-[#9ee4ff]/40 border-3 border-slate-800 rounded-xl p-5"
            >
              <span className="flex-shrink-0 w-10 h-10 bg-emerald-500 border-3 border-slate-900 text-white font-extrabold flex items-center justify-center rounded-lg shadow-[3px_3px_0_#1e293b]">
                {index + 1}
              </span>
              <p className="text-base sm:text-lg font-semibold leading-relaxed pt-1.5">
                {tujuan}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
