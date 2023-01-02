const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});


const User= mongoose.model("User", userSchema);
module.exports = User;
