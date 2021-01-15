import http from "http";
import express from "express";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello world 3");
});

app.listen(PORT, () => {
  console.log("Booper eats children at port", PORT);
});
