import PageShell from "../components/PageShell";
import { LANGKAH_PRAKTIKUM } from "../data/tujuanData";

export default function PageLangkahPraktikum({ onBack, onNext }) {
  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">
          Langkah Praktikum
        </h1>
        <p className="text-slate-800 font-semibold mt-2">
          Pelajari tiga tahap alur impuls gerak refleks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LANGKAH_PRAKTIKUM.map((langkah) => (
          <div
            key={langkah.step}
            className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 shadow-[5px_5px_0_#1e293b] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 bg-emerald-500 border-3 border-slate-900 text-white font-extrabold text-xl flex items-center justify-center rounded-xl shadow-[3px_3px_0_#1e293b]">
                {langkah.step}
              </span>
              <h2 className="text-lg font-extrabold uppercase">{langkah.title}</h2>
            </div>
            <p className="text-slate-800 leading-relaxed text-sm flex-1">
              {langkah.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
