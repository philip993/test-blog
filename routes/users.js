const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userCt");

router.get("/login", userCtrl.getLogin);
router.post("/", userCtrl.postLogin);
router.get("/register", userCtrl.getRegister);
router.post("/", userCtrl.postRegister);
router.get("/me", userCtrl.getProfilePage);

module.exports = router;
