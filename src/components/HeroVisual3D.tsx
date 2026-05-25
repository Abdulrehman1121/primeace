import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

export function HeroVisual3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  // Scroll parallax for the interactive rings
  const { scrollY } = useScroll();
  const ringY = useTransform(scrollY, [0, 800], [0, 150]);
  const ringRotate = useTransform(scrollY, [0, 800], [0, 90]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Dynamic resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize 3D nodes
    const nodeCount = 55;
    const nodes: Node[] = [];
    const radius = Math.min(width, height) * 0.35;

    for (let i = 0; i < nodeCount; i++) {
      // Distribute points spherically or in a cloud
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = radius * (0.4 + Math.random() * 0.6);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      nodes.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        originalX: x,
        originalY: y,
        originalZ: z,
      });
    }

    // 3D Orbit Angles
    let angleX = 0.0015;
    let angleY = 0.002;

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Rotate nodes globally in 3D
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Mouse interactive influence
      const mx = mouse.x - width / 2;
      const my = mouse.y - height / 2;

      nodes.forEach((node) => {
        // Apply global 3D rotation
        let y1 = node.y * cosX - node.z * sinX;
        let z1 = node.z * cosX + node.y * sinX;
        let x2 = node.x * cosY - z1 * sinY;
        let z2 = z1 * cosY + node.x * sinY;

        node.x = x2 + node.vx;
        node.y = y1 + node.vy;
        node.z = z2 + node.vz;

        // Interactive gravity pull to cursor
        if (mouse.active) {
          const dx = mx - node.x;
          const dy = my - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 280) {
            const force = (280 - dist) * 0.0004;
            node.x += dx * force;
            node.y += dy * force;
          }
        }

        // Return to natural cluster bounds
        const dOriginX = node.originalX - node.x;
        const dOriginY = node.originalY - node.y;
        const dOriginZ = node.originalZ - node.z;
        node.x += dOriginX * 0.005;
        node.y += dOriginY * 0.005;
        node.z += dOriginZ * 0.005;
      });

      // 3D perspective variables
      const focalLength = 400;

      // Draw Connection Lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dz = n1.z - n2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 180) {
            // Calculate screen projection for 3D coordinates
            const scale1 = focalLength / (focalLength + n1.z);
            const scale2 = focalLength / (focalLength + n2.z);

            const x1s = n1.x * scale1 + width / 2;
            const y1s = n1.y * scale1 + height / 2;
            const x2s = n2.x * scale2 + width / 2;
            const y2s = n2.y * scale2 + height / 2;

            const alpha = (1 - dist / 180) * 0.12 * (scale1 + scale2) / 2;

            ctx.beginPath();
            ctx.moveTo(x1s, y1s);
            ctx.lineTo(x2s, y2s);
            ctx.strokeStyle = `rgba(109, 144, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      nodes.forEach((node) => {
        const scale = focalLength / (focalLength + node.z);
        const xs = node.x * scale + width / 2;
        const ys = node.y * scale + height / 2;

        if (xs >= 0 && xs <= width && ys >= 0 && ys <= height) {
          const size = Math.max(1, 2.5 * scale);
          const opacity = Math.min(1, 0.7 * scale);

          ctx.beginPath();
          ctx.arc(xs, ys, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(109, 144, 255, ${opacity})`;
          ctx.shadowBlur = size * 3;
          ctx.shadowColor = "rgba(109, 144, 255, 0.6)";
          ctx.fill();
          ctx.shadowColor = "transparent"; // Reset shadow
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0, active: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-0 overflow-hidden w-full h-full"
    >
      {/* 3D Plexus Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-65" />

      {/* Layered Glassmorphic Decorative 3D Concentric Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden lg:flex">
        <motion.div
          style={{ y: ringY, rotate: ringRotate, transformStyle: "preserve-3d" }}
          className="relative w-[500px] h-[500px] flex items-center justify-center perspective-[1200px]"
        >
          {/* Ring 1 (Large Outer) */}
          <div
            className="absolute border border-primary/20 rounded-full w-full h-full animate-[spin_40s_linear_infinite] glass opacity-20"
            style={{
              transform: "rotateX(70deg) rotateY(15deg) translateZ(-50px)",
              boxShadow: "0 0 80px oklch(0.68 0.20 245 / 0.1)",
            }}
          />

          {/* Ring 2 (Middle Ring) */}
          <div
            className="absolute border border-accent/25 rounded-full w-3/4 h-3/4 animate-[spin_25s_linear_infinite_reverse] glass opacity-25"
            style={{
              transform: "rotateX(75deg) rotateY(-20deg) translateZ(0px)",
              boxShadow: "0 0 60px oklch(0.55 0.22 250 / 0.15)",
            }}
          />

          {/* Ring 3 (Small Inner Core Ring) */}
          <div
            className="absolute border border-primary/30 rounded-full w-1/2 h-1/2 animate-[spin_15s_linear_infinite] glass opacity-30"
            style={{
              transform: "rotateX(65deg) rotateY(10deg) translateZ(50px)",
              boxShadow: "0 0 40px oklch(0.68 0.20 245 / 0.2)",
            }}
          />

          {/* Center Glowing Glass Orb */}
          <div
            className="absolute rounded-full w-24 h-24 blur-[4px] animate-pulse"
            style={{
              background: "radial-gradient(circle, oklch(0.68 0.20 245) 0%, oklch(0.55 0.22 250 / 0.2) 70%, transparent 100%)",
              transform: "translateZ(80px)",
              boxShadow: "0 0 60px oklch(0.68 0.20 245 / 0.6)",
              opacity: 0.7,
            }}
          />
        </motion.div>
      </div>

      {/* Floating 3D Geometric Dust Particles */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-[20%] left-[10%] w-3 h-3 border border-primary/30 rotate-45 animate-float opacity-30" />
        <div className="absolute top-[60%] right-[12%] w-4 h-4 border border-accent/30 rounded-sm animate-float opacity-20" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-primary/20 rounded-full animate-float opacity-45" style={{ animationDelay: "-4s" }} />
      </div>
    </div>
  );
}
