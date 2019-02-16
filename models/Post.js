const mongoose = require("mongoose");
const { Comments, commentSchema } = require("./Comments");

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
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;
