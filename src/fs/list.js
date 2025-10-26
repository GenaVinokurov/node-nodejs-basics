import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files");

  try {
    await fs.access(sourcePath);
    await fs.readdir(sourcePath).then((files) => {
      console.log(files);
    });
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

list();
