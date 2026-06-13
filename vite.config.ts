// @lovable.dev/vite-tanstack-config already includes base plugins automatically
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Your SSR server entry
    server: {
      entry: "server",
    },
  },

  vite: {
    // FIX: Render / production host blocking issue
    preview: {
      allowedHosts: [
        "primeace.onrender.com",
        ".onrender.com",
      ],
    },
  },
});
