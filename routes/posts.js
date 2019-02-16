const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/postCt");

router.get("/add", postCtrl.getPostForm);
router.post("/all", postCtrl.postNewPost);
router.get("/all", postCtrl.getPosts);
router.get("/all/:id", postCtrl.getEditForm);
router.put("/all/:id", postCtrl.putEdit);
router.delete("/all/:id", postCtrl.deletePost);
router.get("/comments/:id", postCtrl.getPostCom);

module.exports = router;
