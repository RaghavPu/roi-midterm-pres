"use client";

import { useState, useEffect, useCallback, useRef, ReactNode } from "react";
import SlideProgress from "./SlideProgress";
import SlideNav from "./SlideNav";

interface PresentationProps {
  children: ReactNode[];
}

export default function Presentation({ children }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const total = children.length;

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current || index < 0 || index >= total) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 550);
    },
    [current, total, isAnimating]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        // browser handles exiting fullscreen on Escape natively
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, goTo, total, toggleFullscreen, isFullscreen]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (wheelTimeout.current) return;

      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) next();
        else prev();
      }

      wheelTimeout.current = setTimeout(() => {
        wheelTimeout.current = null;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [next, prev]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) {
        if (diff > 0) next();
        else prev();
      }
      touchStart.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  return (
    <div ref={containerRef} className="relative h-screen w-screen overflow-hidden bg-background">
      <SlideProgress current={current} total={total} />

      {/* Fullscreen toggle */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 left-5 z-50 flex h-8 w-8 items-center justify-center rounded-lg border border-surface-light text-muted transition-all hover:border-accent hover:text-foreground"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
      >
        {isFullscreen ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 1v3H2M11 1v3h3M5 15v-3H2M11 15v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 5V2h3M14 5V2h-3M2 11v3h3M14 11v3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="relative h-full w-full">
        {children.map((child, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === current
                ? "pointer-events-auto opacity-100 translate-x-0"
                : i < current
                  ? "pointer-events-none opacity-0 -translate-x-16"
                  : "pointer-events-none opacity-0 translate-x-16"
            }`}
            aria-hidden={i !== current}
          >
            {child}
          </div>
        ))}
      </div>

      <SlideNav
        current={current}
        total={total}
        onPrev={prev}
        onNext={next}
        onGoTo={goTo}
      />
    </div>
  );
}
