import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });

  readStream.pipe(process.stdout);

  readStream.on("end", () => {
    console.log("end");
  });
};

read();
