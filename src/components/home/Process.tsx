import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { process } from "@/data/home";
import { SectionHeading } from "@/components/SectionHeading";

interface ProcessStepProps {
  step: typeof process[number];
  index: number;
}

function ProcessStep({ step, index }: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger active state when the step is in the prime reading area of the screen
  const isInView = useInView(ref, {
    once: false,
    margin: "-25% 0px -35% 0px",
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex md:items-center gap-6 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline circular node popping in & glowing if active */}
      <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 h-4 w-4 z-10 flex items-center justify-center">
        {/* Glowing background ripple when active */}
        {isInView && (
          <motion.span
            layoutId={`pulse-${step.step}`}
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeOut" }}
            className="absolute inset-[-8px] rounded-full bg-primary/40 pointer-events-none"
          />
        )}
        
        {/* Main circular dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
          className={`h-3 w-3 rounded-full transition-all duration-500 ring-4 ${
            isInView 
              ? "bg-primary ring-primary/40 shadow-[0_0_15px_var(--primary)] scale-110" 
              : "bg-surface ring-white/10"
          }`}
        />
      </div>

      {/* Empty spacer for desktop layout symmetry */}
      <div className="hidden md:block flex-1" />

      {/* Card sliding in from side & lighting up if active */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50, y: 15 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className={`flex-1 ml-16 md:ml-0 ${
          isEven ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
        }`}
      >
        <motion.div
          animate={isInView ? "active" : "inactive"}
          variants={{
            inactive: {
              y: 0,
              scale: 0.98,
              borderColor: "rgba(255, 255, 255, 0.08)",
              boxShadow: "0 8px 32px -8px rgba(0, 0, 0, 0.5)",
              background: "oklch(0.17 0.045 265 / 65%)",
            },
            active: {
              y: -8,
              scale: 1.02,
              borderColor: "rgba(43, 110, 255, 0.35)",
              boxShadow: "0 22px 45px -15px rgba(0, 0, 0, 0.75), 0 0 30px -5px rgba(43, 110, 255, 0.25)",
              background: "oklch(0.19 0.05 265 / 85%)",
            }
          }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="glass rounded-2xl p-6 inline-block w-full md:w-auto md:max-w-md transition-colors relative overflow-hidden"
        >
          {/* Subtle active inner glow */}
          {isInView && (
            <motion.div
              layoutId={`card-glow-${step.step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-glow)_0%,transparent_70%)] rounded-2xl pointer-events-none"
            />
          )}

          <div className={`text-xs font-mono mb-1 transition-all duration-300 ${
            isInView ? "text-primary-glow font-bold scale-105" : "text-primary/70"
          }`}>
            {step.step}
          </div>
          <h3 className={`text-xl font-semibold mb-2 transition-all duration-300 ${
            isInView ? "text-white" : "text-white/80"
          }`}>
            {step.title}
          </h3>
          <p className={`text-sm leading-relaxed transition-all duration-300 ${
            isInView ? "text-muted-foreground/95" : "text-muted-foreground/70"
          }`}>
            {step.desc}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the container to draw the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamically position the glowing particle at the end of the drawing active line
  const topPercent = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title={<>A Proven Path from <span className="text-gradient-primary">Idea to Launch</span></>}
          description="Our custom software development methodology is built on transparency, speed, and engineering rigor. Seven phases. Weekly checkpoints. Zero surprises."
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto mt-20">
          {/* Static background track line */}
          <div className="absolute left-[27px] md:left-1/2 top-2 bottom-2 w-px bg-white/5 md:-translate-x-px" />

          {/* Animated active timeline progress line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[27px] md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-accent to-purple-500 md:-translate-x-[1px] shadow-[0_0_12px_rgba(43,110,255,0.7)]"
          />

          {/* Wrapper with the exact same height & bounds as the timeline line */}
          <div className="absolute left-[27px] md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 pointer-events-none z-20">
            {/* Glowing particle at the tip of the active progress line */}
            <motion.div
              style={{ top: topPercent }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_var(--primary),0_0_5px_#fff]"
            />
          </div>

          <div className="space-y-12">
            {process.map((s, i) => (
              <ProcessStep key={s.step} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

