import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [section, setSection] = useState("home");
  
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Listen to the exact same global section events that power the ThreeDScene!
  useEffect(() => {
    const handleSection = (e: Event) => setSection((e as CustomEvent).detail);
    window.addEventListener("primeace-section-change", handleSection);
    return () => {
      window.removeEventListener("primeace-section-change", handleSection);
    };
  }, []);

  useEffect(() => {
    let phi = 0;
    let globe: ReturnType<typeof createGlobe>;

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 800 * 2,
        height: 800 * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.05, 0.08, 0.2],
        markerColor: [0.1, 0.8, 1],
        glowColor: [0.1, 0.3, 0.8],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += 0.005;
          }
          state.phi = phi + pointerInteractionMovement.current;
        },
      });
    }

    return () => {
      if (globe) globe.destroy();
    };
  }, []);

  // Animation variants mirroring the 3D scene's target positions and scales
  const variants = {
    home: { x: "25vw", y: 0, scale: 0.9 }, // Hero (Right)
    home_page_globe: { x: "25vw", y: 0, scale: 0.9 },
    gap: { x: 0, y: 0, scale: 1.2 },       // Gap (Center, Big)
    services: { x: "35vw", y: "-20vh", scale: 0.5 }, // Top Right
    about: { x: "-35vw", y: "20vh", scale: 0.5 },    // Bottom Left
    portfolio: { x: "-35vw", y: "-20vh", scale: 0.5 }, // Top Left
    process: { x: "35vw", y: "20vh", scale: 0.5 },   // Bottom Right
    contact: { x: "25vw", y: 0, scale: 0.6 },
    quote: { x: "25vw", y: 0, scale: 0.6 },
  };

  if (!isHome) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
      animate={variants[section as keyof typeof variants] || variants.home}
      transition={{ type: "spring", stiffness: 40, damping: 20 }}
    >
      <div 
        className="w-[800px] h-[800px] pointer-events-auto cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          e.currentTarget.style.cursor = "grabbing";
        }}
        onPointerUp={(e) => {
          pointerInteracting.current = null;
          e.currentTarget.style.cursor = "grab";
        }}
        onPointerOut={(e) => {
          pointerInteracting.current = null;
          e.currentTarget.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", contain: "layout paint size", opacity: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
