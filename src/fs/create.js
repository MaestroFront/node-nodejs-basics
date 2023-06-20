import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs, {exists} from "fs";

const create = async () => {
  const text = "I am fresh and young";
  const path = `${__dirname}/files/focus.txt`;
  exists(path, (e) => {
    if (e) {
      throw new Error("FS operation failed");
    } else {
      fs.appendFile(path, text, () => {
        console.log("File was created!");
      });
    }
  });
};

await create();
