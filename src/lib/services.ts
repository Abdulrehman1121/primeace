import {
  Code2, Globe, Smartphone, Palette, Brain, Cloud,
  Plug, Search, LifeBuoy, Lightbulb,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: typeof Code2;
  description: string;
  benefits: string[];
  tech: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    short: "Tailor-made platforms engineered for your business model.",
    icon: Code2,
    description:
      "We design and build custom software products from scratch — internal tools, SaaS platforms, ERPs and bespoke systems engineered around your exact workflow.",
    benefits: [
      "Built around your unique business logic",
      "Scalable architecture from day one",
      "Full source-code ownership",
      "Long-term maintainability & documentation",
    ],
    tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker", "AWS"],
    faq: [
      { q: "How long does a custom project take?", a: "Typical MVPs ship in 6–10 weeks. Larger systems follow a phased roadmap." },
      { q: "Do we own the code?", a: "Yes — full IP and source-code ownership transfers to you." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Blazing-fast, modern web platforms that convert.",
    icon: Globe,
    description:
      "From marketing sites to enterprise web apps — we ship pixel-perfect, performant, SEO-optimized web experiences using the modern React ecosystem.",
    benefits: [
      "100/100 performance & SEO targets",
      "Reusable design systems",
      "Headless CMS integrations",
      "Accessibility (WCAG 2.2) by default",
    ],
    tech: ["Next.js", "TanStack", "Tailwind", "Vercel", "Sanity", "Contentful"],
    faq: [
      { q: "Can you redesign our existing site?", a: "Absolutely — we run a discovery audit and ship a refreshed experience without disrupting SEO." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native-feel iOS & Android apps from a single codebase.",
    icon: Smartphone,
    description:
      "Cross-platform mobile apps that feel native, built with React Native and Expo — shipped to both stores from one expert team.",
    benefits: [
      "Native performance & UX",
      "Push notifications & offline support",
      "Faster iterations with OTA updates",
      "App Store & Play Store deployment",
    ],
    tech: ["React Native", "Expo", "Swift", "Kotlin", "Firebase"],
    faq: [
      { q: "iOS or Android first?", a: "We ship both simultaneously with React Native — no need to compromise." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Interfaces engineered for clarity, beauty and conversion.",
    icon: Palette,
    description:
      "Strategy-led product design that pairs research with craft — wireframes, prototypes, design systems and pixel-perfect handoff.",
    benefits: [
      "User research & journey mapping",
      "Interactive Figma prototypes",
      "Production-ready design systems",
      "Continuous usability testing",
    ],
    tech: ["Figma", "FigJam", "Framer", "Lottie", "Storybook"],
    faq: [
      { q: "Do you only design or also build?", a: "Both — our designers and engineers ship as one team." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation Solutions",
    short: "AI agents, chatbots and workflow automation that actually ship.",
    icon: Brain,
    description:
      "We embed AI into your operations — intelligent chatbots, document automation, predictive analytics and workflow orchestration using the latest LLMs.",
    benefits: [
      "Custom GPT / Groq / Claude integrations",
      "Automate repetitive workflows",
      "RAG systems on your private data",
      "Measurable ROI within weeks",
    ],
    tech: ["OpenAI", "Groq", "LangChain", "Pinecone", "n8n", "Zapier"],
    faq: [
      { q: "Is our data private?", a: "Yes — we deploy on your infrastructure or in isolated tenants with zero training on your data." },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Services",
    short: "Infrastructure that scales while you sleep.",
    icon: Cloud,
    description:
      "Cloud architecture, CI/CD, observability and cost-optimization on AWS, GCP and Azure — built for reliability and scale.",
    benefits: [
      "Infrastructure as Code (Terraform)",
      "Zero-downtime deployments",
      "24/7 monitoring & alerting",
      "Cloud cost optimization",
    ],
    tech: ["AWS", "GCP", "Kubernetes", "Terraform", "Docker", "GitHub Actions"],
    faq: [
      { q: "Can you migrate us from a legacy stack?", a: "We've migrated dozens of monoliths to modern cloud-native architectures." },
    ],
  },
  {
    slug: "api-integrations",
    title: "API Development & Integrations",
    short: "Connect every tool in your stack with bulletproof APIs.",
    icon: Plug,
    description:
      "REST and GraphQL APIs, third-party integrations, webhooks and middleware — the connective tissue of modern software.",
    benefits: [
      "Type-safe, documented APIs",
      "OAuth & enterprise SSO",
      "Stripe, HubSpot, Salesforce & more",
      "Rate limiting & versioning built in",
    ],
    tech: ["GraphQL", "tRPC", "REST", "OpenAPI", "Stripe", "Webhooks"],
    faq: [
      { q: "Do you build public APIs too?", a: "Yes — including developer portals, SDKs and API monetization." },
    ],
  },
  {
    slug: "seo-marketing",
    title: "SEO & Digital Marketing",
    short: "Technical SEO and growth engineering — not buzzwords.",
    icon: Search,
    description:
      "Technical SEO audits, content strategy, performance optimization and analytics that turn organic traffic into pipeline.",
    benefits: [
      "Core Web Vitals optimization",
      "Schema markup & rich results",
      "Content & keyword strategy",
      "Conversion-tracking dashboards",
    ],
    tech: ["GA4", "Ahrefs", "Search Console", "Hotjar", "Segment"],
    faq: [
      { q: "How quickly will we see results?", a: "Technical wins land in weeks; sustainable organic growth in 3–6 months." },
    ],
  },
  {
    slug: "software-support",
    title: "Software Maintenance & Support",
    short: "Around-the-clock care for production systems.",
    icon: LifeBuoy,
    description:
      "Dedicated maintenance, security patching, performance tuning and on-call support — keep your software healthy as you scale.",
    benefits: [
      "SLA-backed response times",
      "Proactive monitoring",
      "Quarterly security audits",
      "Continuous feature evolution",
    ],
    tech: ["Sentry", "Datadog", "PagerDuty", "Snyk"],
    faq: [
      { q: "Can you maintain code you didn't write?", a: "Yes — we run a transition audit and take ownership confidently." },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Product Strategy",
    short: "Senior advisory to de-risk your tech roadmap.",
    icon: Lightbulb,
    description:
      "Fractional CTO, architecture reviews, technology selection and product strategy from engineers who've shipped at scale.",
    benefits: [
      "Architecture & code audits",
      "Hiring & team scaling",
      "Vendor selection",
      "Investor-ready due diligence",
    ],
    tech: ["Architecture", "Roadmapping", "Discovery"],
    faq: [
      { q: "Is this ongoing or one-off?", a: "Both — we offer single-engagement audits and ongoing retainers." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
