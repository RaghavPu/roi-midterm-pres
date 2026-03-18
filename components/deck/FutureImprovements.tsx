"use client";

const items = [
  {
    tag: "Visual",
    title: "Visual Improvements",
    points: ["Ball tracking", "Occlusion handling", "Shadows & lighting correction"],
  },
  {
    tag: "Cuts",
    title: "Camera Cuts",
    points: ["Detect and handle camera angle transitions gracefully"],
  },
  {
    tag: "Speed",
    title: "Real-Time Performance",
    points: ["Model fine-tuning for speed", "Inference benchmarking at 30 fps target"],
  },
  {
    tag: "Auto",
    title: "Automatic Region Selection",
    points: ["Remove manual click-to-select step", "Auto-detect ad regions from frame content"],
  },
  {
    tag: "Sports",
    title: "Other Sports",
    points: ["Generalize pipeline beyond tennis to football, basketball, etc."],
  },
];

export default function FutureImprovements() {
  return (
    <div className="flex h-full w-full items-center justify-center px-16">
      <div className="flex w-full max-w-5xl flex-col">
        {/* heading */}
        <div className="animate-stagger mb-8 flex flex-col">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Future Improvements
          </h2>
          <div className="mt-3 h-px w-16 bg-accent" />
        </div>

        {/* grid */}
        <div className="grid grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={item.tag}
              className={`animate-stagger flex flex-col rounded-xl border border-surface-light bg-surface/50 px-5 py-4 backdrop-blur-sm ${
                i >= 3 ? "col-span-1" : ""
              }`}
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <span className="mb-2 w-fit rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-accent-light">
                {item.tag}
              </span>
              <h3 className="text-[15px] font-semibold text-foreground">
                {item.title}
              </h3>
              <ul className="mt-2 flex flex-col gap-1.5">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                    <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent-light/60" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
