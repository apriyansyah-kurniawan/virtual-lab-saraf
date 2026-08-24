import { useState, useMemo, useEffect } from "react";
import { QUESTION_BANK } from "./data/questions";
import { PAGES } from "./constants/pages";
import PageLogin from "./pages/PageLogin";
import PageTujuan from "./pages/PageTujuan";
import PageMenu from "./pages/PageMenu";
import PageMateriDiagram from "./pages/PageMateriDiagram";
import PageMateriDefinisi from "./pages/PageMateriDefinisi";
import PageLangkahPraktikum from "./pages/PageLangkahPraktikum";
import PageSimSensorik from "./pages/PageSimSensorik";
import PageSimPenghubung from "./pages/PageSimPenghubung";
import PageSimMotorik from "./pages/PageSimMotorik";
import PageSoal from "./pages/PageSoal";
import PageSkor from "./pages/PageSkor";
import PageHome from "./pages/PageHome";
import PageDafpus from "./pages/PageDafpus";

export default function VirtualLabSarafApp() {
  const [page, setPage] = useState(PAGES.home);
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');
  const [kesimpulan, setKesimpulan] = useState('');
  const [selectedOrganel, setSelectedOrganel] = useState("dendrit");
  const [answers, setAnswers] = useState(Array(QUESTION_BANK.length).fill(null));
  const [durasiDetik, setDurasiDetik] = useState(0);
  const [skor, setSkor] = useState(0); // Changed to state so we can pass setter
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success, error

  // Update skor whenever answers change
  useEffect(() => {
    const benar = answers.reduce((acc, jawaban, i) => {
      if (jawaban === QUESTION_BANK[i].kunci) return acc + 1;
      return acc;
    }, 0);
    setSkor(benar * 20);
  }, [answers]);

  const goTo = (target) => setPage(target);

  const resetQuiz = () => {
    setAnswers(Array(QUESTION_BANK.length).fill(null));
    setKesimpulan("");
    setDurasiDetik(0);
    setSubmitStatus('idle');
    setNama('');
    setKelas('9A');
    setPage(PAGES.soal_1);
  };

  const autoSubmitScore = async (payload) => {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxMXczbWFxI4HbwmE44Lv00-CY8APwNb0pQOveLE_lEj8mrILwpDdNUVM8FPZO2KbuZ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setSubmitStatus('success');
      console.log("Nilai otomatis terkirim!");
    } catch (err) {
      setSubmitStatus('error');
      console.error("Gagal auto-submit:", err);
    }
  };

  useEffect(() => {
    const isQuizActive = [
      PAGES.soal_1,
      PAGES.soal_2,
      PAGES.soal_3,
      PAGES.soal_4,
      PAGES.soal_5_esai
    ].includes(page);
    if (isQuizActive) {
      const interval = setInterval(() => {
        setDurasiDetik(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [page]);

  useEffect(() => {
    if (page === PAGES.skor && submitStatus === 'idle') {
      setSubmitStatus('submitting');
      autoSubmitScore({
        name: nama.trim() || 'Anonim',
        class: kelas.trim() || '9A',
        score: skor,
        timeTaken: durasiDetik,
        essayAnswer: kesimpulan.trim() || '',
        timestamp: new Date().toISOString(),
      });
    }
  }, [page, submitStatus, skor, durasiDetik, kesimpulan, nama, kelas]);

  const renderPage = () => {
    switch (page) {
      case PAGES.home:
        return (
          <PageHome
            onStart={() => goTo(PAGES.login)}
          />
        );
      case PAGES.login:
        return (
          <PageLogin
            nama={nama}
            setNama={setNama}
            kelas={kelas}
            setKelas={setKelas}
            onStart={() => goTo(PAGES.tujuan)}
            onBack={() => goTo(PAGES.home)}
          />
        );
      case PAGES.tujuan:
        return (
          <PageTujuan
            onBack={() => goTo(PAGES.login)}
            onNext={() => goTo(PAGES.menu)}
          />
        );
      case PAGES.menu:
        return (
          <PageMenu
            onBack={() => goTo(PAGES.tujuan)}
            onNavigate={(target) => {
              if (target === 'materi') goTo(PAGES.materi_diagram);
              else if (target === 'praktikum') goTo(PAGES.langkah);
              else if (target === 'soal') goTo(PAGES.soal_1);
              else if (target === 'tujuan') goTo(PAGES.tujuan);
            }}
          />
        );
      case PAGES.materi_diagram:
        return (
          <PageMateriDiagram
            onBack={() => goTo(PAGES.menu)}
            onSelectOrganel={(id) => {
              setSelectedOrganel(id);
              goTo(PAGES.materi_definisi);
            }}
          />
        );
      case PAGES.materi_definisi:
        return (
          <PageMateriDefinisi
            organelId={selectedOrganel}
            onBack={() => goTo(PAGES.materi_diagram)}
            onNext={() => goTo(PAGES.menu)}
          />
        );
      case PAGES.langkah:
        return (
          <PageLangkahPraktikum
            onBack={() => goTo(PAGES.menu)}
            onNext={() => goTo(PAGES.sim_sensorik)}
          />
        );
      case PAGES.sim_sensorik:
        return (
          <PageSimSensorik
            onBack={() => goTo(PAGES.langkah)}
            onNext={() => goTo(PAGES.sim_penghubung)}
          />
        );
      case PAGES.sim_penghubung:
        return (
          <PageSimPenghubung
            onBack={() => goTo(PAGES.sim_sensorik)}
            onNext={() => goTo(PAGES.sim_motorik)}
          />
        );
      case PAGES.sim_motorik:
        return (
          <PageSimMotorik
            onBack={() => goTo(PAGES.sim_penghubung)}
            onNext={() => goTo(PAGES.menu)}
          />
        );
      case PAGES.soal_1:
      case PAGES.soal_2:
      case PAGES.soal_3:
      case PAGES.soal_4:
      case PAGES.soal_5_esai:
        return (
          <PageSoal
            pageNumber={page}
            answers={answers}
            setAnswers={setAnswers}
            esaiJawaban={kesimpulan}
            setEsaiJawaban={setKesimpulan}
            onBack={() => {
              if (page === PAGES.soal_1) goTo(PAGES.menu);
              else {
                // Find the previous page number
                const pages = [PAGES.soal_1, PAGES.soal_2, PAGES.soal_3, PAGES.soal_4, PAGES.soal_5_esai];
                const currentIndex = pages.indexOf(page);
                if (currentIndex > 0) {
                  goTo(pages[currentIndex - 1]);
                } else {
                  goTo(PAGES.menu);
                }
              }
            }}
            onNext={() => {
              if (page === PAGES.soal_5_esai) goTo(PAGES.skor);
              else {
                // Find the next page number
                const pages = [PAGES.soal_1, PAGES.soal_2, PAGES.soal_3, PAGES.soal_4, PAGES.soal_5_esai];
                const currentIndex = pages.indexOf(page);
                if (currentIndex < pages.length - 1) {
                  goTo(pages[currentIndex + 1]);
                } else {
                  goTo(PAGES.skor);
                }
              }
            }}
            // Additional props as per task requirement
            onNavigate={goTo}
            nama={nama}
            kelas={kelas}
            setSkor={setSkor}
            setWaktu={setDurasiDetik}
            setKesimpulan={setKesimpulan}
          />
        );
      case PAGES.skor:
        return (
          <PageSkor
            nama={nama}
            kelas={kelas}
            skor={skor}
            kesimpulan={kesimpulan}
            timeTaken={durasiDetik}
            submitStatus={submitStatus}
            onUlangi={resetQuiz}
            onMenu={() => goTo(PAGES.menu)}
          />
        );
      case PAGES.dafpus:
        return (
          <PageDafpus
            onNavigate={goTo}
          />
        );
      default:
        return (
          <PageLogin
            nama={nama}
            setNama={setNama}
            kelas={kelas}
            setKelas={setKelas}
            onStart={() => goTo(PAGES.tujuan)}
            onBack={() => goTo(PAGES.home)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {renderPage()}
    </div>
  );
}