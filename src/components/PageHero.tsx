import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="container-x relative">
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary px-3 py-1.5 rounded-full glass">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl gradient-text">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.3}><div className="mt-10">{children}</div></Reveal>}
      </div>
    </section>
  );
}
