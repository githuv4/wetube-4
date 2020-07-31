import mongoose from "mongoose";

const CommentSchema = new mongoose.schema({
  text: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
