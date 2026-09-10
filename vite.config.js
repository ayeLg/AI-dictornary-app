import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Monotonic build number = commit count. Increases by 1 on every push.
// Needs full git history in CI (checkout fetch-depth: 0).
function buildNo() {
  try {
    return execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim()
  } catch {
    return 'dev'
  }
}

export default defineConfig({
  plugins: [react()],
  base: '/AI-dictornary-app/',
  define: {
    __BUILD_ID__: JSON.stringify(buildNo()),
  },
})
