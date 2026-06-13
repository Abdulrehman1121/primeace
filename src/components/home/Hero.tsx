import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import heroImg from "@/assets/hero-workspace.jpg";

function Typewriter({
  words,
  speed = 75,
  eraseSpeed = 35,
  delay = 2000,
}: {
  words: string[];
  speed?: number;
  eraseSpeed?: number;
  delay?: number;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    // If we only have one word, stop typing once it is fully written
    if (words.length === 1 && subIndex === words[0].length) {
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? eraseSpeed : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, eraseSpeed, delay]);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span
        className={`inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle ${
          blink ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      />
    </span>
  );
}

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

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl lg:max-w-[55%] text-left pt-10">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-3xl md:text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight"
          >
            <span className="text-white">Custom Software</span>,{" "}
            <span className="text-gradient-primary">Enterprise SaaS</span> &amp;{" "}
            <span className="text-white">Advanced AI Systems</span> <br className="hidden lg:inline" />
            <span className="text-gradient-primary">Built for Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-lg"
          >
            PrimeAce Tech is a premium custom software development company. We engineer scalable SaaS platforms, intelligent AI chatbot solutions, mobile apps, business websites, and automated workflow software designed to optimize your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              to="/request-quote"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-primary-foreground bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] hover:scale-[1.03] active:scale-95 transition"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium glass hover:border-primary/40 transition"
            >
              <Play className="h-4 w-4" />
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Hero showcase image — glass framed & made compact */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden glass-strong p-1.5 shadow-[var(--shadow-elevated)]">
            <div
              className="absolute -inset-px rounded-3xl opacity-60 pointer-events-none"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div className="relative rounded-[1.4rem] overflow-hidden">
              <img
                src={heroImg}
                alt="PrimeAce Tech custom software development company workspace showcasing advanced SaaS dashboards and holographic AI workflow interfaces"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating stats with animated counting */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["50+", "Enterprise Deployments"],
              ["30+", "Trusted Global Clients"],
              ["5+", "Years of Engineering Excellence"],
              ["100%", "Custom Codebase Ownership"],
            ].map(([n, l], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                  <AnimatedCounter value={n} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
