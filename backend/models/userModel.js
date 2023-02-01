const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  is_admin:{type: Boolean, default:false},
  uploads: {type:[
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
      } // MIME type of the file   
    },
  ],default: []},
  // array of references to files associated with the course
});


const User= mongoose.model("User", userSchema);
module.exports = User;
