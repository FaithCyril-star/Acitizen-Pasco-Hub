const express = require('express');
const app = express();
const testAPIRouter = require('./routes/testAPI');
const uploadRouter = require('./routes/upload');
const cors = require("cors");
require("dotenv").config();

// Set up a route that serves a message at ::9000
app.get('/', (req, res) => {
  res.send('Hello!');
});

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//routed endpoints
app.use("/testAPI", testAPIRouter);
app.use("/upload",uploadRouter)


// Start the server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
