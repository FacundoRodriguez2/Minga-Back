import mongoose from "mongoose";

let schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        detail: {type: String},
        admin_id:{ type: mongoose.Types.ObjectId, required: true }
    },
    {
        timestamps: true
    }
)

let Category = mongoose.model("categories", schema)

export default Category