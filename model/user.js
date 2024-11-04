import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true},
  password: {type: String, default: "temp123"},
  following: [String],
  created: {type: Date, default: Date.now}
});

const User = model("User", UserSchema);

export default User;
