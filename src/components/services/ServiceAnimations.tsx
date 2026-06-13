import { motion } from "framer-motion";

export function WebDevAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-accent/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Browser Frame */}
        <rect x="10" y="10" width="240" height="110" rx="8" className="stroke-white/10" strokeWidth="2" />
        <line x1="10" y1="28" x2="250" y2="28" className="stroke-white/10" strokeWidth="1.5" />
        
        {/* Browser Dots */}
        <circle cx="22" cy="19" r="3" className="fill-red-500/60" />
        <circle cx="32" cy="19" r="3" className="fill-yellow-500/60" />
        <circle cx="42" cy="19" r="3" className="fill-green-500/60" />
        
        {/* Code/Grid Lines */}
        <motion.rect
          x="20"
          y="40"
          width="60"
          height="12"
          rx="3"
          className="fill-primary/20 stroke-primary/30"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="20"
          y="58"
          width="45"
          height="8"
          rx="2"
          className="fill-white/10"
          animate={{ width: [30, 45, 30] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Mock Chart Animation */}
        <motion.path
          d="M 140 100 L 160 80 L 180 90 L 200 65 L 220 75 L 240 50"
          className="stroke-primary"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        />
        
        {/* Chart fill */}
        <motion.path
          d="M 140 105 L 140 100 L 160 80 L 180 90 L 200 65 L 220 75 L 240 50 L 240 105 Z"
          className="fill-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Floating Code Tags */}
        <motion.g
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <text x="95" y="52" fill="var(--color-accent)" className="text-[10px] font-mono opacity-80">&lt;div&gt;</text>
          <text x="95" y="110" fill="var(--color-accent)" className="text-[10px] font-mono opacity-80">&lt;/div&gt;</text>
        </motion.g>
        
        {/* Floating component blocks */}
        <motion.rect
          x="95"
          y="62"
          width="35"
          height="35"
          rx="6"
          className="fill-accent/20 stroke-accent/40"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export function MobileDevAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-purple-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone Frame */}
        <rect x="95" y="10" width="70" height="110" rx="14" className="stroke-white/20" strokeWidth="2.5" />
        <rect x="100" y="15" width="60" height="100" rx="10" className="fill-slate-950/80 stroke-white/5" />
        
        {/* Notch */}
        <rect x="120" y="10" width="20" height="8" rx="4" className="fill-white/25" />
        
        {/* Home Bar */}
        <rect x="115" y="110" width="30" height="3" rx="1.5" className="fill-white/30" />

        {/* Floating App Widgets */}
        <motion.rect
          x="106"
          y="25"
          width="48"
          height="16"
          rx="4"
          className="fill-primary/20 stroke-primary/30"
          animate={{ x: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.circle
          cx="116"
          y="56"
          r="10"
          className="fill-accent/20 stroke-accent/40"
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        
        <motion.rect
          x="132"
          y="50"
          width="22"
          height="6"
          rx="2"
          className="fill-white/20"
        />
        <motion.rect
          x="132"
          y="60"
          width="15"
          height="4"
          rx="1"
          className="fill-white/10"
        />

        {/* Swipe Pointer Indicator */}
        <motion.circle
          cx="130"
          cy="90"
          r="6"
          className="fill-primary/60 filter blur-[1px]"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Back and side glowing lights */}
        <motion.circle
          cx="70"
          cy="40"
          r="3"
          className="fill-primary"
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="190"
          cy="90"
          r="4"
          className="fill-accent"
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

export function SaaSDevAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-blue-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1 (Bottom Database Sheet) */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 50 95 L 130 65 L 210 95 L 130 125 Z" className="fill-white/5 stroke-white/10" strokeWidth="1.5" />
          <path d="M 50 102 L 130 72 L 210 102" className="stroke-white/5" strokeWidth="1" />
        </motion.g>

        {/* Layer 2 (Middle Framework/API Sheet) */}
        <motion.g
          animate={{ y: [-5, -12, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <path d="M 50 70 L 130 40 L 210 70 L 130 100 Z" className="fill-accent/10 stroke-accent/30" strokeWidth="1.5" />
          
          {/* Internal nodes on intermediate layer */}
          <circle cx="100" cy="65" r="3" className="fill-accent" />
          <circle cx="130" cy="55" r="3" className="fill-accent" />
          <circle cx="160" cy="65" r="3" className="fill-accent animate-pulse" />
          <line x1="100" y1="65" x2="130" y2="55" className="stroke-accent/40" />
          <line x1="130" y1="55" x2="160" y2="65" className="stroke-accent/40" />
        </motion.g>

        {/* Layer 3 (Top Dashboard Layer) */}
        <motion.g
          animate={{ y: [-10, -22, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <path d="M 50 45 L 130 15 L 210 45 L 130 75 Z" className="fill-primary/20 stroke-primary/50" strokeWidth="2" />
          
          {/* Micro chart on top layer */}
          <path d="M 85 45 L 105 35 L 125 40 L 145 25 L 165 32" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="165" cy="32" r="2.5" className="fill-white shadow-[0_0_8px_var(--primary)]" />
        </motion.g>

        {/* Floating Data Packets rising between layers */}
        <motion.circle
          cx="130"
          cy="95"
          r="3"
          className="fill-primary-glow"
          animate={{ 
            y: [-10, -65],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="90"
          cy="80"
          r="2.5"
          className="fill-accent-glow"
          animate={{ 
            y: [-10, -60],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.8 }}
        />
        <motion.circle
          cx="170"
          cy="85"
          r="2"
          className="fill-purple-400"
          animate={{ 
            y: [-15, -60],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

export function AISolutionsAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-purple-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Core AI Ring System */}
        <motion.circle
          cx="130"
          cy="65"
          r="36"
          className="stroke-primary/20"
          strokeWidth="1"
          strokeDasharray="6 6"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="130"
          cy="65"
          r="28"
          className="stroke-accent/30"
          strokeWidth="1.5"
          strokeDasharray="15 5"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Central glowing core */}
        <motion.circle
          cx="130"
          cy="65"
          r="10"
          className="fill-primary"
          animate={{ scale: [0.9, 1.2, 0.9], filter: ["drop-shadow(0 0 4px #2B6EFF)", "drop-shadow(0 0 12px #2B6EFF)", "drop-shadow(0 0 4px #2B6EFF)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <circle cx="130" cy="65" r="4" className="fill-white" />

        {/* Neural Network Nodes */}
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Top-Left node */}
          <circle cx="70" cy="35" r="5" className="fill-accent/80" />
          <line x1="70" y1="35" x2="110" y2="52" className="stroke-accent/30" strokeWidth="1" />
          <circle cx="70" cy="35" r="8" className="stroke-accent/20 animate-ping" />

          {/* Bottom-Left node */}
          <circle cx="75" cy="95" r="4" className="fill-white/60" />
          <line x1="75" y1="95" x2="112" y2="75" className="stroke-white/20" strokeWidth="1" />

          {/* Top-Right node */}
          <circle cx="190" cy="35" r="4.5" className="fill-purple-500/80" />
          <line x1="190" y1="35" x2="148" y2="52" className="stroke-purple-500/30" strokeWidth="1" />

          {/* Bottom-Right node */}
          <circle cx="185" cy="95" r="6" className="fill-primary-glow" />
          <line x1="185" y1="95" x2="146" y2="76" className="stroke-primary/30" strokeWidth="1" />
          <circle cx="185" cy="95" r="10" className="stroke-primary/20 animate-ping" />
        </motion.g>

        {/* Synapses Pulses (flowing dots along the connection lines) */}
        <motion.circle
          cx="70"
          cy="35"
          r="2"
          className="fill-white"
          animate={{ 
            cx: [70, 110], 
            cy: [35, 52] 
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="185"
          cy="95"
          r="2"
          className="fill-white"
          animate={{ 
            cx: [185, 146], 
            cy: [95, 76] 
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export function ChatBotAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-primary/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chatbot Head */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Ears */}
          <rect x="73" y="50" width="6" height="16" rx="3" className="fill-white/20" />
          <rect x="181" y="50" width="6" height="16" rx="3" className="fill-white/20" />

          {/* Main Head Screen */}
          <rect x="85" y="32" width="90" height="56" rx="16" className="fill-slate-900/90 stroke-white/10" strokeWidth="2" />
          <rect x="91" y="38" width="78" height="44" rx="10" className="fill-black/60" />
          
          {/* Eyes (Glowing LEDs) */}
          <motion.ellipse
            cx="110"
            cy="56"
            rx="6"
            ry="4"
            className="fill-primary"
            animate={{ ry: [4, 0.5, 4] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.ellipse
            cx="150"
            cy="56"
            rx="6"
            ry="4"
            className="fill-primary"
            animate={{ ry: [4, 0.5, 4] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
          />
          
          {/* Smiling Mouth Waves */}
          <motion.path
            d="M 120 70 Q 130 76 140 70"
            className="stroke-primary"
            strokeWidth="3.5"
            strokeLinecap="round"
            animate={{ d: ["M 120 70 Q 130 76 140 70", "M 120 72 Q 130 72 140 72", "M 120 70 Q 130 76 140 70"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Antenna */}
          <line x1="130" y1="32" x2="130" y2="18" className="stroke-white/30" strokeWidth="2.5" />
          <motion.circle
            cx="130"
            cy="18"
            r="4.5"
            className="fill-accent"
            animate={{ scale: [1, 1.4, 1], filter: ["drop-shadow(0 0 1px #8A3FFC)", "drop-shadow(0 0 10px #8A3FFC)", "drop-shadow(0 0 1px #8A3FFC)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* Message bubble left */}
        <motion.path
          d="M 20 20 H 60 V 40 H 28 L 20 46 Z"
          className="fill-primary/10 stroke-primary/20"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5 }}
        />
        <motion.circle cx="35" cy="30" r="1.5" className="fill-primary/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} />
        <motion.circle cx="40" cy="30" r="1.5" className="fill-primary/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
        <motion.circle cx="45" cy="30" r="1.5" className="fill-primary/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} />

        {/* Message bubble right */}
        <motion.path
          d="M 240 75 H 200 V 95 H 232 L 240 101 Z"
          className="fill-accent/10 stroke-accent/20"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0, 1, 0], scale: [0.8, 0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5 }}
        />
        <motion.line x1="208" y1="85" x2="228" y2="85" className="stroke-accent/60" strokeWidth="2.5" strokeLinecap="round" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity }} />
      </svg>
    </div>
  );
}

export function AIAgentsAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-primary/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gear 1 (Main Big Gear - Left) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ originX: "100px", originY: "65px" }}
        >
          <circle cx="100" cy="65" r="24" className="stroke-white/20" strokeWidth="2" />
          <circle cx="100" cy="65" r="12" className="stroke-white/10" strokeWidth="1.5" />
          {/* Gear teeth */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="100"
              y1="37"
              x2="100"
              y2="43"
              className="stroke-white/20"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${angle} 100 65)`}
            />
          ))}
        </motion.g>

        {/* Gear 2 (Interlocking Medium Gear - Right) */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 10.6, repeat: Infinity, ease: "linear" }}
          style={{ originX: "148px", originY: "50px" }}
        >
          <circle cx="148" cy="50" r="16" className="stroke-primary/40" strokeWidth="2" />
          <circle cx="148" cy="50" r="8" className="stroke-primary/20" strokeWidth="1.5" />
          {/* Gear teeth */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
            <line
              key={angle}
              x1="148"
              y1="31"
              x2="148"
              y2="36"
              className="stroke-primary/40"
              strokeWidth="3.5"
              strokeLinecap="round"
              transform={`rotate(${angle} 148 50)`}
            />
          ))}
        </motion.g>

        {/* Flowing Laser Signal connecting gears */}
        <motion.path
          d="M 60 90 H 200"
          className="stroke-accent/10"
          strokeWidth="2"
        />
        <motion.path
          d="M 60 90 H 200"
          className="stroke-accent"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ strokeDasharray: "0 140" }}
          animate={{ strokeDasharray: "25 115" }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating autonomous workflow checkmarks */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], y: [-15, -45] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <circle cx="180" cy="75" r="7" className="fill-green-500/20 stroke-green-500/40" />
          <path d="M 177 75 L 179 77 L 183 73" className="stroke-green-400" strokeWidth="1.5" />
        </motion.g>
        
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], y: [-5, -30] }}
          transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 2.5 }}
        >
          <circle cx="210" cy="50" r="7" className="fill-primary/20 stroke-primary/40" />
          <path d="M 207 50 L 209 52 L 213 48" className="stroke-primary-glow" strokeWidth="1.5" />
        </motion.g>
      </svg>
    </div>
  );
}

export function UIUXAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-purple-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1 (Bottom Outline mockup card) */}
        <motion.g
          animate={{ x: [-5, 0, -5], y: [2, -2, 2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="25" y="45" width="130" height="70" rx="8" className="fill-white/5 stroke-white/10" strokeWidth="1.5" />
          <circle cx="40" cy="58" r="5" className="fill-white/10" />
          <line x1="52" y1="58" x2="110" y2="58" className="stroke-white/10" strokeWidth="2.5" />
        </motion.g>

        {/* Layer 2 (Middle Prismatic Glass card) */}
        <motion.g
          animate={{ x: [0, 5, 0], y: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <rect x="75" y="25" width="130" height="70" rx="8" className="fill-accent/10 stroke-accent/30" strokeWidth="1.5" style={{ backdropFilter: "blur(4px)" }} />
          
          <rect x="90" y="38" width="40" height="24" rx="4" className="fill-accent/20 stroke-accent/40" />
          <circle cx="150" cy="50" r="8" className="fill-primary/20 stroke-primary/30" />
          
          <line x1="90" y1="75" x2="190" y2="75" className="stroke-white/15" strokeWidth="2" />
          <line x1="90" y1="82" x2="150" y2="82" className="stroke-white/10" strokeWidth="2" />
        </motion.g>

        {/* Floating Design elements */}
        <motion.circle
          cx="200"
          cy="40"
          r="8"
          className="fill-primary/80 filter blur-[0.5px]"
          animate={{ 
            y: [-4, 6, -4],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Curving vector path */}
        <motion.path
          d="M 50 15 Q 120 5 180 30"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <circle cx="50" cy="15" r="2.5" className="fill-white" />
        <circle cx="180" cy="30" r="2.5" className="fill-white" />
      </svg>
    </div>
  );
}

export function EcomAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-green-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shopping Bag Frame */}
        <motion.g
          animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Bag Handle */}
          <path d="M 112 45 C 112 25 148 25 148 45" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
          
          {/* Bag Body */}
          <path d="M 98 45 L 94 110 H 166 L 162 45 Z" className="fill-primary/10 stroke-primary/30" strokeWidth="2" />
          
          {/* Front Glow Grid logo */}
          <rect x="118" y="65" width="24" height="24" rx="4" className="fill-white/5 stroke-white/10" />
          <path d="M 125 77 L 129 81 L 135 73" className="stroke-primary-glow" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Floating Credit Card */}
        <motion.g
          animate={{ y: [4, -12, 4], rotate: [12, -4, 12] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="175" y="35" width="48" height="30" rx="4" className="fill-accent/30 stroke-accent/50 shadow-lg" strokeWidth="1" />
          <rect x="180" y="42" width="10" height="6" className="fill-yellow-500/80" />
          <rect x="180" y="55" width="38" height="3" className="fill-white/20" />
        </motion.g>

        {/* Floating checkmarks / currency coins */}
        <motion.circle
          cx="70"
          cy="55"
          r="6"
          className="fill-yellow-500/30 stroke-yellow-500/60"
          animate={{ y: [-5, 10, -5], rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.line x1="70" y1="52" x2="70" y2="58" className="stroke-yellow-400" strokeWidth="1.5" />

        <motion.circle
          cx="80"
          cy="90"
          r="4"
          className="fill-green-500/30 stroke-green-500/60"
          animate={{ y: [8, -6, 8] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

export function CRMERPAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-blue-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Isometric Grid structure (representing columns of ERP databases) */}
        <motion.g
          animate={{ scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Cylinder database column 1 */}
          <path d="M 60 40 A 15 6 0 0 0 90 40 A 15 6 0 0 0 60 40 M 60 40 V 90 A 15 6 0 0 0 90 90 V 40" className="fill-white/5 stroke-white/20" strokeWidth="1.5" />
          <path d="M 60 55 A 15 6 0 0 0 90 55" className="stroke-white/10" strokeWidth="1" />
          <path d="M 60 70 A 15 6 0 0 0 90 70" className="stroke-white/10" strokeWidth="1" />
          
          {/* Cylinder database column 2 */}
          <path d="M 170 30 A 15 6 0 0 0 200 30 A 15 6 0 0 0 170 30 M 170 30 V 80 A 15 6 0 0 0 200 80 V 30" className="fill-accent/10 stroke-accent/30" strokeWidth="1.5" />
          <path d="M 170 45 A 15 6 0 0 0 200 45" className="stroke-accent/20" strokeWidth="1" />
          <path d="M 170 60 A 15 6 0 0 0 200 60" className="stroke-accent/20" strokeWidth="1" />
        </motion.g>

        {/* Inter-database telemetry flow line */}
        <path d="M 90 65 C 110 50 140 70 170 55" className="stroke-primary/30" strokeWidth="2" strokeDasharray="4 4" />
        <motion.circle
          cx="90"
          cy="65"
          r="3.5"
          className="fill-primary"
          animate={{ 
            pathOffset: [0, 1],
            cx: [90, 120, 140, 170],
            cy: [65, 56, 62, 55]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Growth Bar Chart floating in center */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <rect x="110" y="85" width="8" height="20" rx="2" className="fill-primary/40 stroke-primary/50" />
          <rect x="124" y="75" width="8" height="30" rx="2" className="fill-primary/60 stroke-primary/70" />
          <rect x="138" y="60" width="8" height="45" rx="2" className="fill-accent/60 stroke-accent/80" />
        </motion.g>
      </svg>
    </div>
  );
}

export function DevOpsAnimation() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-purple-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Infinite Cloud DevOps Loop (Infinity shape) */}
        <motion.path
          d="M 80 65 C 80 40 115 40 130 65 C 145 90 180 90 180 65 C 180 40 145 40 130 65 C 115 90 80 90 80 65 Z"
          className="stroke-white/10"
          strokeWidth="3"
        />

        <motion.path
          d="M 80 65 C 80 40 115 40 130 65 C 145 90 180 90 180 65 C 180 40 145 40 130 65 C 115 90 80 90 80 65 Z"
          className="stroke-primary"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ strokeDasharray: "0 400" }}
          animate={{ strokeDasharray: "40 360" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Glowing cloud database nodes */}
        <motion.g
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Node 1 (AWS) */}
          <circle cx="80" cy="65" r="8" className="fill-slate-900/90 stroke-primary/50" />
          <circle cx="80" cy="65" r="3" className="fill-primary animate-pulse" />

          {/* Node 2 (Docker / Container) */}
          <circle cx="180" cy="65" r="8" className="fill-slate-900/90 stroke-accent/50" />
          <circle cx="180" cy="65" r="3" className="fill-accent animate-pulse" />

          {/* Center Intersection Node */}
          <circle cx="130" cy="65" r="6" className="fill-slate-950/90 stroke-white/20" />
          <circle cx="130" cy="65" r="1.5" className="fill-white" />
        </motion.g>

        {/* Server status monitor blinking signals */}
        <motion.circle cx="40" cy="30" r="2.5" className="fill-green-500" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="40" cy="40" r="2.5" className="fill-green-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
        <motion.circle cx="40" cy="50" r="2.5" className="fill-green-500" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />

        {/* Floating Upload arrow */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M 220 40 L 220 56 M 214 46 L 220 40 L 226 46" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 208 62 H 232" className="stroke-white/20" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}

export function Animation2D() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-primary/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Onion skin / background motion trails */}
        <path d="M 30 90 C 70 30, 110 30, 150 90" className="stroke-white/5" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 50 80 C 80 40, 110 40, 140 80" className="stroke-white/10" strokeWidth="2" />
        
        {/* Animated motion path trail */}
        <motion.path
          d="M 30 90 C 70 30, 110 30, 150 90"
          className="stroke-emerald-500/40"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Character / Object rigging joints */}
        <motion.g
          animate={{ 
            x: [0, 40, 80, 120, 0],
            y: [0, -40, -40, 0, 0],
            scaleY: [1, 0.8, 1.2, 1, 1],
            scaleX: [1, 1.2, 0.8, 1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "30px", originY: "90px" }}
        >
          {/* Main animated body character */}
          <circle cx="30" cy="90" r="14" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="2" />
          <circle cx="30" cy="90" r="4" className="fill-white" />
          
          {/* Rigging line / arm */}
          <line x1="30" y1="90" x2="45" y2="75" className="stroke-emerald-400" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="45" cy="75" r="3" className="fill-accent" />
        </motion.g>

        {/* Timeline Keyframes */}
        <rect x="30" y="108" width="200" height="8" rx="4" className="fill-white/5" />
        <circle cx="50" cy="112" r="3.5" className="fill-emerald-500" />
        <circle cx="90" cy="112" r="3.5" className="fill-emerald-500" />
        <circle cx="130" cy="112" r="3.5" className="fill-emerald-500" />
        <circle cx="170" cy="112" r="3.5" className="fill-white/30" />
        <circle cx="210" cy="112" r="3.5" className="fill-emerald-500" />

        {/* Sliding keyframe indicator */}
        <motion.polygon
          points="90,103 86,107 94,107"
          className="fill-accent"
          animate={{ x: [0, 40, 80, 120, -40, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

export function Animation3D() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Orbit ring */}
        <ellipse cx="130" cy="65" rx="60" ry="25" className="stroke-white/10" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Orbiting particle */}
        <motion.circle
          cx="130"
          cy="65"
          r="4"
          className="fill-accent"
          animate={{
            cx: [70, 130, 190, 130, 70],
            cy: [65, 40, 65, 90, 65]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* 3D Wireframe Cube / Polyhedron rotating */}
        <motion.g
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "130px", originY: "65px" }}
        >
          {/* Front Face */}
          <motion.polygon 
            points="100,45 160,45 160,85 100,85" 
            className="stroke-primary/80 fill-primary/5" 
            strokeWidth="1.5" 
            animate={{ 
              points: [
                "100,45 160,45 160,85 100,85", 
                "110,35 150,55 150,95 110,75",
                "100,45 160,45 160,85 100,85"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Back Face Offset */}
          <motion.polygon 
            points="115,30 175,30 175,70 115,70" 
            className="stroke-purple-500/40 fill-purple-500/5" 
            strokeWidth="1.2" 
            strokeDasharray="2 2"
            animate={{ 
              points: [
                "115,30 175,30 175,70 115,70", 
                "125,45 165,25 165,65 125,85",
                "115,30 175,30 175,70 115,70"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Connecting Lines */}
          <motion.line 
            x1="100" y1="45" x2="115" y2="30" 
            className="stroke-primary/50" 
            strokeWidth="1"
            animate={{ x1: [100, 110, 100], y1: [45, 35, 45], x2: [115, 125, 115], y2: [30, 45, 30] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line 
            x1="160" y1="45" x2="175" y2="30" 
            className="stroke-primary/50" 
            strokeWidth="1"
            animate={{ x1: [160, 150, 160], y1: [45, 55, 45], x2: [175, 165, 175], y2: [30, 25, 30] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line 
            x1="160" y1="85" x2="175" y2="70" 
            className="stroke-primary/50" 
            strokeWidth="1"
            animate={{ x1: [160, 150, 160], y1: [85, 95, 85], x2: [175, 165, 175], y2: [70, 65, 70] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line 
            x1="100" y1="85" x2="115" y2="70" 
            className="stroke-primary/50" 
            strokeWidth="1"
            animate={{ x1: [100, 110, 100], y1: [85, 75, 85], x2: [115, 125, 115], y2: [70, 85, 70] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Wireframe Vertex Nodes */}
          <circle cx="100" cy="45" r="2.5" className="fill-white" />
          <circle cx="160" cy="45" r="2.5" className="fill-white" />
          <circle cx="160" cy="85" r="2.5" className="fill-white" />
          <circle cx="100" cy="85" r="2.5" className="fill-white" />
        </motion.g>
      </svg>
    </div>
  );
}

export function VideoEditing() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 via-primary/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Video Preview Frame */}
        <rect x="20" y="15" width="100" height="60" rx="6" className="stroke-white/10 fill-slate-950/80" strokeWidth="1.5" />
        
        {/* Play Icon */}
        <polygon points="65,40 65,50 75,45" className="fill-red-500" />
        
        {/* Sound Waveforms on track */}
        <g opacity="0.6">
          <rect x="135" y="25" width="100" height="20" rx="4" className="fill-white/5" />
          <motion.path
            d="M 140 35 L 140 30 M 145 35 L 145 27 M 150 35 L 150 38 M 155 35 L 155 31 M 160 35 L 160 42 M 165 35 L 165 28 M 170 35 L 170 33 M 175 35 L 175 40 M 180 35 L 180 35 M 185 35 L 185 29 M 190 35 L 190 41 M 195 35 L 195 32 M 200 35 L 200 27 M 205 35 L 205 38 M 210 35 L 210 30 M 215 35 L 215 42 M 220 35 L 220 28 M 225 35 L 225 35 M 230 35 L 230 31"
            className="stroke-red-400/80"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              d: [
                "M 140 35 L 140 30 M 145 35 L 145 27 M 150 35 L 150 38 M 155 35 L 155 31 M 160 35 L 160 42 M 165 35 L 165 28 M 170 35 L 170 33 M 175 35 L 175 40 M 180 35 L 180 35 M 185 35 L 185 29 M 190 35 L 190 41 M 195 35 L 195 32 M 200 35 L 200 27 M 205 35 L 205 38 M 210 35 L 210 30 M 215 35 L 215 42 M 220 35 L 220 28 M 225 35 L 225 35 M 230 35 L 230 31",
                "M 140 35 L 140 33 M 145 35 L 145 31 M 150 35 L 150 35 M 155 35 L 155 28 M 160 35 L 160 39 M 165 35 L 165 32 M 170 35 L 170 29 M 175 35 L 175 42 M 180 35 L 180 31 M 185 35 L 185 35 M 190 35 L 190 38 M 195 35 L 195 28 M 200 35 L 200 32 M 205 35 L 205 41 M 210 35 L 210 27 M 215 35 L 215 39 M 220 35 L 220 33 M 225 35 L 225 31 M 230 35 L 230 28",
                "M 140 35 L 140 30 M 145 35 L 145 27 M 150 35 L 150 38 M 155 35 L 155 31 M 160 35 L 160 42 M 165 35 L 165 28 M 170 35 L 170 33 M 175 35 L 175 40 M 180 35 L 180 35 M 185 35 L 185 29 M 190 35 L 190 41 M 195 35 L 195 32 M 200 35 L 200 27 M 205 35 L 205 38 M 210 35 L 210 30 M 215 35 L 215 42 M 220 35 L 220 28 M 225 35 L 225 35 M 230 35 L 230 31"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* Video Track Blocks */}
        <rect x="20" y="90" width="220" height="24" rx="4" className="fill-white/5" />
        <rect x="30" y="94" width="60" height="16" rx="2" className="fill-red-500/20 stroke-red-500/30" strokeWidth="1" />
        <rect x="95" y="94" width="80" height="16" rx="2" className="fill-primary/20 stroke-primary/30" strokeWidth="1" />
        <rect x="180" y="94" width="50" height="16" rx="2" className="fill-accent/20 stroke-accent/30" strokeWidth="1" />

        {/* Timeline Playhead */}
        <motion.g
          animate={{ x: [0, 200, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <line x1="30" y1="82" x2="30" y2="120" className="stroke-white" strokeWidth="1.5" />
          <polygon points="26,82 34,82 30,87" className="fill-white" />
        </motion.g>
      </svg>
    </div>
  );
}

export function PostDesigning() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-accent/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Layer 1 - Bottom grid */}
        <rect x="30" y="20" width="120" height="80" rx="8" className="fill-white/5 stroke-white/10" strokeWidth="1" />
        
        {/* Layer 2 - Floating Image Container */}
        <motion.g
          animate={{ y: [-4, 4, -4], x: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="50" y="35" width="100" height="70" rx="6" className="fill-slate-900/90 stroke-white/10" strokeWidth="1" />
          {/* Mountain landscape placeholder */}
          <path d="M 60 90 L 90 60 L 110 80 L 130 55 L 145 90 Z" className="fill-primary/20 stroke-primary/30" strokeWidth="1" />
          <circle cx="80" cy="52" r="5" className="fill-yellow-500/30 stroke-yellow-500/50" />
        </motion.g>

        {/* Layer 3 - Typography block */}
        <motion.g
          animate={{ y: [4, -4, 4], x: [2, -2, 2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <rect x="110" y="15" width="100" height="50" rx="6" className="fill-accent/10 stroke-accent/40" strokeWidth="1.5" style={{ backdropFilter: "blur(2px)" }} />
          <line x1="125" y1="28" x2="195" y2="28" className="stroke-white" strokeWidth="3" strokeLinecap="round" />
          <line x1="125" y1="38" x2="180" y2="38" className="stroke-white/60" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="125" y1="46" x2="160" y2="46" className="stroke-white/30" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Sparkles */}
        <motion.g
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ originX: "220px", originY: "75px" }}
        >
          <path d="M 220 65 L 222 71 L 228 73 L 222 75 L 220 81 L 218 75 L 212 73 L 218 71 Z" className="fill-accent" />
        </motion.g>
        
        <motion.g
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          style={{ originX: "200px", originY: "95px" }}
        >
          <path d="M 200 90 L 201 93 L 204 94 L 201 95 L 200 98 L 199 95 L 196 94 L 199 93 Z" className="fill-primary-glow" />
        </motion.g>
      </svg>
    </div>
  );
}

export function DigitalMarketing() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-emerald-500/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Megaphone / Broadcaster */}
        <motion.g
          animate={{ 
            rotate: [-5, 5, -5],
            y: [-2, 2, -2]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "45px", originY: "65px" }}
        >
          {/* Main Cone */}
          <path d="M 45 55 L 75 40 L 80 85 L 45 70 Z" className="fill-primary/20 stroke-primary" strokeWidth="2" />
          {/* Handle */}
          <path d="M 52 70 L 52 82 H 58 L 58 70" className="fill-white/10 stroke-white/40" strokeWidth="1.5" />
          {/* Back cap */}
          <ellipse cx="45" cy="62.5" rx="4" ry="7.5" className="fill-accent stroke-accent/60" strokeWidth="1" />
          {/* Front output rim */}
          <ellipse cx="80" cy="62.5" rx="5" ry="22.5" className="fill-primary/40 stroke-primary" strokeWidth="1.5" />
        </motion.g>

        {/* Radiating soundwaves / reach waves */}
        <motion.path
          d="M 95 50 A 18 18 0 0 1 95 75"
          className="stroke-accent"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ scale: [1, 1.3], opacity: [1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          style={{ originX: "80px", originY: "62.5px" }}
        />
        <motion.path
          d="M 105 40 A 30 30 0 0 1 105 85"
          className="stroke-primary"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{ scale: [1, 1.4], opacity: [1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
          style={{ originX: "80px", originY: "62.5px" }}
        />

        {/* Growth Marketing Analytics (Funnel / target) */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Target Bullseye */}
          <circle cx="180" cy="60" r="24" className="stroke-white/10" strokeWidth="1.5" />
          <circle cx="180" cy="60" r="16" className="stroke-emerald-500/20" strokeWidth="1.5" />
          <circle cx="180" cy="60" r="8" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1.5" />
          <circle cx="180" cy="60" r="2.5" className="fill-white" />
          
          {/* Flying Arrow striking bullseye */}
          <motion.g
            initial={{ x: -60, y: -30, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          >
            <line x1="130" y1="35" x2="175" y2="58" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="175,58 168,54 171,50" className="fill-accent" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}

export function SEO() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-accent/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Search Input Bar Mock */}
        <rect x="20" y="15" width="220" height="24" rx="12" className="fill-white/5 stroke-white/10" strokeWidth="1.5" />
        <circle cx="34" cy="27" r="4" className="stroke-white/40" strokeWidth="1.5" />
        <line x1="37" y1="30" x2="42" y2="35" className="stroke-white/40" strokeWidth="1.5" />
        <line x1="52" y1="27" x2="160" y2="27" className="stroke-emerald-400" strokeWidth="3.5" strokeLinecap="round" />
        
        {/* Search Results / Rank items */}
        {/* Item 1 - Top Rank #1 */}
        <motion.g
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <rect x="20" y="50" width="220" height="20" rx="6" className="fill-emerald-500/10 stroke-emerald-500/30" strokeWidth="1.5" />
          <line x1="32" y1="60" x2="120" y2="60" className="stroke-emerald-400" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="65" x2="80" y2="65" className="stroke-white/20" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="220" cy="60" r="5" className="fill-emerald-500" />
          <path d="M 218 60 L 219 61 L 222 58" className="stroke-white" strokeWidth="1" />
        </motion.g>

        {/* Item 2 - Rank #2 */}
        <rect x="20" y="78" width="220" height="18" rx="6" className="fill-white/5 stroke-white/5" strokeWidth="1" />
        <line x1="32" y1="87" x2="100" y2="87" className="stroke-white/40" strokeWidth="3" strokeLinecap="round" />
        
        {/* Item 3 - Rank #3 */}
        <rect x="20" y="102" width="220" height="18" rx="6" className="fill-white/5 stroke-white/5" strokeWidth="1" />
        <line x1="32" y1="111" x2="90" y2="111" className="stroke-white/30" strokeWidth="3" strokeLinecap="round" />

        {/* Scanning telemetry ring */}
        <motion.circle
          cx="130"
          cy="60"
          r="18"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          animate={{ rotate: 360, scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

export function SocialMediaHandling() {
  return (
    <div className="w-full h-40 relative flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/40 border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-primary/5 to-transparent" />
      <svg className="w-64 h-32" viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central profile card / node */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="95" y="40" width="70" height="50" rx="8" className="fill-slate-900/90 stroke-white/10" strokeWidth="1.5" />
          <circle cx="130" cy="58" r="8" className="fill-primary/20 stroke-primary/50" />
          <line x1="115" y1="74" x2="145" y2="74" className="stroke-white/40" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="120" y1="80" x2="140" y2="80" className="stroke-white/20" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Connection rays to orbiting nodes */}
        <g opacity="0.4">
          <line x1="130" y1="40" x2="130" y2="18" className="stroke-white/20" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="95" y1="65" x2="60" y2="45" className="stroke-white/20" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="165" y1="65" x2="200" y2="45" className="stroke-white/20" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="95" y1="80" x2="65" y2="100" className="stroke-white/20" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="165" y1="80" x2="195" y2="100" className="stroke-white/20" strokeWidth="1" strokeDasharray="2 2" />
        </g>

        {/* Floating Bubble: Heart / Like */}
        <motion.g
          animate={{ y: [-10, -35], opacity: [0, 1, 0], scale: [0.6, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          style={{ originX: "60px", originY: "45px" }}
        >
          <circle cx="60" cy="45" r="10" className="fill-pink-500/20 stroke-pink-500/50" />
          {/* Heart icon */}
          <path d="M 57 44 C 57 41 60 41 60 44 C 60 41 63 41 63 44 L 60 47 Z" className="fill-pink-500" />
        </motion.g>

        {/* Floating Bubble: Comment */}
        <motion.g
          animate={{ y: [-15, -45], opacity: [0, 1, 0], scale: [0.6, 1.1, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
          style={{ originX: "200px", originY: "45px" }}
        >
          <circle cx="200" cy="45" r="10" className="fill-primary/20 stroke-primary/50" />
          <path d="M 197 42 H 203 V 46 H 200 L 197 48 Z" className="fill-primary-glow" />
        </motion.g>

        {/* Floating Bubble: Share */}
        <motion.g
          animate={{ y: [10, -15], opacity: [0, 1, 0], scale: [0.6, 1, 0.8] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut", delay: 1.8 }}
          style={{ originX: "195px", originY: "100px" }}
        >
          <circle cx="195" cy="100" r="9" className="fill-accent/20 stroke-accent/50" />
          <polygon points="193,101 197,97 197,99 200,99 200,103 197,103 197,105" className="fill-accent" />
        </motion.g>

        {/* Floating Bubble: User Follow */}
        <motion.g
          animate={{ y: [5, -20], opacity: [0, 1, 0], scale: [0.6, 1, 0.8] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          style={{ originX: "65px", originY: "100px" }}
        >
          <circle cx="65" cy="100" r="9" className="fill-emerald-500/20 stroke-emerald-500/50" />
          <circle cx="65" cy="98" r="2.5" className="fill-emerald-400" />
          <path d="M 61 104 C 61 101.5 69 101.5 69 104" className="stroke-emerald-400" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  );
}

