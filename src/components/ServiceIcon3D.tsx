import React from "react";
import { motion } from "motion/react";

type Props = {
  slug: string;
  className?: string;
};

export function ServiceIcon3D({ slug, className = "" }: Props) {
  // Common spring animation settings
  const transition = { type: "spring", stiffness: 150, damping: 15 };

  switch (slug) {
    case "custom-software-development":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Top Layer */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute text-primary"
            variants={{
              hover: { translateZ: 18, rotate: -5, opacity: 1 },
            }}
            transition={transition}
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </motion.svg>
          
          {/* Middle Layer (Slash & Code Bracket Outline) */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="absolute text-accent opacity-50"
            variants={{
              hover: { translateZ: 6, rotate: 10, scale: 0.9 },
            }}
            transition={transition}
          >
            <line x1="14" y1="4" x2="10" y2="20" />
          </motion.svg>

          {/* Bottom Grid Layer */}
          <motion.div
            className="absolute w-7 h-7 rounded-md border border-primary/20 bg-primary/5"
            variants={{
              hover: { translateZ: -8, scale: 1.1, opacity: 0.3 },
            }}
            transition={transition}
          />
        </motion.div>
      );

    case "web-development":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Front Browser Panel */}
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-primary"
            variants={{
              hover: { translateZ: 14, rotateY: -15, rotateX: 10 },
            }}
            transition={transition}
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="2" y1="8" x2="22" y2="8" />
            <circle cx="5" cy="5.5" r="0.5" fill="currentColor" />
            <circle cx="7" cy="5.5" r="0.5" fill="currentColor" />
            <circle cx="9" cy="5.5" r="0.5" fill="currentColor" />
          </motion.svg>

          {/* Orbiting Ring (Globe Backing) */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="absolute text-accent opacity-40"
            variants={{
              hover: { translateZ: -6, rotateZ: 45, scale: 1.2 },
            }}
            transition={transition}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M2 12h20" />
          </motion.svg>
        </motion.div>
      );

    case "mobile-app-development":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Back Phone Frame */}
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="absolute text-accent opacity-40"
            variants={{
              hover: { translateZ: -6, rotateY: 10 },
            }}
            transition={transition}
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2.5" />
          </motion.svg>

          {/* Front UI Overlay (Shifts forward) */}
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-primary"
            variants={{
              hover: { translateZ: 16, rotateY: -15, scale: 1.05 },
            }}
            transition={transition}
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            {/* Inner elements popping out */}
            <line x1="9" y1="7" x2="15" y2="7" strokeWidth="2" strokeLinecap="round" />
            <line x1="9" y1="11" x2="13" y2="11" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="15" r="1" fill="currentColor" />
          </motion.svg>
        </motion.div>
      );

    case "ui-ux-design":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Layer 1 - Drawing Pen */}
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-primary"
            variants={{
              hover: { translateZ: 18, rotate: -15, scale: 1.1 },
            }}
            transition={transition}
          >
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            <path d="M12 8V16" />
            <path d="M8 12H16" />
          </motion.svg>

          {/* Layer 2 - Mesh Ring (UX Grid) */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="absolute text-accent opacity-50"
            variants={{
              hover: { translateZ: 4, scale: 1.15, rotate: 45 },
            }}
            transition={transition}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="3" />
          </motion.svg>
        </motion.div>
      );

    case "ai-automation":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Central Synapse Node */}
          <motion.div
            className="absolute w-3.5 h-3.5 rounded-full bg-primary"
            variants={{
              hover: { scale: 1.4, translateZ: 16 },
            }}
            transition={transition}
            style={{ boxShadow: "0 0 20px oklch(0.68 0.20 245)" }}
          />

          {/* Dotted Connections and Satellite Nodes */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="absolute text-accent"
            variants={{
              hover: { rotate: 60, scale: 1.1, translateZ: 6 },
            }}
            transition={transition}
          >
            <path d="M9.5 9.5L5 5" strokeDasharray="2 2" />
            <path d="M14.5 9.5L19 5" strokeDasharray="2 2" />
            <path d="M9.5 14.5L5 19" strokeDasharray="2 2" />
            <path d="M14.5 14.5L19 19" strokeDasharray="2 2" />
            
            <circle cx="5" cy="5" r="2" fill="currentColor" />
            <circle cx="19" cy="5" r="2" fill="currentColor" />
            <circle cx="5" cy="19" r="2" fill="currentColor" />
            <circle cx="19" cy="19" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="4" strokeWidth="1" />
          </motion.svg>
        </motion.div>
      );

    case "cloud-devops":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Front Cloud Panel */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-primary"
            variants={{
              hover: { translateZ: 14, rotateX: 12, rotateY: -10 },
            }}
            transition={transition}
          >
            <path d="M17.5 19A5.5 5.5 0 0 0 22 13.5A5.5 5.5 0 0 0 16.5 8h-.4A7 7 0 1 0 2.5 13.5A5.5 5.5 0 0 0 7 19z" />
          </motion.svg>

          {/* Under Cloud Server Rack (Shifts backward) */}
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="absolute text-accent opacity-45"
            variants={{
              hover: { translateZ: -8, scale: 0.9, rotateY: 15 },
            }}
            transition={transition}
          >
            <rect x="6" y="9" width="12" height="11" rx="1" />
            <line x1="6" y1="13" x2="18" y2="13" />
            <line x1="6" y1="17" x2="18" y2="17" />
          </motion.svg>
        </motion.div>
      );

    case "api-integrations":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Plug Left */}
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-primary"
            variants={{
              hover: { x: -3, translateZ: 12, rotate: -15 },
            }}
            transition={transition}
          >
            <path d="M18 12h-5" />
            <path d="M13 8v8" />
            <path d="M10 8v8a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4z" />
          </motion.svg>

          {/* Plug Right (Aligns with left on hover) */}
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-accent"
            variants={{
              hover: { x: 3, translateZ: 4, rotate: 15, opacity: 0.8 },
            }}
            transition={transition}
          >
            <path d="M6 12h5" />
            <path d="M11 8v8" />
            <path d="M14 8v8a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4z" />
          </motion.svg>
        </motion.div>
      );

    case "seo-marketing":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Chart Bars (Bottom layer) */}
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="absolute text-accent opacity-45"
            variants={{
              hover: { translateZ: -6, scale: 0.95 },
            }}
            transition={transition}
          >
            <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2.5" />
            <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2.5" />
            <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2.5" />
          </motion.svg>

          {/* Trend Arrow (Shoots up & forward) */}
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="absolute text-primary"
            variants={{
              hover: { translateZ: 18, y: -4, x: 2, scale: 1.1 },
            }}
            transition={transition}
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </motion.svg>
        </motion.div>
      );

    case "software-support":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Spinning Lifering */}
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-primary"
            variants={{
              hover: { rotate: 180, scale: 1.1, translateZ: 14 },
            }}
            transition={transition}
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
            <line x1="19.07" y1="4.93" x2="14.83" y2="9.17" />
            <line x1="9.17" y1="14.83" x2="4.93" y2="19.07" />
          </motion.svg>

          {/* Underlay shadow ring */}
          <motion.div
            className="absolute w-8 h-8 rounded-full border border-primary/20 bg-primary/5 blur-[2px]"
            variants={{
              hover: { scale: 1.25, opacity: 0.2, translateZ: -6 },
            }}
            transition={transition}
          />
        </motion.div>
      );

    case "it-consulting":
      return (
        <motion.div
          className={`relative w-12 h-12 flex items-center justify-center ${className}`}
          style={{ transformStyle: "preserve-3d", perspective: "100px" }}
          whileHover="hover"
        >
          {/* Inner Lightbulb core */}
          <motion.svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute text-primary"
            variants={{
              hover: { translateZ: 16, rotate: 10, scale: 1.1 },
            }}
            transition={transition}
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <line x1="9" y1="18" x2="15" y2="18" />
            <line x1="10" y1="22" x2="14" y2="22" />
          </motion.svg>

          {/* Outer Orbit Ring */}
          <motion.svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="absolute text-accent opacity-50"
            variants={{
              hover: { translateZ: -4, rotate: -45, scale: 1.2 },
            }}
            transition={transition}
          >
            <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
          </motion.svg>
        </motion.div>
      );

    default:
      return null;
  }
}
