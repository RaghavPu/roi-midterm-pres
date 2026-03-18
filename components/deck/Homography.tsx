"use client";

import { useSlideStep } from "../SlideContext";

function StepImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} className="h-full w-full rounded-lg object-contain" />
  );
}

function Arrow() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="shrink-0 text-muted/30">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Homography() {
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
          <span className="mb-4 font-mono text-sm tracking-widest text-accent">05</span>
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-foreground">
            Homography &<br />Perspective Geometry
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Understand the geometry and perspective of the banners from the camera&apos;s viewpoint so that overlays and modifications appear realistic to the viewer in the final livestream.
          </p>
        </div>
      </div>

      {/* Steps 1–4 — Motivation workflow */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-12 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: step >= 1 ? 1 : 0,
          transform: step >= 1 ? "translateX(0)" : "translateX(40px)",
          pointerEvents: step >= 1 ? "auto" : "none",
        }}
      >
        <span className="mb-6 font-mono text-xs tracking-widest text-accent uppercase">Motivation</span>

        <div
          className="flex items-center gap-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: step >= 5 ? "translateX(-120px)" : "translateX(0)",
          }}
        >
          {/* 1 — Camera frame */}
          <div
            className="flex flex-col items-center gap-2 transition-all duration-500"
            style={{
              opacity: step >= 1 ? 1 : 0,
              transform: step >= 1 ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="aspect-video w-52">
              <StepImage src="/homography/1_original.png" alt="Original camera frame" />
            </div>
            <span className="font-mono text-[10px] text-muted/50">Original frame</span>
          </div>

          {/* Arrow 1→2 */}
          <div
            className="transition-all duration-500"
            style={{ opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? "translateX(0)" : "translateX(-8px)" }}
          >
            <Arrow />
          </div>

          {/* 2 — Frame with bounding box */}
          <div
            className="flex flex-col items-center gap-2 transition-all duration-500"
            style={{
              opacity: step >= 2 ? 1 : 0,
              transform: step >= 2 ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="aspect-video w-52">
              <StepImage src="/homography/2_bbox.png" alt="Frame with bounding box" />
            </div>
            <span className="font-mono text-[10px] text-muted/50">Detect region</span>
          </div>

          {/* Arrow 2→3 */}
          <div
            className="transition-all duration-500"
            style={{ opacity: step >= 3 ? 1 : 0, transform: step >= 3 ? "translateX(0)" : "translateX(-8px)" }}
          >
            <Arrow />
          </div>

          {/* 3 — Rectified version */}
          <div
            className="flex flex-col items-center gap-2 transition-all duration-500"
            style={{
              opacity: step >= 3 ? 1 : 0,
              transform: step >= 3 ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="w-44">
              <StepImage src="/homography/3_rectified.png" alt="Rectified flat banner" />
            </div>
            <span className="font-mono text-[10px] text-muted/50">Rectify to flat</span>
          </div>

          {/* Arrow 3→4 */}
          <div
            className="transition-all duration-500"
            style={{ opacity: step >= 4 ? 1 : 0, transform: step >= 4 ? "translateX(0)" : "translateX(-8px)" }}
          >
            <Arrow />
          </div>

          {/* 4 — New logo in flat/rectified form */}
          <div
            className="flex flex-col items-center gap-2 transition-all duration-500"
            style={{
              opacity: step >= 4 ? 1 : 0,
              transform: step >= 4 ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="w-44">
              <StepImage src="/homography/4_logo_flat.png" alt="Replacement logo (flat)" />
            </div>
            <span className="font-mono text-[10px] text-muted/50">New logo (flat)</span>
          </div>

          {/* Arrow 4→5 */}
          <div
            className="transition-all duration-500"
            style={{ opacity: step >= 5 ? 1 : 0, transform: step >= 5 ? "translateX(0)" : "translateX(-8px)" }}
          >
            <Arrow />
          </div>

          {/* 5 — New image warped back into perspective */}
          <div
            className="flex flex-col items-center gap-2 transition-all duration-500"
            style={{
              opacity: step >= 5 ? 1 : 0,
              transform: step >= 5 ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <div className="aspect-video w-52">
              <StepImage src="/homography/5_overlay.png" alt="New overlay in perspective" />
            </div>
            <span className="font-mono text-[10px] text-muted/50">Warp overlay back</span>
          </div>
        </div>
      </div>
    </div>
  );
}
