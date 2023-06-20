import fs from "fs";

const list = async () => {
  fs.readdir("src/fs/files", (err, files) => {
    if (err) {
        console.log(data);
    } else {
      files.forEach((item, i) => console.log(`File #${i + 1}: `, item));
    }
  });
};

await list();
