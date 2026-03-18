"use client";

const S = "#3f3f46";
const SF = "#18181b";
const T = "#e4e4e7";
const TM = "#a1a1aa";
const A = "#6366f1";
const AL = "#818cf8";
const W = "#52525b";

export default function PipelineOverview() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8">
      <div className="animate-stagger mb-6 flex flex-col items-center">
        <span className="mb-2 font-mono text-sm tracking-widest text-accent">03</span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Full Pipeline Overview
        </h2>
        <div className="mt-2 h-px w-16 bg-accent" />
      </div>

      <svg
        viewBox="0 0 980 390"
        className="w-full max-w-[1020px]"
        fill="none"
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <defs>
          <marker id="ah" viewBox="0 0 10 7" refX="9" refY="3.5" markerWidth="7" markerHeight="5" orient="auto">
            <polygon points="0,0.8 9,3.5 0,6.2" fill={W} />
          </marker>
        </defs>

        {/* ── section labels ── */}
        <text x={22} y={40} fill={TM} fontSize={14} fontWeight={500} opacity={0.7} letterSpacing="0.06em">
          livestream
        </text>
        <text x={920} y={34} fill={TM} fontSize={12} fontWeight={500} opacity={0.7} textAnchor="end" letterSpacing="0.04em">
          Output
        </text>
        <text x={920} y={50} fill={TM} fontSize={12} fontWeight={500} opacity={0.7} textAnchor="end" letterSpacing="0.04em">
          broadcast stream
        </text>

        {/* ═══════════ INPUT FRAMES ═══════════ */}
        {/* f_{t-k}  dashed */}
        <rect x={28} y={82} width={76} height={42} rx={4} stroke={S} strokeWidth={1.2} strokeDasharray="5 3" fill={SF} />
        <text x={66} y={108} fill={TM} fontSize={14} textAnchor="middle" fontStyle="italic">
          f<tspan dy={4} fontSize={10}>t−k</tspan>
        </text>

        {/* f_t  solid */}
        <rect x={28} y={176} width={76} height={48} rx={4} stroke="#52525b" strokeWidth={1.5} fill={SF} />
        <text x={66} y={205} fill={T} fontSize={15} textAnchor="middle" fontStyle="italic">
          f<tspan dy={4} fontSize={11}>t</tspan>
        </text>

        {/* f_{t+k}  dashed */}
        <rect x={28} y={268} width={76} height={42} rx={4} stroke={S} strokeWidth={1.2} strokeDasharray="5 3" fill={SF} />
        <text x={66} y={294} fill={TM} fontSize={14} textAnchor="middle" fontStyle="italic">
          f<tspan dy={4} fontSize={10}>t+k</tspan>
        </text>

        {/* ═══════════ PROCESS NODES ═══════════ */}

        {/* detect player movement  (purple tint) */}
        <rect x={195} y={50} width={155} height={44} rx={6} stroke="#a855f7" strokeWidth={1} strokeOpacity={0.4} fill="#a855f7" fillOpacity={0.06} />
        <text x={272} y={68} fill="#c4b5fd" fontSize={11} textAnchor="middle" fontWeight={500}>
          detect player
        </text>
        <text x={272} y={82} fill="#c4b5fd" fontSize={11} textAnchor="middle" fontWeight={500}>
          movement
        </text>

        {/* diamond — new camera? */}
        <polygon
          points="205,158 245,200 205,242 165,200"
          stroke={A} strokeWidth={1.2} strokeOpacity={0.45} fill={A} fillOpacity={0.06}
        />
        <text x={205} y={196} fill={AL} fontSize={10} textAnchor="middle" fontWeight={600}>
          new
        </text>
        <text x={205} y={209} fill={AL} fontSize={10} textAnchor="middle" fontWeight={600}>
          camera?
        </text>

        {/* board segmentation */}
        <rect x={296} y={178} width={142} height={44} rx={6} stroke={S} strokeWidth={1.2} fill={SF} />
        <text x={367} y={196} fill={T} fontSize={11} textAnchor="middle" fontWeight={500}>
          banner
        </text>
        <text x={367} y={210} fill={T} fontSize={11} textAnchor="middle" fontWeight={500}>
          segmentation
        </text>

        {/* compute homography */}
        <rect x={464} y={178} width={146} height={44} rx={6} stroke={S} strokeWidth={1.2} fill={SF} />
        <text x={537} y={196} fill={T} fontSize={11} textAnchor="middle" fontWeight={500}>
          compute
        </text>
        <text x={537} y={210} fill={T} fontSize={11} textAnchor="middle" fontWeight={500}>
          homography
        </text>

        {/* optical flow */}
        <rect x={424} y={308} width={126} height={42} rx={6} stroke={S} strokeWidth={1.2} fill={SF} />
        <text x={487} y={334} fill={T} fontSize={11} textAnchor="middle" fontWeight={500}>
          optical flow
        </text>

        {/* overlay logo  (accent highlight) */}
        <rect x={660} y={178} width={122} height={44} rx={6} stroke={A} strokeWidth={1.3} strokeOpacity={0.5} fill={A} fillOpacity={0.08} />
        <text x={721} y={205} fill={AL} fontSize={12} textAnchor="middle" fontWeight={600}>
          overlay logo
        </text>

        {/* ═══════════ OUTPUT FRAMES ═══════════ */}
        {/* O_{t-k}  dashed */}
        <rect x={840} y={82} width={76} height={42} rx={4} stroke={A} strokeWidth={1} strokeDasharray="5 3" strokeOpacity={0.35} fill={A} fillOpacity={0.04} />
        <text x={878} y={108} fill={AL} fontSize={14} textAnchor="middle" fontStyle="italic" opacity={0.65}>
          O<tspan dy={4} fontSize={10}>t−k</tspan>
        </text>

        {/* O_t  solid */}
        <rect x={840} y={176} width={76} height={48} rx={4} stroke={A} strokeWidth={1.4} strokeOpacity={0.5} fill={A} fillOpacity={0.06} />
        <text x={878} y={205} fill={AL} fontSize={15} textAnchor="middle" fontStyle="italic">
          O<tspan dy={4} fontSize={11}>t</tspan>
        </text>

        {/* O_{t+k}  dashed */}
        <rect x={840} y={268} width={76} height={42} rx={4} stroke={A} strokeWidth={1} strokeDasharray="5 3" strokeOpacity={0.35} fill={A} fillOpacity={0.04} />
        <text x={878} y={294} fill={AL} fontSize={14} textAnchor="middle" fontStyle="italic" opacity={0.65}>
          O<tspan dy={4} fontSize={10}>t+k</tspan>
        </text>

        {/* ═══════════ CONNECTORS ═══════════ */}

        {/* A  branch off f_t→diamond line up to detect player */}
        <polyline points="138,200 138,72 195,72" stroke={W} strokeWidth={1} markerEnd="url(#ah)" />

        {/* B  f_t → diamond */}
        <line x1={104} y1={200} x2={165} y2={200} stroke={W} strokeWidth={1} markerEnd="url(#ah)" />

        {/* C  diamond → YES → board seg */}
        <line x1={245} y1={200} x2={296} y2={200} stroke={W} strokeWidth={1} markerEnd="url(#ah)" />
        <text x={255} y={192} fill={AL} fontSize={10.5} fontWeight={600}>YES</text>

        {/* D  board seg → compute hom */}
        <line x1={438} y1={200} x2={464} y2={200} stroke={W} strokeWidth={1} markerEnd="url(#ah)" />

        {/* E  compute hom → merge point */}
        <line x1={610} y1={200} x2={635} y2={200} stroke={W} strokeWidth={1} />

        {/* F  diamond NO → optical flow */}
        <polyline points="205,242 205,329 424,329" stroke={W} strokeWidth={1} markerEnd="url(#ah)" />
        <text x={213} y={278} fill={AL} fontSize={10.5} fontWeight={600}>NO</text>
        <text x={213} y={294} fill={TM} fontSize={9.5} opacity={0.75}>use cached homography</text>

        {/* G  optical flow → merge point */}
        <polyline points="550,329 635,329 635,200" stroke={W} strokeWidth={1} />

        {/* merge → overlay logo (single arrow) */}
        <line x1={635} y1={200} x2={660} y2={200} stroke={W} strokeWidth={1} markerEnd="url(#ah)" />

        {/* H  detect player → overlay logo */}
        <polyline points="350,72 721,72 721,178" stroke={W} strokeWidth={1} markerEnd="url(#ah)" />

        {/* I  overlay logo → O_t */}
        <line x1={782} y1={200} x2={840} y2={200} stroke={W} strokeWidth={1} markerEnd="url(#ah)" />

        {/* dashed links between input frames */}
        <line x1={66} y1={124} x2={66} y2={176} stroke={W} strokeWidth={0.7} strokeDasharray="3 3" strokeOpacity={0.35} />
        <line x1={66} y1={224} x2={66} y2={268} stroke={W} strokeWidth={0.7} strokeDasharray="3 3" strokeOpacity={0.35} />

        {/* dashed links between output frames */}
        <line x1={878} y1={124} x2={878} y2={176} stroke={W} strokeWidth={0.7} strokeDasharray="3 3" strokeOpacity={0.35} />
        <line x1={878} y1={224} x2={878} y2={268} stroke={W} strokeWidth={0.7} strokeDasharray="3 3" strokeOpacity={0.35} />
      </svg>
    </div>
  );
}
