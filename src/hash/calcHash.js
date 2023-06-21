import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  fs.readFile(`${__dirname}/files/fileToCalculateHashFor.txt`, (err, data) => {
    if (err) {
      throw new Error("Error! Yeah!");
    } else {
      console.log(crypto.createHash("sha256").update(data).digest("hex"));
    }
  });
};

await calculateHash();
