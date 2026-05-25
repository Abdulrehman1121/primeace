import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { Tilt3D } from "@/components/Tilt3D";
import { projects } from "@/lib/projects";

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

      <section className="pb-10">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === c
                    ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <Tilt3D className="h-full" max={7}>
                  <article className="glass-card overflow-hidden h-full group">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={1280} height={800} loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-5">
                        <span className="btn-ghost !py-2 !px-4 !text-xs">View Case Study <ArrowRight size={12} /></span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-primary font-semibold tracking-wide uppercase">{p.category}</div>
                      <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
