const { User } = require("../models/User");

exports.getLogin = (req, res) => {
  res.render("users/login");
};

exports.postLogin = (req, res) => {
  res.send("login post");
};

exports.getRegister = (req, res) => {
  res.render("users/register");
};

exports.postRegister = (req, res) => {
  const user = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    city: req.body.city,
    state: req.body.state
  });

  user.save(user => {
    res.redirect("/users/me");
  });
};

exports.getProfilePage = (req, res) => {
  res.render("users/profile");
};
