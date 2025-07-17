import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    compression({ algorithm: "brotliCompress" }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "framer-motion";
            if (id.includes("@hookform")) return "react-hook-form";
            if (id.includes("@radix-ui")) return "radix-ui";
            if (id.includes("@tanstack")) return "react-query";
            if (id.includes("@floating-ui")) return "floating-ui";
            if (id.includes("react-toast")) return "react-toastify";
            if (id.includes("tailwind-merge")) return "tailwind-utils";
            if (id.includes("zod")) return "zod";
            if (id.includes("lodash")) return "lodash";
            return "vendor"; // React e tutto il resto
          }
        },
      },
    },
  },
}));
