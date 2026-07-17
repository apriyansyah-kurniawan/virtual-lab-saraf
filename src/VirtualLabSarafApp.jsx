import { useState, useMemo } from "react";
import { QUESTION_BANK } from "./data/questions";
import { PAGES } from "./constants/pages";
import PageLogin from "./pages/PageLogin";
import PageTujuan from "./pages/PageTujuan";
import PageMenu from "./pages/PageMenu";
import PageMateri from "./pages/PageMateri";
import PageLangkahPraktikum from "./pages/PageLangkahPraktikum";
import PageSimSensorik from "./pages/PageSimSensorik";
import PageSimPenghubung from "./pages/PageSimPenghubung";
import PageSimMotorik from "./pages/PageSimMotorik";
import PageSoal from "./pages/PageSoal";
import PageSkor from "./pages/PageSkor";

export default function VirtualLabSarafApp() {
  const [page, setPage] = useState(PAGES.LOGIN);
  const [siswaInfo, setSiswaInfo] = useState({ nama: "", kelas: "9A" });
  const [answers, setAnswers] = useState(Array(QUESTION_BANK.length).fill(null));
  const [esaiJawaban, setEsaiJawaban] = useState("");
  const [kesimpulan, setKesimpulan] = useState("");

  const skor = useMemo(() => {
    const benar = answers.reduce((acc, jawaban, i) => {
      if (jawaban === QUESTION_BANK[i].kunci) return acc + 1;
      return acc;
    }, 0);
    return benar * 20;
  }, [answers]);

  const goTo = (target) => setPage(target);

  const resetQuiz = () => {
    setAnswers(Array(QUESTION_BANK.length).fill(null));
    setEsaiJawaban("");
    setKesimpulan("");
    setPage(PAGES.SOAL_1);
  };

  switch (page) {
    case PAGES.LOGIN:
      return (
        <PageLogin
          siswaInfo={siswaInfo}
          setSiswaInfo={setSiswaInfo}
          onStart={() => goTo(PAGES.TUJUAN)}
        />
      );

    case PAGES.TUJUAN:
      return (
        <PageTujuan
          onBack={() => goTo(PAGES.LOGIN)}
          onNext={() => goTo(PAGES.MENU)}
        />
      );

    case PAGES.MENU:
      return (
        <PageMenu
          siswaInfo={siswaInfo}
          onBack={() => goTo(PAGES.TUJUAN)}
          onNavigate={(module) => {
            if (module === "materi") goTo(PAGES.MATERI);
            if (module === "praktikum") goTo(PAGES.LANGKAH);
            if (module === "soal") goTo(PAGES.SOAL_1);
          }}
        />
      );

    case PAGES.MATERI:
      return (
        <PageMateri
          onBack={() => goTo(PAGES.MENU)}
          onNext={() => goTo(PAGES.MENU)}
        />
      );

    case PAGES.LANGKAH:
      return (
        <PageLangkahPraktikum
          onBack={() => goTo(PAGES.MENU)}
          onNext={() => goTo(PAGES.SIM_SENSORIK)}
        />
      );

    case PAGES.SIM_SENSORIK:
      return (
        <PageSimSensorik
          onBack={() => goTo(PAGES.LANGKAH)}
          onNext={() => goTo(PAGES.SIM_PENGHUBUNG)}
        />
      );

    case PAGES.SIM_PENGHUBUNG:
      return (
        <PageSimPenghubung
          onBack={() => goTo(PAGES.SIM_SENSORIK)}
          onNext={() => goTo(PAGES.SIM_MOTORIK)}
        />
      );

    case PAGES.SIM_MOTORIK:
      return (
        <PageSimMotorik
          onBack={() => goTo(PAGES.SIM_PENGHUBUNG)}
          onNext={() => goTo(PAGES.MENU)}
        />
      );

    case PAGES.SOAL_1:
    case PAGES.SOAL_2:
    case PAGES.SOAL_3:
    case PAGES.SOAL_4:
    case PAGES.SOAL_5_ESAI:
      return (
        <PageSoal
          pageNumber={page}
          answers={answers}
          setAnswers={setAnswers}
          esaiJawaban={esaiJawaban}
          setEsaiJawaban={setEsaiJawaban}
          onBack={() => {
            if (page === PAGES.SOAL_1) goTo(PAGES.MENU);
            else goTo(page - 1);
          }}
          onNext={() => {
            if (page === PAGES.SOAL_5_ESAI) goTo(PAGES.SKOR);
            else goTo(page + 1);
          }}
        />
      );

    case PAGES.SKOR:
      return (
        <PageSkor
          siswaInfo={siswaInfo}
          skor={skor}
          esaiJawaban={esaiJawaban}
          kesimpulan={kesimpulan}
          setKesimpulan={setKesimpulan}
          onUlangi={resetQuiz}
          onMenu={() => goTo(PAGES.MENU)}
        />
      );

    default:
      return (
        <PageLogin
          siswaInfo={siswaInfo}
          setSiswaInfo={setSiswaInfo}
          onStart={() => goTo(PAGES.TUJUAN)}
        />
      );
  }
}
