const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/commentCt");

router.get("/comments/:id", commentCtrl.getCommentForm);
router.post("/comments/all", commentCtrl.postComment);
router.get("/comments/all", commentCtrl.getAllComments);

module.exports = router;
