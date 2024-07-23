import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/UE-app_1/",
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://ue-dt.somee.com',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, '/api')
  //     }
  //   }
  // }
})
