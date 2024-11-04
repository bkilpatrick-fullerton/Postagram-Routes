import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  postbody: {type: String, required: true},
  username: {type: String, required: true},
  hashtags: [String],
  created: {type: Date, default: Date.now}
});

const Post = model("Post", PostSchema);

export default Post;
