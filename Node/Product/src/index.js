const express = require("express");
require("./db/mongoose");
const Product = require("./models/product");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
/*******************Get all */
app.get("/products", (req, res) => {
    const myrequest;
  const { minPrice, maxPrice } = req.query;

  if (req.query){
      myrequest = Product.find({ "details.price": { $gt: minPrice, $lt: maxPrice } })

  }
  else{
      myrequest = Product.find({ })
  }
  //Product.find({ "details.price": { $gt: minPrice, $lt: maxPrice } })

    //   Product.find({})
    myrequest.then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

/**********************get active prodcuts******************* */
app.get("/products/active", (req, res) => {
  Product.find({ isActive: true })

    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }

      res.send(product);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

/**********************get product by id******************* */
app.get("/products/:id", (req, res) => {
  const _id = req.params.id;
  Product.findById(_id)
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }

      res.send(product);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

/**********************get price range prodcuts******************* */
app.get("/products/price", (req, res) => {
  const minPrice = req.body.min;
  const maxPrice = req.body.max;
  console.log(req.body);

  Product.find({})
    .then((product) => {
      if (!product) {
        return res.status(404).send();
      }

      res.send(product);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
/************************************create new product*** */
app.post("/products", (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then(() => {
      res.status(201).send(product);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
