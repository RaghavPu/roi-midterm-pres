"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useSlideActive } from "../SlideContext";

interface Bubble {
  label: string;
  radius: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const GRAVITY = 0.18;
const DAMPING = 0.985;
const BOUNCE = 0.4;
const COLLISION_PUSH = 0.2;

const bubbleDefs = [
  { label: "Court\nBanners", radius: 95, tint: "rgba(99,102,241,0.25)" },
  { label: "Wall\nBanners", radius: 85, tint: "rgba(168,85,247,0.25)" },
  { label: "Speed", radius: 70, tint: "rgba(244,63,94,0.25)" },
  { label: "Smoothing\n& Stability", radius: 60, tint: "rgba(245,158,11,0.25)" },
];

function spawnBubbles(w: number, h: number): Bubble[] {
  const cx = w / 2;
  const cy = h / 2;
  const angles = [-2.3, -0.8, 2.5, 0.6];
  const dist = 400;

  return bubbleDefs.map((b, i) => ({
    label: b.label,
    radius: b.radius,
    x: cx + Math.cos(angles[i]) * dist,
    y: cy + Math.sin(angles[i]) * dist,
    vx: 0,
    vy: 0,
  }));
}

function simulate(bubbles: Bubble[], cx: number, cy: number) {
  for (const b of bubbles) {
    const dx = cx - b.x;
    const dy = cy - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    b.vx += (dx / dist) * GRAVITY;
    b.vy += (dy / dist) * GRAVITY;
    b.vx *= DAMPING;
    b.vy *= DAMPING;
    b.x += b.vx;
    b.y += b.vy;
  }

  for (let i = 0; i < bubbles.length; i++) {
    for (let j = i + 1; j < bubbles.length; j++) {
      const a = bubbles[i];
      const bub = bubbles[j];
      const dx = bub.x - a.x;
      const dy = bub.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const minDist = a.radius + bub.radius + 6;
      if (dist < minDist) {
        const overlap = minDist - dist;
        const nx = dx / dist;
        const ny = dy / dist;
        const push = overlap * COLLISION_PUSH;
        a.x -= nx * push;
        a.y -= ny * push;
        bub.x += nx * push;
        bub.y += ny * push;
        a.vx -= nx * push * BOUNCE;
        a.vy -= ny * push * BOUNCE;
        bub.vx += nx * push * BOUNCE;
        bub.vy += ny * push * BOUNCE;
      }
    }
  }
}

function PhysicsBubbles({ active }: { active: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const rafRef = useRef<number>(0);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [visible, setVisible] = useState(false);

  const tick = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    simulate(bubblesRef.current, w / 2, h / 2);
    setPositions(bubblesRef.current.map((b) => ({ x: b.x, y: b.y })));
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(rafRef.current);
      setVisible(false);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    cancelAnimationFrame(rafRef.current);
    setVisible(false);

    const w = el.offsetWidth;
    const h = el.offsetHeight;
    bubblesRef.current = spawnBubbles(w, h);
    setPositions(bubblesRef.current.map((b) => ({ x: b.x, y: b.y })));

    const showTimer = setTimeout(() => setVisible(true), 80);
    const startTimer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(startTimer);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active, tick]);

  return (
    <div ref={containerRef} className="relative flex-1 h-[460px]">
      {bubbleDefs.map((b, i) => {
        const pos = positions[i];
        if (!pos) return null;
        const d = b.radius * 2;

        return (
          <div
            key={b.label}
            className="absolute transition-opacity duration-700"
            style={{
              width: d,
              height: d,
              left: pos.x - b.radius,
              top: pos.y - b.radius,
              opacity: visible ? 1 : 0,
            }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center rounded-full border border-white/[0.12]"
              style={{
                background: `linear-gradient(135deg, ${b.tint} 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 100%)`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -1px 1px rgba(0,0,0,0.1), 0 12px 40px rgba(0,0,0,0.25)",
              }}
            >
              <span className="text-center text-sm font-semibold leading-tight text-white whitespace-pre-line">
                {b.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Challenges() {
  const active = useSlideActive();

  return (
    <div className="flex h-full w-full items-center justify-center px-16">
      <div className="flex w-full max-w-5xl items-center gap-20">
        <div className="animate-stagger flex w-[30%] shrink-0 flex-col">
          <span className="mb-4 font-mono text-sm tracking-widest text-accent">02</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Key Challenges
          </h2>
          <div className="mt-3 h-px w-16 bg-accent" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Core technical hurdles we need to solve for reliable, real-time ad replacement.
          </p>
        </div>

        {active ? <PhysicsBubbles active={active} /> : <div className="flex-1 h-[460px]" />}
      </div>
    </div>
  );
}
