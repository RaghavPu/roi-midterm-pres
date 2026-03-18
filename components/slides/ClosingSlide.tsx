"use client";

interface ClosingSlideProps {
  title: string;
  subtitle?: string;
  links?: { label: string; href: string }[];
}

export default function ClosingSlide({
  title,
  subtitle,
  links,
}: ClosingSlideProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-12">
      <div className="animate-stagger flex flex-col items-center text-center">
        <h2 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-muted">{subtitle}</p>
        )}
        {links && links.length > 0 && (
          <div className="mt-10 flex gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-surface-light px-6 py-2.5 text-sm font-medium text-zinc-400 transition-all hover:border-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
