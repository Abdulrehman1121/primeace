import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PRIMEACE | Start Your Project" },
      { name: "description", content: "Ready to build your next digital product? Let's make it happen with PRIMEACE. Get a tailored proposal within 24 hours." },
      { property: "og:title", content: "Contact — PRIMEACE" },
      { property: "og:description", content: "Start your software, AI or automation project with PRIMEACE." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectType: z.string().min(1, "Please choose a project type"),
  budget: z.string().min(1, "Select a budget range"),
  timeline: z.string().min(1, "Select a timeline"),
  message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const projectTypes = ["Custom Software", "Website Development", "Mobile App", "AI Automation", "UI/UX Design", "Cloud & DevOps", "API Integration", "Other"];
const budgets = ["< $10k", "$10k – $25k", "$25k – $75k", "$75k – $150k", "$150k+"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Just exploring"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { if (i.path[0]) fieldErrors[i.path[0] as string] = i.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // TODO: POST to your server function / CRM here.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build something legendary"
        subtitle="Ready to build your next digital product? Let's make it happen with PRIMEACE. Share a few details and we'll be in touch within 24 hours."
      />

      <section className="pb-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
            <Reveal>
              <div className="glass-card p-8 md:p-10">
                {sent ? (
                  <div className="text-center py-16">
                    <CheckCircle2 size={56} className="mx-auto text-primary" />
                    <h2 className="mt-5 text-3xl font-bold gradient-text">Message received</h2>
                    <p className="mt-3 text-muted-foreground">Thanks — a senior team member will reply within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5" noValidate>
                    <Field label="Name *" error={errors.name}>
                      <input name="name" required maxLength={100} className="input" />
                    </Field>
                    <Field label="Email *" error={errors.email}>
                      <input name="email" type="email" required maxLength={255} className="input" />
                    </Field>
                    <Field label="Company" error={errors.company}>
                      <input name="company" maxLength={120} className="input" />
                    </Field>
                    <Field label="Phone" error={errors.phone}>
                      <input name="phone" maxLength={40} className="input" />
                    </Field>
                    <Field label="Project type *" error={errors.projectType}>
                      <select name="projectType" required className="input" defaultValue="">
                        <option value="" disabled>Select…</option>
                        {projectTypes.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </Field>
                    <Field label="Budget range *" error={errors.budget}>
                      <select name="budget" required className="input" defaultValue="">
                        <option value="" disabled>Select…</option>
                        {budgets.map((b) => <option key={b}>{b}</option>)}
                      </select>
                    </Field>
                    <Field label="Timeline *" error={errors.timeline} className="sm:col-span-2">
                      <select name="timeline" required className="input" defaultValue="">
                        <option value="" disabled>Select…</option>
                        {timelines.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </Field>
                    <Field label="Message *" error={errors.message} className="sm:col-span-2">
                      <textarea name="message" required rows={5} maxLength={2000} className="input resize-none" placeholder="Tell us about your project, goals, and any constraints…" />
                    </Field>
                    <div className="sm:col-span-2">
                      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
                        {submitting ? "Sending…" : <>Send Message <Send size={16} /></>}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <InfoCard icon={Mail} title="Email us" value="hello@primeace.com" />
                <InfoCard icon={Phone} title="Call us" value="+1 (415) 555-0199" />
                <InfoCard icon={MapPin} title="HQ" value="San Francisco · Remote-first" />
                <div className="glass-card p-6">
                  <h4 className="font-semibold">Response time</h4>
                  <p className="text-sm text-muted-foreground mt-2">Most messages get a reply within 4 business hours. Tailored proposals within 24 hours.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: oklch(0.22 0.05 260 / 0.5);
          border: 1px solid oklch(0.32 0.05 260 / 0.5);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: inherit;
          outline: none;
          transition: all 0.2s;
        }
        .input:focus {
          border-color: oklch(0.68 0.20 245 / 0.8);
          box-shadow: 0 0 0 4px oklch(0.68 0.20 245 / 0.15);
        }
      `}</style>
    </>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium mb-2 block">{label}</span>
      {children}
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}

function InfoCard({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  return (
    <div className="glass-card p-5 flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
}
