const express = require("express");
const exphbs = require("express-handlebars");
const generatePassword = require("./generate_password");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log("req.body", req.body);
  console.log(generatePassword());
  res.render("index");
});

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`);
});
