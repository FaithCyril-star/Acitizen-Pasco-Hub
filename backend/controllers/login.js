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
        req.session.authenticated = true;  // create a new session for the user
        if (user.is_admin === true) {res.send('Welcome, admin ' + user.username + '!');}
        else
        {res.send('Welcome, ' + user.username + '!');}
    } else {
        // The passwords do not match, so the login attempt is denied
        res.status(400).send('Invalid username or password');
    }
    });
});
};



module.exports = {loginUser};

