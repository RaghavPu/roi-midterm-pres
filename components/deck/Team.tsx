import TeamSlide from "../slides/TeamSlide";

export default function Team() {
  return (
    <TeamSlide
      members={[
        { name: "Raghav", role: "MS CSE Harvard", initials: "R", color: "bg-indigo-600" },
        { name: "Enrique", role: "MS CSE Harvard", initials: "E", color: "bg-amber-600" },
        { name: "Giovanni", role: "MS CSE Polimi", initials: "G", color: "bg-emerald-600" },
        { name: "Martina", role: "MS CSE Polimi", initials: "M", color: "bg-rose-600" },
      ]}
    />
  );
}
