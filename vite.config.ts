import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: '静心计划', short_name: '静心计划', description: '个人计划管理 PWA', theme_color: '#f8f7f2', background_color: '#f8f7f2', display: 'standalone', start_url: './', icons: [{ src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }]
    }
  })]
});
