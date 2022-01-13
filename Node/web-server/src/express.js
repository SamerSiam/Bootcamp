const path = require("path");
const express = require("express");

const app = express();
const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));


app.get("/help", (req, res) => {
  res.send("Help Page");
});
//start server
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
