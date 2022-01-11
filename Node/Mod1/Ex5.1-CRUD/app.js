const users = require("./userUtils");
const yargs = require("yargs");

// customize yargs version number
yargs.version("1.1.0");

//create add command line

yargs.command({
  command: "add",
  describe: "Add a new user",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email address",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.addUser(argv.name, argv.email);
  },
});

//creating a remove command
yargs.command({
  command: "remove",
  describe: "Remvoe a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("inside remove handler");
    users.removeUser(argv.id);
  },
});
//update user
yargs.command({
  command: "update",
  describe: "Update user by ID",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

// Read User
yargs.command({
  command: "read",
  describe: "Reading a user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    users.readUser(argv.id);
  },
});

yargs.parse();
