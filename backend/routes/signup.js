const express = require("express");
const router = express.Router();

const signup = require("../controllers/signup");


//base route to use this endpoint(create)
router.post("/", function (req, res, next) {
  signup.addUser(req, res);
});

router.get("/verify/:id/:token", function (req, res, next) {
  signup.verifyUser(req, res);
});

module.exports = router;
