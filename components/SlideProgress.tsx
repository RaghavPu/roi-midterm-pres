"use client";

interface SlideProgressProps {
  current: number;
  total: number;
}

export default function SlideProgress({ current, total }: SlideProgressProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 z-50 h-1 w-full bg-surface">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed top-5 right-6 z-50 font-mono text-xs tracking-wider text-muted">
        {current + 1} / {total}
      </div>
    </>
  );
}
