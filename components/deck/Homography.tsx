import ContentSlide from "../slides/ContentSlide";

function Placeholder() {
  return (
    <div className="flex h-72 w-full items-center justify-center rounded-xl bg-violet-900/60">
      <span className="font-mono text-sm text-white/60">homography visual</span>
    </div>
  );
}

export default function Homography() {
  return (
    <ContentSlide
      title="Homography & Perspective Geometry"
      text={<p className="text-zinc-400">Placeholder — perspective geometry extraction and rectification.</p>}
      media={<Placeholder />}
      reversed
    />
  );
}
