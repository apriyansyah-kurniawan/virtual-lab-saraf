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
  className = ""
}) {
  return (
    <div className={`min-h-[100dvh] w-full overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start sm:justify-center p-3 sm:p-6 pb-24 sm:pb-6 ${className}`}>
      {/* Konten Utama */}
      <main className="flex-1 flex items-center justify-center w-full z-10">
        {children}
      </main>

      {/* Toast Notifikasi Orientasi Landscape */}
      <LandscapeToast />

      {/* Container Navigasi Luar */}
      <div className="fixed bottom-6 left-6 right-6 flex justify-between items-center pointer-events-none z-50">
        <div className="pointer-events-auto">
          {showBack && Boolean(onBack) && (
            <NavButton direction="back" onClick={onBack} />
          )}
        </div>
        <div className="pointer-events-auto">
          {showNext && Boolean(onNext) && (
            <NavButton direction="next" disabled={nextDisabled} onClick={onNext} />
          )}
        </div>
      </div>
    </div>
  );
}