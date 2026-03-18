import BulletSlide from "../slides/BulletSlide";

export default function Challenges() {
  return (
    <BulletSlide
      title="Challenges"
      bullets={[
        { label: "Challenge 1", detail: "Placeholder description." },
        { label: "Challenge 2", detail: "Placeholder description." },
        { label: "Challenge 3", detail: "Placeholder description." },
      ]}
    />
  );
}
