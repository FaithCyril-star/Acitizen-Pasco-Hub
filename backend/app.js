const express = require('express');
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongodb-session")(session);
const cookieParser = require("cookie-parser");
require("dotenv").config();

require("./config/mongo").connect();

const MAX_AGE = 1000 * 60 * 60 * 24 * 7; // 2 hours( time is in milliseconds)

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
  origin: "http://localhost:3000",
  credentials: true,
};

const mongoDBStore = new MongoStore( {uri: `mongodb://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}.mongo.cosmos.azure.com:${process.env.DB_PORT}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@${process.env.DB_HOST}@`,
expiresKey: `_ts`,
expiresAfterSeconds: 60 * 60 * 24 * 14 ,
collection: "mySessions"})

const sessionOption = {
  secret: process.env.SESSION_KEY, // used to sign the session ID cookie
  name: "session-id",
  store: mongoDBStore,
  cookie: {
    maxAge: MAX_AGE,
    sameSite: false,
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(session(sessionOption));


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
