const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  authorCom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  bodyCom: {
    type: String,
    required: true
  },
  dateCom: {
    type: Date,
    default: Date.now
  }
});

const Comments = mongoose.model("Comments", commentSchema);

exports.Comments = Comments;
exports.commentSchema = commentSchema;
