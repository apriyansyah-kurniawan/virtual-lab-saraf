import PageShell from "../components/PageShell";
import { TUJUAN_PRAKTIKUM } from "../data/tujuanData";

export default function PageTujuan({ onBack, onNext }) {
  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="content-card w-full max-w-full">
        <h1
          style={{ fontFamily: "'Press Start 2P', monospace" }}
          className="text-lg md:text-2xl text-slate-900 text-center font-black tracking-wider uppercase mb-8"
        >
          TUJUAN PRAKTIKUM
        </h1>

        <ol className="space-y-4 md:space-y-5">
          {TUJUAN_PRAKTIKUM.map((tujuan, index) => (
            <li
              key={tujuan}
              className="flex gap-3 sm:gap-4 items-start bg-[#9ee4ff]/40 border-3 border-slate-800 rounded-xl p-4 sm:p-5"
            >
              <span
                style={{ fontFamily: "'Press Start 2P', monospace" }}
                className="flex-shrink-0 w-11 h-11 bg-[#48BB78] border-[3px] border-slate-900 rounded-xl flex items-center justify-center text-white shadow-[3px_3px_0px_#000] shrink-0 text-sm md:text-base font-bold"
              >
                {index + 1}
              </span>
              <p className="font-bold text-slate-900 text-sm md:text-base leading-relaxed">
                {tujuan}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}