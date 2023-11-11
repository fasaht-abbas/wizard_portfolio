import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  photo: {
    data: Buffer,
    contentType: String,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
});

export default mongoose.model("project", projectSchema);
