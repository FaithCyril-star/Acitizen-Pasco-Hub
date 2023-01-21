const bcrypt = require('bcrypt'); // for password hashing

require("../config/mongo").connect();

// Define the "users" collection
const User = require('../models/userModel');
 
function loginUser(req, res){
// Check that the username and password fields are both present
if (!req.body.username || !req.body.password) {
    return res.status(400).send('Please enter a username and password');
}

// Find the user in the database by their username
User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
    return res.status(500).send(err);
    };
    if (!user) {
    return res.status(400).send('Invalid username or password');
};

    // Compare the plaintext password with the hashed password stored in the database
    bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (err)  {
    return res.status(500).send(err);
    };
    if (result) {
      // The passwords match, so the user is authenticated
      const userSession = user; // creating user session to keep user loggedin also on refresh
      req.session.user = userSession;
      if (user.is_admin === true) {
        res.status(200).send("Welcome admin! ");
      } else {
        res.status(200).send("Welcome ! ");
      }
    } else {
        // The passwords do not match, so the login attempt is denied
        res.status(400).send('Invalid username or password');
    }
    });
});
};

function isloggedIn(req,res) {
    res.status(200).send(req.session.user)//if logged in non-null object is returned else null
}


function logOut(req,res) {
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) {
          res.status(400).send("Unable to log out");
        } else {
          res.status(200).send("Logout successful");
        }
      });
    }
};


module.exports = {loginUser,isloggedIn,logOut};

