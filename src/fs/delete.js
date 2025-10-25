import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");

  await fs.unlink(filePath).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  });
};
