import { useState } from "react";
import scientistImg from '../assets/scientist.png';
import RetroButton from "../components/RetroButton";

export default function PageHome({ onStart }) {
  return (
    <div className="min-h-screen bg-[#B2E2F8] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white border-[4px] border-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-[8px_8px_0px_#000] grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-h-[420px]">
        <div className="flex flex-col items-center">
          <img
            src={scientistImg}
            alt="Ilmuwan"
            className="w-full max-w-[480px] h-auto object-contain scale-150 sm:scale-175 md:scale-[1.9] transform origin-center select-none [image-rendering:pixelated] drop-shadow-[8px_10px_0px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <span className="font-['Press_Start_2P'] text-xl md:text-2xl text-[#0284C7] tracking-wider mb-3">
            PRAKTIKUM
          </span>
          <h1 className="font-['Press_Start_2P'] text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-relaxed uppercase mb-6">
            SISTEM SARAF MANUSIA
          </h1>
          <RetroButton variant="green" onClick={onStart}>
            START
          </RetroButton>
        </div>
      </div>
    </div>
  );
}