import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import { blogsData, BlogPost } from "@/data/blogs";
import portfolioImg from "@/assets/portfolio-mockups.jpg";
import { Search, Mail, BookOpen, Clock, Calendar, ArrowRight, User } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Engineering Blog | PrimeAce Tech — Digital Insights" },
      {
        name: "description",
        content: "Read our senior development perspectives on headless commerce, RAG architectures, LLM security, and modern web design aesthetics.",
      },
    ],
  }),
  component: BlogPage,
});

const blogCategories = [
  "All",
  "Software Development",
  "AI Automation",
  "Web Design",
];

function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(blogsData);

  useEffect(() => {
    // Notify the 3D scene to morph to Process timeline view
    set3DSceneSection("process");
  }, []);

  useEffect(() => {
    let result = blogsData;

    // Search filter
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      result = result.filter(
        (b) => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCat !== "All") {
      result = result.filter((b) => b.category === selectedCat);
    }

    setFilteredBlogs(result);
  }, [search, selectedCat]);

  // Featured article (first item) and standard listing
  const featuredArticle = blogsData[0];
  const listArticles = filteredBlogs.filter((b) => b.slug !== (selectedCat === "All" && search === "" ? featuredArticle?.slug : ""));

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header Title */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary mb-6"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Tech Insights & Architecture</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Engineering <span className="text-gradient-primary">insights.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Weekly breakdowns of custom database designs, server performance tuning, RAG implementations, and premium interfaces.
          </motion.p>
        </div>

        {/* Search & Category Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12 border-b border-white/5 pb-8"
        >
          {/* Search bar */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-muted-foreground/60" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full glass rounded-xl pl-11 pr-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 text-foreground"
            />
          </div>

          {/* Category tags */}
          <div className="lg:col-span-8 flex flex-wrap gap-2 justify-start lg:justify-end">
            {blogCategories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  selectedCat === c
                    ? "bg-[var(--gradient-primary)] text-primary-foreground border-transparent shadow-[var(--shadow-glow)] scale-[1.03]"
                    : "glass border-white/5 text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post Card (only shown when not searching/filtering out) */}
        {selectedCat === "All" && search === "" && featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden glass p-3 mb-16 border-primary/10 hover:border-primary/20 transition-all hover:shadow-[var(--shadow-elevated)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/9] bg-muted/20">
                <img
                  src={portfolioImg}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-5 p-4 lg:pr-8 space-y-5">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="text-primary font-semibold tracking-wider uppercase">
                    {featuredArticle.category}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredArticle.read_time}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 grid place-items-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-xs font-semibold">{featuredArticle.author}</span>
                  </div>

                  <Link
                    to="/blog/$slug"
                    params={{ slug: featuredArticle.slug }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary group-hover:text-white transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {listArticles.map((b, i) => (
              <motion.div
                layout
                key={b.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden glass p-2 flex flex-col justify-between hover:border-primary/20 transition-all hover:shadow-[var(--shadow-card)]"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-muted/20">
                    <img
                      src={portfolioImg}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/60 border border-white/10 text-primary">
                      {b.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {b.published_at}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/10" />
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {b.read_time}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {b.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {b.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground font-semibold">
                    By {b.author}
                  </span>

                  <Link
                    to="/blog/$slug"
                    params={{ slug: b.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-all"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter Signup form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-3">Subscribe to prime updates</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Join 4,200+ engineers and product leads receiving monthly technical case studies, API patterns, and high-performance layout ideas.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-primary/50 text-foreground"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
