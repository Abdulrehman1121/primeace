import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { projects } from "@/lib/projects";
import { Floating3DImage } from "@/components/Floating3DImage";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | PRIMEACE Software Agency" },
      { name: "description", content: "Selected SaaS platforms, mobile apps, AI tools, dashboards and integrations engineered by PRIMEACE." },
      { property: "og:title", content: "Portfolio — PRIMEACE" },
      { property: "og:description", content: "Recent software products designed and shipped by our team." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const categories = ["All", "SaaS Platform", "Web Application", "Mobile App", "AI Automation", "Dashboard", "API Integration"];

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Software we've shipped"
        subtitle="A selection of recent products built by PRIMEACE — designed, engineered and launched end-to-end."
      />

      <section className="pb-10 relative z-10">
        <div className="container-x">
          <div className="flex flex-wrap gap-2.5 justify-center bg-secondary/15 p-2 rounded-full border border-border/40 max-w-4xl mx-auto backdrop-blur-md">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === c
                    ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/45"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 relative">
        <div className="absolute top-[20%] left-0 right-0 h-[500px] bg-accent/5 blur-[140px] pointer-events-none" />

        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <Floating3DImage
                  maxTilt={5}
                  glow={true}
                  glowColor="oklch(0.68 0.20 245 / 0.2)"
                  className="h-full rounded-3xl"
                >
                  <article className="glass-card overflow-hidden h-full group relative flex flex-col justify-between border border-primary/10 hover:border-primary/45 transition-colors">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-5">
                          <span className="btn-ghost !py-2.5 !px-5 !text-xs">View Case Study <ArrowRight size={12} /></span>
                        </div>
                      </div>
                      <div className="p-7 space-y-2.5">
                        <div className="text-[10px] text-primary font-bold tracking-widest uppercase flex items-center gap-1.5">
                          <Sparkles size={10} className="animate-pulse" />
                          <span>{p.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                    <div className="px-7 pb-7 pt-0 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2.5 py-1 rounded bg-secondary/50 text-muted-foreground border border-border/10 font-medium group-hover:border-primary/20 group-hover:text-white transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </Floating3DImage>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
