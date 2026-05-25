import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Target, Eye, Sparkles, Cpu } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA } from "@/components/CTA";
import { Tilt } from "@/components/Tilt";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PRIMEACE | Premium Software Agency" },
      { name: "description", content: "PRIMEACE helps startups, agencies, and businesses turn ideas into powerful digital products with engineering, AI, design and scalable infrastructure." },
      { property: "og:title", content: "About — PRIMEACE" },
      { property: "og:description", content: "Engineering, AI, design and infrastructure under one roof." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { value: 120, suffix: "+", label: "Custom software solutions" },
  { value: 45, suffix: "+", label: "AI-ready systems shipped" },
  { value: 99.99, suffix: "%", label: "Scalable architecture uptime" },
  { value: 30, suffix: "d", label: "Avg fast-delivery cycle" },
  { value: 24, suffix: "/7", label: "Long-term support" },
];

const values = [
  { title: "Ownership", desc: "We take problems personally and ship like founders." },
  { title: "Craft", desc: "Software is a craft. Every line, every pixel, every commit." },
  { title: "Velocity", desc: "Predictable, sustainable speed — not heroic burnout." },
  { title: "Transparency", desc: "Open Slack, live dashboards, no surprises." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  const isFloat = !Number.isInteger(to);
  return <span ref={ref}>{isFloat ? val.toFixed(2) : Math.floor(val)}{suffix}</span>;
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PRIMEACE"
        title="A modern software agency engineered for outcomes"
        subtitle="PRIMEACE helps startups, agencies, and businesses turn ideas into powerful digital products. We combine software engineering, AI automation, clean design, and scalable infrastructure to deliver solutions that help companies grow."
      />

      <section className="pb-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-5">
            <Reveal>
              <Tilt>
                <div className="glass-card p-8 h-full">
                  <Target className="text-primary" size={26} />
                  <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    Empower every ambitious team with software that compounds in value —
                    faster than the market and more resilient than the competition.
                  </p>
                </div>
              </Tilt>
            </Reveal>
            <Reveal delay={0.1}>
              <Tilt>
                <div className="glass-card p-8 h-full">
                  <Eye className="text-primary" size={26} />
                  <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    A world where every business — not just trillion-dollar incumbents — has
                    access to AI-native, scalable, beautifully engineered software.
                  </p>
                </div>
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <SectionHeader eyebrow="By the numbers" title="Built on outcomes" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <Tilt maxTilt={8}>
                  <div className="glass-card p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold gradient-text-blue">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <SectionHeader eyebrow="What makes us different" title="A technology-first approach" subtitle="We're engineers and designers who run toward complex problems — not away from them." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <Tilt>
                  <div className="glass-card p-6 h-full">
                    <Sparkles className="text-primary" size={22} />
                    <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <Tilt>
              <div className="glass-card p-10 md:p-14 flex flex-col md:flex-row items-start gap-8">
                <Cpu className="text-primary shrink-0" size={40} />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text">Technology-first, business-obsessed</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                    Our stack — TypeScript, React, Node, Python, Kubernetes, Postgres, Groq, OpenAI — is
                    chosen for one reason: it lets us ship faster and scale further than anyone else.
                    But the tech is never the point. The outcomes are.
                  </p>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
