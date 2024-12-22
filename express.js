const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("hello");
});

app.listen(8000, () => {
  console.log("server started");
});
