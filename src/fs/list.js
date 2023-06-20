import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from "fs";

const list = async () => {
  fs.readdir(`${__dirname}/files`, (err, files) => {
    if (err) {
        console.log(data);
    } else {
      files.forEach((item, i) => console.log(`File #${i + 1}: `, item));
    }
  });
};

await list();
