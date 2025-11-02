const express = require("express");
const dotenv = require("dotenv");
const clusters = require("cluster");
const multer = require("multer");
const path = require("path");
const users = require(`${__dirname}/routes/users`);
const fs = require("fs");
const http = require("http");
const socketio = require("socket.io");

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

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", (socket) => {
  console.log("user connected : ", socket.id);

  setTimeout(() => {
    io.to(socket.id).emit("pvtmsg", "hello there private");
  }, 5000);

  socket.emit("message", "hello from socket..");
  socket.on("message", (s) => {
    console.log(s);
  });
  socket.on("disconnect", (s) => {
    console.log("disconnections..", s);
  });
  socket.broadcast.emit("broadcast", "all msgs...");
});

app.set("views", __dirname + "/login");
app.set("views", __dirname + "/js");

app.use(express.static("login"));

app.get("/", (req, res, next) => {
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

app.get("/external-redirect", (req, res) => {
  // Redirect to an external website
  res.redirect("https://www.yahoo.com");
});

const port = process.env.process_port || 3000;
server.listen(port, () => {
  console.log("server started number..");
  console.log(port);
});
