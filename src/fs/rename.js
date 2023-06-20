import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from "fs";

const rename = async () => {
  fs.rename(
    `${__dirname}/files/wrongFilename.txt`,
    `${__dirname}/files/properFilename.md`,
    (err) => {
      if (err) {
        console.log(data);
      } else {
        console.log("File was rename!");
      }
    }
  );
};

await rename();
