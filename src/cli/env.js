const parseEnv = () => {
  let result = [];
  Object.entries(process.env).forEach((item) => {
    if (item[0].includes("RSS")) {
      result.push(`${item[0]} = ${item[1]}`);
    }
  });
  console.log(result.join('; '));
};

parseEnv();
