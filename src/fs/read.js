import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");
  try {
    await fs.readFile(filePath, "utf8").then((data) => {
      console.log(data);
    });
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
  }
};

read();
