import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipelineAsync = promisify(pipeline);

export const decompress = async () => {
  const sourcePath = path.join(__dirname, "files", "compressed.gz");
  const destinationPath = path.join(__dirname, "files", "decompressed.txt");

  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(destinationPath);
  const gunzip = createGunzip();

  await pipelineAsync(readStream, gunzip, writeStream);
};

decompress();
