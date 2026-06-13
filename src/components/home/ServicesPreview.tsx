import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "@/data/home";
import { SectionHeading } from "@/components/SectionHeading";
import { useRef, type MouseEvent } from "react";

export function ServicesPreview() {
  return (
    <section id="services" className="relative py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title={<>Services Engineered for <span className="text-gradient-primary">Scale</span></>}
          description="From high-fidelity MVPs to custom enterprise SaaS platforms, we design and engineer scalable software solutions tailored to accelerate your business growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
    >
      <Link to="/services" className="block">
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="group relative h-full rounded-2xl glass p-6 transition-[transform,border-color] duration-300 will-change-transform hover:border-primary/40"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{
              background:
                "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.62 0.22 264 / 0.18), transparent 40%)",
            }}
          />
          <div className="relative flex flex-col h-full">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-primary)] grid place-items-center shadow-[var(--shadow-glow)] mb-5">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {service.description}
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all">
              Learn More
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
