const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/commentCt");

router.get("/", commentCtrl.getCommentForm);

module.exports = router;
