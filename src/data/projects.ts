export interface Project {
  title: string;
  slug: string;
  category: string;
  filterCategory: "web" | "mobile" | "saas" | "ecommerce" | "ai" | "uiux";
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  featured_image: string;
}

export const projectsData: Project[] = [
  {
    title: "Nimbus Analytics",
    slug: "nimbus-analytics",
    category: "SaaS Analytics Dashboard",
    filterCategory: "saas",
    description: "A high-fidelity real-time business telemetry and multi-tenant analytics suite powering thousands of daily active users.",
    challenge: "Nimbus legacy interface was severely bogged down by sub-optimal SQL aggregations, high query latencies, and high monthly cloud costs under active load spikes.",
    solution: "We re-engineered the analytical pipeline with a high-performance Next.js front-end, high-frequency cache pools in Redis, and TimescaleDB backends to render sub-second analytical graphics.",
    results: [
      "99.99% analytical ingestion uptime",
      "92% faster graphic rendering latency",
      "34% reduction in AWS database hosting cost",
      "Powering 12k+ active daily subscribers",
    ],
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "TimescaleDB", "Redis"],
    featured_image: "portfolio-mockups.jpg",
  },
  {
    title: "Marketly Marketplace",
    slug: "marketly-marketplace",
    category: "E-commerce System",
    filterCategory: "ecommerce",
    description: "A headless multi-vendor B2B marketplace powering hundreds of custom storefront catalogs across global regions.",
    challenge: "Traditional e-commerce database locks were causing heavy checkout bottlenecks during flash sales, blocking multi-merchant regional catalog syncs.",
    solution: "We built a decoupled headless platform leveraging Shopify Hydrogen and GraphQL. Storefront metadata is indexed at the edge via Cloudflare Workers to serve pages instantly.",
    results: [
      "Powering 800+ independent vendor portals",
      "58% increase in mobile purchase conversion rates",
      "220ms global edge server response speed",
      "Over 1.2 Million transactions processed secure",
    ],
    technologies: ["Hydrogen / Shopify", "GraphQL", "Tailwind CSS", "React.js", "Cloudflare Workers"],
    featured_image: "portfolio-mockups.jpg",
  },
  {
    title: "FleetGo Orchestrator",
    slug: "fleetgo-tracking",
    category: "Mobile Logistics App",
    filterCategory: "mobile",
    description: "An on-demand logistics dispatch application featuring real-time path optimizations and driver routing matrices.",
    challenge: "Sub-optimal cellular GPS pooling was causing heavy mobile battery drains, delayed driver dispatches, and inaccurate delivery estimates.",
    solution: "We engineered a clean React Native mobile app containing native iOS/Android location managers and WebSocket telemetry. Delivery dispatch coordinates are calculated dynamically in Go.",
    results: [
      "15% shorter average customer delivery windows",
      "Handling 3.4M path telemetry calculations daily",
      "40% drop in active battery drain metrics",
      "98% driver satisfaction rating on platform",
    ],
    technologies: ["React Native", "Mapbox SDK", "Go", "TypeScript", "WebSockets"],
    featured_image: "portfolio-mockups.jpg",
  },
  {
    title: "Aiden AI Support",
    slug: "aiden-ai-copilot",
    category: "AI Automation System",
    filterCategory: "ai",
    description: "A context-driven support automation engine resolving customer support inquiries autonomously using vector index models.",
    challenge: "Client struggled to support thousands of active service tickets, leading to escalating operating costs and 24-hour response queues.",
    solution: "We engineered a secure Retrieval-Augmented Generation (RAG) platform using OpenAI models and Pinecone vector stores to securely resolve inquiries in under 1.5 seconds.",
    results: [
      "71% of support inquiries resolved autonomously",
      "1.4 second average response delivery speed",
      "42% decrease in support operating budgets",
      "94.5% customer approval feedback rating",
    ],
    technologies: ["OpenAI API", "Pinecone DB", "TypeScript", "PostgreSQL", "React.js", "WebSockets"],
    featured_image: "portfolio-mockups.jpg",
  },
];
