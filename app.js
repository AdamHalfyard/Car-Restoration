const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/services", function (req, res) {
  res.render("services");
});
app.get("/projects", function (req, res) {
  res.render("projects");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
