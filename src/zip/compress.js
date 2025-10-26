import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pipelineAsync = promisify(pipeline);

export const compress = async () => {
  const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
  const destinationPath = path.join(__dirname, "files", "compressed.gz");

  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(destinationPath);
  const gzip = createGzip();

  await pipelineAsync(readStream, gzip, writeStream);
};

compress();
