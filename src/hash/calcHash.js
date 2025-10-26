import fs from "fs";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async () => {
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const readStream = fs.createReadStream(filePath);

  const hash = crypto.createHash("sha256");

  readStream.pipe(hash);

  return new Promise((resolve, reject) => {
    hash.on("finish", () => {
      const hexHash = hash.digest("hex");
      console.log(hexHash);
      resolve(hexHash);
    });

    readStream.on("error", reject);
  });
};

calculateHash();
