import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/lib/services";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
          { path: "/process", changefreq: "monthly", priority: "0.7" },
          { path: "/ai-automation", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...services.map((s) => ({ path: `/services/${s.slug}`, changefreq: "monthly", priority: "0.7" })),
        ];
        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
