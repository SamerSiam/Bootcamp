const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book); // cerates a string variable
// console.log(bookJSON);
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFile("1-json.json", bookJSON, (err) => {
//   if (err) throw err;
// });

fs.readFile('1-json.json', (err,buffer){
    if (err){
        throw err;
    }
    const dataBuffer=buffer.toString();
});
console.log(dataBuffer)