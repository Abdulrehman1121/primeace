import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, Sparkles, Zap, Shield, Layers, Cpu, Rocket,
  Code2, Globe, Smartphone, Brain, Cloud, Plug,
  Compass, PenTool, Bug, LineChart, Activity, HardDrive, Star
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA } from "@/components/CTA";
import { OrbField } from "@/components/OrbField";
import { projects } from "@/lib/projects";
import { HeroVisual3D } from "@/components/HeroVisual3D";
import { ServiceIcon3D } from "@/components/ServiceIcon3D";
import { Floating3DImage } from "@/components/Floating3DImage";
import { AINetworkVisual } from "@/components/AINetworkVisual";

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
  { slug: "custom-software-development", icon: Code2, title: "Custom Software", desc: "Bespoke platforms engineered around your workflow." },
  { slug: "web-development", icon: Globe, title: "Web Development", desc: "Lightning-fast modern web platforms that convert." },
  { slug: "mobile-app-development", icon: Smartphone, title: "Mobile Apps", desc: "Native-feel iOS & Android from one codebase." },
  { slug: "ai-automation", icon: Brain, title: "AI & Automation", desc: "Production-ready AI agents, chatbots and workflows." },
  { slug: "cloud-devops", icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure that scales while you sleep." },
  { slug: "api-integrations", icon: Plug, title: "API Integrations", desc: "Connect every tool in your stack — bulletproof." },
];

const whyUs = [
  { icon: Sparkles, title: "Senior-only team", desc: "Every project is led by engineers with 8+ years shipping at scale." },
  { icon: Zap, title: "Velocity that compounds", desc: "Production-ready iterations every two weeks, not quarters." },
  { icon: Shield, title: "Security by default", desc: "SOC-2-ready architecture, audited dependencies, encrypted everything." },
  { icon: Layers, title: "Modern stack", desc: "TypeScript, React, Node, Kubernetes — proven at billion-request scale." },
];

const processPreview = [
  { icon: Compass, label: "Discovery", desc: "Strategy aligning outcomes." },
  { icon: PenTool, label: "Design", desc: "Polished system prototypes." },
  { icon: Code2, label: "Build", desc: "Senior engineer sprints." },
  { icon: Bug, label: "Test", desc: "Hardened security & performance." },
  { icon: Rocket, label: "Launch", desc: "Zero-downtime release." },
  { icon: LineChart, label: "Grow", desc: "SLA-backed scaling support." },
];

const testimonials = [
  { quote: "PRIMEACE shipped our SaaS MVP in 8 weeks. Three months later we closed our Series A on its back.", name: "Aarav Mehta", role: "CEO, Nexus Labs", stars: 5 },
  { quote: "Their AI automation work cut our support volume by 62%. The integration with Groq was seamless.", name: "Priya Kapoor", role: "Head of Ops, VaultPay", stars: 5 },
  { quote: "We replaced three vendors with PRIMEACE. Faster delivery, sharper design, real ownership.", name: "Marcus Lee", role: "CTO, SkyForge", stars: 5 },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Transforms for Hero
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Timeline Progress Scroll Transforms
  const { scrollYProgress: processScroll } = useScroll({
    target: processRef,
    offset: ["start center", "end center"],
  });
  const processScaleY = useSpring(processScroll, { stiffness: 100, damping: 20 });

  // Cursor position state for subtle holographic parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const y = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    setMouse({ x, y });
  };

  const textParallax = {
    x: mouse.x * -12,
    y: mouse.y * -12,
  };

  const visualParallax = {
    x: mouse.x * 25,
    y: mouse.y * 25,
  };

  // Cinematic Headline Words Array for Stagger
  const headlineWords = "Build Smarter Software. Automate Faster. Scale with PRIMEACE.".split(" ");

  return (
    <div onMouseMove={handleMouseMove} className="relative overflow-hidden w-full">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-36 pb-20 overflow-hidden">
        {/* Parallax background layers */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" width={1920} height={1080} />
          
          {/* Interactive concentric 3D plexus background */}
          <HeroVisual3D />
          
          <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/40 to-background" />
          <div className="absolute inset-0 tech-grid opacity-15" />
          
          {/* Large dynamic gradient orbs */}
          <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-accent/15 blur-[160px] rounded-full pointer-events-none" />
        </motion.div>

        {/* Premium ambient floating orb fields */}
        <OrbField variant="hero" />

        {/* Floating 3D image panels & mockups */}
        {!isMobile && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* SaaS Metrics floating dashboard */}
            <Floating3DImage
              className="absolute top-28 left-[6%] w-60 h-auto"
              floatDelay={0}
              floatDuration={6}
              glow={true}
              maxTilt={10}
            >
              <div className="glass-card p-5 border border-primary/20 bg-background/80 shadow-glow backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Nexus Revenue</span>
                  <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full">+18.4%</span>
                </div>
                <div className="text-2xl font-bold mt-2 font-display text-white">$248,910</div>
                <div className="mt-4 flex items-end gap-1.5 h-16">
                  {[35, 60, 48, 80, 58, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-primary to-accent"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </Floating3DImage>

            {/* AI Agent Status Pipeline floating widget */}
            <Floating3DImage
              className="absolute top-36 right-[8%] w-64 h-auto"
              floatDelay={1.5}
              floatDuration={8}
              glow={true}
              maxTilt={12}
            >
              <div className="glass-card p-5 border border-accent/25 bg-background/80 shadow-[0_0_30px_oklch(0.55_0.22_250/0.15)] backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-border/40 pb-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    <Activity size={12} className="text-accent animate-pulse" />
                    <span>AI inference.live</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
                </div>
                <div className="space-y-3 mt-3">
                  <div>
                    <div className="flex justify-between text-[9px] text-muted-foreground mb-1">
                      <span>RAG Token Extraction</span>
                      <span className="text-white font-mono">11.4k/s</span>
                    </div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-[82%] bg-gradient-to-r from-primary to-accent" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-muted-foreground font-mono">
                    <span>Latency: 84ms</span>
                    <span>Load: 24%</span>
                  </div>
                </div>
              </div>
            </Floating3DImage>

            {/* Deployment Cloud floating widget */}
            <Floating3DImage
              className="absolute bottom-24 left-[10%] w-56 h-auto"
              floatDelay={0.8}
              floatDuration={7}
              glow={true}
              maxTilt={8}
            >
              <div className="glass-card p-4 border border-primary/20 bg-background/80 shadow-glow backdrop-blur-md flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                  <HardDrive size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Deployment Cloud</div>
                  <div className="text-xs font-semibold text-white mt-0.5">v2.41.0 ▸ live</div>
                </div>
              </div>
            </Floating3DImage>
          </div>
        )}

        <div className="container-x relative z-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Hero Left Column (Copy content) */}
            <motion.div style={isMobile ? {} : textParallax} className="lg:col-span-8 space-y-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary px-3 py-1.5 rounded-full glass">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Premium Software Agency
                </span>
              </Reveal>

              <div className="mt-4">
                <Reveal delay={0.1}>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] max-w-5xl flex flex-wrap gap-x-4 gap-y-2">
                    {headlineWords.map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 80,
                          damping: 15,
                          delay: 0.15 + i * 0.04,
                        }}
                        className={
                          word.includes("PRIMEACE")
                            ? "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                            : word.includes("Smarter") || word.includes("Software.")
                            ? "gradient-text"
                            : word.includes("Automate") || word.includes("Faster.")
                            ? "gradient-text-blue"
                            : "text-white"
                        }
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h1>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <p className="mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  PRIMEACE is a modern software agency helping ambitious businesses build custom enterprise software,
                  highly responsive web platforms, cross-platform mobile apps, advanced AI automation systems, and scalable cloud products.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <MagneticButton to="/contact">
                    Start Your Project <ArrowRight size={16} />
                  </MagneticButton>
                  <MagneticButton to="/services" variant="ghost">
                    Explore Services
                  </MagneticButton>
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
            </motion.div>

            {/* Hero Right Column - Subtle Floating composition */}
            <div className="hidden lg:block lg:col-span-4 justify-self-center pointer-events-none">
              <motion.div style={visualParallax} className="relative w-64 h-64 flex items-center justify-center">
                {/* 3D spinning decorative outer core */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
                <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section relative border-y border-border/40">
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="container-x">
          <SectionHeader
            eyebrow="What we do"
            title="Engineering across the full stack"
            subtitle="From product discovery to AI-powered launch — one senior team, end-to-end."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePreview.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block h-full">
                  <Floating3DImage
                    maxTilt={7}
                    glow={true}
                    glowColor="oklch(0.68 0.20 245 / 0.3)"
                    className="h-full rounded-3xl"
                  >
                    <div className="glass-card p-8 h-full group relative overflow-hidden flex flex-col justify-between border border-primary/10">
                      <div>
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <ServiceIcon3D slug={s.slug} />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-white group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                      
                      <div className="mt-8 flex items-center gap-1 text-xs text-primary font-bold tracking-wider uppercase group-hover:translate-x-1.5 transition-transform">
                        <span>Learn More</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </Floating3DImage>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 bg-primary/10 px-6 py-2.5 rounded-full border border-primary/25 shadow-glow">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section relative">
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
                <div className="glass-card p-7 h-full border border-primary/10 flex flex-col justify-between hover:border-primary/45 transition-colors">
                  <div>
                    <w.icon className="text-primary" size={26} />
                    <h3 className="mt-5 font-semibold text-white text-lg">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI HIGHLIGHT - FUTURISTIC */}
      <section className="section relative border-t border-border/40 bg-secondary/10">
        <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-[15%] w-[350px] h-[350px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col copy */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary px-3 py-1.5 rounded-full glass">
                  <Brain size={12} /> AI & Automation Orchestration
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                  AI Agents that actually <span className="gradient-text">ship to production.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Intelligent chatbots on Groq, internal copilots, document automation,
                  RAG on your private data, predictive dashboards and workflow orchestration —
                  deployed, monitored and measured. PRIMEACE bridges the gap between AI prototype and real enterprise efficiency.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Groq, OpenAI & Claude integrations",
                    "RAG systems on private data",
                    "End-to-end workflow automation",
                    "Live dashboards & analytics"
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.68_0.20_245)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="pt-4">
                  <MagneticButton to="/ai-automation">Explore AI Solutions <ArrowRight size={16} /></MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* Right Col neural visual */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <Floating3DImage maxTilt={6} glow={true} glowColor="oklch(0.55 0.22 250 / 0.3)" className="rounded-3xl shadow-[0_0_40px_-5px_oklch(0.68_0.20_245/0.25)]">
                  <AINetworkVisual />
                </Floating3DImage>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section relative">
        <div className="container-x">
          <SectionHeader
            eyebrow="Featured Work"
            title="Software we're proud of"
            subtitle="A glimpse at recent products we've designed, engineered and shipped."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <Link to="/portfolio" className="block h-full">
                  <Floating3DImage
                    maxTilt={5}
                    glow={true}
                    glowColor="oklch(0.68 0.20 245 / 0.25)"
                    className="h-full rounded-3xl"
                  >
                    <div className="glass-card overflow-hidden h-full group relative flex flex-col justify-between border border-primary/10">
                      <div>
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            width={1280}
                            height={800}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-5">
                            <span className="btn-ghost !py-2 !px-4 !text-xs">Explore Case Study <ArrowRight size={12} /></span>
                          </div>
                        </div>
                        <div className="p-6 space-y-2.5">
                          <div className="text-[10px] text-primary font-bold tracking-widest uppercase">{p.category}</div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{p.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{p.description}</p>
                        </div>
                      </div>
                      
                      <div className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] px-2.5 py-1 rounded bg-secondary/50 text-muted-foreground border border-border/10 font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Floating3DImage>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 bg-primary/10 px-6 py-2.5 rounded-full border border-primary/25 shadow-glow">
              See full portfolio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE - DYNAMIC SCROLL */}
      <section className="section relative border-t border-border/40 bg-secondary/5">
        <div className="container-x">
          <SectionHeader
            eyebrow="Our Process"
            title="From idea to launch in six steps"
            subtitle="A predictable, repeatable delivery system honed across dozens of successful launches."
          />
          
          <div ref={processRef} className="relative max-w-4xl mx-auto mt-16 pl-6 md:pl-0">
            {/* Scroll timeline connecting stroke */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/40 pointer-events-none" />
            
            {/* Active glowing path representing scroll position */}
            <motion.div
              style={{ scaleY: processScaleY, transformOrigin: "top" }}
              className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent shadow-[0_0_12px_var(--color-primary)] pointer-events-none"
            />

            {processPreview.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.05}>
                <div className={`relative pb-16 md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 0 ? "md:text-right" : "md:[&>*:first-child]:order-2"
                }`}>
                  <div className="space-y-2 md:px-4">
                    <span className="text-[10px] font-bold text-primary tracking-[0.22em] uppercase">Step {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-2xl font-bold text-white gradient-text">{step.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {/* Space filler for layout mapping */}
                  <div className="hidden md:block" />

                  {/* 3D Timeline Center Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 h-12 w-12 rounded-full glass border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_oklch(0.68_0.20_245/0.1)] hover:border-primary/60 transition-colors">
                    <step.icon size={20} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/process" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 bg-primary/10 px-6 py-2.5 rounded-full border border-primary/25 shadow-glow">
              See full process <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section relative border-t border-border/40">
        <div className="absolute top-1/3 right-[5%] w-[400px] h-[400px] bg-accent/5 blur-[140px] pointer-events-none" />
        
        <div className="container-x">
          <SectionHeader
            eyebrow="Client Voices"
            title="Trusted by ambitious founders"
            subtitle="Read what partners say about shipping velocity and execution standard."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <Floating3DImage maxTilt={5} glow={true} glowColor="oklch(0.68 0.20 245 / 0.2)" className="h-full rounded-3xl">
                  <div className="glass-card p-8 h-full flex flex-col justify-between relative overflow-hidden group border border-primary/10">
                    <div>
                      {/* Interactive glowing stars */}
                      <div className="flex gap-0.5 text-primary text-sm mb-4">
                        {[...Array(t.stars)].map((_, idx) => (
                          <Star key={idx} size={14} className="fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground leading-relaxed text-sm sm:text-base font-medium">"{t.quote}"</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white text-sm">{t.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                      </div>
                      <span className="text-xs text-primary/40 group-hover:text-primary font-bold transition-colors">★ PRIMEACE</span>
                    </div>
                  </div>
                </Floating3DImage>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTA />
    </div>
  );
}

