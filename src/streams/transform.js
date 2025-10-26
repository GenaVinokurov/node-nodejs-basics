import { Transform } from "stream";

export const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  return new Promise((resolve, reject) => {
    reverseTransform.on("finish", resolve);
    reverseTransform.on("error", reject);
  });
};

transform();
