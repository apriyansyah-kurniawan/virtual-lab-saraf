import React, { useState } from 'react';
import PageShell from '../components/PageShell';

import imgJalurSensorik from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 15.png';
import imgTangan from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 13.png';

export default function PageSimSensorik({ onBack, onNext }) {
  const [active, setActive] = useState(false);

  const handleTrigger = () => {
    setActive(true);
  };

  const handleReset = () => {
    setActive(false);
  };

  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-center p-3 select-none">

        {/* Card Putih Utama */}
        <div className="relative bg-white border-[3.5px] border-slate-900 rounded-[2rem] shadow-[6px_6px_0px_#000] p-4 sm:p-6 w-full max-w-4xl flex flex-col items-center my-auto overflow-hidden">

          {/* Header Instruksi */}
          <div className="w-full bg-[#E0F2FE] border-2 border-slate-900 rounded-2xl p-2.5 sm:p-3 flex items-center gap-3 mb-3 shadow-[2px_2px_0px_#000]">
            <div className="bg-[#FB923C] border-2 border-slate-900 px-2.5 py-1 rounded-xl shadow-[1.5px_1.5px_0px_#000] flex-shrink-0">
              <span className="font-['Press_Start_2P'] text-[9px] sm:text-xs text-white">
                Sensorik
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-800 font-semibold leading-snug">
              Sentuh tangan ke permukaan kulit untuk melihat transmisi impuls ke saraf pusat.
            </p>
          </div>

          {/* Area Kanvas Simulasi Terkalibrasi (800 x 380) */}
          {/* Wrapper Diagram dengan Scroll Horizontal Aman di HP */}
          <div className="w-full overflow-x-auto overflow-y-hidden py-2 flex justify-start md:justify-center">
            <div className="relative w-[680px] sm:w-[760px] md:w-full aspect-[800/380] min-w-[640px] md:min-w-0 mx-auto flex items-center justify-center select-none flex-shrink-0">
              {/* Gambar Jalur Sensorik */}
              <img
                src={imgJalurSensorik}
                alt="Jalur Saraf Sensorik"
                className="w-full h-full object-contain pointer-events-none drop-shadow-sm scale-[1.35] sm:scale-[1.45] z-0"
              />

              {/* Tombol Tangan Vektor Interaktif (Besar, Cerah, & Presisi) */}
              <div
                onClick={handleTrigger}
                style={{ left: active ? '17%' : '10%', top: '56%', transform: 'translate(-50%, -50%)' }}
                className="absolute flex flex-col items-center cursor-pointer transition-all duration-300 z-30 group"
              >
                <div className={`w-24 h-20 sm:w-28 sm:h-24 flex items-center justify-center transition-transform duration-300 ${active ? 'scale-105' : 'group-hover:scale-110 animate-pulse'}`}>
                  <svg viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[2px_3px_6px_rgba(0,0,0,0.25)]">
                    {/* Lengan Baju / Pergelangan */}
                    <path d="M 0 32 L 35 32 C 40 32 45 35 48 38 L 48 68 C 45 71 40 74 35 74 L 0 74 Z" fill="#93C5FD" stroke="#1E293B" strokeWeight="3.5" />
                    {/* Telapak Tangan & Jari Menunjuk Bersih */}
                    <path
                      d="M 45 38 C 50 28 62 26 72 26 C 75 26 80 29 82 33 L 126 33 C 133 33 135 45 126 47 L 85 47 C 88 51 86 58 78 60 L 82 60 C 86 60 88 66 84 70 L 75 70 C 72 74 65 74 58 72 L 45 68 Z"
                      fill="#FFD2A6"
                      stroke="#1E293B"
                      strokeWeight="3.5"
                      strokeLinejoin="round"
                    />
                    {/* Jempol di Atas */}
                    <path d="M 58 28 C 58 14 74 16 75 28" fill="#FFD2A6" stroke="#1E293B" strokeWeight="3.5" />
                    {/* Kuku Jari Telunjuk */}
                    <path d="M 120 36 C 123 36 125 38 125 40 C 125 42 123 44 120 44" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <span className={`-mt-1 border-2 border-slate-900 font-['Press_Start_2P'] text-[7.5px] px-2.5 py-1 rounded-md shadow-[2px_2px_0px_#000] whitespace-nowrap ${
                  active ? 'bg-[#86EFAC] text-slate-900' : 'bg-[#FEF08A] text-slate-900 group-hover:bg-[#FDE047]'
                }`}>
                  {active ? 'MENYENTUH' : 'SENTUH KULIT'}
                </span>
              </div>

              {/* Bola Energi Impuls Listrik Menyala (Glow Orb) */}
              {active && (
                <div
                  style={{
                    position: 'absolute',
                    left: '27%',
                    top: '56%',
                    width: '46%',
                    height: '30px',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    zIndex: 30
                  }}
                >
                  <div className="absolute top-0 animate-impuls-glowing flex items-center justify-center">
                    <div className="absolute w-8 h-8 rounded-full bg-yellow-400/60 animate-ping" />
                    <div className="relative w-6 h-6 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 border-2 border-white shadow-[0_0_16px_#FACC15,0_0_30px_#F59E0B] flex items-center justify-center">
                      <span className="text-[10px]">⚡</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Label Penjelas Anatomi di Bawah Gambar */}
          <div className="w-full max-w-2xl flex justify-between px-4 text-[9px] sm:text-xs font-bold text-slate-700 mt-2">
            <span className="ml-[22%]">Reseptor Kulit</span>
            <span className="ml-[6%]">Saraf Sensorik</span>
            <span className="mr-[8%]">Saraf Pusat (Medula Spinalis)</span>
          </div>

          {/* Status Bar & Tombol Reset */}
          <div className="mt-2 flex items-center justify-between w-full max-w-2xl px-2">
            <p className="text-[8.5px] sm:text-[11px] text-slate-500 font-semibold text-center mt-3">
              Status: {active ? (
                <span className="text-[#16A34A] animate-pulse">⚡ Impuls rangsangan sedang dihantarkan ke saraf pusat!</span>
              ) : (
                <span className="text-slate-500">Klik tangan untuk memulai rangsangan...</span>
              )}
            </p>
            {active && (
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 bg-[#E2E8F0] hover:bg-[#CBD5E1] text-slate-900 border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[7px] sm:text-[8px] md:text-[9px] cursor-pointer shadow-[2px_2px_0px_#000] active:translate-y-0.5"
              >
                ULANGI
              </button>
            )}
          </div>

        </div>

      </div>
    </PageShell>
  );
}