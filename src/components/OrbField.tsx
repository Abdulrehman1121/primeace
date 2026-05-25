import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

/**
 * Ambient floating gradient orbs + geometric shapes for premium depth.
 * Parallax-bound to scroll, GPU-friendly, decorative only.
 */
export function OrbField({ variant = "hero" }: { variant?: "hero" | "soft" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const intensity = variant === "hero" ? 1 : 0.55;

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Big gradient orbs */}
      <Orb y={y1} className="top-[10%] left-[6%] h-[420px] w-[420px]" color="oklch(0.68 0.20 245)" opacity={0.35 * intensity} />
      <Orb y={y2} className="top-[40%] right-[-4%] h-[520px] w-[520px]" color="oklch(0.55 0.22 270)" opacity={0.28 * intensity} />
      <Orb y={y3} className="bottom-[5%] left-[35%] h-[360px] w-[360px]" color="oklch(0.78 0.18 235)" opacity={0.22 * intensity} />

      {/* Floating 3D geometric shapes */}
      {variant === "hero" && (
        <>
          <FloatShape y={y1} rot={rot} className="top-[18%] right-[18%] h-24 w-24 rounded-3xl" delay={0} />
          <FloatShape y={y2} rot={rot} className="bottom-[22%] left-[10%] h-16 w-16 rounded-full" delay={1.5} />
          <FloatShape y={y3} rot={rot} className="top-[55%] right-[28%] h-12 w-12 rotate-45" delay={0.8} />
        </>
      )}
    </div>
  );
}

function Orb({ y, className, color, opacity }: { y: MotionValue<number>; className: string; color: string; opacity: number }) {
  return (
    <motion.div
      style={{ y, background: color, opacity }}
      className={`absolute rounded-full blur-[110px] ${className}`}
    />
  );
}

function FloatShape({ y, rot, className, delay }: { y: MotionValue<number>; rot: MotionValue<number>; className: string; delay: number }) {
  return (
    <motion.div
      style={{ y, rotate: rot }}
      className={`absolute ${className}`}
    >
      <div
        className="h-full w-full animate-float"
        style={{
          animationDelay: `${delay}s`,
          background: "linear-gradient(135deg, oklch(0.68 0.20 245 / 0.35), oklch(0.55 0.22 270 / 0.15))",
          border: "1px solid oklch(0.78 0.18 235 / 0.4)",
          borderRadius: "inherit",
          boxShadow: "0 20px 60px -10px oklch(0.68 0.20 245 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.15)",
          backdropFilter: "blur(8px)",
        }}
      />
    </motion.div>
  );
}
