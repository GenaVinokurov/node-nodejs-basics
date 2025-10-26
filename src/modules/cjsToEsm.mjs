import path from "node:path";
import { release, version } from "node:os";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import "./files/c.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = await import(path.join(__dirname, "files", "a.json"), {
    with: { type: "json" },
  });
} else {
  unknownObject = await import(path.join(__dirname, "files", "b.json"), {
    with: { type: "json" },
  });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServer((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
