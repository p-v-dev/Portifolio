# AGENTS.md

Vite + React 19 + TypeScript single-page app (no router, no state lib, no tests). Entry: `src/main.tsx` -> `src/App.tsx`. Not a git repo.

## Commands

- `npm run dev` - dev server with HMR
- `npm run lint` - `eslint .`
- `npm run build` - `tsc -b && vite build` (build fails on TS errors)
- No test framework installed; don't invent test scripts

## Gotchas

- **React Compiler is enabled** via `@rolldown/plugin-babel` + `reactCompilerPreset` in `vite.config.ts`. The compiler assumes strict Rules of Hooks; violations error at build/dev. Keep components pure, don't mutate state in render.
- **`erasableSyntaxOnly`** in `tsconfig.app.json`: no TS enums, namespaces, or parameter properties - use plain types/const objects.
- **`verbatimModuleSyntax`**: type-only imports must use `import type`.
- `allowImportingTsExtensions`: source files import with explicit `.tsx`/`.ts` extensions (e.g. `./App.tsx`).
- App is currently the untouched Vite starter template - the "portfolio" content is still to be built.
