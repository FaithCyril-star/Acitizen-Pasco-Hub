const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

require("./config/mongo").connect();

const app = express();


//routes
const adminRouter = require('./routes/admin');
const uploadRouter = require('./routes/upload');
const courseRouter = require("./routes/course");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const feedbackRouter = require("./routes/feedback");

// Set up a route that serves a message at ::9000
app.get('/', (req, res) => {
  res.send('Backend is working!');
});



//middleware
const corsOptions = {
  origin: process.env.FRONTEND_BASE_URL
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

//routed endpoints
app.use("/admin", adminRouter);
app.use("/upload",uploadRouter);
app.use("/courses", courseRouter);
app.use("/signup",signupRouter);
app.use("/",loginRouter);
app.use("/feedback", feedbackRouter);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
