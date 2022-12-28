const express = require("express");
const router = express.Router();

const course = require("../controllers/course");

//base route to use this endpoint(get)
router.get("/:course", function (req, res, next) {
  course.getCourse(req, res);
});

module.exports = router;
