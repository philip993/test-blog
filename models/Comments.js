const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  authorCom: {
    type: String
    // ref to User
  },
  bodyCom: {
    type: String,
    required: true
  },
  dateCom: {
    type: Date,
    default: Date.now
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
});

const Comments = mongoose.model("Comments", commentSchema);

exports.Comments = Comments;
exports.commentSchema = commentSchema;
