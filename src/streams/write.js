import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from "fs";

const write = async () => {
  const writeStream = fs.createWriteStream(
    `${__dirname}/files/fileToWrite.txt`
  );
  process.stdin.pipe(writeStream);
};

await write();
