const express = require("express");
const router = express.Router();

const feedback = require("../controllers/feedback");


//base route to use this endpoint(create)
router.post("/", function (req, res, next) {
  feedback.addFeedback(req, res);
});

module.exports = router;
