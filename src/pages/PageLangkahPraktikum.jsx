import PageShell from "../components/PageShell";
import { LANGKAH_PRAKTIKUM } from "../data/tujuanData";

export default function PageLangkahPraktikum({ onBack, onNext }) {
  return (
    <PageShell onBack={onBack} onNext={onNext} wide>
      <div className="mb-6 md:mb-8 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase">
          Langkah Praktikum
        </h1>
        <p className="text-slate-800 font-semibold mt-2 text-sm sm:text-base">
          Pelajari tiga tahap alur impuls gerak refleks
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-full">
        {LANGKAH_PRAKTIKUM.map((langkah) => (
          <div
            key={langkah.step}
            className="content-card flex flex-col !p-5 md:!p-6"
          >
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <span className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 border-3 border-slate-900 text-white font-extrabold text-lg sm:text-xl flex items-center justify-center rounded-xl shadow-[3px_3px_0_#1e293b]">
                {langkah.step}
              </span>
              <h2 className="text-base sm:text-lg font-extrabold uppercase">
                {langkah.title}
              </h2>
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
