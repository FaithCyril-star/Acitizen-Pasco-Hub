const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt'); 
const validator = require('validator');
const saltRounds = 10;

require("../config/mongo").connect();

// Define a regex for acity email
const emailRegex = /^([A-Za-z]+(\.[A-Za-z]+)+)@acity\.edu\.gh$/;

// Define the "users" collection
const User = require('../models/userModel');

// Set up the route for user registration
function addUser(req, res) {

  const { username, email, password } = req.body;

// Validate the form data
if (!username || !password || !email) {
    return res
    .status(400)
    .send("Please enter a valid username, password, or email");
}

// Validate the email address
if (!validator.matches(email,emailRegex)) {
    return res.status(400).send("Please enter a valid acity email address");
}


User.findOne({ email: email }, function (err, docs) {
  if (err) {
    return res.status(400).send(err.message);
  } 
  else if (docs)  {
    return res.status(400).send("Account already exisits!");
  }

// Hash the user's password
bcrypt.hash(password, saltRounds, function (err, hash){
  if (err) {
    return res.status(500).send(err);
  }

  // replace hash with hashed password
 
   const hashedPassword = hash;
     

  // Insert the new user into the "users" collection
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: username,
    email: email,
    password: hashedPassword
  });
    
    newUser.save()
    .then(() => res.status(201).json(newUser))
    .catch((err) => {
      res.status(500).send(err.message);
    });
})})};

module.exports = { addUser };
