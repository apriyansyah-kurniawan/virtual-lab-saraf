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
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] px-6 py-5 w-full max-w-4xl flex flex-col items-center">

          {/* Header Instruksi */}
          <div className="bg-[#E0F2FE] border-2 border-slate-900 rounded-2xl px-5 py-2 mb-2 text-center w-full max-w-2xl flex items-center justify-center gap-3">
            <span className="bg-[#F97316] text-white font-['Press_Start_2P'] text-[9px] px-2.5 py-1 rounded-lg border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#000]">
              Sensorik
            </span>
            <span className="text-xs sm:text-sm text-slate-800 font-bold">
              Sentuh tangan ke permukaan kulit untuk melihat transmisi impuls ke saraf pusat.
            </span>
          </div>

          {/* Area Kanvas Simulasi Terkalibrasi (800 x 360) */}
          <div className="relative w-full max-w-3xl aspect-[800/360] flex items-center justify-center select-none overflow-hidden my-auto">

            {/* Gambar Jalur Sensorik */}
            <img
              src={imgJalurSensorik}
              alt="Jalur Saraf Sensorik"
              className="w-full h-full object-contain pointer-events-none drop-shadow-sm scale-[1.35] sm:scale-[1.45] z-0"
            />

            {/* Tombol Tangan Interaktif */}
            <div
              onClick={handleTrigger}
              style={{ left: '27%', top: '56%', transform: 'translate(-50%, -50%)' }}
              className={`absolute flex flex-col items-center cursor-pointer transition-all duration-300 z-20 ${
                active ? 'translate-x-5 scale-105' : 'hover:scale-110 animate-bounce'
              }`}
            >
              <img
                src={imgTangan}
                alt="Tangan"
                className="w-16 h-16 object-contain drop-shadow-md scale-[2.2]"
              />
              <span className={`mt-2 border-2 border-slate-900 font-['Press_Start_2P'] text-[7.5px] px-2 py-0.5 rounded-md shadow-[2px_2px_0px_#000] ${
                active ? 'bg-[#86EFAC] text-slate-900' : 'bg-[#FEF08A] text-slate-900'
              }`}>
                {active ? 'AKTIF' : 'SENTUH'}
              </span>
            </div>

            {/* Bola Energi Impuls Listrik Menyala (Glow Orb) */}
            {active && (
              <div
                style={{
                  position: 'absolute',
                  left: '46%',
                  top: '56%',
                  width: '32%',
                  height: '30px',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  zIndex: 30
                }}
              >
                <div className="absolute top-0 animate-impuls-glowing flex items-center justify-center">
                  {/* Efek Lingkaran Denyut Luar */}
                  <div className="absolute w-8 h-8 rounded-full bg-yellow-400/60 animate-ping" />
                  {/* Inti Bola Cahaya Kuning */}
                  <div className="relative w-6 h-6 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 border-2 border-white shadow-[0_0_16px_#FACC15,0_0_30px_#F59E0B] flex items-center justify-center">
                    <span className="text-[10px]">⚡</span>
                  </div>
                </div>
              </div>
            )}

            {/* Label Penjelas Anatomi di Bawah Gambar */}
            <div className="absolute bottom-[4%] w-full px-8 flex justify-between text-slate-800 font-bold text-[11px] sm:text-xs pointer-events-none z-10">
              <span className="ml-[22%]">Reseptor Kulit</span>
              <span className="ml-[6%]">Saraf Sensorik</span>
              <span className="mr-[8%]">Saraf Pusat (Medula Spinalis)</span>
            </div>

          </div>

          {/* Status Bar & Tombol Reset */}
          <div className="mt-2 flex items-center justify-between w-full max-w-2xl px-2">
            <div className="text-xs font-bold text-slate-700">
              Status: {active ? (
                <span className="text-[#16A34A] animate-pulse">⚡ Impuls rangsangan sedang dihantarkan ke saraf pusat!</span>
              ) : (
                <span className="text-slate-500">Klik tangan untuk memulai rangsangan...</span>
              )}
            </div>
            {active && (
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 bg-[#E2E8F0] hover:bg-[#CBD5E1] text-slate-900 border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[8px] cursor-pointer shadow-[2px_2px_0px_#000] active:translate-y-0.5"
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