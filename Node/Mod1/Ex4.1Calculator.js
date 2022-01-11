const yargs = require("yargs");

//create add command line

yargs.command({
  command: "add",
  describe: "Adding two numbers",
  builder: {
    num1: {
      describe: "First Number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second Number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log("Result: ", argv.num1 + argv.num2);
  },
});

yargs.command({
  command: "sub",
  describe: "Subtracting two numbers",
  builder: {
    num1: {
      describe: "First Number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second Number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log("Result: ", argv.num1 - argv.num2);
  },
});

yargs.command({
  command: "mult",
  describe: "Multiplying two numbers",
  builder: {
    num1: {
      describe: "First Number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second Number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log("Result: ", argv.num1 * argv.num2);
  },
});

yargs.command({
  command: "pow",
  describe: "power function",
  builder: {
    num1: {
      describe: "First Number",
      demandOption: true,
      type: "number",
    },
    num2: {
      describe: "Second Number",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    console.log("Result: ", Math.pow(argv.num1, argv.num2));
  },
});
console.log(yargs.argv);
