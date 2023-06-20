import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
  const pathFiles = `${__dirname}/files`;
  const pathFilesCopy = `${__dirname}/files_copy`;

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
