import Presentation from "@/components/Presentation";
import Title from "@/components/deck/Title";
import Team from "@/components/deck/Team";
import ProblemOutline from "@/components/deck/ProblemOutline";
import Challenges from "@/components/deck/Challenges";
import PipelineOverview from "@/components/deck/PipelineOverview";
import BoardsSegmentation from "@/components/deck/BoardsSegmentation";
import Homography from "@/components/deck/Homography";
import LogoOverlay from "@/components/deck/LogoOverlay";
import PlayerTracking from "@/components/deck/PlayerTracking";
import Demo from "@/components/deck/Demo";
import FutureImprovements from "@/components/deck/FutureImprovements";
import AsksMitsubishi from "@/components/deck/AsksMitsubishi";
import Thanks from "@/components/deck/Thanks";

const PIPELINE_MINIMAP = {
  slide: 4,
  range: [5, 8] as [number, number],
  highlights: { 5: "banner-seg", 6: "homography", 7: "overlay-logo", 8: "detect-player" },
};

const SLIDE_STEPS = [
  1,  // Title
  5,  // Team (1 heading + 4 reveals)
  2,  // Problem Outline (1 base + 1 bounding box reveal)
  1,  // Challenges
  1,  // Pipeline Overview
  6,  // Boards Segmentation (1 intro + 1 SAM + 4 experiments)
  15, // Homography (1 intro + 5 motivation + 1 vanishing point + 8 fit steps)
  3,  // Logo Overlay (1 intro + 2 examples)
  2,  // Player Tracking (1 intro + 1 video demo)
  3,  // Demo (stable + moving + player overlay)
  1,  // Future Improvements
  1,  // Asks From Mitsubishi
  1,  // Thanks
];

export default function Home() {
  return (
    <Presentation slideSteps={SLIDE_STEPS} minimap={PIPELINE_MINIMAP}>
      <Title />
      <Team />
      <ProblemOutline />
      <Challenges />
      <PipelineOverview />
      <BoardsSegmentation />
      <Homography />
      <LogoOverlay />
      <PlayerTracking />
      <Demo />
      <FutureImprovements />
      <AsksMitsubishi />
      <Thanks />
    </Presentation>
  );
}
