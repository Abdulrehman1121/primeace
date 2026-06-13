import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/PrimeAceLogo.jpeg";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[var(--surface)]/40 mt-32">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src={logo} alt="" className="h-9 w-9 rounded-lg ring-1 ring-white/10" />
              <span className="font-display font-bold tracking-tight">
                PrimeAce<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A premium custom software development company building high-performance digital products, scalable SaaS platforms, automated AI agent workflows, and secure business software solutions.
            </p>
            <div className="flex gap-2 mt-6">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 grid place-items-center rounded-lg glass hover:text-primary hover:border-primary/40 transition"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { to: "/services", label: "Web Development" },
              { to: "/services", label: "Mobile Apps" },
              { to: "/services", label: "AI Automation" },
              { to: "/services", label: "Creative Animation" },
              { to: "/services", label: "Digital Marketing" },
            ]}
          />

          <div>
            <h4 className="text-sm font-semibold mb-4">Subscribe to our Tech Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receive monthly insights on custom software engineering, AI automation trends, and modern digital transformation strategies. No spam.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50"
              />
              <button className="px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground hover:scale-[1.03] transition">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 PrimeAce Tech. All rights reserved.</p>
          <p>Engineered with Precision and Passion Worldwide.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
