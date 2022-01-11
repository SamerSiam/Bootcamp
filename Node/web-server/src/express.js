const express = require("express");
const app = express();
//app.com
//call with two args, route and call back
app.get("", (req, res) => {
  res.send("Hello Express!");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
});
//start server
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
