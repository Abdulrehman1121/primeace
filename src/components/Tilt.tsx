import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";
import React, { useRef, useState, useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // Maximum rotation in degrees
};

export function Tilt({ children, className = "", maxTilt = 12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect pointer coarse (touch screen) to disable tilt for high performance on mobile
  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    setIsMobile(media.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const scale = useSpring(1, springConfig);

  // Dynamic glare coordinates and opacity
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const glareOpacity = useSpring(useTransform(scale, [1, 1.04], [0, 0.15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    scale.set(1.04);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className={`relative transition-shadow duration-300 ${className}`}
    >
      {/* Glare Sheen Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-inherit z-10"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.35) 0%, transparent 65%)`,
          opacity: glareOpacity,
          mixBlendMode: "overlay",
        }}
      />
      {/* 3D Depth Inner Container */}
      <div className="w-full h-full" style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
