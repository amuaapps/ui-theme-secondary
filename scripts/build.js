import { build } from "esbuild";
import { copyFile, mkdir } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function buildPackage() {
  await mkdir("dist", { recursive: true });

  await copyFile("src/theme.css", "dist/index.css");

  console.log("✅ Build complete: dist/index.css");
}

buildPackage().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
