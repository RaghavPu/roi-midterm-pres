"use client";

import { useRef, useEffect } from "react";

interface AutoVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export default function AutoVideo({ src, ...props }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    el.currentTime = 0;

    const tryPlay = () => {
      if (cancelled) return;
      el.play().catch(() => {
        if (!cancelled) setTimeout(tryPlay, 200);
      });
    };

    if (el.readyState >= 3) {
      tryPlay();
    } else {
      el.addEventListener("canplay", tryPlay, { once: true });
    }

    return () => {
      cancelled = true;
      el.removeEventListener("canplay", tryPlay);
      el.pause();
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      preload="auto"
      muted
      loop
      playsInline
      {...props}
    />
  );
}
