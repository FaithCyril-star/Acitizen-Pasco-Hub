const express = require("express");
const router = express.Router();

const login = require("../controllers/login");

//base route to use this endpoint(login)
router.post("/", function (req, res, next) {
  login.loginUser(req, res);
});

module.exports = router;
