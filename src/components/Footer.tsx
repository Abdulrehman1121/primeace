import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/primeace-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="PRIMEACE logo" className="h-10 w-10" width={40} height={40} loading="lazy" />
              <span className="font-display font-bold text-xl">PRIMEACE</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              PRIMEACE builds custom software, websites, mobile apps, AI automation systems,
              and scalable digital solutions for modern businesses.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/$slug" params={{ slug: "custom-software-development" }} className="hover:text-foreground">Custom Software</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "web-development" }} className="hover:text-foreground">Web Development</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "mobile-app-development" }} className="hover:text-foreground">Mobile Apps</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "ai-automation" }} className="hover:text-foreground">AI Automation</Link></li>
              <li><Link to="/services/$slug" params={{ slug: "cloud-devops" }} className="hover:text-foreground">Cloud & DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@primeace.com</li>
              <li>+1 (415) 555-0199</li>
              <li><Link to="/contact" className="hover:text-foreground">Start a project →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PRIMEACE. All rights reserved.</p>
          <p>Crafted with precision · Built to scale</p>
        </div>
      </div>
    </footer>
  );
}
