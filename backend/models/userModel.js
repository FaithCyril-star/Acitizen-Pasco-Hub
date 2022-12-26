const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  _id: { type: Number },
  name: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true },
  password: { type: String, required: true },
});


const User= mongoose.model("User", userSchema);
module.exports = User;
