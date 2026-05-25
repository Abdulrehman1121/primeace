import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Brain, Cpu, Database, Play, Sparkles, Terminal } from "lucide-react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

interface Signal {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  color: string;
}

export function AINetworkVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });
  const [logs, setLogs] = useState<string[]>([
    "SYS: Pipeline initiated.",
    "RAG: Indexing private vector database...",
    "RAG: Embedded 14,821 documents.",
    "AGENT: Listening for user intent...",
  ]);

  // Simulate streaming agent logs in the dashboard
  useEffect(() => {
    const events = [
      "AGENT: User query intercepted.",
      "LLM: Routing request via Groq Inference (Llama-3-70B)...",
      "SYS: Processing query under 85ms latency.",
      "RAG: Retrieving vector document shards...",
      "AGENT: Synthesizing context-aware response...",
      "SYS: Workflow compiled & executed.",
      "API: Synchronized payload with CRM & Slack API.",
      "SYS: Pipeline sleeping, status: idle.",
    ];

    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev];
        if (next.length > 5) next.shift();
        const randEvent = events[Math.floor(Math.random() * events.length)];
        next.push(randEvent);
        return next;
      });
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Initialize neural nodes
    const nodes: Node[] = [];
    const nodeCount = 35;
    const colors = [
      "rgba(109, 144, 255, 0.6)", // Electric blue
      "rgba(168, 85, 247, 0.6)",  // Purple
      "rgba(56, 189, 248, 0.6)",  // Sky blue
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 2 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Initialize pulsing signals running along connections
    const signals: Signal[] = [];

    const triggerSignal = () => {
      if (nodes.length < 2) return;
      // Select two random nodes that are close to each other
      const n1 = nodes[Math.floor(Math.random() * nodes.length)];
      let closeNodes: Node[] = [];

      nodes.forEach((n2) => {
        if (n1 === n2) return;
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          closeNodes.push(n2);
        }
      });

      if (closeNodes.length > 0) {
        const n2 = closeNodes[Math.floor(Math.random() * closeNodes.length)];
        signals.push({
          startX: n1.x,
          startY: n1.y,
          endX: n2.x,
          endY: n2.y,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
          color: n1.color,
        });
      }
    };

    let frameId = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Trigger new signals randomly
      if (Math.random() < 0.08 && signals.length < 15) {
        triggerSignal();
      }

      // 1. Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.15;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(109, 144, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Animate and draw active signal pulses
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;

        if (s.progress >= 1) {
          signals.splice(i, 1);
          continue;
        }

        const cx = s.startX + (s.endX - s.startX) * s.progress;
        const cy = s.startY + (s.endY - s.startY) * s.progress;

        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = s.color.replace("0.6", "0.9");
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowColor = "transparent";
      }

      // 3. Draw and animate nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Cursor attraction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) * 0.0003;
            node.x += dx * force;
            node.y += dy * force;
          }
        }

        // Pulse size
        node.pulsePhase += node.pulseSpeed;
        const sizeMultiplier = 1 + Math.sin(node.pulsePhase) * 0.25;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * sizeMultiplier, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = node.radius * 2;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowColor = "transparent";
      });

      frameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
    };
  }, [mouse]);

  const handleMouseMove = (e: React.MouseEvent) => {
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
      className="relative w-full h-[320px] md:h-[450px] rounded-3xl border border-primary/20 bg-background/50 overflow-hidden group perspective-1000 preserve-3d"
    >
      {/* Canvas backdrop */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      {/* Deep Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Interactive Overlay Widgets */}
      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between pointer-events-none">
        {/* Header Widget */}
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
            <Brain size={12} className="animate-spin-slow" />
            <span>AI Neural Orchestrator</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span>SYS_LIVE: 99.8% ETA</span>
          </div>
        </div>

        {/* Center Orbital RAG Diagram */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 pointer-events-none">
          <div className="absolute border border-dashed border-accent/40 rounded-full w-full h-full animate-[spin_15s_linear_infinite]" />
          <div className="absolute border border-dashed border-primary/40 rounded-full w-4/5 h-4/5 animate-[spin_8s_linear_infinite_reverse]" />
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow animate-pulse text-white">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Bottom panels (Logs & Live Database Pipelines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end pointer-events-auto">
          {/* Logs terminal widget */}
          <div className="glass p-4 rounded-2xl w-full max-w-[340px] text-[10px] font-mono text-muted-foreground flex flex-col gap-1 shadow-elevated border-border/40 backdrop-blur-md">
            <div className="flex items-center gap-1.5 border-b border-border/40 pb-1.5 mb-1.5 text-xs text-primary font-bold">
              <Terminal size={10} />
              <span>LOG_STREAM_LIVE</span>
            </div>
            {logs.map((log, idx) => (
              <div
                key={idx}
                className={`truncate ${
                  log.startsWith("SYS:")
                    ? "text-primary/70"
                    : log.startsWith("AGENT:")
                    ? "text-accent/80 font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {log}
              </div>
            ))}
          </div>

          {/* Metric Dashboard widget */}
          <div className="glass p-4 rounded-2xl w-full max-w-[280px] self-end justify-self-end text-[11px] shadow-elevated border-border/40 backdrop-blur-md hidden md:block">
            <div className="flex items-center gap-1.5 border-b border-border/40 pb-1.5 mb-2 font-bold text-xs text-accent">
              <Cpu size={12} />
              <span>PIPELINE_METRICS</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-muted-foreground mb-1 text-[10px]">
                  <span>Vector Embedding Latency</span>
                  <span className="text-white font-mono">14ms</span>
                </div>
                <div className="h-1 bg-secondary/60 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-primary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-muted-foreground mb-1 text-[10px]">
                  <span>Groq Token Speed</span>
                  <span className="text-white font-mono">485 t/s</span>
                </div>
                <div className="h-1 bg-secondary/60 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
