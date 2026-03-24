# meganjwmcdaniel

// portfolio

## Figma build system

This repository includes a Figma plugin build workflow.

### Install

```bash
npm install
```

### Build for Figma

```bash
npm run build:figma
```

Build output is written to `dist/`:

- `dist/code.js`
- `dist/ui.html`

### Watch mode

```bash
npm run watch:figma
```

### Figma setup

1. In Figma, open **Plugins > Development > Import plugin from manifest...**
2. Select `manifest.json` from this repository.
