import { defineConfig, type Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { createServer } from 'vite'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// prerenders the static app into dist/index.html so crawlers/link previews
// see real content without executing JS. ponytail: hand-rolled renderToString
// instead of react-snap/vite-plugin-prerender (both need a ~100MB headless browser)
function prerender(): Plugin {
  return {
    name: 'prerender',
    apply: 'build',
    async closeBundle() {
      const server = await createServer({
        configFile: false,
        plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
      })
      try {
        const { default: App } = await server.ssrLoadModule('/src/App.tsx')
        const html = renderToString(createElement(App))
        const indexPath = resolve('dist', 'index.html')
        const template = readFileSync(indexPath, 'utf-8')
        const out = template.replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`,
        )
        writeFileSync(indexPath, out)
      } finally {
        await server.close()
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/Portifolio/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    prerender(),
  ],
})
