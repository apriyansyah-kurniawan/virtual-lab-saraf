import React from 'react';
import NavButton from './NavButton';
import LandscapeToast from './LandscapeToast';

export default function PageShell({
  children,
  onBack,
  onNext,
  showBack = true,
  showNext = true,
  nextDisabled = false,
  className = ''
}) {
  return (
    <div className={`min-h-[100dvh] w-full bg-[#BAE6FD] overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start sm:justify-center p-3 sm:p-6 pb-24 sm:pb-6 ${className}`}>
      {/* Konten Utama */}
      <div className="w-full flex-1 flex flex-col items-center justify-center pb-20 sm:pb-0 animate-page-enter">
        {children}
      </div>

      {/* Toast Notifikasi Orientasi Landscape */}
      <LandscapeToast />

      {/* Container Navigasi Luar */}
      <div className="fixed bottom-6 left-6 right-6 flex justify-between items-center pointer-events-none z-50">
        <div className="pointer-events-auto">
          {showBack && Boolean(onBack) && (
            <NavButton direction="back" onClick={onBack} className="hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]" />
          )}
        </div>
        <div className="pointer-events-auto">
          {showNext && Boolean(onNext) && (
            <NavButton direction="next" disabled={nextDisabled} onClick={onNext} className="hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]" />
          )}
        </div>
      </div>
    </div>
  );
}