# AGENTS.md

## Cursor Cloud specific instructions

This is a **Figma plugin** project — there is no standalone web server or backend. The plugin runs inside the Figma desktop app.

### Available npm scripts

See `package.json` for full list. Key scripts:

| Script | Purpose |
|---|---|
| `npm run typecheck:figma` | TypeScript type-check (no emit) |
| `npm run build:figma` | Build plugin to `dist/` via esbuild |
| `npm run watch:figma` | Watch mode for development |
| `npm run clean:figma` | Remove `dist/` |

### Build output

`npm run build:figma` produces `dist/code.js` and `dist/ui.html`, referenced by `manifest.json`.

### Testing limitations

- There is no automated test suite in this project.
- End-to-end testing requires the **Figma desktop app** (import plugin from `manifest.json`). This cannot be done in a headless cloud environment.
- In a cloud agent context, validate correctness via `npm run typecheck:figma` and `npm run build:figma`.
