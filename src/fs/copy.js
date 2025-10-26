import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "files");
  const destinationPath = path.join(__dirname, "files_copy");

  try {
    await fs.access(destinationPath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }

  await fs.mkdir(destinationPath, { recursive: true });

  const files = await fs.readdir(sourcePath);

  for (const file of files) {
    const sourceFilePath = path.join(sourcePath, file);
    const destinationFilePath = path.join(destinationPath, file);

    const stats = await fs.stat(sourceFilePath);
    if (stats.isFile()) {
      await fs.copyFile(sourceFilePath, destinationFilePath);
    }
  }
};

copy();
