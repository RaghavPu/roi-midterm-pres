import ImageSlide from "../slides/ImageSlide";

function Placeholder() {
  return (
    <div className="flex h-72 w-[640px] items-center justify-center rounded-xl bg-zinc-800">
      <span className="font-mono text-sm text-white/60">demo video</span>
    </div>
  );
}

export default function Demo() {
  return (
    <ImageSlide
      title="Demo — Current Progress"
      caption="Placeholder — embedded demo video will go here"
    >
      <Placeholder />
    </ImageSlide>
  );
}
