import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary px-3 py-1.5 rounded-full glass">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight gradient-text">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
