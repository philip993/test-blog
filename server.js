const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

mongoose
  .connect("mongodb://localhost/blog-test", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view in engine", "handlebars");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
