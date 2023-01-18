const express = require("express");
const router = express.Router();

const login = require("../controllers/login");


//base route to use this endpoint(login)
router.post("/login", function (req, res, next) {
  login.loginUser(req, res);
});

router.get("/isloggedin", function (req, res, next) {
  login.isloggedIn(req, res);
});

router.get("/logout", function (req, res, next) {
  login.logOut(req, res);
});


module.exports = router;
