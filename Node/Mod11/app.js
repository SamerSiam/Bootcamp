const express = require("express");
const app = express();
const PORT = 3003;
const numbers = [10, 20, 30, 40, 50];

//telling express to deal with json
app.use(express.json());
/******************************get home page */
app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

/***********************Get all numbers */
app.get("/numbers", (req, res) => {
  //automatically gives you the type header and dont need to stringify the json
  res.send(numbers);
});

/****************************Post a number */
app.post("/numbers", (req, res) => {
  //check if num exists
  const addedNum = req.body.number;
  const index = numbers.indexOf(parseInt(addedNum));

  if (index > -1) {
    //number exists
    res.status(400).send(`Number already exists: ${numbers}`);
  } else {
    //push number into the array
    numbers.push(parseInt(req.body.number));
    console.log(numbers);
    res.status(201).send(`number added ,updated array: ${numbers}`);
  }
});

/****************************************Delete a Number */

app.delete("/numbers/:num/", (req, res) => {
  const deletedItem = req.params.num;

  const index = numbers.indexOf(parseInt(deletedItem));
  if (index > -1) {
    numbers.splice(index, 1);
    res.status(201).send(`number deleted,updated array: ${numbers}`);
  } else {
    res.status(400).send(`Number not found: ${numbers}`);
  }
});
/************************************Put method */
app.put("/users/:num", (req, res) => {
  console.log(req.params);
  console.log(req.body.newNum);

  const updatedItem = req.params.num;

  const index = numbers.indexOf(parseInt(updatedItem));
  if (index > -1) {
    numbers[index] = req.body.newNum;
    res.status(201).send(`updated array: ${numbers}`);
  } else {
    res.status(400).send(`Number not found: ${numbers}`);
  }
});

app.listen(PORT, () => {
  console.log(`listentinig to port: ${PORT}`);
});
