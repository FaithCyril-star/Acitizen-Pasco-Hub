const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  is_admin:{type: Boolean, default:false},
  token: { type: String },
  verified:{type: Boolean, default:false}
  // array of references to files associated with the course
});


const User= mongoose.model("User", userSchema);
module.exports = User;
