import http from "http";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  // res.send("Hello world 3");
  console.log("main page loaded");
});

app.listen(PORT, () => {
  console.log("Booper eats children at port", PORT);
});
