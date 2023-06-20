import fs from "fs";

const rename = async () => {
  fs.rename(
    "src/fs/files/wrongFilename.txt",
    "src/fs/files/properFilename.md",
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
