import { ServerResponse } from "http";
import express, { json } from "express";
import cors from "cors";
import path from "path";
import config from "./config.json";
import { generate } from "./src/wordset";
// import sio from "socket.io";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/header", (req, res) => {
  const header = generate(config);
  console.log(header);

  res.send(header);
});

app.listen(PORT, () => {
  console.log("Booper eats children at port", PORT);
});
