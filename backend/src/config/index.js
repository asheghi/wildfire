import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import { getLogger } from "../lib/debug.js";

const log = getLogger("config");

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = basename(fileURLToPath(import.meta.url));

const initialConfig = {
  rootPath: join(__dirname, "../../.."),
};

const proxy = new Proxy(initialConfig, {
  get(t, key) {
    // env has higher priority over default values in files
    if (process.env[key.toUpperCase()]) {
      return process.env[key.toUpperCase()];
    }
    if (process.env[key]) {
      return process.env[key];
    }
    // default value from files
    if (t[key]) {
      return t[key];
    }
    if (t[key] === undefined) log.warn(`config not found for '${key}'`);
    return null;
  },
});

async function populateDefaults() {
  const files = fs.readdirSync(__dirname).filter((it) => it !== __filename);
  await Promise.all(
    files.map(async (configFile) => {
      try {
        const configs = (await import(`./${configFile}`)).default;
        Object.keys(configs).forEach((key) => {
          proxy[key] = configs[key];
        });
      } catch (e) {
        log.error(e);
      }
    })
  );
  return proxy;
}

await populateDefaults();

export const config = proxy;
