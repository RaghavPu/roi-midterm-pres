import ContentSlide from "../slides/ContentSlide";

function Placeholder() {
  return (
    <div className="flex h-72 w-full items-center justify-center rounded-xl bg-fuchsia-900/60">
      <span className="font-mono text-sm text-white/60">logo overlay visual</span>
    </div>
  );
}

export default function LogoOverlay() {
  return (
    <ContentSlide
      title="New Logo Overlay"
      text={<p className="text-zinc-400">Placeholder — logo compositing and overlay pipeline.</p>}
      media={<Placeholder />}
    />
  );
}
