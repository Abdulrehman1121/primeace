import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { set3DSceneSection } from "@/components/ThreeDScene";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { CobeGlobe } from "@/components/CobeGlobe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeAce Tech | Custom Software Development & AI Solutions" },
      {
        name: "description",
        content: "PrimeAce Tech is a premium custom software development company. We build high-performance web applications, mobile apps, SaaS platforms, and AI automation workflows.",
      },
      { property: "og:title", content: "PrimeAce Tech | Custom Software Development & AI Solutions" },
      {
        property: "og:description",
        content: "PrimeAce Tech is a premium custom software development company. We build high-performance web applications, mobile apps, SaaS platforms, and AI automation workflows.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useEffect(() => {
    // Morph the 3D scene centerpiece back to home view initially
    set3DSceneSection("home");
    
    let activeSections = new Set<string>();

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-section-id") || entry.target.id;
        if (entry.isIntersecting) {
          activeSections.add(id);
        } else {
          activeSections.delete(id);
        }
      });

      if (activeSections.size === 0) {
        set3DSceneSection("gap");
      } else {
        const id = Array.from(activeSections)[0];
        if (id === "hero") {
          set3DSceneSection("home");
        } else {
          set3DSceneSection(id);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sectionIds = ["hero", "services", "about", "portfolio", "process", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const contentEl = el.querySelector(".container");
        if (contentEl) {
          contentEl.setAttribute("data-section-id", id);
          observer.observe(contentEl);
        } else {
          observer.observe(el);
        }
      }
    });

    return () => {
      observer.disconnect();
      const exitEvent = new CustomEvent("primeace-page", { detail: "other" });
      window.dispatchEvent(exitEvent);
    };
  }, []);

  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
