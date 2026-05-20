import { createFileRoute } from "@tanstack/react-router";
import { Compass, ClipboardList, PenTool, Code2, Bug, Rocket, LineChart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

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
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A premium delivery process from day one to forever"
        subtitle="Seven well-defined phases. Zero surprises. Every step instrumented and visible to you in real time."
      />

      <section className="pb-20">
        <div className="container-x">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-12 pb-14 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"}`}>
                    <div className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">Step {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold gradient-text">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="hidden md:block" />
                  {/* node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 h-12 w-12 rounded-full glass flex items-center justify-center text-primary border border-primary/40 shadow-[0_0_30px_oklch(0.68_0.20_245/0.5)]">
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
