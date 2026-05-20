import { MagneticButton } from "./MagneticButton";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden glass-card p-10 md:p-16 text-center">
            <div className="absolute inset-0 tech-grid opacity-30" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-primary/25 blur-[100px]" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight gradient-text max-w-3xl mx-auto">
                Ready to build your next digital product?
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Let's make it happen with PRIMEACE. Get a tailored proposal within 24 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <MagneticButton to="/contact">
                  Start Your Project <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton to="/services" variant="ghost">
                  Explore Services
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
