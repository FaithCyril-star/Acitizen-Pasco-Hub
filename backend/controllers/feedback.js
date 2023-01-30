const Feedback = require("../models/feedbackModel");
const mongoose = require("mongoose");

require("../config/mongo").connect();

//creating an endpoint to add a feedback message
function addFeedback(req, res) {
  const { name, year, program, message } = req.body;
  const _id = new mongoose.Types.ObjectId();
  const feedback = new Feedback({ _id, name, year, program, message });
  feedback
    .save()
    .then(() => res.json(feedback))
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = { addFeedback };
