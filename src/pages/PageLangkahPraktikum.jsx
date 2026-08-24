import React from 'react';
import PageShell from '../components/PageShell';

const LANGKAH_DATA = [
  {
    nomor: 1,
    judul: "Sensorik",
    deskripsi: "Reseptor pada kulit (tangan) menerima rangsangan panas dari benda panas. Impuls listrik dikirim melalui saraf sensorik menuju sumsum tulang belakang sebagai saraf pusat."
  },
  {
    nomor: 2,
    judul: "Penghubung",
    deskripsi: "Di dalam sumsum tulang belakang, impuls diteruskan oleh saraf penghubung (interneuron) dari saraf sensorik ke saraf motorik tanpa melalui otak terlebih dahulu."
  },
  {
    nomor: 3,
    judul: "Motorik",
    deskripsi: "Saraf motorik membawa perintah dari saraf pusat menuju efektor (otot lengan). Otot berkontraksi sehingga tangan refleks tertarik menjauh dari sumber panas."
  }
];

export default function PageLangkahPraktikum({ onBack, onNext, onNavigate }) {
  const handleBack = onBack || (() => onNavigate && onNavigate('menu'));
  const handleNext = onNext || (() => onNavigate && onNavigate('sim_sensorik'));

  return (
    <PageShell className="p-0" onBack={handleBack} onNext={handleNext}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-start pt-6 sm:pt-8 p-4 sm:p-6">
        <div className="w-full max-w-5xl flex flex-col items-center">

          {/* 1. Header Judul Di Paling Atas */}
          <div className="text-center mb-4 sm:mb-6">
            <h1 className="font-['Press_Start_2P'] text-base sm:text-lg md:text-xl text-slate-900 tracking-wide mb-2">
              LANGKAH PRAKTIKUM
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 max-w-xl mx-auto">
              Pelajari tiga tahap alur perambatan impuls pada gerak refleks berikut ini:
            </p>
          </div>

          {/* 2. Tiga Kotak Kartu Berjejer di Bawah Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {LANGKAH_DATA.map((item) => (
              <div
                key={item.nomor}
                className="bg-white border-[3.5px] border-slate-900 rounded-[2rem] shadow-[6px_6px_0px_#000] p-5 sm:p-6 flex flex-col h-full"
              >
                {/* Header Nomor & Nama */}
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3 mb-3.5">
                  <span className="w-8 h-8 shrink-0 bg-[#5CB85C] border-2 border-slate-900 rounded-xl flex items-center justify-center font-['Press_Start_2P'] text-xs text-white">
                    {item.nomor}
                  </span>
                  <h2 className="font-['Press_Start_2P'] text-xs text-slate-900">
                    {item.judul}
                  </h2>
                </div>

                {/* Teks Penjelasan */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageShell>
  );
}