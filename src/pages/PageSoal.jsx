import React, { useState, useEffect, useRef } from "react";
import PageShell from "../components/PageShell";
import RetroButton from "../components/RetroButton";
import { QUESTION_BANK } from "../data/questions.js";
import { submitQuizScore } from "../QuizScoreSubmitter.js";

const ESSAY_QUESTION = "Tuliskan hasil observasi Anda selama praktikum sistem saraf, termasuk struktur dan fungsi komponen sistem saraf yang Anda pelajari!";
const KESUMPULAN_PROMPT = "Buatlah kesimpulan singkat tentang apa yang Anda pelajari dari praktikum sistem saraf ini!";

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const prepareQuestion = (originalQuestion) => {
  const { id, soal, opsi, kunci: kunciOriginal, pembahasan } = originalQuestion;
  const entries = Object.entries(opsi);
  const shuffledEntries = shuffleArray(entries);

  const opsiShuffled = {};
  shuffledEntries.forEach(([_, value], index) => {
    const key = ['A', 'B', 'C', 'D'][index];
    opsiShuffled[key] = value;
  });

  const correctText = opsi[kunciOriginal];
  const kunciShuffled = Object.keys(opsiShuffled).find(
    (k) => opsiShuffled[k] === correctText
  );

  return {
    id,
    soal,
    opsiShuffled,
    kunciShuffled,
    kunciOriginal,
    pembahasan
  };
};

export default function PageSoal({ onNavigate, nama = "Siswa", kelas = "-" }) {
  // Step: 0 (PG 1-10), 1 (Esai), 2 (Kesimpulan), 3 (Layar Hasil)
  const [step, setStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentPgIndex, setCurrentPgIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [esaiAnswer, setEsaiAnswer] = useState("");
  const [kesimpulanText, setKesimpulanText] = useState("");
  // Timer using ref so we can reset it without causing re-render
  const startTimeRef = useRef(Date.now());

  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'success' | 'error'

  useEffect(() => {
    if (QUESTION_BANK && QUESTION_BANK.length > 0) {
      setQuestions(shuffleArray(QUESTION_BANK).map(prepareQuestion));
    }
  }, []);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#B2E2F8] flex items-center justify-center font-bold text-slate-800">
        Memuat Soal...
      </div>
    );
  }

  // Handler Submit ke Google Apps Script
  const handleSubmitData = async (calculatedScore, correctCount) => {
    setIsSubmitting(true);
    try {
      if (typeof submitQuizScore === "function") {
        const durationInSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const payload = {
          nama: nama || "Siswa",
          kelas: kelas || "-",
          skor: calculatedScore,                  // Mengisi kolom Skor
          score: calculatedScore,
          nilai: calculatedScore,
          waktu: durationInSeconds,               // Mengisi kolom Waktu Pengerjaan
          durasi: durationInSeconds,
          essay: esaiAnswer || "-",               // Mengisi kolom Jawaban Essay
          jawabanEssay: esaiAnswer || "-",
          jawabanEsai: esaiAnswer || "-",
          kesimpulan: kesimpulanText || "-",      // Mengisi kolom Kesimpulan
          tanggal: new Date().toLocaleString("id-ID")
        };
        await submitQuizScore(payload);
        setSubmitStatus("success");
      }
    } catch (err) {
      console.error("Gagal submit nilai:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Navigasi Back
  const handleBack = () => {
    if (step === 0) {
      if (currentPgIndex > 0) setCurrentPgIndex((prev) => prev - 1);
      else onNavigate("menu");
    } else if (step === 1) {
      setStep(0);
      setCurrentPgIndex(questions.length - 1);
    } else if (step === 2) {
      setStep(1);
    } else {
      onNavigate("menu");
    }
  };

  // Navigasi Next
  const handleNext = () => {
    if (step === 0) {
      if (currentPgIndex < questions.length - 1) {
        setCurrentPgIndex((prev) => prev + 1);
      } else {
        setStep(1); // Masuk ke Esai
      }
    } else if (step === 1) {
      setStep(2); // Masuk ke Kesimpulan
    } else if (step === 2) {
      // Hitung Skor & Submit
      let correct = 0;
      questions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.kunciShuffled) correct++;
      });
      const finalScore = Math.round((correct / questions.length) * 100);
      setScore(finalScore);
      setStep(3); // Masuk ke Layar Hasil
      handleSubmitData(finalScore, correct);
    }
  };

  const currentQuestion = questions[currentPgIndex];
  const currentPgSelected = selectedAnswers[currentPgIndex];

  // Quiz reset function
  const handleResetQuiz = () => {
    setStep(0);
    setCurrentPgIndex(0);
    setSelectedAnswers({});
    setEsaiAnswer("");
    setKesimpulanText("");
    setQuestions(shuffleArray(QUESTION_BANK).map(prepareQuestion));
    // Reset timer
    startTimeRef.current = Date.now();
  };

  // ================= 4. LAYAR HASIL AKHIR =================
  if (step === 3) {
    const isPassed = score >= 70;
    return (
      <PageShell onBack={() => onNavigate('menu')} showNext={false} className="p-0">
        <div className="min-h-[calc(100dvh-8rem)] bg-[#B2E2F8] flex items-center justify-center p-4">
          <div className="bg-white border-[4px] border-slate-900 rounded-[2.2rem] shadow-[8px_8px_0px_#000] p-6 sm:p-10 max-w-xl w-full text-center">
            <h1 className="font-['Press_Start_2P'] text-lg sm:text-xl text-slate-900 mb-6">
              HASIL PRAKTIKUM
            </h1>

            <div className="bg-slate-50 border-[3px] border-slate-900 rounded-2xl p-6 mb-6">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{nama} ({kelas})</p>
              <p className="font-['Press_Start_2P'] text-3xl sm:text-4xl text-slate-900 my-2">{score}</p>
              <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-xs uppercase border-2 border-slate-900 shadow-[2px_2px_0_#000] ${
                isPassed ? "bg-emerald-300 text-emerald-950" : "bg-rose-300 text-rose-950"
              }`}>
                {isPassed ? "★ LULUS KKM" : "BELUM LULUS"}
              </span>
            </div>

            {/* Status Kirim Nilai */}
            <div className="mb-6 text-xs font-bold">
              {isSubmitting && <p className="text-blue-600 animate-pulse">Mengirim nilai ke database guru...</p>}
              {submitStatus === "success" && <p className="text-emerald-600">✓ Nilai & kesimpulan berhasil tersimpan!</p>}
              {submitStatus === "error" && <p className="text-rose-600">⚠️ Gagal terhubung ke database. Nilai tetap tercatat di layar.</p>}
            </div>

            {/* Opsi Tombol Aksi */}
            <div className="flex flex-col gap-3 w-full mt-4">
              {/* Tombol Ulangi Kuis */}
              <RetroButton variant="yellow" onClick={handleResetQuiz}>
                🔄 ULANGI KUIS
              </RetroButton>

              {/* Tombol Daftar Pustaka */}
              <RetroButton variant="blue" onClick={() => onNavigate('dafpus')}>
                📚 DAFTAR PUSTAKA
              </RetroButton>

              {/* Tombol Kembali ke Menu */}
              <RetroButton variant="green" onClick={() => onNavigate('menu')}>
                🏠 KEMBALI KE MENU
              </RetroButton>
            </div>
          </div>
        </div>
      </PageShell>
    );
  }

  // ================= 1. SOAL PILIHAN GANDA (1-10) =================
  if (step === 0) {
    return (
      <PageShell className="p-0" nextDisabled={!currentPgSelected} onBack={handleBack} onNext={handleNext}>
        <div className="min-h-[calc(100dvh-8rem)] bg-[#B2E2F8] flex items-center justify-center p-4">
          <div className="bg-white border-[4px] border-slate-900 rounded-[2.2rem] shadow-[8px_8px_0px_#000] p-6 sm:p-8 max-w-3xl w-full">
            <div className="flex items-center justify-between border-b-[3px] border-slate-900 pb-3 mb-5">
              <span className="font-['Press_Start_2P'] text-xs sm:text-sm text-[#0284C7]">
                SOAL {currentPgIndex + 1} / {questions.length}
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-slate-100 border-2 border-slate-900 rounded-lg">
                Pilihan Ganda
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-6">
              {currentQuestion.soal}
            </h2>

            <div className="space-y-3">
              {Object.entries(currentQuestion.opsiShuffled).map(([key, text]) => {
                const isSelected = currentPgSelected === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedAnswers((prev) => ({ ...prev, [currentPgIndex]: key }))}
                    className={`w-full text-left flex items-center gap-3.5 px-4 py-3 rounded-2xl border-[3px] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#A7F3D0] border-slate-900 shadow-[4px_4px_0px_#000] translate-x-1"
                        : "bg-white hover:bg-slate-50 border-slate-900 shadow-[3px_3px_0px_#000]"
                    }`}
                  >
                    <span className={`w-8 h-8 shrink-0 rounded-xl flex items-center justify-center font-['Press_Start_2P'] text-xs border-[2.5px] border-slate-900 ${
                      isSelected ? "bg-[#10B981] text-white" : "bg-slate-100 text-slate-800"
                    }`}>
                      {key}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </PageShell>
    );
  }

  // ================= 2. SOAL ESSAI =================
  if (step === 1) {
    return (
      <PageShell className="p-0" nextDisabled={!esaiAnswer.trim()} onBack={handleBack} onNext={handleNext}>
        <div className="min-h-[calc(100dvh-8rem)] bg-[#B2E2F8] flex items-center justify-center p-4">
          <div className="bg-white border-[4px] border-slate-900 rounded-[2.2rem] shadow-[8px_8px_0px_#000] p-6 sm:p-8 max-w-3xl w-full">
            <div className="flex items-center justify-between border-b-[3px] border-slate-900 pb-3 mb-5">
              <span className="font-['Press_Start_2P'] text-xs sm:text-sm text-purple-600">
                PERTANYAAN ESAI
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-purple-100 border-2 border-slate-900 rounded-lg">
                Sistem Saraf
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-6">
              {ESSAY_QUESTION}
            </h2>

            {/* Textarea Essay */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-900 mb-1">Jawaban Essay:</label>
              <textarea
                value={esaiAnswer}
                onChange={(e) => setEsaiAnswer(e.target.value)}
                className="w-full min-h-[120px] border-[4px] border-slate-900 rounded-xl px-4 py-3 font-sans text-slate-900 focus:outline-none focus:border-slate-600 resize-none"
                placeholder="Tulis jawaban essay Anda di sini..."
              />
              <p className="text-xs text-slate-500 italic">
                {esaiAnswer.length} karakter
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    );
  }

  // ================= 3. SOAL KESIMPULAN =================
  if (step === 2) {
    return (
      <PageShell className="p-0" nextDisabled={!kesimpulanText.trim()} onBack={handleBack} onNext={handleNext}>
        <div className="min-h-[calc(100dvh-8rem)] bg-[#B2E2F8] flex items-center justify-center p-4">
          <div className="bg-white border-[4px] border-slate-900 rounded-[2.2rem] shadow-[8px_8px_0px_#000] p-6 sm:p-8 max-w-3xl w-full">
            <div className="flex items-center justify-between border-b-[3px] border-slate-900 pb-3 mb-5">
              <span className="font-['Press_Start_2P'] text-xs sm:text-sm text-[#0284C7]">
                KESUMPULAN PRAKTIKUM
              </span>
              <span className="text-xs font-bold px-3 py-1 bg-slate-100 border-2 border-slate-900 rounded-lg">
                Sistem Saraf
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-6">
              {KESUMPULAN_PROMPT}
            </h2>

            {/* Textarea Kesimpulan */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-900 mb-1">Kesimpulan Anda:</label>
              <textarea
                value={kesimpulanText}
                onChange={(e) => setKesimpulanText(e.target.value)}
                className="w-full min-h-[120px] border-[4px] border-slate-900 rounded-xl px-4 py-3 font-sans text-slate-900 focus:outline-none focus:border-slate-600 resize-none"
                placeholder="Tulis kesimpulan praktikum Anda di sini..."
              />
              <p className="text-xs text-slate-500 italic">
                {kesimpulanText.length} karakter
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    );
  }
}