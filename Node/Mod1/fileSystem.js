// const fs = require("fs");
import fs from "fs";
const currentFolder = "./";
fs.writeFileSync("notes.txt", "Hello World! My name is Samer!");
fs.appendFileSync("notes.txt", "This is an appendix");
fs.copyFileSync("notes.txt", "new_notes.txt");
fs.renameSync("notes.txt", "old_notes.txt");
fs.readdirSync(currentFolder).forEach((file) => {
  console.log(file);
});
//better not to use sync ,
const writeFile = async () => {
  await fs.writeFile("readme2.txt", "this is async");
  await fs.copyFile("readme2.txt", "readmecopy.txt");
};
