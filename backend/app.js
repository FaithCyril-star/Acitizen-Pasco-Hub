const express = require('express');
const path = require('path');
const app = express();

// Set up a route that serves the HTML file that contains your React app
const pagesPath = "../frontend/my-app/src/pages/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, pagesPath +'Home.js'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, pagesPath +'loginPage.js'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, pagesPath +'signupPage.js'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, pagesPath +'Profile.js'));
});

// Set up a route that serves static assets such as images, stylesheets, and JavaScript files
app.use(express.static(path.join(__dirname, './frontend/my-app/public')));

// Set up a catch-all route that responds to any other request with a 404 error
app.use((req, res) => {
  res.status(404).send({ message: 'Not Found' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
