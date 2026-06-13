import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import { projectsData, Project } from "@/data/projects";
import portfolioImg from "@/assets/portfolio-mockups.jpg";
import { ArrowUpRight, Code, Sparkles, Filter } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Portfolio | PrimeAce Tech — Featured Engagements" },
      {
        name: "description",
        content: "Explore case studies of premium SaaS systems, high-speed headless storefronts, custom mobile apps, and robust AI automation solutions.",
      },
    ],
  }),
  component: PortfolioPage,
});

const categories = [
  { id: "all", label: "All Work" },
  { id: "saas", label: "SaaS Platforms" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "ai", label: "AI & Automation" },
];

function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);

  useEffect(() => {
    // Notify the 3D scene to morph to Portfolio screens view
    set3DSceneSection("portfolio");
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter((p) => p.filterCategory === filter));
    }
  }, [filter]);

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Case Studies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Selected engineering <span className="text-gradient-primary">showcases.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Explore real-world examples of our software architecture, complex integrations, and clean user experience designs.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/5 pb-8"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground mr-4 uppercase tracking-wider font-semibold">
            <Filter className="h-3.5 w-3.5 text-primary" />
            <span>Filter By:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  filter === cat.id
                    ? "bg-[var(--gradient-primary)] text-primary-foreground border-transparent shadow-[var(--shadow-glow)] scale-[1.03]"
                    : "glass border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }}
                className="group relative rounded-3xl overflow-hidden bg-[#131627] border border-white/[0.08] p-3 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_20px_50px_rgba(43,110,255,0.15)]"
              >
                <div>
                  {/* Project Image Panel */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-muted/20">
                    <img
                      src={portfolioImg}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent pointer-events-none" />

                    {/* Tech Badges on Image */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 max-w-[90%]">
                      {p.technologies.slice(0, 3).map((t, ti) => (
                        <span
                          key={ti}
                          className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-black/60 border border-white/10 text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                      {p.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Card footer CTA link */}
                <div className="px-6 pb-6">
                  <Link
                    to="/case-study/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-2 rounded-xl w-full py-3 justify-center text-xs font-semibold glass border-white/5 group-hover:bg-[var(--gradient-primary)] group-hover:text-primary-foreground group-hover:border-transparent transition-all"
                  >
                    <span>View Full Case Study</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
