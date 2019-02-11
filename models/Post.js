const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  content: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5000
  },
  typeOfPost: {
    type: String,
    enum: ["private", "public", "draft", "announcement"],
    default: "public"
  },
  author: {
    type: String
    // link with User model
  },
  comments: {
    type: String
    // link with comment model
  },
  commentedBy: {
    type: String
    // link with User - username
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;
