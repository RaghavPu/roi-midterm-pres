"use client";

import { useSlideStep } from "../SlideContext";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  color: string;
}

interface TeamSlideProps {
  title?: string;
  members: TeamMember[];
}

export default function TeamSlide({ title = "Meet the Team", members }: TeamSlideProps) {
  const step = useSlideStep();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-16">
      <h2
        className="mb-12 text-4xl font-bold tracking-tight text-foreground transition-all duration-500"
        style={{
          opacity: step >= 0 ? 1 : 0,
          transform: step >= 0 ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {title}
      </h2>

      <div className="flex items-center gap-8">
        {members.map((member, i) => {
          const isRevealed = step >= i + 1;
          const isLatest = step === i + 1;

          return (
            <div
              key={member.name}
              className="flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {/* Avatar */}
              <div
                className={`relative mb-4 flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-white transition-all duration-700 ${member.color}`}
                style={{
                  boxShadow: isLatest
                    ? "0 0 40px rgba(99, 102, 241, 0.4), 0 0 80px rgba(99, 102, 241, 0.15)"
                    : "0 0 0px transparent",
                }}
              >
                {member.initials}
                {isLatest && (
                  <div className="absolute inset-0 rounded-full border-2 border-accent-light animate-pulse" />
                )}
              </div>

              {/* Name */}
              <span
                className="text-lg font-semibold transition-colors duration-500"
                style={{ color: isLatest ? "var(--foreground)" : "var(--muted)" }}
              >
                {member.name}
              </span>

              {/* Role */}
              <span
                className="mt-1 text-sm transition-colors duration-500"
                style={{ color: isLatest ? "var(--accent-light)" : "var(--muted)" }}
              >
                {member.role}
              </span>
            </div>
          );
        })}
      </div>

      {/* Step hint */}
      <p
        className="mt-12 font-mono text-xs text-muted/40 transition-opacity duration-500"
        style={{ opacity: step < members.length ? 1 : 0 }}
      >
        {step === 0 ? "press → to reveal team" : `${step} / ${members.length}`}
      </p>
    </div>
  );
}
