// const mongoDb = require("mongodb");
// const MongoClient = mongoDb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("unable to connect to database!");
  }
  const db = client.db(databaseName);

  // db.collection("users").insertOne(
  //   {
  //     name: "Andrew",
  //     age: 27,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("unable to insert user");
  //     }
  //     console.log(result.insertedIds);
  //   }
  // );

  // db.collection("task").insertMany(
  //   [
  //     { description: "clean", completed: true },
  //     { description: "shop", completed: false },
  //     { description: "pay bills", completed: true },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("unable to insert user");
  //     }
  //     console.log(result.insertedIds);
  //   }
  // );
  db.collection("users").findOne({ name: "jen" }, (err, user) => {
    if (error) {
      return console.log("unable to view user");
    }
    console.log(user);
  });
});
