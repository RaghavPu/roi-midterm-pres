import Presentation from "@/components/Presentation";
import TitleSlide from "@/components/slides/TitleSlide";
import SectionSlide from "@/components/slides/SectionSlide";
import ContentSlide from "@/components/slides/ContentSlide";
import BulletSlide from "@/components/slides/BulletSlide";
import ImageSlide from "@/components/slides/ImageSlide";
import ClosingSlide from "@/components/slides/ClosingSlide";

function PlaceholderImage({ label, color }: { label: string; color: string }) {
  return (
    <div
      className={`flex h-72 w-full items-center justify-center rounded-xl ${color}`}
    >
      <span className="font-mono text-sm text-white/60">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <Presentation>
      {/* Slide 1: Title */}
      <TitleSlide
        tag="Midterm Presentation"
        title="ROI Tracking in Sports Broadcasts"
        subtitle="Automated region-of-interest detection and sponsor overlay analysis using computer vision"
        authors={["Alice Chen", "Bob Martinez", "Charlie Kim", "Dana Patel"]}
        date="March 2026"
      />

      {/* Slide 2: Section — Problem */}
      <SectionSlide
        number="01"
        title="Problem Statement"
        subtitle="Understanding the challenge we set out to solve and why it matters for the sports media industry."
      />

      {/* Slide 3: Content — Problem detail */}
      <ContentSlide
        title="The Sponsorship Visibility Gap"
        text={
          <div className="flex flex-col gap-4">
            <p>
              Sports sponsors invest billions annually in courtside banners, jersey logos, and
              broadcast overlays — but measuring actual on-screen visibility remains largely manual.
            </p>
            <p>
              Current methods rely on human reviewers sampling frames, leading to inaccurate
              exposure estimates and misaligned sponsorship valuations.
            </p>
          </div>
        }
        media={<PlaceholderImage label="broadcast frame example" color="bg-indigo-900/60" />}
      />

      {/* Slide 4: Section — Approach */}
      <SectionSlide
        number="02"
        title="Our Approach"
        subtitle="A pipeline combining segmentation, homography estimation, and temporal tracking."
      />

      {/* Slide 5: Bullets — Pipeline */}
      <BulletSlide
        title="Technical Pipeline"
        bullets={[
          {
            icon: "🔍",
            label: "Region Segmentation",
            detail:
              "SAM 2-based segmentation to isolate sponsor regions in each frame with pixel-level accuracy.",
          },
          {
            icon: "📐",
            label: "Homography Estimation",
            detail:
              "Court-line detection and perspective transform to rectify camera angles and normalize coordinates.",
          },
          {
            icon: "🎯",
            label: "ROI Tracking",
            detail:
              "Temporal propagation of masks across video frames using prompt-based memory attention.",
          },
          {
            icon: "📊",
            label: "Exposure Quantification",
            detail:
              "Pixel-area integration over time to compute total sponsor visibility in seconds and square meters.",
          },
        ]}
      />

      {/* Slide 6: Content — Architecture (reversed layout) */}
      <ContentSlide
        title="System Architecture"
        text={
          <div className="flex flex-col gap-4">
            <p>
              The pipeline ingests raw broadcast footage and outputs per-sponsor
              exposure reports with frame-level granularity.
            </p>
            <p>
              Each module runs independently and communicates via a shared
              coordinate space established by the homography step.
            </p>
          </div>
        }
        media={<PlaceholderImage label="architecture diagram" color="bg-violet-900/60" />}
        reversed
      />

      {/* Slide 7: Image — Result */}
      <ImageSlide
        title="Sample Output: Sponsor Region Detection"
        caption="SAM 2 mask overlay on a broadcast frame — sponsor banners highlighted in purple"
      >
        <PlaceholderImage label="result visualization" color="bg-fuchsia-900/60" />
      </ImageSlide>

      {/* Slide 8: Bullets — Current Status */}
      <BulletSlide
        title="Progress & Current Status"
        bullets={[
          {
            icon: "✅",
            label: "Segmentation module complete",
            detail: "SAM 2 integration tested on 500+ frames with 94% mIoU on banner regions.",
          },
          {
            icon: "✅",
            label: "Homography pipeline working",
            detail: "Court-line detection achieves sub-pixel reprojection error on NBA footage.",
          },
          {
            icon: "🔄",
            label: "Temporal tracking in progress",
            detail: "Mask propagation across consecutive frames — handling occlusion edge cases.",
          },
          {
            icon: "⬜",
            label: "Exposure quantification pending",
            detail: "Integration of area computation and reporting dashboard.",
          },
        ]}
      />

      {/* Slide 9: Section — Next steps */}
      <SectionSlide
        number="03"
        title="Next Steps"
        subtitle="What we're tackling between now and the final presentation."
      />

      {/* Slide 10: Content — Timeline */}
      <ContentSlide
        title="Remaining Milestones"
        text={
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">WK 8–9</span>
              <span>Complete temporal tracking with occlusion handling</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">WK 10</span>
              <span>Build exposure quantification module</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">WK 11–12</span>
              <span>End-to-end evaluation on full broadcast games</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">WK 13</span>
              <span>Final presentation and report</span>
            </div>
          </div>
        }
        media={<PlaceholderImage label="gantt chart / timeline" color="bg-emerald-900/60" />}
      />

      {/* Slide 11: Closing */}
      <ClosingSlide
        title="Questions?"
        subtitle="Thanks for listening — we'd love your feedback."
        links={[
          { label: "GitHub Repo", href: "#" },
          { label: "Project Docs", href: "#" },
        ]}
      />
    </Presentation>
  );
}
