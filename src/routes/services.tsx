import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/services";
import { ServiceIcon3D } from "@/components/ServiceIcon3D";
import { Floating3DImage } from "@/components/Floating3DImage";

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

      <section className="pb-24 relative">
        {/* Ambient glow mesh */}
        <div className="absolute top-[20%] left-0 right-0 h-[400px] bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block group h-full">
                  <Floating3DImage
                    maxTilt={8}
                    glow={true}
                    glowColor="oklch(0.68 0.20 245 / 0.25)"
                    className="h-full rounded-3xl"
                  >
                    <div className="glass-card p-8 h-full flex flex-col justify-between relative overflow-hidden border border-primary/10 hover:border-primary/45 transition-colors">
                      <div>
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <ServiceIcon3D slug={s.slug} />
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-white group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                        <ul className="mt-5 space-y-2 text-xs text-muted-foreground border-t border-border/40 pt-4">
                          {s.benefits.slice(0, 3).map((b) => (
                            <li key={b} className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-primary" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8 pt-5 border-t border-border/40 flex items-center justify-between text-xs font-bold tracking-wider uppercase">
                        <span className="text-primary">Learn more</span>
                        <ArrowRight size={14} className="text-primary group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </Floating3DImage>
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
