export default function PixelNav({
  onBack,
  onNext,
  showBack = true,
  showNext = true,
  nextDisabled = false,
}) {
  return (
    <div
      className="fixed bottom-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none select-none"
      aria-label="Navigasi halaman"
    >
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="pointer-events-auto pixel-btn pixel-btn-nav select-none hover:bg-green-500 active:scale-95 transition-transform duration-150"
          aria-label="Navigasi kiri"
        >
          <span className="pixel-arrow pixel-arrow-left" />
        </button>
      ) : (
        <span className="w-[3.25rem]" aria-hidden="true" />
      )}

      {showNext ? (
        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className="pointer-events-auto pixel-btn pixel-btn-nav select-none hover:bg-green-500 active:scale-95 transition-transform duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
          aria-label="Navigasi kanan"
        >
          <span className="pixel-arrow pixel-arrow-right" />
        </button>
      ) : (
        <span className="w-[3.25rem]" aria-hidden="true" />
      )}
    </div>
  );
}
