import fs, { exists } from "fs";

const create = async () => {
  const text = "I am fresh and young";
  const path = "src/fs/files/focus.txt";
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
