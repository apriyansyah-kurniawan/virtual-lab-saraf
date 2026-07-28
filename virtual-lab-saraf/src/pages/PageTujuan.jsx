import PageShell from "../components/PageShell";
import { TUJUAN_PRAKTIKUM } from "../data/tujuanData";

export default function PageTujuan({ onBack, onNext }) {
  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="content-card w-full max-w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-center mb-6 md:mb-8">
          Tujuan Praktikum
        </h1>

        <ol className="space-y-4 md:space-y-5">
          {TUJUAN_PRAKTIKUM.map((tujuan, index) => (
            <li
              key={tujuan}
              className="flex gap-3 sm:gap-4 items-start bg-[#9ee4ff]/40 border-3 border-slate-800 rounded-xl p-4 sm:p-5"
            >
              <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500 border-3 border-slate-900 text-white font-extrabold flex items-center justify-center rounded-lg shadow-[3px_3px_0_#1e293b]">
                {index + 1}
              </span>
              <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed pt-1">
                {tujuan}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}
