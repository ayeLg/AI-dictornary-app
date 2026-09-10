import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AI-dictornary-app/',
  // GITHUB_SHA is set automatically in GitHub Actions; 'dev' for local builds.
  define: {
    __BUILD_ID__: JSON.stringify(
      (process.env.GITHUB_SHA || 'dev').slice(0, 7)
    ),
  },
})
