const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // unique identifier for the file
  // unique identifier for the course
  name: { type: String, required: true }, // name of the course
  description: { type: String, required: true }, // description of the course
  files: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // unique identifier for the file
      uploaded_by: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      }, // name of the file
      fileUrl: { type: String, required: true },
      //file itself
      size: {
        type: Number,
        required: true,
      }, // size of the file in bytes
      type: {
        type: String,
        required: true,
      }, // MIME type of the file
    },
  ],
  // array of references to files associated with the course
});


const Course = mongoose.model("Course", courseSchema);
module.exports = Course ;