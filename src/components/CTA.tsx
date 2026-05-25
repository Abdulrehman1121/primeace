import { MagneticButton } from "./MagneticButton";
import { ArrowRight, Cpu, BarChart2, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Decorative Orbs behind CTA section */}
      <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] bg-accent/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-primary/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-x relative z-10">
        <Reveal>
          <div className="relative overflow-hidden glass-card p-12 md:p-20 text-center border border-primary/20 shadow-[0_0_50px_-12px_oklch(0.68_0.20_245/0.3)]">
            {/* Tech grid mesh */}
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

            {/* Glowing animated mesh gradient */}
            <motion.div
              className="absolute inset-0 -z-10 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 30%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 80% 70%, var(--color-accent) 0%, transparent 50%)",
                  "radial-gradient(circle at 75% 20%, var(--color-primary) 0%, transparent 45%), radial-gradient(circle at 25% 85%, var(--color-accent) 0%, transparent 45%)",
                  "radial-gradient(circle at 20% 30%, var(--color-primary) 0%, transparent 50%), radial-gradient(circle at 80% 70%, var(--color-accent) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            />

            {/* Floating digital product mockups for visuals */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block">
              {/* Floating Widget 1 - Revenue */}
              <motion.div
                className="absolute top-12 left-10 glass p-4 rounded-xl text-left w-44"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase font-bold">
                  <BarChart2 size={10} className="text-primary" />
                  <span>Platform Revenue</span>
                </div>
                <div className="text-lg font-bold mt-1 text-white font-mono">$184.2K</div>
                <div className="text-[10px] text-green-400 mt-0.5">▲ +24.8% this month</div>
              </motion.div>

              {/* Floating Widget 2 - Active Tasks */}
              <motion.div
                className="absolute bottom-12 right-12 glass p-4 rounded-xl text-left w-48"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase font-bold">
                  <Cpu size={10} className="text-accent" />
                  <span>AI Agents Running</span>
                </div>
                <div className="text-xs font-semibold mt-1.5 text-white flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
                  <span>Agent_Pipeline v4_prod</span>
                </div>
                <div className="text-[10px] text-muted-foreground mt-1 font-mono">Status: executing jobs</div>
              </motion.div>

              {/* Floating Widget 3 - Deployments */}
              <motion.div
                className="absolute bottom-8 left-16 glass px-3.5 py-2.5 rounded-full flex items-center gap-2 text-[10px] text-white"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              >
                <CheckCircle2 size={12} className="text-green-400" />
                <span>Deploy: primeace-api · v2.1</span>
              </motion.div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-primary px-3 py-1.5 rounded-full glass mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Grow with PRIMEACE
              </span>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                Ready to build your next <span className="gradient-text">digital masterpiece?</span>
              </h2>

              <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Join ambitious brands who trust PRIMEACE to design, build, and deploy production-grade software, AI automation, and cloud systems. Get a tailored strategy and quote within 24 hours.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <MagneticButton to="/contact">
                  Start Your Project <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton to="/services" variant="ghost">
                  Explore Services
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
