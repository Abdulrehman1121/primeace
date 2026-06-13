import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function ComingSoon({ title }: { title: string }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-primary-glow mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Phase 2
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gradient leading-[1.05]">
          {title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          This page is shipping in the next build phase. The home experience is live now —
          have a look while we craft the rest.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass hover:border-primary/40 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </div>
    </section>
  );
}
