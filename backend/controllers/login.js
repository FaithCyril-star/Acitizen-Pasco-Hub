const bcrypt = require('bcrypt'); // for password hashing
const jwt = require("jsonwebtoken");
require("../config/mongo").connect();

// Define the "users" collection
const User = require('../models/userModel');
 
function loginUser(req, res){

  const { username, password } = req.body;

// Check that the username and password fields are both present
if (!username || !password) {
    return res.status(400).send('Please enter a username and password');
}

// Find the user in the database by their username
User.findOne({ username: username }, (err, user) => {
    if (err) {
    return res.status(500).send(err);
    };
    if (!user) {
    return res.status(400).send('Invalid username or password');
};
  if (!user.verified){
    return res.status(400).send('You have not verified your email, please check your inbox.');
  }

    // Compare the plaintext password with the hashed password stored in the database
    bcrypt.compare(password, user.password, (err, result) => {
    if (err)  {
    return res.status(500).send(err);
    };
    if (result) {
      // The passwords match, so the user is authenticated
      const token = jwt.sign(
        { user_id: user._id, username},
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      res.status(200).send(user);
    } else {
        // The passwords do not match, so the login attempt is denied
        res.status(400).send('Invalid username or password');
    }
    });
});
};




module.exports = {loginUser};

