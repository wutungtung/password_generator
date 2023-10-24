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
  const textOptions = req.body;
  const passwords = generatePassword(textOptions);
  res.render("index", { password: passwords, options: textOptions });
});

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`);
});
