const express = require("express");
const dotenv = require("dotenv");
const clusters = require("cluster");
const multer = require("multer");
const path = require("path");
const users = require("../Training/routes/users");
const fs = require("fs");

let name = "";

const storages = multer.diskStorage({
  destination: path.join(__dirname, "files"),
  filename: (req, file, res) => {
    name = Date.now() + "-" + file.originalname;
    res(null, name);
  },
});

const upload = multer({
  storage: storages,
});

dotenv.config({ path: "./eVaraibles.env" });
const app = express();

app.set("views", __dirname + "/login");
app.set("views", __dirname + "/js");

app.use(express.static("login"));
app.use(express.static("login"));

app.get("/test", (req, res, next) => {
  res.sendFile("login/login.html", { root: __dirname });
});

app.use("/user", users);

app.get("/file", (req, res, next) => {
  console.log(req.query);
  fs.readFile("files/" + req.query?.filepath, (err, data) => {
    if (err) res.status(400).send("Unable to send");
    res.send(data);
  });
  // let a = fs.createReadStream("files/" + req.query?.filepath);
  // a.pipe(res);
  //res.sendFile("login/login.html", { root: __dirname });
});

app.post("/", upload.single("file"), (req, res, next) => {
  try {
    res.status(200).send(`Filename : ${name}`);
  } catch {
    res.status(400).send("bad request..");
  }
});
const port = process.env.process_port || 3000;
app.listen(port, () => {
  console.log("server started number..");
  console.log(port);
});
