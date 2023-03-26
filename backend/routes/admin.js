const express = require("express");
const router = express.Router();

const testApi = require("../controllers/admin");

//base route to use this endpoint(get)
router.get("/", function (req, res, next) {
  testApi.getCourse(req, res);
});

//base route to use this endpoint(create)
router.post("/", function (req, res, next) {
  testApi.createCourse(req, res);
});

module.exports = router;

