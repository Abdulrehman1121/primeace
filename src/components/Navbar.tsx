import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/PrimeAceLogo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 lg:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[var(--shadow-card)]" : "glass"
          }`}
        >
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2.5 group">
            <img src={logo} alt="" className="h-9 w-9 rounded-lg ring-1 ring-white/10" />
            <span className="font-display font-bold text-base tracking-tight">
              PrimeAce<span className="text-primary">.</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => window.scrollTo(0, 0)}
                  className="px-3.5 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  activeProps={{ className: "px-3.5 py-2 rounded-lg text-sm text-foreground bg-white/5" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/request-quote"
              onClick={() => window.scrollTo(0, 0)}
              className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-primary-foreground bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] hover:scale-[1.03] active:scale-95 transition-transform"
            >
              Start a Project
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => {
                      setOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className="block px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/request-quote"
                  onClick={() => {
                    setOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="block text-center rounded-xl px-4 py-3 text-sm font-medium text-primary-foreground bg-[var(--gradient-primary)]"
                >
                  Start a Project →
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
