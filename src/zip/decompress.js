import fs, { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const deleteFile = async () => {
  fs.unlink(`${__dirname}/files/archive.gz`, () => {
    process.stdout.write("archive.gz was deleted!\n");
  });
};
const showMessage = async () =>
  process.stdout.write("Decompression process done: fileToCompress.txt!\n");

const writeToFile = async () => {
  const writeStream = fs.createWriteStream(
    `${__dirname}/files/fileToCompress.txt`
  );
  writeStream.write("Q29tcHJlc3MgbWUh", "base64");
};

const decompress = async () => {
  const handleStream = createReadStream(`${__dirname}/files/archive.gz`);
  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(`${__dirname}/files/fileToCompress.txt`))
    .on("finish", () => {
      showMessage();
      writeToFile();
      deleteFile();
    });
};

await decompress();
