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

        <div className="flex items-center">
          {[
            { src: "/homography/1_original.png", alt: "Original camera frame", label: "Original frame",        w: "w-52", aspect: "aspect-video", at: 1 },
            { src: "/homography/2_bbox.png",     alt: "Frame with bounding box", label: "Detect region",       w: "w-52", aspect: "aspect-video", at: 2 },
            { src: "/homography/3_rectified.png", alt: "Rectified flat banner", label: "Rectify to flat",      w: "w-44", aspect: "",             at: 3 },
            { src: "/homography/4_logo_flat.png", alt: "Replacement logo (flat)", label: "New logo (flat)",     w: "w-44", aspect: "",             at: 4 },
            { src: "/homography/5_overlay.png",  alt: "New overlay in perspective", label: "Warp overlay back", w: "w-52", aspect: "aspect-video", at: 5 },
          ].map((item, i) => {
            const show = step >= item.at;
            const showArrow = i > 0 && step >= item.at;
            return (
              <div key={item.src} className="flex items-center">
                {/* Arrow (before items 2–5) */}
                {i > 0 && (
                  <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      maxWidth: showArrow ? 48 : 0,
                      opacity: showArrow ? 1 : 0,
                      padding: showArrow ? "0 8px" : "0",
                    }}
                  >
                    <Arrow />
                  </div>
                )}
                {/* Image */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    maxWidth: show ? 250 : 0,
                    opacity: show ? 1 : 0,
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className={`${item.w} ${item.aspect}`}>
                      <StepImage src={item.src} alt={item.alt} />
                    </div>
                    <span className="font-mono text-[10px] text-muted/50 whitespace-nowrap">{item.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
