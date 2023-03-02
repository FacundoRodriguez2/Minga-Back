import mongoose from "mongoose";

let schema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: true },
    cover_photo: { type: String, required: true },
    author_id: { type: String, required: true,  ref: "authors" },
    company_id: { type: String,  ref: "companies" },
    category_id: { type: String, required: true,  ref: "categories" },
  },
  {
    timestamps: true,
  }
);

let Manga = mongoose.model("mangas", schema);

export default Manga;
