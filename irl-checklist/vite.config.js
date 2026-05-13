import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { env } from 'node:process'

const repositoryName = env.GITHUB_REPOSITORY?.split('/')[1] ?? 'IRLChecklist'
const productionBasePath = env.BASE_PATH ?? `/${repositoryName}/`

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? productionBasePath : '/',
  plugins: [react(), tailwindcss()],
}))
