import { model, Schema } from "mongoose";

const gallerySchema = new Schema({
  url: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})


export default model("gallery", gallerySchema)