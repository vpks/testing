const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./eVaraibles.env" });
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("<h1>hello sundaram.</h1>");
});
const port = process.env.process_port || 3000;
app.listen(port, () => {
  console.log("server started number..");
});
