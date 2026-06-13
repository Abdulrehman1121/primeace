import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  AISolutionsAnimation,
  ChatBotAnimation,
  AIAgentsAnimation,
  WebDevAnimation,
  MobileDevAnimation,
  SaaSDevAnimation,
  UIUXAnimation,
  EcomAnimation,
  CRMERPAnimation,
  DevOpsAnimation,
  Animation2D,
  Animation3D,
  VideoEditing,
  PostDesigning,
  DigitalMarketing,
  SEO,
  SocialMediaHandling,
} from "@/components/services/ServiceAnimations";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | PrimeAce Tech — Custom AI & Software Solutions" },
      {
        name: "description",
        content: "Empower your business with custom AI solutions, intelligent chatbots, operations automation, custom SaaS, high-performance web/mobile development, and cloud systems.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceList = [
  {
    title: "AI Automation Solutions",
    desc: "Wanna automate your operations? Replace slow manual processes, auto-classify incoming files, and extract insights with custom LLMs, RAG, and automated agent pipelines.",
    benefits: ["70%+ support ticket deflection", "Real-time context parsing", "Secure privacy guardrails"],
    tech: ["OpenAI API", "Pinecone DB", "LangChain", "LlamaIndex"],
    animation: AISolutionsAnimation,
  },
  {
    title: "Intelligent ChatBot Development",
    desc: "Wanna engage your customers 24/7? We engineer conversational AI chatbots trained on your business documents to capture leads, qualify inquiries, and close sales.",
    benefits: ["Context-aware answers", "Multi-lingual conversations", "CRM auto-synchronization"],
    tech: ["Custom GPTs", "Claude 3.5 Sonnet", "vLLM", "Node.js", "Python"],
    animation: ChatBotAnimation,
  },
  {
    title: "AI Agents & Workflow Automation",
    desc: "Deploy background AI agents that read emails, process invoices, generate custom reports, and synchronize data across your tech stack with zero manual clicks.",
    benefits: ["Automated invoice ingestion", "Data sync retry safeguards", "Custom Slack alerts"],
    tech: ["Make / n8n", "Python Scripts", "FastAPI", "OAuth 2.0"],
    animation: AIAgentsAnimation,
  },
  {
    title: "Custom Website Development",
    desc: "Wanna digitalize your business? Launch ultra-fast, search-optimized bespoke web applications using the latest headless frontends and cloud architectures.",
    benefits: ["Zero template bloat", "Sub-second load times", "Pixel-perfect visual design"],
    tech: ["React.js", "Next.js", "Vite", "Node.js", "Tailwind CSS"],
    animation: WebDevAnimation,
  },
  {
    title: "Mobile App Development",
    desc: "Robust native and hybrid mobile applications designed with fluid UI gestures, offline-first database caching, and custom biometric security.",
    benefits: ["Offline-first data caching", "Seamless biometric login", "Native hardware integration"],
    tech: ["React Native", "Swift", "Kotlin", "Flutter", "Mapbox SDK"],
    animation: MobileDevAnimation,
  },
  {
    title: "SaaS Product Development",
    desc: "Launch subscription software with secure multi-tenant isolation, automated billing gateways, feature flags, and custom analytics panels.",
    benefits: ["Secure isolation schemas", "Stripe & billing integrations", "Dynamic feature flagging"],
    tech: ["TypeScript", "Laravel", "tRPC", "Postgres", "Redis"],
    animation: SaaSDevAnimation,
  },
  {
    title: "UI / UX Design & Prototyping",
    desc: "Conversion-centric product design and clean design systems that scale across thousands of pages while maintaining a premium feel.",
    benefits: ["Complete design systems", "High-fidelity interactive prototypes", "Thorough user journey maps"],
    tech: ["Figma", "Adobe Creative Suite", "Tailwind CSS", "Prototyping"],
    animation: UIUXAnimation,
  },
  {
    title: "E-commerce Storefronts",
    desc: "High-volume commerce storefronts built with headless cart management, custom single-page checkout flows, and inventory synchronization.",
    benefits: ["Decoupled speed optimization", "Custom checkout hooks", "Unified inventory synchronization"],
    tech: ["Hydrogen / Shopify", "GraphQL", "Medusa.js", "Next.js"],
    animation: EcomAnimation,
  },
  {
    title: "CRM / ERP Operations Systems",
    desc: "Consolidate operations. Replace scattered spreadsheets with a custom ERP platform that connects your departments and tracks business growth telemetry.",
    benefits: ["Unified company databases", "Custom telemetry filters", "Granular access security rules"],
    tech: ["PHP", "Laravel", "MySQL", "Postgres", "Node.js"],
    animation: CRMERPAnimation,
  },
  {
    title: "Cloud & DevOps Systems",
    desc: "Deploy auto-scaling, bulletproof cloud architectures on AWS/GCP with robust monitoring, CI/CD pipelines, and automated backup schedules.",
    benefits: ["Automated auto-scaling logic", "Zero-downtime blue/green deploys", "Observability telemetry"],
    tech: ["AWS", "Google Cloud", "Docker", "Terraform", "GitHub Actions"],
    animation: DevOpsAnimation,
  },
  {
    title: "Designing 2D Animation",
    desc: "Wanna explain your product visually? We create custom 2D explainer animations, storyboards, character rigging, and brand assets that capture client attention and boost sales.",
    benefits: ["High-impact visual explainers", "Fluid bespoke character rigging", "Optimized vector animation exports"],
    tech: ["Adobe Animate", "After Effects", "Figma", "Lottie / SVG"],
    animation: Animation2D,
  },
  {
    title: "3D Animation & Modeling",
    desc: "Bring products to life in three dimensions. We design cinematic 3D product visualizations, architectural walkthroughs, and animated assets for web and mobile interfaces.",
    benefits: ["Cinematic photorealistic rendering", "Optimized 3D assets for web/GL", "Custom physics-based motion simulation"],
    tech: ["Blender", "Cinema 4D", "Three.js / Spline", "Web GL"],
    animation: Animation3D,
  },
  {
    title: "Professional Video Editing",
    desc: "High-end post-production for corporate campaigns, case study videos, and product launches. We polish raw footage with premium sound design, color grading, and motion graphics.",
    benefits: ["Cinematic color grading & LUTs", "Sound design & noise clearing", "High-retention pace editing"],
    tech: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition"],
    animation: VideoEditing,
  },
  {
    title: "Social Media Post Designing",
    desc: "Stop the scroll with high-converting social media posts, banner advertisements, and custom graphic assets designed to align perfectly with your premium brand guidelines.",
    benefits: ["Grid/story template systems", "Conversion-focused visual hierarchy", "Express turnaround schedules"],
    tech: ["Figma", "Adobe Photoshop", "Illustrator", "Brand Systems"],
    animation: PostDesigning,
  },
  {
    title: "Performance Digital Marketing",
    desc: "Accelerate user acquisition. We design and launch data-driven PPC campaigns, lead generation funnels, and performance marketing strategies that yield measurable ROI.",
    benefits: ["A/B testing campaign variations", "Direct funnel pixel tracking", "Custom attribution dashboards"],
    tech: ["Google Ads", "Meta Business Manager", "LinkedIn Ads", "GA4"],
    animation: DigitalMarketing,
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Command search engine rankings. We optimize core web vitals, perform extensive semantic keyword targeting, and establish domain authority to drive compounding organic growth.",
    benefits: ["Compounding organic search traffic", "Core Web Vitals load-speed tuning", "In-depth semantic keyword maps"],
    tech: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog"],
    animation: SEO,
  },
  {
    title: "Social Media Management",
    desc: "Grow and nurture your digital community. We curate content, coordinate monthly schedules, handle inbound inquiries, and monitor analytics to scale your social footprint.",
    benefits: ["Complete monthly content scheduling", "Proactive community engagement", "Monthly engagement growth reports"],
    tech: ["Buffer", "Hootsuite", "Sprout Social", "Figma Templates"],
    animation: SocialMediaHandling,
  },
];

function ServicesPage() {
  useEffect(() => {
    // Notify the 3D scene to morph to Services card stack
    set3DSceneSection("services");
  }, []);

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Page Title */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary mb-6"
          >
            <Zap className="h-3.5 w-3.5" />
            <span>High Performance Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Digitalize Your <span className="text-gradient-primary">Business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl"
          >
            We design and build AI agents, custom databases, scalable software platforms, and high-performance digital ecosystems that streamline operations, increase productivity, and unlock business growth.
          </motion.p>
        </div>

        {/* Services List Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((s, i) => {
            const Animation = s.animation;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }}
                className="relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 border border-white/[0.08] hover:border-primary/30 bg-[#131627] hover:bg-[#181d32] hover:translate-y-[-6px] hover:shadow-[0_20px_50px_rgba(43,110,255,0.15)] group"
              >
                <div>
                  {/* Service Graphic Animation */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden border border-white/[0.03] group-hover:border-primary/10 transition-colors duration-300 bg-slate-950/60">
                    <Animation />
                    {/* Diagonal sweep glare on hover */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Service Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-glow transition-colors duration-300 font-display">
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6 group-hover:text-muted-foreground transition-colors duration-300">
                    {s.desc}
                  </p>

                  {/* Bullet Benefits */}
                  <ul className="space-y-3 mb-8">
                    {s.benefits.map((b, bi) => (
                      <li key={bi} className="flex items-center gap-3 text-xs text-foreground/90">
                        <div className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                          <ShieldCheck className="h-3.5 w-3.5 text-primary-glow" />
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stacks footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-5 mt-4">
                    {s.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-muted-foreground group-hover:bg-primary/5 group-hover:border-primary/10 group-hover:text-primary-glow transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Request custom CTA button */}
                  <div className="mt-6">
                    <Link
                      to="/request-quote"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold tracking-wide uppercase text-white/80 border border-white/10 bg-white/5 hover:bg-[var(--gradient-primary)] hover:border-transparent hover:text-white transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(43,110,255,0.3)]"
                    >
                      <span>Scope This Project</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global services page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have an advanced requirement?</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Our senior architects excel at planning customized business ecosystems, custom APIs, and elastic databases designed for heavy traffic. Let's arrange a consultation.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-all"
            >
              Request a Free Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass hover:border-primary/40 transition"
            >
              Speak to a Consultant
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

