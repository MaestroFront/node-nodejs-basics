import fs, { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const deleteFile = async () => {
  fs.unlink(`${__dirname}/files/fileToCompress.txt`, () => {
    process.stdout.write("fileToCompress.txt was deleted!\n");
  });
};
const showMessage = async () =>
  process.stdout.write("Compression process done: archive.gz!\n");

const compress = async () => {
  const handleStream = createReadStream(
    `${__dirname}/files/fileToCompress.txt`
  );
  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(`${__dirname}/files/archive.gz`))
    .on("finish", () => {
      showMessage();
      deleteFile();
    });
};

await compress();
