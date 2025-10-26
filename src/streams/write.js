import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  return new Promise((resolve, reject) => {
    writeStream.on("finish", resolve);
    writeStream.on("error", reject);
  });
};

write();
