const express = require("express");
const dotenv = require("dotenv");
const clusters = require("cluster");
const multer = require("multer");
const path = require("path");

const storages = multer.diskStorage({
  destination: path.join(__dirname, "files"),
  filename: (req, file, res) => {
    res(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storages,
});

dotenv.config({ path: "./eVaraibles.env" });
const app = express();

app.use(express.static(__dirname + "/login"));
app.get("/", (req, res, next) => {
  console.log(__dirname);
  res.status(200).send("<h1>hello sundaram.</h1>");
});
app.post("/", upload.single("file"), (req, res, next) => {
  res.status(200).send(req.file.size);
});
const port = process.env.process_port || 3000;
app.listen(port, () => {
  console.log("server started number..");
});
