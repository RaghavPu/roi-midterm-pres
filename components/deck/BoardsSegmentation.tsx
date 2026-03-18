import ContentSlide from "../slides/ContentSlide";

function Placeholder() {
  return (
    <div className="flex h-72 w-full items-center justify-center rounded-xl bg-indigo-900/60">
      <span className="font-mono text-sm text-white/60">segmentation visual</span>
    </div>
  );
}

export default function BoardsSegmentation() {
  return (
    <ContentSlide
      title="Boards Segmentation & Tracking"
      text={<p className="text-zinc-400">Placeholder — details on board segmentation and tracking approach.</p>}
      media={<Placeholder />}
    />
  );
}
