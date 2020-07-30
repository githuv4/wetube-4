import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    trype: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  views: {
    type: String,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Video", VideoSchema);
export default model;
