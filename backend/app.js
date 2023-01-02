const express = require('express');
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();


const app = express();


//routes
const adminRouter = require('./routes/admin');
const uploadRouter = require('./routes/upload');
const courseRouter = require("./routes/course");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");


// Set up a route that serves a message at ::9000
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(session({
  secret: process.env.SESSION_KEY,  // used to sign the session ID cookie
  resave: false,
  saveUninitialized: true,
}));


//routed endpoints
app.use("/admin", adminRouter);
app.use("/upload",uploadRouter);
app.use("/courses", courseRouter);
app.use("/signup",signupRouter);
app.use("/login",loginRouter);



// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
