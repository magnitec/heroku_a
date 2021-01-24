import http from "http";
import express from "express";
import path from "path";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/", (req, res) => {
  console.log("main page loaded");
  // res.end("Hello World");
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Booper eats children at port", PORT);
});
