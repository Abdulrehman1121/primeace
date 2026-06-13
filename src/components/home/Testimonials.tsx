import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/home";
import { SectionHeading } from "@/components/SectionHeading";

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="What clients say"
          title={<>Trusted by teams that <span className="text-gradient-primary">ship</span></>}
        />

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 flex flex-col"
            >
              <Quote className="h-6 w-6 text-primary mb-4" />
              <blockquote className="text-base leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[var(--gradient-primary)] grid place-items-center text-sm font-semibold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
