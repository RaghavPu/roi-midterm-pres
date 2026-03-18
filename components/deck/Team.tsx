import TeamSlide from "../slides/TeamSlide";

export default function Team() {
  return (
    <TeamSlide
      members={[
        { name: "Raghav", role: "MS CSE Harvard", initials: "R", color: "bg-indigo-600", linkedin: "https://www.linkedin.com/in/raghav-punnam/" },
        { name: "Enrique", role: "MS CSE Harvard", initials: "E", color: "bg-amber-600", linkedin: "https://www.linkedin.com/in/enrique-d%C3%ADaz-de-le%C3%B3n-hicks-33b933103/" },
        { name: "Giovanni", role: "MS CSE Polimi", initials: "G", color: "bg-emerald-600", linkedin: "https://www.linkedin.com/in/giovannivisi/" },
        { name: "Martina", role: "MS CSE Polimi", initials: "M", color: "bg-rose-600", linkedin: "https://www.linkedin.com/in/martina-maiorana-6baa97254/" },
      ]}
    />
  );
}
