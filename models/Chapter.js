import { ObjectId } from "bson";
import mongoose from "mongoose";

let schema = new mongoose.Schema({
    //manga_id: {type: mongoose.Schema.Types.ObjectId, ref:"mangas", required: true},
    manga_id: {type:String,required:true},
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: { type: Array,require:true },
    order: { type: Number },
    

}, {
    timestamps: true,required:true
})


let Chapter = mongoose.model('Chapters',schema)

export default Chapter