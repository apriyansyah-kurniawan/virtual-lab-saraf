import React from 'react';

export default function NavButton({ direction = 'back', onClick, disabled = false, className = '' }) {
  const isBack = direction === 'back' || direction === 'left';
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled && onClick) onClick();
      }}
      disabled={disabled}
      aria-label={isBack ? "Kembali" : "Lanjut"}
      className={`relative w-12 h-12 md:w-14 md:h-14 bg-[#5CB85C] hover:bg-[#4CAE4C] active:bg-[#449D44] border-[3.5px] border-slate-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer select-none pointer-events-auto z-50 shrink-0 ${
        disabled ? "opacity-40 cursor-not-allowed !pointer-events-none" : ""
      } ${className}`}
    >
      <svg className="w-6 h-6 md:w-7 md:h-7 fill-white pointer-events-none" viewBox="0 0 24 24">
        {isBack ? <path d="M15 19l-7-7 7-7v14z" /> : <path d="M9 5l7 7-7 7V5z" />}
      </svg>
    </button>
  );
}