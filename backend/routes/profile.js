const express = require("express");
const router = express.Router();
const multer = require("multer");


const profile = require("../endpoints/profile");

//base route to use this endpoint(add)
router.post("/", multer().single("file"), function (req, res, next) {
  profile.add(req, res);
});

module.exports = router;