import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import { blogsData, BlogPost } from "@/data/blogs";
import portfolioImg from "@/assets/portfolio-mockups.jpg";
import { ArrowLeft, Clock, Calendar, User, Share2, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogsData.find((b) => b.slug === params.slug);
    return {
      meta: [
        { title: `${post?.title || "Blog"} | PrimeAce Tech — Article` },
        {
          name: "description",
          content: post?.excerpt || "Read our technical articles and deep dives.",
        },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Notify the 3D scene to morph to Process timeline view
    set3DSceneSection("process");

    const found = blogsData.find((b) => b.slug === slug);
    if (found) {
      setPost(found);
      // Filter out current post to recommend others
      setRelated(blogsData.filter((b) => b.slug !== slug).slice(0, 2));
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-24 grid place-items-center relative">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="text-center max-w-md p-6 glass rounded-2xl mx-auto border-destructive/20">
          <h1 className="text-2xl font-bold">Article Not Found</h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            The engineering writeup you are looking for does not exist or has been relocated.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[var(--gradient-primary)] text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Blog</span>
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
        {/* Navigation Back */}
        <div className="mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Meta Headers */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-wider text-primary uppercase"
          >
            {post.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold mt-4 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Author info & Read metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 items-center justify-between border-t border-b border-white/5 py-5 mt-8 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.published_at}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.read_time}</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Article link copied to clipboard!");
                }
              }}
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
            >
              <Share2 className="h-4 w-4" />
              <span>Share Article</span>
            </button>
          </motion.div>
        </div>

        {/* Featured Image Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden glass p-1.5 mb-16"
        >
          <div className="relative rounded-[1.3rem] overflow-hidden aspect-[21/9] bg-muted/20">
            <img
              src={portfolioImg}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* HTML Rich Content Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto prose prose-invert prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-sm prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2 prose-ul:mb-6 prose-ul:text-sm prose-ul:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Articles Previews */}
        {related.length > 0 && (
          <div className="max-w-4xl mx-auto mt-24 border-t border-white/5 pt-16">
            <h3 className="text-xl font-bold mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((r, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl overflow-hidden glass p-2 flex flex-col justify-between hover:border-primary/20 transition-all hover:shadow-[var(--shadow-card)]"
                >
                  <div className="p-4 space-y-3">
                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider">
                      {r.category}
                    </span>
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {r.excerpt}
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: r.slug }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-white transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup at Bottom */}
        <div className="max-w-4xl mx-auto mt-20 border-t border-white/5 pt-16">
          <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Receive our monthly engineering notes</h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
              Dismantling legacy monoliths, vector embeddings strategies, and CI/CD scaling patterns directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs focus:outline-none focus:border-primary/50 text-foreground"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[var(--gradient-primary)] text-primary-foreground hover:scale-[1.03] transition"
              >
                Join List
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
