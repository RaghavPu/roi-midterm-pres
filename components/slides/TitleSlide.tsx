"use client";

interface Author {
  name: string;
  linkedin?: string;
}

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  authors?: (string | Author)[];
  date?: string;
  tag?: string;
}

export default function TitleSlide({
  title,
  subtitle,
  authors,
  date,
  tag,
}: TitleSlideProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-12">
      <div className="animate-stagger flex max-w-3xl flex-col items-center text-center">
        {tag && (
          <span className="mb-6 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs tracking-widest text-accent-light uppercase">
            {tag}
          </span>
        )}
        <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-6xl font-bold leading-tight tracking-tight text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-xl text-muted">{subtitle}</p>
        )}
        {authors && authors.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {authors.map((author) => {
              const name = typeof author === "string" ? author : author.name;
              const linkedin = typeof author === "string" ? undefined : author.linkedin;
              return linkedin ? (
                <a
                  key={name}
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-surface px-4 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-accent/15 hover:text-accent-light"
                >
                  {name}
                </a>
              ) : (
                <span
                  key={name}
                  className="rounded-full bg-surface px-4 py-1.5 text-sm text-zinc-400"
                >
                  {name}
                </span>
              );
            })}
          </div>
        )}
        {date && (
          <p className="mt-6 font-mono text-sm text-muted/60">{date}</p>
        )}
      </div>
    </div>
  );
}
