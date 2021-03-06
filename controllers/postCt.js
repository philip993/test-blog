const { Post } = require("../models/Post");
const { User, userSchema } = require("../models/User");

exports.getPostForm = (req, res) => {
  res.render("posts/add");
};

exports.getPosts = (req, res) => {
  Post.find({}).then(posts => {
    res.render("posts/index", {
      posts: posts
    });
  });
};

exports.postNewPost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    typeOfPost: req.body.typeOfPost,
    commentsIds: commentsIds._id
  });

  post.save().then(post => {
    res.redirect("/posts/all");
  });
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

exports.getPostCom = (req, res) => {
  Post.find({ _id: req.params._id })
    .populate("comments", "commentsIds")
    .exec()
    .then(posts => {
      res.render("comments/allCom", {
        posts: posts
      });
    });
};
