import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    cover_photo: { type: String, required: true },
    author_id: { type: String, required: true },
    company_id: { type: String },
    category_id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let Manga = mongoose.model("mangas", schema);

export default Manga;
