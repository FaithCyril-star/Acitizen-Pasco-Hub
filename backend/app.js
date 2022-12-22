const express = require('express');
const app = express();
var testAPIRouter = require('./routes/testAPI');
var cors = require("cors");
// Set up a route that serves the HTML file that contains your React app

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use(cors());
//route for test
app.use("/testAPI", testAPIRouter);
// Start the server
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
