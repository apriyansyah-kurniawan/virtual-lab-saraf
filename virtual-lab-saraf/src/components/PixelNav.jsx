export default function PixelNav({
  onBack,
  onNext,
  showBack = true,
  showNext = true,
  nextLabel = "NEXT",
  backLabel = "BACK",
  nextDisabled = false,
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none px-4 pb-6">
      <div className="max-w-5xl mx-auto flex justify-between items-end">
        {showBack ? (
          <button
            type="button"
            onClick={onBack}
            className="pointer-events-auto pixel-btn pixel-btn-back"
            aria-label={backLabel}
          >
            <span className="pixel-arrow pixel-arrow-left" />
            <span className="pixel-btn-text">{backLabel}</span>
          </button>
        ) : (
          <span />
        )}

        {showNext ? (
          <button
            type="button"
            onClick={onNext}
            disabled={nextDisabled}
            className="pointer-events-auto pixel-btn pixel-btn-next disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label={nextLabel}
          >
            <span className="pixel-btn-text">{nextLabel}</span>
            <span className="pixel-arrow pixel-arrow-right" />
          </button>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
