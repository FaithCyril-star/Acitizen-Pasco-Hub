const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = require("../controllers/upload");

//base route to use this endpoint(add)
router.post("/", multer().single("file"), function (req, res, next) {
  upload.add(req, res);
});

module.exports = router;
