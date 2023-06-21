const parseEnv = () => {
  Object.entries(process.env).forEach((item) => {
    if (item[0].includes("RSS")) {
      console.log(`${item[0]} = ${item[1]}`);
    }
  });
};

parseEnv();
