import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      injectRegister: "script",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: [
        // ブラウザのfavicon
        "favicon.ico",
        // iosのホーム画面に追加した際のアイコン画像
        "apple-touch-icon.png",
        // Safariのページピン用のアイコン
        "masked-icon.svg",
      ],
      manifest: {
        theme_color: "#ffffff",
        background_color: "#f69435",
        display: "standalone",
        scope: "/",
        start_url: "/",
        name: "PWA TEST",
        short_name: "PWA TEST",
        description: "PWA TEST",
        // 解像度に応じたサイズの画像をいくつか用意することで、より適切な画像をブラウザ側が選択してくれる
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
