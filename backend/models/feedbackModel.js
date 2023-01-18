const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true, index: { unique: true } },
  year: {type: String, required: true},
  program: {type: String, required: true},
  message: {type:String, required: true}
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
