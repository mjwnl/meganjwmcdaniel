import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import esbuild from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const outDir = path.resolve(root, "dist");
const watchMode = process.argv.includes("--watch");

await mkdir(outDir, { recursive: true });

const baseOptions = {
  bundle: true,
  minify: false,
  sourcemap: true,
  target: "es2018",
  logLevel: "info",
};

const codeBuild = {
  ...baseOptions,
  entryPoints: [path.resolve(root, "src", "code.ts")],
  outfile: path.resolve(outDir, "code.js"),
  platform: "browser",
  format: "iife",
};

if (watchMode) {
  const codeCtx = await esbuild.context(codeBuild);
  await codeCtx.watch();
  await copyFile(
    path.resolve(root, "src", "ui.html"),
    path.resolve(outDir, "ui.html"),
  );
  console.log("Watching Figma build files (code.ts)...");
} else {
  await esbuild.build(codeBuild);
  await copyFile(
    path.resolve(root, "src", "ui.html"),
    path.resolve(outDir, "ui.html"),
  );
  console.log("Built Figma plugin assets to dist/");
}
