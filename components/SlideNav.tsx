"use client";

interface SlideNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export default function SlideNav({
  current,
  total,
  onPrev,
  onNext,
  onGoTo,
}: SlideNavProps) {
  return (
    <div className="fixed bottom-6 left-0 z-50 flex w-full items-center justify-center gap-4">
      {/* Prev arrow */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-light text-muted transition-all hover:border-accent hover:text-foreground disabled:opacity-20 disabled:hover:border-surface-light disabled:hover:text-muted"
        aria-label="Previous slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "h-2.5 w-2.5 bg-accent"
                : "h-1.5 w-1.5 bg-surface-light hover:bg-muted"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Next arrow */}
      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-light text-muted transition-all hover:border-accent hover:text-foreground disabled:opacity-20 disabled:hover:border-surface-light disabled:hover:text-muted"
        aria-label="Next slide"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
