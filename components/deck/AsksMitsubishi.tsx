"use client";

const asks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9.5 10l2 1.5L14.5 8" />
      </svg>
    ),
    title: "Sample Video",
    description: "Sample footage from existing Mitsubishi models or internal datasets to benchmark and validate our pipeline against real-world broadcast conditions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h2" />
        <rect x="1" y="1" width="16" height="16" rx="2" opacity="0.3" />
      </svg>
    ),
    title: "Resources",
    description: "Access to GPU compute for training and real-time inference. Our pipeline targets 30 fps — knowing available hardware helps us tune model complexity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 12h4l3-9 2 18 3-9h4" />
      </svg>
    ),
    title: "Pipeline Requirements",
    description: "Expected livestream format, resolution, and codec. Desired input/output interface — should we consume an RTMP stream and produce one, or work frame-by-frame?",
  },
];

export default function AsksMitsubishi() {
  return (
    <div className="flex h-full w-full items-center justify-center px-16">
      <div className="flex w-full max-w-5xl items-start gap-16">
        {/* Left — heading */}
        <div className="animate-stagger flex w-[32%] shrink-0 flex-col">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Asks From<br />Mitsubishi
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mt-5 text-sm leading-relaxed text-muted">
            To move to the next phase, we need a few things from the Mitsubishi team.
          </p>
        </div>

        {/* Right — cards */}
        <div className="flex flex-1 flex-col gap-5">
          {asks.map((ask, i) => (
            <div
              key={ask.title}
              className="animate-stagger group flex items-start gap-5 rounded-xl border border-surface-light bg-surface/60 px-6 py-5 backdrop-blur-sm transition-colors hover:border-accent/30"
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-light bg-surface text-accent-light transition-colors group-hover:border-accent/30 group-hover:text-foreground">
                {ask.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-foreground">
                  {ask.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {ask.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
