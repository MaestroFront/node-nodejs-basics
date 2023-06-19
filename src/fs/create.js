import fs, { exists } from "fs";

const create = async () => {
  const text = "I am fresh and young";
  const path = "src/fs/files/focus.txt";
  exists(path, (e) => {
    e
      ? console.log("File already exist!")
      : fs.appendFile(path, text, () => {
          console.log("File was created!");
        });
  });
};

await create();
