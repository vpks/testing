const express = require("express");
const users = express.Router();

users.route("/signup").get((req, res, next) => {
  console.log("cleared");
  res.send("hello master");
});

users.route("/data").get((req, res, next) => {
  console.log("cleared");
  res.send("hello data");
});

users.param("userid", (req, res, next, userid) => {
  try {
    req.user = { id: userid };
    next();
  } catch (e) {
    console.log(e);
    res.send("error occured..");
    next();
  }
});

users.route("/:userid").get((req, res, next) => {
  res.send(req.user);
});

module.exports = users;
