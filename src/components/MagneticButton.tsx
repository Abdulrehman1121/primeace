import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";

type Props = {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
};

export function MagneticButton({ to, href, variant = "primary", children, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const classes = `${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;

  const inner = <span ref={ref} className="inline-flex items-center gap-2 transition-transform duration-300">{children}</span>;

  if (to) {
    return (
      <Link to={to} onMouseMove={onMove} onMouseLeave={onLeave} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} onMouseMove={onMove} onMouseLeave={onLeave} className={classes}>
      {inner}
    </a>
  );
}
