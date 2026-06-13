import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import { projectsData, Project } from "@/data/projects";
import portfolioImg from "@/assets/portfolio-mockups.jpg";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Cpu, Trophy, Activity } from "lucide-react";

export const Route = createFileRoute("/case-study/$slug")({
  head: ({ params }) => {
    const project = projectsData.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: `${project?.title || "Case Study"} | PrimeAce Tech — Showcase` },
        {
          name: "description",
          content: project?.description || "Read about our client challenges and customized engineering outcomes.",
        },
      ],
    };
  },
  component: CaseStudyDetailPage,
});

function CaseStudyDetailPage() {
  const { slug } = Route.useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Morph the 3D Canvas
    set3DSceneSection("portfolio");

    const found = projectsData.find((p) => p.slug === slug);
    if (found) {
      setProject(found);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-24 grid place-items-center relative">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="text-center max-w-md p-6 glass rounded-2xl mx-auto border-destructive/20">
          <ShieldAlert className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Case Study Not Found</h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            The project brief you are looking for does not exist or has been archived.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[var(--gradient-primary)] text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[15%] right-[-10%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Case Study Title Header */}
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-wider text-primary uppercase"
          >
            {project.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold mt-3 leading-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl"
          >
            {project.description}
          </motion.p>
        </div>

        {/* Large Mockup Showcase Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12 rounded-3xl overflow-hidden glass p-1.5"
        >
          <div className="relative rounded-[1.4rem] overflow-hidden aspect-[21/9] bg-muted/20">
            <img
              src={portfolioImg}
              alt={`${project.title} dashboard visualization mockup`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Challenge & Solution Breakdown */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/5 pb-16">
          <div className="lg:col-span-8 space-y-12">
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Our Solution</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-white/5 lg:pl-10">
            {/* Technologies Grid */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-muted-foreground font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Telemetry Activity Placeholder */}
            <div className="glass rounded-2xl p-5 border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">Monitoring Online</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Telemetry pipelines successfully automated. Security layers locked with AWS Identity management.
              </p>
            </div>
          </div>
        </div>

        {/* Results Metrics Showcase */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-10">
            <Trophy className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Project Results & Metrics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex gap-4 hover:border-primary/10 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-foreground leading-tight">
                    {r.split(",")[0] || r}
                  </h4>
                  {r.split(",")[1] && (
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {r.split(",").slice(1).join(",")}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* End Case Study CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <h2 className="text-3xl font-bold mb-4">Want to build something similar?</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Our strategic engineering workflows can streamline your scaling timeline. Let's arrange a brief brief analysis of your technical goals.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-all"
            >
              <span>Scope A Similar Product</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
