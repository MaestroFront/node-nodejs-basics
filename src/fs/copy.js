import fs from "fs";

const throwError = (err) => {
  const errorMessage = "FS operation failed";
  err.message = errorMessage;
  throw err;
};

const copyFile = (arr, pathFiles, pathFilesCopy) => {
  arr.forEach((file) => {
    fs.copyFile(`${pathFiles}/${file}`, `${pathFilesCopy}/${file}`, () => {
      console.log(`File ${file} was copied!`);
    });
  });
};

const copy = async () => {
  const pathFiles = "src/fs/files";
  const pathFilesCopy = "src/fs/files_copy";

  fs.readdir(pathFiles, async (err) => {
    if (err) {
      throwError(err);
    } else {
      fs.mkdir(pathFilesCopy, (err) => {
        if (err) {
          throwError(err);
        } else {
          console.log("Folder was created!");
        }
      });
    }
  });
  fs.readdir(pathFiles, async (err, filesFrom) => {
    if (err) {
      throwError(err);
    } else {
      copyFile(filesFrom, pathFiles, pathFilesCopy);
    }
  });
};

await copy();
