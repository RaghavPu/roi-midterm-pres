"use client";

interface SectionSlideProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export default function SectionSlide({
  number,
  title,
  subtitle,
}: SectionSlideProps) {
  return (
    <div className="flex h-full w-full items-center justify-center px-12">
      <div className="animate-stagger flex max-w-2xl flex-col items-start">
        {number && (
          <span className="mb-4 font-mono text-sm tracking-widest text-accent">
            {number}
          </span>
        )}
        <h2 className="text-5xl font-bold leading-tight tracking-tight text-foreground">
          {title}
        </h2>
        <div className="animate-draw-line mt-6 h-px bg-gradient-to-r from-accent to-transparent" />
        {subtitle && (
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
