import http from "http";
import express from "express";
import path from "path";
// import sio from "socket.io";
var io = require("socket.io")(http);

const app = express();
const PORT = 3001; //  ||  process.env.PORT

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/", (req, res) => {
  console.log("main page loaded");
  // res.end("Hello World");
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  // console.log("process.env", process.env);
  console.log("Booper eats children at port", PORT);
});
