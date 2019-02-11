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
  res.send("register post");
};

exports.getProfilePage = (req, res) => {
  res.send("profile");
};
