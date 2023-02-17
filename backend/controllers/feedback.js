const Feedback = require("../models/feedbackModel");
const mongoose = require("mongoose");
require('dotenv').config()

require("../config/mongo").connect();

//creating an endpoint to add a feedback message
function addFeedback(req, res) {
  const { name, year, program, message } = req.body;
  const _id = new mongoose.Types.ObjectId();
  const feedback = new Feedback({ _id, name, year, program, message });
  if (req.user) 
  feedback
    .save()
    .then(() => 
    { res.status(200).send('Feedback saved');
  })
    .catch((err) => {
      res.status(500).send(err);
    })
    else{
      res.status(500).send("Not logged in")
    };
}

module.exports = { addFeedback };
