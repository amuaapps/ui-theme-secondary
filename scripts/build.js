import { build } from "esbuild";
import { copyFile, mkdir } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function buildPackage() {
  await mkdir("dist", { recursive: true });

  await build({
    entryPoints: ["src/styles.ts"],
    bundle: true,
    format: "esm",
    outfile: "dist/styles.js",
    loader: {
      ".css": "css",
    },
    minify: false,
    sourcemap: false,
  });

  await copyFile("src/theme.css", "dist/theme.css");

  console.log("✅ Build complete: dist/styles.js and dist/theme.css");
}

buildPackage().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
