import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/primeace-logo.png";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/ai-automation", label: "AI Automation" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass shadow-elevated" : "bg-transparent border border-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              src={logo}
              alt="PRIMEACE software agency logo"
              className="h-9 w-9 object-contain"
              width={36}
              height={36}
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            <span className="font-display font-bold text-lg tracking-wide hidden sm:block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              PRIMEACE
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative px-4 py-2 text-xs xl:text-sm font-medium rounded-full transition-colors ${
                      active ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full -z-10 shadow-[0_0_15px_-3px_oklch(0.68_0.20_245/0.25)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-xs uppercase tracking-wider font-semibold">
              Get a Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-full glass cursor-pointer"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden mt-2 glass rounded-3xl p-4 shadow-elevated"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                        pathname === l.to
                          ? "bg-primary/15 border border-primary/20 text-foreground font-semibold"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="btn-primary w-full mt-2">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
