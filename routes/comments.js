const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/commentCt");

router.get("/comments/:id", commentCtrl.getCommentForm);
router.post("/posts/comments/all", commentCtrl.postComment);
//router.get("/posts/comments/:id", commentCtrl.getAllComments);

module.exports = router;
