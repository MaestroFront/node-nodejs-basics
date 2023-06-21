const parseArgs = () => {
  let result = [];
  for (let i = 0; i < process.argv.length; i += 2) {
    result.push(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`);
  }
  result.shift();
  console.log("RESULT: ", result.join(", "));
};

parseArgs();
