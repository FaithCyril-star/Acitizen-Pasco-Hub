const express = require('express');



const app = express();


//routes
const adminRouter = require('./routes/admin');
const uploadRouter = require('./routes/upload');
const courseRouter = require("./routes/course");
const cors = require("cors");
require("dotenv").config();

// Set up a route that serves a message at ::9000
app.get('/', (req, res) => {
  res.send('API is working!');
});

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


//routed endpoints
app.use("/admin", adminRouter);
app.use("/upload",uploadRouter);
app.use("/courses", courseRouter);



// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
