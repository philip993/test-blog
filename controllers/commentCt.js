const { Comments } = require("../models/Comments");

exports.getCommentForm = (req, res) => {
  res.render("comments/addCom");
};

exports.postComment = (req, res) => {
  const comments = new Comments({
    bodyCom: req.body.bodyCom
  });

  comments.save(comments => {
    res.redirect("/posts");
  });
};

exports.getAllComments = (req, res) => {
  res.render("comments/allCom");
};
