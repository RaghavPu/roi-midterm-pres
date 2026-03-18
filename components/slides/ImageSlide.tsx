"use client";

import { ReactNode } from "react";

interface ImageSlideProps {
  title?: string;
  caption?: string;
  children: ReactNode;
}

export default function ImageSlide({ title, caption, children }: ImageSlideProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-16">
      {title && (
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      <div className="animate-scale-in overflow-hidden rounded-2xl border border-surface-light shadow-2xl shadow-black/50">
        {children}
      </div>
      {caption && (
        <p className="mt-6 font-mono text-sm text-muted">{caption}</p>
      )}
    </div>
  );
}
