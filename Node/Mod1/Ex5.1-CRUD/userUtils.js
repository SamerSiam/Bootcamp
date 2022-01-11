const fs = require("fs");
const uniqid = require("uniqid");

const addUser = (name, email) => {
  const users = loadUsers();
  //   const duplicateUsers = users.filter((user) => {
  //     return user.title === title;
  //   });

  //   if (duplicateNotes.length === 0) {
  users.push({
    id: uniqid.process(),
    name: name,
    email: email,
  });
  saveUsers(users);
  console.log("New User Added");
};
/********************************************* */
const saveUsers = function (users) {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJON);
};
const loadUsers = function () {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    // this will reduce another step of string parsing
    //const dataBuffer = fs.readFileSync("users.json",'utf-8');

    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
/*********************************Remove User */
const removeUser = (id) => {
  const users = loadUsers();
  const results = users.filter((user) => {
    return user.id !== id;
  });

  if (results.length === users.length) {
    console.log("User Not Found ");
  } else {
    saveUsers(results);
    console.log("user Deleted ");
  }
};
/***********************************update user */

const updateUser = (id, name, email) => {
  const users = loadUsers();
  const updatedUser = users.find((user) => {
    return user.id === id;
  });
  // no need to remove the item and add it the new one, update will modify object
  const results = users.filter((user) => {
    return user.id !== id;
  });
  if (updatedUser) {
    console.log(updatedUser);
    updatedUser.name = name;
    updatedUser.email = email;
    console.log(updatedUser);
    results.push(updatedUser);
    saveUsers(results);
    console.log("User Updated ");
  } else {
    console.log("User Not Found!");
  }
};
/************************Read Users************************ */

const readUser = (id) => {
  const users = loadUsers();
  const results = users.filter((user) => {
    return user.id === id;
  });

  if (results.length > 0) {
    console.log("User Found: ", results[0]);
  } else {
    console.log("user not found! ");
  }
};

/**************************Module Exports */
module.exports = {
  addUser: addUser,
  removeUser: removeUser,
  readUser: readUser,
  updateUser: updateUser,
};
