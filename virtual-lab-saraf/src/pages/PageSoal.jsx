import { useState } from "react";
import PageShell from "../components/PageShell";
import { QUESTION_BANK, ESAI_PROMPT } from "../data/questions";

export default function PageSoal({
  pageNumber,
  answers,
  setAnswers,
  esaiJawaban,
  setEsaiJawaban,
  onBack,
  onNext,
}) {
  const isEsaiPage = pageNumber === 13;
  const questionIndex = pageNumber - 9;
  const question = QUESTION_BANK[questionIndex];
  const [selected, setSelected] = useState(answers[questionIndex] ?? null);

  const handleNext = () => {
    if (isEsaiPage) {
      if (!esaiJawaban.trim()) return;
      onNext();
      return;
    }
    if (!selected) return;
    const updated = [...answers];
    updated[questionIndex] = selected;
    setAnswers(updated);
    onNext();
  };

  if (isEsaiPage) {
    return (
      <PageShell
        onBack={onBack}
        onNext={handleNext}
        nextDisabled={!esaiJawaban.trim()}
      >
        <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0_#1e293b]">
          <p className="text-sm font-bold uppercase text-emerald-700 mb-2">
            Studi Kasus — Esai
          </p>
          <h1 className="text-lg sm:text-xl font-extrabold leading-relaxed mb-6">
            {ESAI_PROMPT}
          </h1>
          <textarea
            value={esaiJawaban}
            onChange={(e) => setEsaiJawaban(e.target.value)}
            placeholder="Tulis jawaban esai kamu di sini..."
            rows={10}
            className="w-full border-3 border-slate-800 rounded-xl px-4 py-3 bg-white outline-none focus:ring-4 focus:ring-emerald-300 resize-y min-h-[200px]"
          />
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell onBack={onBack} onNext={handleNext} nextDisabled={!selected}>
      <div className="bg-white/90 border-4 border-slate-800 rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0_#1e293b]">
        <p className="text-sm font-bold uppercase text-emerald-700 mb-2">
          Soal {questionIndex + 1} dari 5
        </p>
        <h1 className="text-lg sm:text-xl font-extrabold leading-relaxed mb-6">
          {question.soal}
        </h1>

        <div className="space-y-3">
          {Object.entries(question.opsi).map(([kode, teks]) => (
            <button
              key={kode}
              type="button"
              onClick={() => setSelected(kode)}
              className={`w-full text-left flex items-start gap-3 px-4 py-3.5 rounded-xl border-3 transition-all ${
                selected === kode
                  ? "bg-emerald-300 border-slate-900 shadow-[3px_3px_0_#1e293b]"
                  : "bg-white border-slate-700 hover:bg-emerald-100 hover:border-slate-900"
              }`}
            >
              <span
                className={`w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-sm font-extrabold border-2 ${
                  selected === kode
                    ? "bg-emerald-500 border-slate-900 text-white"
                    : "border-slate-600 text-slate-700"
                }`}
              >
                {kode}
              </span>
              <span className="text-sm sm:text-base pt-0.5 font-medium">
                {teks}
              </span>
            </button>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
