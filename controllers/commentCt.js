const { Comments } = require("../models/Comments");

exports.getCommentForm = (req, res) => {
  res.render("comments/addCom");
};

exports.postComment = (req, res) => {
  const comments = new Comments({
    bodyCom: req.body.bodyCom
  });

  comments.save(comments => {
    res.redirect("/posts/comments/all");
  });
};

exports.getAllComments = (req, res) => {
  Comments.find({ _id: req.params._id }).then(comments => {
    res.render("comments/allCom", {
      comments: comments
    });
  });
};
