import { fileURLToPath } from "url";
import { dirname } from "path";
import { Worker } from "worker_threads";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const threads = os.cpus().length;
  const promises = [];

  for (let i = 0; i < threads; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(`${__dirname}/worker.js`);
      worker.on("message", (result) => {
        resolve({ status: "resolved", data: result });
      });
      worker.on("error", (error) => {
        reject({ status: "error", data: null });
      });
      worker.postMessage(i + 10);
    });
    promises.push(promise);
  }

  const arrayOfResults = await Promise.all(promises);
  console.log(arrayOfResults);
};

await performCalculations();
