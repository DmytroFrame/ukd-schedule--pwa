import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  manifest: {
    name: "UKD Schedule",
    short_name: "UKD Schedule",
    theme_color: "#a61b34",
    background_color: "#730909",
    display: "standalone",
    orientation: "portrait",
    start_url: ".",
    icons: [
      {
        src: "assets/icons/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "assets/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any",
      },
    ],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA],
  // base: '/ukd-schedule--pwa/'
});
