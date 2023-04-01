const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "home.html");
  console.log(filePath);
  res.sendFile(filePath);
});

app.get("/about", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "about.html");
  console.log(filePath);
  res.sendFile(filePath);
});
app.get("/works", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "works.html");
  console.log(filePath);
  res.sendFile(filePath);
});
app.get("/gallery", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "gallery.html");
  console.log(filePath);
  res.sendFile(filePath);
});

const port = 3000;
app.listen(port, () => {});
