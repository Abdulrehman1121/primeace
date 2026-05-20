import { createFileRoute } from "@tanstack/react-router";
import { Bot, Workflow, Database, Headphones, BarChart3, Plug, Mail, Brain } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { MagneticButton } from "@/components/MagneticButton";
import aiImg from "@/assets/ai-network.jpg";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI & Automation | PRIMEACE" },
      { name: "description", content: "AI-powered solutions for modern businesses — intelligent chatbots, workflow automation, AI integrations and data-driven dashboards." },
      { property: "og:title", content: "AI & Automation — PRIMEACE" },
      { property: "og:description", content: "Production-grade AI agents, chatbots and automation built on Groq, OpenAI and Claude." },
      { property: "og:url", content: "/ai-automation" },
    ],
    links: [{ rel: "canonical", href: "/ai-automation" }],
  }),
  component: AIPage,
});

const features = [
  { icon: Bot, title: "AI Chatbot Development", desc: "Custom chatbots that understand your domain — built on Groq, GPT-4 or Claude." },
  { icon: Workflow, title: "Workflow Automation", desc: "Replace repetitive manual work with self-driving workflows across your tools." },
  { icon: Brain, title: "Business Process Automation", desc: "End-to-end automation of operations: lead routing, invoicing, onboarding and more." },
  { icon: Plug, title: "AI Integrations", desc: "Plug AI into the tools you already use — Slack, HubSpot, Notion, Salesforce, Shopify." },
  { icon: BarChart3, title: "Data Dashboards", desc: "Real-time AI-powered dashboards turning raw data into clear decisions." },
  { icon: Database, title: "CRM Automation", desc: "Predictive scoring, smart enrichment and AI-drafted outreach inside your CRM." },
  { icon: Headphones, title: "Customer Support Automation", desc: "AI agents that resolve tier-1 tickets and route the rest with context." },
  { icon: Mail, title: "Groq-Ready Chatbot Systems", desc: "Production-ready chatbot architectures running on Groq's lightning-fast inference." },
];

function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="AI & Automation"
        title="AI-Powered Solutions for Modern Businesses"
        subtitle="We build intelligent automation systems, AI chatbots, workflow automation tools, data-driven dashboards, and custom AI integrations that help businesses save time, reduce manual work, and improve customer experience."
      >
        <MagneticButton to="/contact">Start an AI Project →</MagneticButton>
      </PageHero>

      <section className="pb-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-10 bg-primary/25 blur-[120px] rounded-full" />
                <img src={aiImg} alt="AI neural network" className="relative rounded-3xl border border-border" width={1280} height={960} loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">From experiment to production</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Most AI projects stall at the prototype stage. We don't. Every system we build is
                shipped with monitoring, evals, cost controls, rate limiting and rollback —
                so your AI investment compounds, not depreciates.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Groq · OpenAI · Anthropic · Mistral", "RAG with vector search (Pinecone, pgvector)", "LangChain & LangGraph orchestration", "Full observability with Helicone & Langfuse"].map((b) => (
                  <li key={b} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />{b}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <SectionHeader eyebrow="Capabilities" title="What we build" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.06}>
                <div className="glass-card p-6 h-full group">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <f.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
