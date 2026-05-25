import { createFileRoute } from "@tanstack/react-router";
import { Compass, ClipboardList, PenTool, Code2, Bug, Rocket, LineChart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Floating3DImage } from "@/components/Floating3DImage";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process | PRIMEACE" },
      { name: "description", content: "From discovery to launch and beyond — the PRIMEACE process for shipping production-grade software on time." },
      { property: "og:title", content: "Process — PRIMEACE" },
      { property: "og:description", content: "A predictable, repeatable system honed across dozens of launches." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  { icon: Compass, title: "Discovery & Strategy", desc: "Workshops, stakeholder interviews and a written strategy doc that aligns every team member on outcomes." },
  { icon: ClipboardList, title: "Product Planning", desc: "Scope, architecture, milestones and a transparent timeline you can sync to your roadmap." },
  { icon: PenTool, title: "UI/UX Design", desc: "Wireframes → interactive prototypes → polished system. Reviewed and tested before a single line of code." },
  { icon: Code2, title: "Development", desc: "Senior engineers shipping in 2-week sprints with live demos and continuous deployment." },
  { icon: Bug, title: "Testing & Optimization", desc: "Automated tests, accessibility audits, performance budgets and security hardening." },
  { icon: Rocket, title: "Launch", desc: "Zero-downtime deployment, observability dashboards live from day one, and white-glove rollout support." },
  { icon: LineChart, title: "Maintenance & Growth", desc: "SLA-backed support, continuous improvements, and quarterly strategy check-ins." },
];

function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position to draw active glowing timeline connector
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A premium delivery process from day one to forever"
        subtitle="Seven well-defined phases. Zero surprises. Every step instrumented and visible to you in real time."
      />

      <section className="pb-24 relative">
        <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-0 w-[350px] h-[350px] bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="container-x">
          <div ref={containerRef} className="relative max-w-4xl mx-auto pl-6 md:pl-0">
            {/* Background timeline connecting stroke */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/40 pointer-events-none" />
            
            {/* Active timeline stroke filling up on scroll */}
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent shadow-[0_0_12px_var(--color-primary)] pointer-events-none"
            />

            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`relative pb-16 md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 0 ? "md:text-right" : "md:[&>*:first-child]:order-2"
                }`}>
                  <Floating3DImage
                    maxTilt={4}
                    glow={true}
                    glowColor="oklch(0.68 0.20 245 / 0.15)"
                    className="w-full text-left md:text-inherit"
                  >
                    <div className="glass-card p-7 border border-primary/10 hover:border-primary/45 transition-colors relative overflow-hidden group">
                      <div className="text-[10px] font-bold text-primary tracking-[0.22em] uppercase">Step {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white gradient-text">{s.title}</h3>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </Floating3DImage>
                  
                  {/* Space filler block */}
                  <div className="hidden md:block" />
                  
                  {/* Glowing step milestone node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-3 h-12 w-12 rounded-full glass border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_oklch(0.68_0.20_245/0.1)] hover:border-primary/60 transition-colors">
                    <s.icon size={20} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
