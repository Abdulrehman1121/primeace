import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import aboutImg from "@/assets/about-team.jpg";

function AnimatedCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    if (start === end) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Easing out quad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [numericValue, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const points = [
  "Senior software developers with an average of 8+ years of engineering experience",
  "Transparent, fixed-scope roadmaps and predictable timelines before kickoff",
  "Weekly interactive demos, continuous updates, and 100% codebase ownership",
  "Enterprise-grade, clean documentation and scalable software solutions from day one",
];

export function AboutPreview() {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-strong p-1.5">
              <div className="rounded-[1.4rem] overflow-hidden">
                <img
                  src={aboutImg}
                  alt="PrimeAce Tech custom software development company engineering team collaborating on scalable software solutions"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              className="absolute -inset-8 -z-10 rounded-3xl opacity-50 pointer-events-none"
              style={{ background: "var(--gradient-glow)" }}
            />

            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-[var(--shadow-card)] hidden md:block">
              <div className="text-3xl font-bold text-gradient-primary">
                <AnimatedCounter value="98%" />
              </div>
              <div className="text-xs text-muted-foreground">Client Retention Rate</div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary-glow mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              About PrimeAce
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gradient leading-[1.05]"
            >
              A software partner built for{" "}
              <span className="text-gradient-primary">growth</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-5 text-lg text-muted-foreground leading-relaxed"
            >
              As a premier software development company, PrimeAce Tech helps startups, scale-ups, and enterprises turn complex concepts into reliable, scalable, and beautifully designed digital products. We partner with you through the entire journey — from initial strategy and UI UX design to development, deployment, and post-launch optimization.
            </motion.p>

            <ul className="mt-8 space-y-3">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-10 group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass hover:border-primary/40 transition"
            >
              More About PrimeAce
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
