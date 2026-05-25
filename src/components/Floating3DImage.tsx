import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";
import React, { useRef, useState, useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  floatDelay?: number;
  floatDuration?: number;
  glow?: boolean;
  glowColor?: string;
  parallaxOffset?: number;
};

export function Floating3DImage({
  children,
  className = "",
  maxTilt = 8,
  floatDelay = 0,
  floatDuration = 6,
  glow = false,
  glowColor = "oklch(0.68 0.20 245 / 0.4)",
  parallaxOffset = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect pointer coarse (touch screen) to disable heavy 3D calculations for mobile performance
  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    setIsMobile(media.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const scale = useSpring(1, springConfig);

  // Glare overlay coordinate calculations
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const glareOpacity = useSpring(useTransform(scale, [1, 1.05], [0, 0.25]), springConfig);

  // Dynamic shadow shifting based on tilt position
  const shadowX = useSpring(useTransform(x, [-0.5, 0.5], [15, -15]), springConfig);
  const shadowY = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const shadowOpacity = useSpring(useTransform(scale, [1, 1.05], [0.3, 0.65]), springConfig);

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
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  // Scroll reveal options with premium bounce ease
  const revealVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  // Float animation cycle using Framer Motion
  const floatTransition = {
    duration: floatDuration,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse" as const,
    delay: floatDelay,
  };

  if (isMobile) {
    return (
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className={`relative ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: [0, -12, 0],
        rotateZ: [0, 0.6, 0],
      }}
      transition={floatTransition}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Glare Sheen Layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-inherit z-20"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`,
          opacity: glareOpacity,
          mixBlendMode: "overlay",
        }}
      />

      {/* Floating Dynamic Shadows */}
      <motion.div
        className="absolute -inset-1 rounded-inherit -z-10 pointer-events-none blur-[24px]"
        style={{
          x: shadowX,
          y: shadowY,
          opacity: shadowOpacity,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 80%)`,
        }}
      />

      {/* Premium Glow Border */}
      {glow && (
        <motion.div
          className="absolute -inset-[1px] rounded-inherit -z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            border: `1.5px solid ${glowColor}`,
            boxShadow: `0 0 20px -2px ${glowColor}`,
          }}
        />
      )}

      {/* Outer wrapper to push internal elements up in Z space */}
      <div
        className="w-full h-full rounded-inherit"
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
