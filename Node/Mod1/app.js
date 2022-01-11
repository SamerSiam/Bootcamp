const notes = require("./noteUtils");
const yargs = require("yargs");

// customize yargs version number
yargs.version("1.1.0");

//create add command line

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Details",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
// creating a remove command
yargs.command({
  command: "remove",
  describe: "Remvoe a note",
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "List all  notes",
  handler: function () {},
});
yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
