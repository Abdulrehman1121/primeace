import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-6 inline-flex">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PRIMEACE | Software Agency, AI Automation & Digital Solutions" },
      {
        name: "description",
        content:
          "PRIMEACE provides custom software development, web development, mobile apps, AI automation, cloud solutions, API integrations, UI/UX design, SEO, and software support.",
      },
      { name: "author", content: "PRIMEACE" },
      { property: "og:title", content: "PRIMEACE | Software Agency, AI Automation & Digital Solutions" },
      { property: "og:description", content: "PRIMEACE Studio builds premium, multi-page websites for software agencies." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PRIMEACE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a1530" },
      { name: "twitter:title", content: "PRIMEACE | Software Agency, AI Automation & Digital Solutions" },
      { name: "description", content: "PRIMEACE Studio builds premium, multi-page websites for software agencies." },
      { name: "twitter:description", content: "PRIMEACE Studio builds premium, multi-page websites for software agencies." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f605e29a-9edb-4fc4-8c41-010abd994203/id-preview-a5a70ee8--f3a2d027-84e5-4148-9fc2-467bbdbb6cac.lovable.app-1779273085786.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f605e29a-9edb-4fc4-8c41-010abd994203/id-preview-a5a70ee8--f3a2d027-84e5-4148-9fc2-467bbdbb6cac.lovable.app-1779273085786.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </QueryClientProvider>
  );
}
