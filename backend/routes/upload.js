const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middlewares/auth");

const upload = require("../controllers/upload");

//base route to use this endpoint(add)
router.post("/", auth, multer().single("file"), function (req, res, next) {
  upload.uploadFile(req, res);
});

module.exports = router;
