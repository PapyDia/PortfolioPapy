import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
            return "react";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("i18next") || id.includes("react-i18next")) {
            return "i18n";
          }

          if (id.includes("react-icons")) {
            return "icons";
          }

          return "vendor";
        },
      },
    },
  },
});
