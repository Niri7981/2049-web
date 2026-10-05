"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import { useId, type PointerEvent } from "react";

// Figures from the supplied app design sheet, with no neighboring states.
// Replace this source with an isolated export when one is available.
const artwork = {
  src: "/spirit/design-sheet.png",
  width: 1536,
  height: 1024,
};

const crops = {
  idle: { x: 854, y: 268, width: 114, height: 148 },
  focused: { x: 970, y: 278, width: 122, height: 150 },
  waiting: { x: 1118, y: 278, width: 108, height: 144 },
  curious: { x: 1004, y: 535, width: 96, height: 150 },
  notified: { x: 1120, y: 534, width: 118, height: 151 },
  sleeping: { x: 844, y: 602, width: 136, height: 84 },
};

export default function Spirit({
  state = "idle",
  floating = true,
  interactive = true,
}: {
  state?: keyof typeof crops;
  floating?: boolean;
  interactive?: boolean;
}) {
  const id = useId();
  const reducedMotion = useReducedMotion();
  const spring = { stiffness: 120, damping: 20, mass: 0.7 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const rotate = useSpring(0, spring);
  const crop = crops[state];

  function respond(event: PointerEvent<HTMLDivElement>) {
    if (!interactive || reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    x.set(horizontal * 4);
    y.set(vertical * 4);
    rotate.set(horizontal * 1.2);
  }

  function settle() {
    x.set(0);
    y.set(0);
    rotate.set(0);
  }

  return (
    <div className="spirit" data-floating={floating}>
      <div className="spirit-interaction" onPointerMove={respond} onPointerLeave={settle}>
        <motion.div className="spirit-emergence" style={{ x, y, rotate }}>
          <div className="spirit-float">
            <svg
              className="spirit-art"
              viewBox={`${crop.x} ${crop.y} ${crop.width} ${crop.height}`}
              preserveAspectRatio={state === "sleeping" ? "xMidYMax meet" : "xMidYMid meet"}
              role="img"
              aria-labelledby={`${id}-title`}
            >
              <title id={`${id}-title`}>{state === "idle" ? "Yosh, quietly floating with open eyes" : `Yosh in its ${state} state`}</title>
              <defs>
                <clipPath id={`${id}-crop`}>
                  <rect x={crop.x} y={crop.y} width={crop.width} height={crop.height} />
                </clipPath>
                {/* Remove only the sheet's dark backdrop. Morphological closing
                    fills eye-sized gaps without expanding the mascot silhouette.
                    SourceGraphic preserves the supplied colors and cloth detail. */}
                <filter id={`${id}-matte`} colorInterpolationFilters="sRGB">
                  <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  .2126 .7152 .0722 0 0" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="8" intercept="-1.6" />
                  </feComponentTransfer>
                  <feMorphology operator="dilate" radius="3" />
                  <feMorphology operator="erode" radius="3" />
                  <feGaussianBlur stdDeviation="0.3" result="matte" />
                  <feComposite in="SourceGraphic" in2="matte" operator="in" />
                </filter>
              </defs>
              <g clipPath={`url(#${id}-crop)`}>
                <image href={artwork.src} width={artwork.width} height={artwork.height} filter={`url(#${id}-matte)`} />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
