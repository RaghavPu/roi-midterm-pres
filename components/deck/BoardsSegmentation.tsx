"use client";

import { useSlideStep } from "../SlideContext";

export default function BoardsSegmentation() {
  const step = useSlideStep();

  return (
    <div className="flex h-full w-full items-center justify-center px-16">
      {/* Step 0 — title + description */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: step === 0 ? 1 : 0,
          transform: step === 0 ? "scale(1)" : "scale(0.95)",
          pointerEvents: step === 0 ? "auto" : "none",
        }}
      >
        <div className="animate-stagger flex max-w-2xl flex-col items-start">
          <span className="mb-4 font-mono text-sm tracking-widest text-accent">04</span>
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-foreground">
            Banner Segmentation<br />& Tracking
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Detect advertising banners across different regions of the court — ground-level boards, back wall panels, net-mounted banners, umpire stand signage, and more.
          </p>
        </div>
      </div>

      {/* Step 1 — SAM model architecture */}
      <div
        className="absolute inset-0 flex items-center justify-center px-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: step >= 1 ? 1 : 0,
          transform: step >= 1 ? "translateX(0)" : "translateX(40px)",
          pointerEvents: step >= 1 ? "auto" : "none",
        }}
      >
        <div className="flex w-full max-w-5xl flex-col items-center gap-6">
          {/* Top — heading + bullets in a row */}
          <div className="flex w-full items-start gap-10">
            <div className="flex shrink-0 flex-col">
              <span className="mb-2 font-mono text-sm tracking-widest text-accent">04</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Segment Anything<br />Model 2
              </h2>
              <div className="mt-3 h-px w-16 bg-accent" />
            </div>
            <div className="flex flex-col justify-center pt-6">
              <p className="text-sm leading-relaxed text-muted">
                We use Meta&apos;s <span className="text-foreground/90 font-medium">SAM 2</span> as the backbone for banner segmentation. Given a single click prompt on the first frame, SAM 2 tracks and segments across all subsequent frames.
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5">
                {[
                  "Pre-trained on 11M images, 1B+ masks",
                  "Prompt with points, boxes, or masks",
                  "Memory bank for temporal consistency",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                    <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent-light/60" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom — wide architecture diagram */}
          <div className="w-full">
            <div className="overflow-hidden rounded-xl border border-surface-light bg-white/[0.03] px-6 py-5 shadow-2xl shadow-black/30">
              <img
                src="/sam-architecture.png"
                alt="SAM 2 architecture — image encoder, memory attention, mask decoder, memory bank"
                className="w-full"
              />
            </div>
            <p className="mt-2 text-center font-mono text-[10px] text-muted/50">
              SAM 2 architecture — Ravi et al., 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
