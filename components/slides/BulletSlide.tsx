"use client";

interface BulletSlideProps {
  title: string;
  bullets: {
    icon?: string;
    label: string;
    detail?: string;
  }[];
}

export default function BulletSlide({ title, bullets }: BulletSlideProps) {
  return (
    <div className="flex h-full w-full items-center justify-center px-16 py-16">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <div className="mt-2 h-px w-16 bg-accent" />
        <ul className="animate-stagger mt-8 flex flex-col gap-3">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl border border-surface-light bg-surface/50 px-5 py-3 transition-colors hover:border-accent/30 hover:bg-surface"
            >
              {bullet.icon && (
                <span className="mt-0.5 text-xl">{bullet.icon}</span>
              )}
              <div>
                <span className="font-medium text-foreground">
                  {bullet.label}
                </span>
                {bullet.detail && (
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {bullet.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
