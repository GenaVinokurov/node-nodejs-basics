import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files", "wrongFilename.txt");
  const destinationPath = path.join(__dirname, "files", "properFilename.md");
  await fs.stat(sourcePath).then((stats) => {
    if (stats.isFile()) {
      fs.rename(sourcePath, destinationPath);
    } else {
      throw new Error("FS operation failed");
    }
  });
};

rename();
