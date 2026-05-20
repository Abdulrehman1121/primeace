import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | PRIMEACE" },
      { name: "description", content: "Insights on software, AI, automation, web development and digital growth from the PRIMEACE team." },
      { property: "og:title", content: "Blog — PRIMEACE" },
      { property: "og:description", content: "Practical articles on software, AI, automation and growth." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { title: "How AI Automation Helps Businesses Save Time", excerpt: "Practical AI automation patterns that cut hours from repetitive work — without a research team.", category: "AI", date: "May 12, 2026", image: blog1 },
  { title: "Why Custom Software Beats Generic Tools", excerpt: "When SaaS hits a ceiling: why mid-market teams are returning to purpose-built software.", category: "Strategy", date: "May 6, 2026", image: blog2 },
  { title: "The Future of Web Development for Modern Brands", excerpt: "Edge runtimes, AI-first interfaces and the disappearing line between site and app.", category: "Web", date: "Apr 28, 2026", image: blog3 },
  { title: "How APIs Connect and Scale Your Business", excerpt: "Designing API layers that turn your software into a platform — and your platform into leverage.", category: "Engineering", date: "Apr 19, 2026", image: blog4 },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights from the engine room"
        subtitle="Short, useful essays on software, AI, automation and digital growth — written by the team building it."
      />

      <section className="pb-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <article className="glass-card overflow-hidden h-full group">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={1024} height={640} loading="lazy" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="text-primary font-semibold tracking-wide uppercase">{p.category}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> {p.date}</span>
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight">{p.title}</h2>
                    <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                    <Link to="/blog" className="mt-5 inline-flex items-center gap-1 text-primary font-medium text-sm">
                      Read more <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
