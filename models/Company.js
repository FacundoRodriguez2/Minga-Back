import mongoose from "mongoose"

const companySchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        logo: { type: String, required: true },
        website: { type: String, required: true },
        description: { type: String, required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, required: true,ref: "users" },
        active: { type: Boolean, required: true },
    },
    { timestamps: true }
)

let Company = mongoose.model("companies", companySchema)

export default Company
