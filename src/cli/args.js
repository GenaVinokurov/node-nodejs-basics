//npm run start:args -- --prop1 value1 --prop2 value2

export const parseArgs = () => {
  let args = process.argv.slice(2);

  if (args[0] === "--") {
    args = args.slice(1);
  }

  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i];
    const value = args[i + 1];

    if (propName && propName.startsWith("--") && value) {
      const cleanPropName = propName.slice(2);
      result.push(`${cleanPropName} is ${value}`);
    }
  }

  console.log(result.join(", "));
};

parseArgs();
