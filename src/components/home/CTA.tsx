import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center relative py-16 px-6"
        >
          {/* Subtle breathing glow under the minimal text */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-30 filter blur-[80px] pointer-events-none"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="relative">
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono tracking-widest text-primary uppercase mb-6 inline-block"
            >
              Let's Build Something Exceptional
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-[1.1] tracking-tight max-w-2xl mx-auto"
            >
              Ready to digitalize and{" "}
              <span className="text-gradient-primary">automate your business?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
            >
              Schedule a free 30-minute scoping consultation with our senior software architects. We will analyze your requirements and follow up with a custom project proposal within one business day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/request-quote"
                className="group relative inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-medium text-primary-foreground bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] hover:scale-[1.03] active:scale-95 transition"
              >
                Request a Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-medium glass hover:border-primary/40 transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
