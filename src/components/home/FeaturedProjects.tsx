import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/home";
import { SectionHeading } from "@/components/SectionHeading";
import portfolioImg from "@/assets/portfolio-mockups.jpg";

export function FeaturedProjects() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title={<>Products People <span className="text-gradient-primary">Actually Use</span></>}
          description="Explore our recent success stories across custom SaaS platforms, mobile applications, high-performance e-commerce storefronts, and automated AI systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link
                to="/portfolio"
                className="group relative block rounded-2xl glass overflow-hidden hover:border-primary/40 transition"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={portfolioImg}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={400}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass-strong text-xs font-medium">
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass hover:border-primary/40 transition"
          >
            View All Case Studies
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-12 transition" />
          </Link>
        </div>
      </div>
    </section>
  );
}
