"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef } from "react";

const TICK_COUNT = 36;

function Tick({ index, progress, activity, reducedMotion }: {
  index: number;
  progress: MotionValue<number>;
  activity: MotionValue<number>;
  reducedMotion: boolean;
}) {
  const scale = useTransform(() => {
    const distance = Math.abs(progress.get() - index / (TICK_COUNT - 1));
    return 1 + activity.get() * (0.18 + 0.55 * Math.exp(-Math.pow(distance / 0.07, 2)));
  });

  return (
    <motion.span
      className={`scroll-ruler-tick${index % 7 === 0 ? " scroll-ruler-tick-major" : ""}`}
      style={{ scaleX: reducedMotion ? 1 : scale }}
    />
  );
}

export default function ScrollRuler() {
  const { scrollY, scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activity = useSpring(0, { stiffness: 420, damping: 36, mass: 0.6 });
  const spring = useSpring(scrollYProgress, { stiffness: 650, damping: 52, mass: 0.5 });
  const progress = reducedMotion ? scrollYProgress : spring;
  const indicatorTop = useTransform(progress, (value) => `${Math.max(0, Math.min(1, value)) * 100}%`);
  const shiftRight = useTransform(activity, [0, 1], [0, 4]);
  const stretch = useTransform(activity, [0, 1], [1, 1.06]);
  const lineOpacity = useTransform(activity, [0, 1], [0.5, 0.9]);

  useMotionValueEvent(scrollY, "change", () => {
    if (reducedMotion) return;
    activity.set(Math.min(1, 0.5 + Math.abs(scrollY.getVelocity()) / 1400));
    if (settleTimer.current !== null) clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => activity.set(0), 140);
  });

  useEffect(() => () => {
    if (settleTimer.current !== null) clearTimeout(settleTimer.current);
  }, []);

  return (
    <div className="scroll-ruler-overlay" aria-hidden="true">
      <motion.div className="scroll-ruler-track" style={{ x: reducedMotion ? 0 : shiftRight, scaleY: reducedMotion ? 1 : stretch }}>
        <div className="scroll-ruler-ticks">
          {Array.from({ length: TICK_COUNT }, (_, index) => (
            <Tick key={index} index={index} progress={progress} activity={activity} reducedMotion={Boolean(reducedMotion)} />
          ))}
        </div>
        <motion.div className="scroll-reading-line" style={{ top: indicatorTop, opacity: reducedMotion ? 0.5 : lineOpacity }}>
          <span className="scroll-reading-marker" />
        </motion.div>
      </motion.div>
    </div>
  );
}
