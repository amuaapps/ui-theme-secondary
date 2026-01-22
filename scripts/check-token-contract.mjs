#!/usr/bin/env node

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

function main() {
  const contractPath = join(rootDir, "contract", "tokens.json");
  const themePath = join(rootDir, "src", "theme.css");

  let contract;
  try {
    const contractContent = readFileSync(contractPath, "utf-8");
    contract = JSON.parse(contractContent);
  } catch (err) {
    console.error(`❌ Failed to read contract file: ${contractPath}`);
    console.error(err.message);
    process.exit(1);
  }

  let themeCSS;
  try {
    themeCSS = readFileSync(themePath, "utf-8");
  } catch (err) {
    console.error(`❌ Failed to read theme CSS file: ${themePath}`);
    console.error(err.message);
    process.exit(1);
  }

  const requiredTokens = contract.requiredTokens || [];
  const missingTokens = [];

  for (const token of requiredTokens) {
    const tokenPattern = new RegExp(`${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:`, "m");
    if (!tokenPattern.test(themeCSS)) {
      missingTokens.push(token);
    }
  }

  if (missingTokens.length > 0) {
    console.error("\n❌ Token Contract Validation Failed\n");
    console.error(`Missing ${missingTokens.length} required token(s):\n`);
    missingTokens.forEach((token) => {
      console.error(`  - ${token}`);
    });
    console.error(`\nExpected ${requiredTokens.length} tokens, found ${requiredTokens.length - missingTokens.length}`);
    console.error(`\nSource: ${contractPath}`);
    console.error(`Theme: ${themePath}\n`);
    process.exit(1);
  }

  console.log("✅ Token Contract Validation Passed");
  console.log(`   All ${requiredTokens.length} required tokens are present in ${themePath}`);
  process.exit(0);
}

main();
