import fs from "fs";

const read = async () => {
  fs.readFile("src/fs/files/fileToRead.txt", "utf8", (err, data) => {
    err ? console.log("There is not a file here!") : console.log(data);
  });
};

await read();
