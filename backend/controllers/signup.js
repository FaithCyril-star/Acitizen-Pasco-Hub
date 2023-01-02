const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); 
const validator = require('validator');
const saltRounds = 10;

require("../config/mongo").connect();

// Define a regex for acity req.body.email
const emailRegex = /^([A-Za-z]+(\.[A-Za-z]+)+)@acity\.edu\.gh$/;

// Define the "users" collection
const User = require('../models/userModel');

// Set up the route for user registration
function addUser(req, res) {

// Validate the form data
if (!req.body.username || !req.body.password || !req.body.email) {
    return res
    .status(400)
    .send("Please enter a valid username, password, or email");
}

// Validate the req.body.email address
if (!validator.matches(req.body.email,emailRegex)) {
    return res.status(400).send("Please enter a valid acity email address");
}


User.findOne({ email: req.body.email }, function (err, docs) {
  if (err) {
    return res.status(400).send(err);
  } 
  if (docs)  {
    return res.status(400).send("That user already exisits!");
  };
});

// Hash the user's req.body.password
bcrypt.hash(req.body.password, saltRounds, function (err, hash){
  if (err) {
    return res.status(500).send(err);
  };

  // replace hash with hashed req.body.password
  req.body.password = hash;

  // Insert the new user into the "users" collection
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
    
    newUser.save()
    .then(() => res.json(newUser))
    .catch((err) => {
      res.status(500).send(err);
    });
})};

module.exports = { addUser };
