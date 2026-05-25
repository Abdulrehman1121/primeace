import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees */
  max?: number;
  /** Translate-z on hover for pop */
  glare?: boolean;
};

/**
 * Premium 3D tilt wrapper. Smooth, GPU-accelerated, respects coarse pointers.
 * Wrap any card to get a tasteful perspective tilt + glare on hover.
 */
export function Tilt3D({ children, className = "", max = 8, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    if (glareRef.current) {
      glareRef.current.style.opacity = "1";
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, oklch(0.85 0.15 245 / 0.25), transparent 55%)`;
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative will-change-transform transition-transform duration-300 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 mix-blend-screen"
        />
      )}
    </div>
  );
}
