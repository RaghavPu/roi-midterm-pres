import ContentSlide from "../slides/ContentSlide";

function Placeholder() {
  return (
    <div className="flex h-72 w-full items-center justify-center rounded-xl bg-emerald-900/60">
      <span className="font-mono text-sm text-white/60">player tracking visual</span>
    </div>
  );
}

export default function PlayerTracking() {
  return (
    <ContentSlide
      title="Player Tracking"
      text={<p className="text-zinc-400">Placeholder — player detection and tracking module.</p>}
      media={<Placeholder />}
      reversed
    />
  );
}
