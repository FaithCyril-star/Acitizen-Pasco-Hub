const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt'); 
const validator = require('validator');
const saltRounds = 10;
const Token = require("../models/tokenModel");
const sendEmail = require("../utils/sendEmail");
require('dotenv').config()

require("../config/mongo").connect();

// Define a regex for acity email
const emailRegex = /^([A-Za-z]+(\.[A-Za-z]+)*(-[A-Za-z]+(\.[A-Za-z]+)*)?)@acity\.edu\.gh$/;

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


User.findOne({ email: email }, function (err, user) {
  if (err) {
    return res.status(400).send(err.message);
  } 
  else if (user)  {
    if (user.verified){
    return res.status(400).send("Account already exisits!");}
    else{
      return res.status(400).send("You have signed up already. Please check your inbox to verify your email");
    }
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

  const token = new Token({
    userId: newUser._id,
    token: require('crypto').randomBytes(32).toString("hex"),
  });
    
    newUser.save()
    .then(() => {return token.save()})
    .then(() => {
      const url = `${process.env.BASE_URL}/signup/verify/${newUser._id}/${token.token}`;
      sendEmail(newUser.email, "Verify Email", url)
      .then(()=>{res.status(200).send("An Email is sent to your account please verify")})
      .catch((err) => {res.status(500).send(err)});})
    .catch((err) => {
      res.send(err);
    });

})})};

const verifyUser = async(req,res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send("Invalid link");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send("Invalid link");

    await User.updateOne({ _id: user._id, verified: true });
    await Token.findByIdAndRemove(token._id);

    res.send("email verified sucessfully");
  } catch (error) {
    res.status(400).send("An error occured");
  }
}
module.exports = { addUser, verifyUser };
