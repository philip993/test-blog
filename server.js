const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");

const posts = require("./routes/posts");
const users = require("./routes/users");
const rest = require("./routes/rest");

mongoose
  .connect("mongodb://localhost/blog-test", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/posts", posts);
app.use("/users", users);
app.use("/", rest);

app.use((req, res) => {
  res.render("rest/404");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
