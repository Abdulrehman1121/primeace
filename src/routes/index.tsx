import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight, Sparkles, Zap, Shield, Layers, Cpu, Rocket,
  Code2, Globe, Smartphone, Brain, Cloud, Plug,
  Compass, PenTool, Bug, LineChart,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aiNetwork from "@/assets/ai-network.jpg";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA } from "@/components/CTA";
import { Tilt3D } from "@/components/Tilt3D";
import { OrbField } from "@/components/OrbField";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRIMEACE | Build Smarter Software. Automate Faster. Scale." },
      { name: "description", content: "PRIMEACE is a modern software agency building custom software, web platforms, mobile apps, AI automation systems, and scalable digital products." },
      { property: "og:title", content: "PRIMEACE — Premium Software Agency" },
      { property: "og:description", content: "Custom software, AI automation and scalable digital products built for modern businesses." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const servicePreview = [
  { icon: Code2, title: "Custom Software", desc: "Bespoke platforms engineered around your workflow." },
  { icon: Globe, title: "Web Development", desc: "Lightning-fast modern web platforms that convert." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native-feel iOS & Android from one codebase." },
  { icon: Brain, title: "AI & Automation", desc: "Production-ready AI agents, chatbots and workflows." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure that scales while you sleep." },
  { icon: Plug, title: "API Integrations", desc: "Connect every tool in your stack — bulletproof." },
];

const whyUs = [
  { icon: Sparkles, title: "Senior-only team", desc: "Every project is led by engineers with 8+ years shipping at scale." },
  { icon: Zap, title: "Velocity that compounds", desc: "Production-ready iterations every two weeks, not quarters." },
  { icon: Shield, title: "Security by default", desc: "SOC-2-ready architecture, audited dependencies, encrypted everything." },
  { icon: Layers, title: "Modern stack", desc: "TypeScript, React, Node, Kubernetes — proven at billion-request scale." },
];

const processPreview = [
  { icon: Compass, label: "Discovery" },
  { icon: PenTool, label: "Design" },
  { icon: Code2, label: "Build" },
  { icon: Bug, label: "Test" },
  { icon: Rocket, label: "Launch" },
  { icon: LineChart, label: "Grow" },
];

const testimonials = [
  { quote: "PRIMEACE shipped our SaaS MVP in 8 weeks. Three months later we closed our Series A on its back.", name: "Aarav Mehta", role: "CEO, Nexus Labs" },
  { quote: "Their AI automation work cut our support volume by 62%. The integration with Groq was seamless.", name: "Priya Kapoor", role: "Head of Ops, VaultPay" },
  { quote: "We replaced three vendors with PRIMEACE. Faster delivery, sharper design, real ownership.", name: "Marcus Lee", role: "CTO, SkyForge" },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 tech-grid opacity-25" />
        </motion.div>

        {/* Premium 3D ambient orbs + floating shapes */}
        <OrbField variant="hero" />

        {/* Floating dashboard cards */}
        <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
          <FloatingCard className="top-32 left-[8%]" delay={0}>
            <div className="text-xs text-muted-foreground">Monthly Revenue</div>
            <div className="text-2xl font-bold mt-1">$248,910</div>
            <div className="text-xs text-green-400 mt-1">+18.4% ▲</div>
            <div className="mt-3 h-12 flex items-end gap-1">
              {[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-primary to-primary-glow rounded-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </FloatingCard>
          <FloatingCard className="top-44 right-[6%]" delay={1.2}>
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-primary" />
              <div className="text-xs">AI Pipeline · live</div>
            </div>
            <div className="text-xs text-muted-foreground mt-2">Embeddings · 12.4k/s</div>
            <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent" />
            </div>
            <div className="text-xs text-muted-foreground mt-3">Latency · 84ms</div>
          </FloatingCard>
          <FloatingCard className="bottom-32 left-[14%]" delay={0.6}>
            <div className="text-xs">Deployment · prod</div>
            <div className="text-sm font-semibold mt-1">v2.41.0 ▸ live</div>
            <div className="flex gap-1.5 mt-3">
              {["✓", "✓", "✓", "✓"].map((c, i) => (
                <div key={i} className="h-6 w-6 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center">{c}</div>
              ))}
            </div>
          </FloatingCard>
        </div>

        <div className="container-x relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary px-3 py-1.5 rounded-full glass">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Premium Software Agency
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] max-w-5xl">
              <span className="gradient-text">Build Smarter Software.</span><br />
              <span className="gradient-text-blue">Automate Faster.</span><br />
              <span className="gradient-text">Scale with PRIMEACE.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              PRIMEACE is a modern software agency helping businesses build custom software,
              web platforms, mobile apps, AI automation systems, and scalable digital products.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton to="/contact">Start Your Project <ArrowRight size={16} /></MagneticButton>
              <MagneticButton to="/services" variant="ghost">Explore Services</MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Trusted by ambitious teams</span>
              <div className="flex items-center gap-8 opacity-60 font-display font-bold text-sm">
                <span>NEXUS</span><span>VAULTPAY</span><span>SKYFORGE</span><span>LUMEN</span><span>ORBIT</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section relative">
        <div className="container-x">
          <SectionHeader
            eyebrow="What we do"
            title="Engineering across the full stack"
            subtitle="From product discovery to AI-powered launch — one senior team, end-to-end."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicePreview.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <Tilt3D className="h-full">
                  <div className="glass-card p-7 h-full group">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_30px_oklch(0.68_0.20_245/0.35)]">
                      <s.icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container-x relative">
          <SectionHeader
            eyebrow="Why PRIMEACE"
            title="Built for ambitious teams"
            subtitle="We're the team founders call when the stakes are high and the timeline is tight."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="glass-card p-7 h-full">
                  <w.icon className="text-primary" size={26} />
                  <h3 className="mt-5 font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI HIGHLIGHT */}
      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary px-3 py-1.5 rounded-full glass">
                <Brain size={12} /> AI & Automation
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight gradient-text">
                AI agents that actually ship to production.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Intelligent chatbots on Groq, internal copilots, document automation,
                RAG on your private data, predictive dashboards and workflow orchestration —
                deployed, monitored and measured.
              </p>
              <ul className="mt-6 space-y-3">
                {["Groq, OpenAI & Claude integrations", "RAG systems on private data", "End-to-end workflow automation", "Live dashboards & analytics"].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.68_0.20_245)]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <MagneticButton to="/ai-automation">Explore AI Solutions <ArrowRight size={16} /></MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-8 bg-primary/20 blur-[100px] rounded-full" />
                <img src={aiNetwork} alt="AI neural network visualization" className="relative rounded-3xl border border-border" width={1280} height={960} loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Featured Work" title="Software we're proud of" subtitle="A glimpse at recent products we've designed, engineered and shipped." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <Tilt3D className="h-full" max={6}>
                  <div className="glass-card overflow-hidden h-full group">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={1280} height={800} loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-primary font-semibold tracking-wide uppercase">{p.category}</div>
                      <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                    </div>
                  </div>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
              See full portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Our Process" title="From idea to launch in six steps" subtitle="A predictable, repeatable system honed across dozens of launches." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processPreview.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.05}>
                <div className="glass-card p-5 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-primary">
                    <step.icon size={20} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-3">Step {i + 1}</div>
                  <div className="font-semibold mt-1">{step.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/process" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
              See full process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Client Voices" title="Trusted by founders & operators" />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="glass-card p-7 h-full">
                  <div className="text-3xl text-primary leading-none">"</div>
                  <p className="mt-2 text-foreground leading-relaxed">{t.quote}</p>
                  <div className="mt-6 pt-5 border-t border-border/60">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
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

function FloatingCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + delay, duration: 0.8 }}
      className={`absolute glass-card p-4 w-56 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}
