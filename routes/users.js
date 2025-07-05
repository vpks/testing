const express = require("express");
const users = express.Router();

users.route("/signup").get((req, res, next) => {
  console.log("cleared");
  res.send("hello");
});

module.exports = users;
