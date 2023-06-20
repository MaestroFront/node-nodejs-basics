import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from "fs";

const remove = async () => {
  fs.unlink(`${__dirname}/files/fileToRemove.txt`, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      console.log("File was remove!");
    }
  });
};

await remove();
