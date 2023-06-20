import fs from "fs";

const remove = async () => {
  fs.unlink("src/fs/files/fileToRemove.txt", (err) => {
    if (err) {
      console.log("There is not a file here!");
    } else {
      console.log("File was remove!");
    }
  });
};

await remove();
