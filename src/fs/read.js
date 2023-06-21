import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from "fs";

const read = async () => {
  fs.readFile(`${__dirname}/files/fileToRead.txt`, "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      console.log(data);
    }
  });
};

await read();
