import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fresh.txt");
  fs.stat(filePath)
    .then((stats) => {
      if (stats.isFile()) {
        throw new Error("FS operation failed");
      }
    })
    .catch((err) => {
      if (err.code === "ENOENT") {
        fs.writeFile(filePath, "I am fresh and young");
      } else {
        throw new Error("FS operation failed");
      }
    });
};

create();
