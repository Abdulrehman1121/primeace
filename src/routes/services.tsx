import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | PRIMEACE Software Agency" },
      { name: "description", content: "End-to-end software services — custom development, web, mobile, AI automation, cloud, DevOps, UI/UX, APIs, SEO and support." },
      { property: "og:title", content: "Services — PRIMEACE" },
      { property: "og:description", content: "Custom software, AI automation, cloud and more — built by a senior team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software services built for scale"
        subtitle="Ten battle-tested service lines. One senior team. Pick a starting point — we'll handle the rest."
      />

      <section className="pb-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block group">
                  <div className="glass-card p-7 h-full flex flex-col">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <s.icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                    <ul className="mt-4 space-y-1.5 text-sm">
                      {s.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary" /> {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">Learn more</span>
                      <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
