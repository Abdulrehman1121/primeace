import { createFileRoute } from "@tanstack/react-router";
import { Bot, Workflow, Database, Headphones, BarChart3, Plug, Mail, Brain, Cpu, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { MagneticButton } from "@/components/MagneticButton";
import { Floating3DImage } from "@/components/Floating3DImage";
import { AINetworkVisual } from "@/components/AINetworkVisual";

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

      <section className="pb-20 relative">
        {/* Background grids */}
        <div className="absolute top-[20%] left-0 right-0 h-[400px] bg-primary/5 blur-[120px] pointer-events-none" />

        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <Reveal>
                <Floating3DImage maxTilt={5} glow={true} glowColor="oklch(0.68 0.20 245 / 0.3)" className="rounded-3xl shadow-[0_0_40px_-5px_oklch(0.68_0.20_245/0.2)]">
                  <AINetworkVisual />
                </Floating3DImage>
              </Reveal>
            </div>
            
            {/* Strategy Column */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal delay={0.1}>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-accent tracking-[0.2em] uppercase bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                  <Sparkles size={10} className="animate-spin-slow" />
                  RAG & AGENT INFRASTRUCTURE
                </span>
                <h2 className="text-3xl md:text-5xl font-bold gradient-text mt-4 leading-tight">From experiment to production</h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  Most AI projects stall at the prototype stage. We don't. Every system we build is
                  shipped with rigorous monitoring, evaluation cycles, cost controls, rate limiting, and rollback mechanisms —
                  so your AI investment compounds, not depreciates.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="grid sm:grid-cols-2 gap-3.5 text-sm text-muted-foreground pt-2">
                  {[
                    "Groq · OpenAI · Anthropic · Mistral",
                    "RAG with vector search (Pinecone, pgvector)",
                    "LangChain & LangGraph orchestration",
                    "Full observability with Langfuse"
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <SectionHeader eyebrow="Capabilities" title="What we build" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.06}>
                <Floating3DImage
                  maxTilt={8}
                  glow={true}
                  glowColor="oklch(0.68 0.20 245 / 0.2)"
                  className="h-full rounded-3xl"
                >
                  <div className="glass-card p-6 h-full group border border-primary/10 hover:border-primary/45 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <f.icon size={20} />
                      </div>
                      <h3 className="mt-5 font-bold text-white text-lg group-hover:text-primary transition-colors">{f.title}</h3>
                      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </Floating3DImage>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
