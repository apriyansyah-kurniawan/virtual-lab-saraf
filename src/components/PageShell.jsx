import React from 'react';
import NavButton from './NavButton';

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
    <div className={`min-h-screen bg-[#B2E2F8] relative flex flex-col justify-between p-4 md:p-8 select-none ${className}`}>
      {/* Konten Halaman */}
      <main className="flex-1 flex items-center justify-center w-full max-w-5xl mx-auto">
        {children}
      </main>

      {/* Tombol Navigasi Bawah */}
      <footer className="fixed bottom-6 left-6 right-6 pointer-events-none flex justify-between items-center z-50">
        <div className="pointer-events-auto">
          {showBack && onBack && (
            <NavButton direction="back" onClick={onBack}/>
          )}
        </div>
        <div className="pointer-events-auto">
          {showNext && onNext && (
            <NavButton direction="next" disabled={nextDisabled} onClick={onNext}/>
          )}
        </div>
      </footer>
    </div>
  );
}
