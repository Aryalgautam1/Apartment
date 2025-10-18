import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Vite configuration for the Rgaon Apartment website
// This setup provides fast development and optimized production builds
export default defineConfig({
  server: {
    host: "::", // Listen on all network interfaces for better development experience
    port: 8080, // Custom port to avoid conflicts with other projects
  },
  plugins: [react()], // React plugin with SWC for lightning-fast compilation
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Clean imports with @ alias
    },
  },
});
