import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join("") + "\n");
    },
  });
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
