import React, { useState, useEffect } from 'react';

export default function LandscapeToast() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobilePortrait(width < 640 && height > width);
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  // Hide if not mobile portrait or if user closed it
  if (!isMobilePortrait || !visible) return null;

  return (
    <div
      className="fixed top-4 left-4 z-[9999] flex items-center gap-2 bg-amber-100 border-2 border-slate-900 text-slate-900 px-3 py-1.5 rounded-xl shadow-[3px_3px_0px_#000] animate-fadeIn"
    >
      <span className="text-xs font-bold">
        Disarankan mode Landscape 🔄 untuk praktikum optimal
      </span>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="w-5 h-5 flex items-center justify-center bg-red-500 text-white border-2 border-slate-900 rounded-md text-[10px] font-bold hover:bg-red-600 cursor-pointer transition-colors"
      >
        ✕
      </button>
    </div>
  );
}