import saas from "@/assets/project-saas.jpg";
import mobile from "@/assets/project-mobile.jpg";
import ai from "@/assets/project-ai.jpg";
import cloud from "@/assets/project-cloud.jpg";
import web from "@/assets/project-web.jpg";
import api from "@/assets/project-api.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: "nexus-analytics",
    title: "Nexus Analytics",
    category: "SaaS Platform",
    description: "Real-time analytics platform for e-commerce brands with custom dashboards and AI-powered insights.",
    tech: ["Next.js", "PostgreSQL", "ClickHouse", "AWS"],
    image: saas,
  },
  {
    id: "vaultpay",
    title: "VaultPay",
    category: "Mobile App",
    description: "Cross-platform fintech app with biometric auth, instant transfers and investment portfolios.",
    tech: ["React Native", "Node.js", "Stripe", "Firebase"],
    image: mobile,
  },
  {
    id: "askorbit",
    title: "Ask Orbit",
    category: "AI Automation",
    description: "Enterprise AI assistant that ingests internal docs and answers staff questions in real time.",
    tech: ["Groq", "LangChain", "Pinecone", "TypeScript"],
    image: ai,
  },
  {
    id: "skyforge",
    title: "SkyForge Cloud",
    category: "Dashboard",
    description: "Multi-cloud cost-optimization dashboard with anomaly detection across AWS, GCP and Azure.",
    tech: ["React", "Go", "Kubernetes", "Terraform"],
    image: cloud,
  },
  {
    id: "lumen-store",
    title: "Lumen Store",
    category: "Web Application",
    description: "Headless commerce platform for a luxury retail brand with sub-second page loads.",
    tech: ["Next.js", "Shopify", "Sanity", "Vercel"],
    image: web,
  },
  {
    id: "pipeline-hub",
    title: "Pipeline Hub",
    category: "API Integration",
    description: "Unified API layer connecting HubSpot, Salesforce, Slack and 30+ tools into one workflow engine.",
    tech: ["GraphQL", "tRPC", "Webhooks", "Redis"],
    image: api,
  },
];
