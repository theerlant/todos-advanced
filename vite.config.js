import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Todos Advanced",
        short_name: "Todos Advanced",
        description: "A offline ready todos app with placeholder list.",
        theme_color: "#0d0d0d",
        icons: [
          {
            src: "favicon.svg",
            type: "image/svg+xml",
            sizes: "any",
          },
          {
            src: "128.png",
            type: "image/png",
            sizes: "128x128",
          },
          {
            src: "192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "256.png",
            type: "image/png",
            sizes: "256x256",
          },
        ],
        start_url: "/",
        display: "standalone",
      },
    }),
  ],
});
