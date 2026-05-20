import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { CTA } from "@/components/CTA";
import { MagneticButton } from "@/components/MagneticButton";
import { getService, type Service } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title} | PRIMEACE` },
      { name: "description", content: loaderData?.service.short ?? "" },
      { property: "og:title", content: `${loaderData?.service.title} — PRIMEACE` },
      { property: "og:description", content: loaderData?.service.short ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-40 pb-20 container-x text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="text-primary mt-4 inline-block">← All services</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 pb-20 container-x text-center">
      <h1 className="text-xl font-bold">{error.message}</h1>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.description}
      >
        <div className="flex flex-wrap gap-3">
          <MagneticButton to="/contact">Get Started <ArrowRight size={16} /></MagneticButton>
          <MagneticButton to="/services" variant="ghost">All Services</MagneticButton>
        </div>
      </PageHero>

      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-primary">
                <Icon size={26} />
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-bold gradient-text">Why teams choose this service</h2>
              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {service.benefits.map((b: string) => (
                  <li key={b} className="flex gap-3 text-sm">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <Check size={12} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <SectionHeader eyebrow="Stack" title="Technologies we use" />
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {service.tech.map((t: string) => (
              <span key={t} className="glass px-4 py-2 rounded-full text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <SectionHeader eyebrow="Process" title="How we deliver" />
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["Discovery", "Design", "Build", "Launch"].map((step, i) => (
              <Reveal key={step} delay={i * 0.08}>
                <div className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold gradient-text-blue">0{i + 1}</div>
                  <div className="mt-3 font-semibold">{step}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <div className="space-y-3">
            {service.faq.map((f: {q:string;a:string}) => (
              <Reveal key={f.q}>
                <details className="glass-card p-5 group">
                  <summary className="cursor-pointer font-semibold flex justify-between items-center list-none">
                    {f.q}
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
