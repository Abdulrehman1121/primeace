import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import aboutImg from "@/assets/about-team.jpg";
import { CheckCircle2, Shield, Users, Target, Rocket, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | PrimeAce Tech — Enterprise Grade Engineering" },
      {
        name: "description",
        content: "Discover PrimeAce Tech's legacy, mission, and the senior engineering team creating bespoke digital solutions.",
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "50+", label: "Projects Delivered", desc: "SaaS, web platforms, and mobile apps built to scale." },
  { value: "30+", label: "Happy Clients", desc: "Startups, mid-market leaders, and global enterprises." },
  { value: "5+", label: "Years of Growth", desc: "Delivering engineering excellence globally." },
  { value: "100%", label: "Custom Stacks", desc: "No restrictive templates or basic builders." },
];

const values = [
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "We write clean, documented, and fully owned code. No shortcuts, no vendor lock-ins.",
  },
  {
    icon: Users,
    title: "Collaborative Obsession",
    desc: "We function as an integrated senior expansion of your internal team, aligning on strategy and goals.",
  },
  {
    icon: Target,
    title: "Engineering Precision",
    desc: "Every interaction, API route, database schema, and devops pipeline is optimized for high performance.",
  },
  {
    icon: Rocket,
    title: "Future-Proof Architecture",
    desc: "We engineer using modern scalable frameworks, ensuring your product stands robust in 2026 and beyond.",
  },
];

const techStack = {
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
  Backend: ["PHP (Laravel / Slim)", "Node.js", "Go", "Python"],
  Database: ["MySQL", "Postgres", "Redis", "MongoDB", "Pinecone (Vector DB)"],
  DevOps: ["AWS", "Google Cloud", "Docker", "Terraform", "GitHub Actions", "Cloudflare"],
};

function AboutPage() {
  useEffect(() => {
    // Notify the 3D scene to morph to About network view
    set3DSceneSection("about");
  }, []);

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header Hero Section */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary mb-6"
          >
            <Award className="h-3.5 w-3.5" />
            <span>Senior Product Engineers</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            We align deep technical expertise with <span className="text-gradient-primary">business objectives.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            PrimeAce Tech was founded to bridge the gap between high-level business strategy and heavy-duty engineering.
            We don't just write scripts — we architecture scalable, beautiful digital assets that convert.
          </motion.p>
        </div>

        {/* Company Portrait Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden glass p-1.5">
              <div className="relative rounded-[1.3rem] overflow-hidden">
                <img
                  src={aboutImg}
                  alt="PrimeAce senior developers collaborating in high-end tech office"
                  className="w-full h-auto object-cover max-h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Our Story & Engineering Culture</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We started as a select collective of senior developers frustrated with agency bloat.
              Too often, projects are scoped by executives and handed down to inexperienced juniors, causing shipping bottlenecks.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              At PrimeAce Tech, you deal directly with architects.
              We build using a standardized luxury design language and clean, vetted frameworks.
              Every line of code is optimized for raw execution speed, tight security compliance, and dynamic scaling.
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">100% In-house Team</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Direct CTO Channels</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Statistics Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 relative group hover:border-primary/20 transition-all"
            >
              <div className="text-4xl font-bold text-gradient-primary">{s.value}</div>
              <h3 className="text-sm font-semibold mt-3 text-foreground">{s.label}</h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="mt-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The principles guiding our work</h2>
            <p className="text-muted-foreground mt-3">
              We believe great engineering requires absolute clarity, meticulous testing, and robust documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-7 flex gap-5 hover:border-primary/10 transition-colors"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center shrink-0 border border-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Technology Stack Stack */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold">Our Modern Technical Stack</h2>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-sm">
                We design and engineer digital products using production-vetted languages, databases, and microservices. No black boxes.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(techStack).map(([category, items], i) => (
                <div key={i} className="glass rounded-2xl p-6 hover:border-primary/10 transition">
                  <h3 className="text-sm font-bold text-gradient-primary uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech, ti) => (
                      <span
                        key={ti}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
