import React from 'react';
import PageShell from '../components/PageShell';

export default function PageLangkahPraktikum({ onBack, onNext, onNavigate, setCurrentPage }) {
  const steps = [
    {
      num: '1',
      title: 'Sensorik',
      desc: 'Reseptor pada kulit (tangan) menerima rangsangan panas dari benda panas. Impuls listrik dikirim melalui saraf sensorik menuju sumsum tulang belakang sebagai saraf pusat.',
      color: 'bg-[#86EFAC]',
    },
    {
      num: '2',
      title: 'Penghubung',
      desc: 'Di dalam sumsum tulang belakang, impuls diteruskan oleh saraf penghubung (interneuron) dari saraf sensorik ke saraf motorik tanpa melalui otak terlebih dahulu.',
      color: 'bg-[#93C5FD]',
    },
    {
      num: '3',
      title: 'Motorik',
      desc: 'Saraf motorik membawa perintah dari saraf pusat menuju efektor (otot lengan). Otot berkontraksi sehingga tangan refleks tertarik menjauh dari sumber panas.',
      color: 'bg-[#FCA5A5]',
    },
  ];

  const handleBack = () => {
    if (onBack) return onBack();
    if (onNavigate) return onNavigate('menu');
    if (setCurrentPage) return setCurrentPage('menu');
  };

  const handleNext = () => {
    if (onNext) return onNext();
    if (onNavigate) return onNavigate('sim_sensorik');
    if (setCurrentPage) return setCurrentPage('sim_sensorik');
  };

  return (
    <PageShell onBack={handleBack} onNext={handleNext}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-center p-3 sm:p-4 select-none">

        {/* Card Putih Utama */}
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] p-6 sm:p-8 w-full max-w-5xl flex flex-col items-center my-auto">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="font-['Press_Start_2P'] text-sm sm:text-base md:text-lg text-slate-900 tracking-wide mb-2">
              LANGKAH PRAKTIKUM
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold max-w-xl mx-auto">
              Pelajari tiga tahap alur perambatan impuls pada gerak refleks berikut ini:
            </p>
          </div>

          {/* Grid 3 Kartu Langkah */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#F8FAFC] border-[3.5px] border-slate-900 rounded-3xl p-5 shadow-[5px_5px_0px_#000] flex flex-col justify-start transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#000]"
              >
                {/* Header Kartu */}
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3 mb-3.5">
                  <div className={`w-8 h-8 ${step.color} border-2 border-slate-900 rounded-xl flex items-center justify-center font-['Press_Start_2P'] text-xs text-slate-900 shadow-[2px_2px_0px_#000]`}>
                    {step.num}
                  </div>
                  <h2 className="font-['Press_Start_2P'] text-xs sm:text-sm text-slate-900">
                    {step.title}
                  </h2>
                </div>

                {/* Deskripsi */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-semibold">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </PageShell>
  );
}