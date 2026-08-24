import React from 'react';

const VARIANTS = {
  green: "bg-[#5CB85C] hover:bg-[#4CAE4C] text-white",
  yellow: "bg-[#F6AD55] hover:bg-[#ED8936] text-slate-900",
  blue: "bg-[#63B3ED] hover:bg-[#4299E1] text-white",
  rose: "bg-[#F87171] hover:bg-[#EF4444] text-white",
};

export default function RetroButton({ children, onClick, variant = 'green', disabled = false, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3.5 border-[3.5px] border-slate-900 rounded-2xl font-['Press_Start_2P'] text-xs sm:text-sm shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none ${
        VARIANTS[variant] || VARIANTS.green
      } ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : ""} ${className}`}
    >
      {children}
    </button>
  );
}