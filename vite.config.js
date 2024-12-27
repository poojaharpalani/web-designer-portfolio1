import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  optimizeDeps: {
    include: ["gsap"],
  },
  resolve: {
    alias: {
      $assets: "/src/assets",
      "gsap/ScrollTrigger": "gsap/dist/ScrollTrigger.min.js",
    },
  },
});
