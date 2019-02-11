const { Post } = require("../models/Post");
const { User, userSchema } = require("../models/User");

exports.getPostForm = (req, res) => {
  res.render("users/add");
};

exports.getPosts = (req, res) => {
  res.send("listing all posts");
};

exports.postNewPost = (req, res) => {
  res.send("New post");
};

exports.getEditForm = (req, res) => {
  res.send("getting edit form");
};

exports.putEdit = (req, res) => {
  res.send("edited");
};

exports.deletePost = (req, res) => {
  res.send("deleting");
};
