import React, { useState } from 'react';
import PageShell from '../components/PageShell';

// Pastikan path gambar slide 16 sesuai
import imgJalurMotorik from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 18.png';

export default function PageSimMotorik({ onBack, onNext }) {
  const [active, setActive] = useState(false);

  return (
    <PageShell onBack={onBack} onNext={onNext}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-center p-3 select-none">

        {/* Card Putih Utama */}
        <div className="relative bg-white border-[3.5px] border-slate-900 rounded-[2rem] shadow-[6px_6px_0px_#000] p-4 sm:p-6 w-full max-w-4xl flex flex-col items-center my-auto overflow-hidden">

          {/* Header */}
          <div className="w-full bg-[#E0F2FE] border-2 border-slate-900 rounded-2xl p-2.5 sm:p-3 flex items-center gap-3 mb-3 shadow-[2px_2px_0px_#000]">
            <div className="bg-[#FB923C] border-2 border-slate-900 px-2.5 py-1 rounded-xl shadow-[1.5px_1.5px_0px_#000] flex-shrink-0">
              <span className="font-['Press_Start_2P'] text-[9px] sm:text-xs text-white">
                Motorik
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-800 font-semibold leading-snug">
              Kirim impuls dari saraf pusat menuju efektor otot untuk menggerakkan lengan.
            </p>
          </div>

          {/* Kanvas Simulasi */}
          {/* Wrapper Diagram dengan Scroll Horizontal Aman di HP */}
          <div className="w-full overflow-x-auto overflow-y-hidden py-2 flex justify-start md:justify-center">
            <div className="relative w-[680px] sm:w-[760px] md:w-full aspect-[800/380] min-w-[640px] md:min-w-0 mx-auto flex items-center justify-center select-none flex-shrink-0">
              <img
                src={imgJalurMotorik}
                alt="Jalur Saraf Motorik dan Efektor"
                className="w-full h-full object-contain pointer-events-none drop-shadow-sm scale-[1.35] sm:scale-[1.45] z-0"
              />

              {/* Tombol Trigger Impuls */}
              <div
                onClick={() => setActive(true)}
                style={{ left: '34%', top: '78%', transform: 'translate(-50%, -50%)' }}
                className={`absolute flex flex-col items-center cursor-pointer transition-all duration-300 z-20 ${
                  active ? 'scale-105' : 'hover:scale-110 animate-pulse'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 border-2 border-slate-900 shadow-[0_0_15px_#FACC15] flex items-center justify-center">
                  <span className="text-xs">⚡</span>
                </div>
                <span className={`mt-1 border-2 border-slate-900 font-['Press_Start_2P'] text-[7px] sm:text-[8px] md:text-[9px] px-2 py-0.5 rounded-md shadow-[2px_2px_0px_#000] ${
                  active ? 'bg-[#86EFAC]' : 'bg-[#FEF08A]'
                }`}>
                  {active ? 'TERKIRIM' : 'KIRIM PERINTAH'}
                </span>
              </div>

              {/* Jalur Animasi Cahaya Impuls Menuju Otot */}
              {active && (
                <div
                  style={{
                    position: 'absolute',
                    left: '32%',
                    top: '56%',
                    width: '38%',
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

          {/* Label Penjelas */}
          <div className="w-full max-w-2xl flex justify-between px-4 text-[9px] sm:text-xs font-bold text-slate-700 mt-2">
            <span className="ml-[18%]">Saraf Pusat</span>
            <span className="ml-[8%]">Saraf Motorik</span>
            <span className="mr-[12%]">Efektor (Otot)</span>
          </div>

          {/* Status Bar */}
          <div className="mt-2 flex items-center justify-between w-full max-w-2xl px-2">
            <p className="text-[8.5px] sm:text-[11px] text-slate-500 font-semibold text-center mt-3">
              Status: {active ? (
                <span className="text-[#16A34A] animate-pulse">⚡ Impuls diterima efektor! Otot berkontraksi merespons rangsangan.</span>
              ) : (
                <span className="text-slate-500">Kirim impuls motorik untuk menggerakkan efektor...</span>
              )}
            </p>
            {active && (
              <button
                type="button"
                onClick={() => setActive(false)}
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