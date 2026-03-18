"use client";

const team = [
  { name: "Raghav", linkedin: "https://www.linkedin.com/in/raghav-punnam/" },
  { name: "Enrique", linkedin: "https://www.linkedin.com/in/enrique-d%C3%ADaz-de-le%C3%B3n-hicks-33b933103/" },
  { name: "Giovanni", linkedin: "https://www.linkedin.com/in/giovannivisi/" },
  { name: "Martina", linkedin: "https://www.linkedin.com/in/martina-maiorana-6baa97254/" },
];

export default function Thanks() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-12">
      <div className="animate-stagger flex flex-col items-center text-center">
        <h2 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
          Thank You
        </h2>
        <div className="mt-5 flex items-center gap-1.5 text-lg text-muted">
          {team.map((m, i) => (
            <span key={m.name}>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent-light"
              >
                {m.name}
              </a>
              {i < team.length - 1 && <span className="text-muted/40">,&nbsp;</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
