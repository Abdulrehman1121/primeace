import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import { submitQuoteForm, QuoteData } from "@/api/quoteApi";
import { FileText, Loader2, Send, CheckCircle2, AlertTriangle, CloudUpload, Sparkles } from "lucide-react";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | PrimeAce Tech — Scope Estimator" },
      {
        name: "description",
        content: "Request an automated scope estimate. Securely upload engineering briefs for review.",
      },
    ],
  }),
  component: RequestQuotePage,
});

function RequestQuotePage() {
  useEffect(() => {
    // Notify the 3D scene to morph to Contact/Quote messaging view
    set3DSceneSection("quote");
  }, []);

  const [formData, setFormData] = useState<Omit<QuoteData, "file">>({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    service_needed: "Web Development",
    project_description: "",
    budget: "$25,000 — $50,000",
    timeline: "2 — 3 Months",
    preferred_contact_method: "Email",
  });

  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      // Enforce 10MB limit on the client side
      const maxFileSize = 10 * 1024 * 1024;
      if (selectedFile.size > maxFileSize) {
        setFileError("File size exceeds 10MB limit.");
        return;
      }

      // Check extensions
      const allowed = ["pdf", "doc", "docx", "zip", "rar", "txt", "png", "jpg", "jpeg"];
      const ext = selectedFile.name.split(".").pop()?.toLowerCase();
      if (!ext || !allowed.includes(ext)) {
        setFileError(`Invalid file format. Allowed: ${allowed.join(", ")}`);
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    // Call API with form and file attachment
    const response = await submitQuoteForm({
      ...formData,
      file: file,
    });

    setLoading(false);
    if (response.success) {
      setSuccess(response.message);
      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        company: "",
        service_needed: "Web Development",
        project_description: "",
        budget: "$25,000 — $50,000",
        timeline: "2 — 3 Months",
        preferred_contact_method: "Email",
      });
      setFile(undefined);
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-primary mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Scope Analysis Estimator</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Scope <span className="text-gradient-primary">your product.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Provide your technical requirements, estimated timelines, budgets, and upload specifications files. Our strategists will map out a phased blueprint.
          </motion.p>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass rounded-3xl p-8 relative overflow-hidden border-primary/5 shadow-[var(--shadow-elevated)]"
          >
            <h2 className="text-2xl font-bold mb-8">Request an Estimate</h2>

            {/* Success message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex gap-3 text-xs leading-relaxed"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <div>
                  <span className="font-bold">Estimate Initiated:</span> {success}
                </div>
              </motion.div>
            )}

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive flex gap-3 text-xs leading-relaxed"
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
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Service Needed */}
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="service_needed">
                    Service Needed *
                  </label>
                  <select
                    id="service_needed"
                    required
                    value={formData.service_needed}
                    onChange={(e) => setFormData({ ...formData, service_needed: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile Apps</option>
                    <option value="SaaS Product Development">SaaS Systems</option>
                    <option value="AI Automation Solutions">AI / RAG Solutions</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="CRM / ERP Systems">CRM / ERP Panels</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="2D & 3D Animation">2D & 3D Animation</option>
                    <option value="Video Editing & Production">Video Editing & Production</option>
                    <option value="Social Media Graphic Design">Social Media Graphic Design</option>
                    <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                    <option value="Social Media Management">Social Media Management</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="budget">
                    Target Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                  >
                    <option value="Under $10,000">Under $10,000</option>
                    <option value="$10,000 — $25,000">$10,000 — $25,000</option>
                    <option value="$25,000 — $50,000">$25,000 — $50,000</option>
                    <option value="$50,000 — $100,000">$50,000 — $100,000</option>
                    <option value="$100,000+">$100,000+ Enterprise</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-xs font-semibold text-muted-foreground" htmlFor="timeline">
                    Target Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground"
                  >
                    <option value="Under 1 Month">Under 1 Month (Express)</option>
                    <option value="1 — 2 Months">1 — 2 Months</option>
                    <option value="2 — 3 Months">2 — 3 Months</option>
                    <option value="3 — 6 Months">3 — 6 Months</option>
                    <option value="6+ Months">6+ Months Enterprise</option>
                  </select>
                </div>
              </div>

              {/* Preferred contact method */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  {["Email", "Phone", "WhatsApp", "Google Meet"].map((m) => (
                    <label key={m} className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                      <input
                        type="radio"
                        name="preferred_contact_method"
                        value={m}
                        checked={formData.preferred_contact_method === m}
                        onChange={() => setFormData({ ...formData, preferred_contact_method: m })}
                        className="accent-primary"
                      />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project description */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground" htmlFor="desc">
                  Project Brief Description *
                </label>
                <textarea
                  id="desc"
                  required
                  rows={4}
                  value={formData.project_description}
                  onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
                  placeholder="Outline your target audience, core features required, and legacy systems we must integrate with..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground/45"
                />
              </div>

              {/* File Upload drag/drop area */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground">
                  Upload Specification Files (Briefs, wireframes, RFP documents)
                </label>
                <div className="relative border border-dashed border-white/10 rounded-2xl p-6 text-center hover:border-primary/40 transition bg-white/[0.01]">
                  <input
                    type="file"
                    id="brief_file"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <CloudUpload className="h-8 w-8 text-primary mx-auto mb-3" />
                  <span className="block text-xs font-semibold">
                    {file ? file.name : "Select or drag files here to attach"}
                  </span>
                  <span className="block text-[10px] text-muted-foreground mt-1">
                    Allowed formats: PDF, DOCX, ZIP, TXT, PNG, JPG (Max 10MB)
                  </span>
                </div>
                {fileError && (
                  <p className="text-[11px] text-destructive flex items-center gap-1 mt-1.5 font-semibold">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                    <span>{fileError}</span>
                  </p>
                )}
                {file && !fileError && (
                  <p className="text-[11px] text-primary flex items-center gap-1 mt-1.5 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>File attached successfully ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </p>
                )}
              </div>

              {/* Submit Quote Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 font-semibold text-primary-foreground bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] hover:scale-[1.01] active:scale-95 transition disabled:opacity-50 cursor-pointer text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Transmitting Specifications...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Request Phased Blueprint</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
