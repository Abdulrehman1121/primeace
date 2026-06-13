import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import { submitContactForm, ContactData } from "@/api/contactApi";
import { Mail, Phone, MapPin, Loader2, Send, CheckCircle2, AlertTriangle, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | PrimeAce Tech — Professional Consultations" },
      {
        name: "description",
        content: "Speak directly with our senior software architects. Standard responses within 1 business day.",
      },
    ],
  }),
  component: ContactPage,
});

const contactMethods = [
  {
    icon: Mail,
    title: "Electronic Mail",
    value: "engineering@primeace.tech",
    sub: "Direct queue to senior architects.",
  },
  {
    icon: Phone,
    title: "Phone Hotlines",
    value: "+1 (800) 555-ACE-TECH",
    sub: "Mon - Fri, 9:00 AM - 6:00 PM EST.",
  },
  {
    icon: MapPin,
    title: "Global Hub",
    value: "San Francisco, CA & Dubai, UAE",
    sub: "Serving clients across 7 timezones.",
  },
];

function ContactPage() {
  useEffect(() => {
    // Notify the 3D scene to morph to Contact messaging view
    set3DSceneSection("contact");
  }, []);

  const [formData, setFormData] = useState<ContactData>({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    project_type: "saas",
    budget_range: "25k-50k",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    // Call frontend API client connecting to PHP MySQL endpoint
    const response = await submitContactForm(formData);

    setLoading(false);
    if (response.success) {
      setSuccess(response.message);
      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        project_type: "saas",
        budget_range: "25k-50k",
        message: "",
      });
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[25%] left-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary mb-6"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Consultation Desks</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Let's speak about <span className="text-gradient-primary">your product.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Discuss custom integrations, SaaS planning, or mobile app dispatches. Reach out through our contact form.
          </motion.p>
        </div>

        {/* Contact Page Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Methods Column */}
          <div className="lg:col-span-4 space-y-6">
            {contactMethods.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 flex gap-4 hover:border-primary/10 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                      {m.title}
                    </h3>
                    <p className="text-sm font-bold text-foreground mt-1.5">{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 relative overflow-hidden border-primary/5"
            >
              <h2 className="text-2xl font-bold mb-6">Send A Direct Message</h2>

              {/* Success Notification */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex gap-3 text-xs leading-relaxed"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <div>
                    <span className="font-bold">Transmission Succeeded:</span> {success}
                  </div>
                </motion.div>
              )}

              {/* Error Notification */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex gap-3 text-xs leading-relaxed"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <div>
                    <span className="font-bold">Transmission Failure:</span> {error}
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground" htmlFor="full_name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground" htmlFor="email">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground" htmlFor="company">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company_name}
                      onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground" htmlFor="project_type">
                      Project Category
                    </label>
                    <select
                      id="project_type"
                      value={formData.project_type}
                      onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                    >
                      <option value="saas">SaaS Platform</option>
                      <option value="ecommerce">E-commerce Marketplace</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="ai">AI Automation / RAG</option>
                      <option value="web">Web Application</option>
                      <option value="crm">CRM / ERP Custom Panel</option>
                      <option value="animation">Animation / Creative Media</option>
                      <option value="video">Video Editing & Production</option>
                      <option value="design">Social Media Graphic Design</option>
                      <option value="marketing_seo">Digital Marketing & SEO</option>
                      <option value="social_management">Social Media Management</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-muted-foreground" htmlFor="budget">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget_range}
                      onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                    >
                      <option value="10k-25k">$10,000 — $25,000</option>
                      <option value="25k-50k">$25,000 — $50,000</option>
                      <option value="50k-100k">$50,000 — $100,000</option>
                      <option value="100k+">$100,000+ Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="message">
                    Project Scope Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly explain what you are seeking to build, including timeline milestones and key integrations..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground/45"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 font-semibold text-primary-foreground bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] hover:scale-[1.01] active:scale-95 transition disabled:opacity-50 cursor-pointer text-sm"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
