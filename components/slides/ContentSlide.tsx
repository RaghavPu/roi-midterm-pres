"use client";

import { ReactNode } from "react";

interface ContentSlideProps {
  title: string;
  text: string | ReactNode;
  media?: ReactNode;
  reversed?: boolean;
}

export default function ContentSlide({
  title,
  text,
  media,
  reversed = false,
}: ContentSlideProps) {
  return (
    <div className="flex h-full w-full items-center justify-center px-16">
      <div
        className={`flex w-full max-w-5xl items-center gap-16 ${
          reversed ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Text side */}
        <div className="animate-stagger flex flex-1 flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          <div className="mt-2 h-px w-16 bg-accent" />
          <div className="mt-6 text-lg leading-relaxed text-zinc-400">
            {text}
          </div>
        </div>

        {/* Media side */}
        {media && (
          <div className="animate-scale-in flex-1">{media}</div>
        )}
      </div>
    </div>
  );
}
