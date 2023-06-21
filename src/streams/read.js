import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs, { createReadStream } from "fs";
import stream from "node:stream";

const read = async () => {
  const readStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);
  readStream.on("data", (chunk) => process.stdout.write(chunk.toString() + '\n'));
};

await read();
