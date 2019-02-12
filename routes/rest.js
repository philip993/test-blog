const express = require("express");
const router = express.Router();

const restCtrl = require("../controllers/restCt");

router.get("/", restCtrl.getHomepage);
router.get("/about", restCtrl.getAboutpage);

module.exports = router;
