import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import neuronImg from '../assets/neuron.png'; // pastikan path import aset neuron ini sesuai
import imgDendrit from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 6.png';
import imgBadanSel from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 9.png';
import imgMielin from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 7.png';
import imgSinapsis from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 12.png';
import imgAkson from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 10.png';
import imgSchwann from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 10.png';
import imgNukleus from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 11.png';
import imgNodus from '../assets/Copy of Virtual Lab Praktikum Sistem Saraf - 8.png';

const ORGANEL_DATA = {
  dendrit: {
    nama: "Dendrit",
    fungsi: "Menerima impuls atau rangsangan dari reseptor atau sel saraf lain dan meneruskannya ke badan sel.",
    img: imgDendrit
  },
  badan_sel: {
    nama: "Badan Sel",
    fungsi: "Mengolah impuls serta memelihara fungsi metabolisme sel saraf karena mengandung sitoplasma dan organel.",
    img: imgBadanSel
  },
  nukleus: {
    nama: "Nukleus (Inti Sel)",
    fungsi: "Pusat pengendali seluruh aktivitas pertumbuhan, metabolisme, dan fungsi di dalam sel saraf.",
    img: imgNukleus
  },
  mielin: {
    nama: "Selubung Mielin",
    fungsi: "Lapisan lemak pelindung akson yang berfungsi mempercepat laju transmisi impuls listrik.",
    img: imgMielin
  },
  akson: {
    nama: "Akson (Neurit)",
    fungsi: "Serabut panjang yang menghantarkan impuls listrik dari badan sel ke neuron berikutnya atau efektor.",
    img: imgAkson
  },
  schwann: {
    nama: "Sel Schwann",
    fungsi: "Sel pendukung yang membungkus dan membentuk selubung mielin serta membantu regenerasi sel saraf.",
    img: imgSchwann
  },
  nodus: {
    nama: "Nodus Ranvier",
    fungsi: "Bagian akson yang tidak bermielin; berfungsi mempercepat perambatan impuls loncat (saltatori).",
    img: imgNodus
  },
  sinapsis: {
    nama: "Sinapsis (Ujung Akson)",
    fungsi: "Titik temu komunikasi antar-neuron yang meneruskan neurotransmitter kimiawi ke dendrit penerima.",
    img: imgSinapsis
  }
};

export default function PageMateriDiagram({ onBack, onNavigate }) {
  const [selected, setSelected] = useState(null);

  const handleBack = () => {
    if (onBack) onBack();
    else if (onNavigate) onNavigate('menu');
  };

  return (
    <PageShell className="p-0" onBack={handleBack} showNext={false}>
      <div className="min-h-[calc(100dvh-8rem)] w-full flex items-center justify-center p-3 sm:p-4">

        {/* Card Putih Utama */}
        <div className="relative bg-white border-[4px] border-slate-900 rounded-[2.5rem] shadow-[8px_8px_0px_#000] px-6 py-5 w-full max-w-4xl flex flex-col items-center">

          {/* Header */}
          <div className="text-center mb-1">
            <h1 className="font-['Press_Start_2P'] text-sm sm:text-base text-slate-900 tracking-wide mb-1">
              STRUKTUR NEURON
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-600 font-semibold">
              🚨 sentuh kolom untuk melihat materi
            </p>
          </div>

          {/* Kanvas ViewBox 800 x 420 Terkunci Presisi Canva */}
          <div className="relative w-full max-w-3xl aspect-[800/420] flex items-center justify-center select-none my-auto">

            {/* Gambar Ilustrasi Sel Neuron di Tengah */}
            <img
              src={neuronImg}
              alt="Struktur Sel Neuron"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-sm z-0"
            />

            {/* SVG Garis Penunjuk Sesuai Canva Slide 4 */}
            <svg
              viewBox="0 0 800 420"
              className="absolute inset-0 w-full h-full pointer-events-none z-10 stroke-slate-900 stroke-[2.2]"
            >
              {/* 1. DENDRIT */}
              <line x1="250" y1="100" x2="245" y2="150" />

              {/* 2. SELUBUNG MIELIN */}
              <line x1="400" y1="120" x2="390" y2="190" />

              {/* 3. NODUS RANVIER */}
              <line x1="482" y1="145" x2="470" y2="210" />

              {/* 4. BADAN SEL */}
              <line x1="235" y1="230" x2="280" y2="230" />

              {/* 5. NUKLEUS */}
              <line x1="220" y1="290" x2="305" y2="210" />

              {/* 6. AKSON (Naik menempel ke batang akson) */}
              <line x1="392" y1="322" x2="365" y2="190" />

              {/* 7. SEL SCHWANN (Naik menempel ke selubung ke-3) */}
              <line x1="450" y1="322" x2="450" y2="210" />

              {/* 8. SINAPSIS (Naik menempel ke cabang terminal) */}
              <line x1="570" y1="325" x2="572" y2="233" />
            </svg>

            {/* Tombol Organel Tersebar Proporsional */}

            {/* 1. DENDRIT */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.dendrit)}
              style={{ left: '28%', top: '21.4%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 whitespace-nowrap active:scale-95 transition-all"
            >
              DENDRIT
            </button>

            {/* 2. SELUBUNG MIELIN */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.mielin)}
              style={{ left: '49%', top: '27%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-2.5 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[7.5px] sm:text-[8px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 text-center leading-tight whitespace-nowrap active:scale-95 transition-all"
            >
              SELUBUNG<br/>MIELIN
            </button>

            {/* 3. NODUS RANVIER */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.nodus)}
              style={{ left: '60.3%', top: '30%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-2.5 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[7.5px] sm:text-[8px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 text-center leading-tight whitespace-nowrap active:scale-95 transition-all"
            >
              NODUS<br/>RANVIER
            </button>

            {/* 4. BADAN SEL */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.badan_sel)}
              style={{ left: '25.6%', top: '54.8%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1.5 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 whitespace-nowrap active:scale-95 transition-all text-center leading-tight"
            >
              BADAN<br/>SEL
            </button>

            {/* 5. NUKLEUS */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.nukleus)}
              style={{ left: '25%', top: '71.4%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 whitespace-nowrap active:scale-95 transition-all"
            >
              NUKLEUS
            </button>

            {/* 6. AKSON */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.akson)}
              style={{ left: '47%', top: '79%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 whitespace-nowrap active:scale-95 transition-all"
            >
              AKSON
            </button>

            {/* 7. SEL SCHWANN */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.schwann)}
              style={{ left: '58.3%', top: '80.5%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-2.5 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[7.5px] sm:text-[8px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 text-center leading-tight whitespace-nowrap active:scale-95 transition-all"
            >
              SEL<br/>SCHWANN
            </button>

            {/* 8. SINAPSIS */}
            <button
              type="button"
              onClick={() => setSelected(ORGANEL_DATA.sinapsis)}
              style={{ left: '72%', top: '80.5%', transform: 'translate(-50%, -50%)' }}
              className="absolute px-3 py-1 bg-white hover:bg-[#5CB85C] hover:text-white border-2 border-slate-900 rounded-xl font-['Press_Start_2P'] text-[9px] shadow-[2.5px_2.5px_0px_#000] cursor-pointer z-20 whitespace-nowrap active:scale-95 transition-all"
            >
              SINAPSIS
            </button>

          </div>

        </div>

        {/* Modal Info Organel */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
            <div className="bg-white border-[3.5px] border-slate-900 rounded-3xl shadow-[8px_8px_0px_#000] p-6 max-w-md w-full relative animate-scaleUp">
              <div className="flex justify-between items-center border-b-2 border-slate-900 pb-3 mb-3">
                <h3 className="font-['Press_Start_2P'] text-xs text-[#5CB85C]">
                  {selected.nama}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-7 h-7 bg-[#F87171] text-white border-2 border-slate-900 rounded-lg flex items-center justify-center font-bold text-xs hover:bg-[#EF4444] cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <img src={selected.img} alt={selected.nama} className="w-full h-auto mb-4 rounded" />
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                {selected.fungsi}
              </p>
            </div>
          </div>
        )}

      </div>
    </PageShell>
  );
}