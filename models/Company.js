import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        logo: { type: String, required: true },
        website: { type: String, required: true },
        description: { type: String, required: true },
        user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
        active: { type: Boolean, require: false }
    },{
        timestamps: true
    }
)

const Company = mongoose.model('companies', schema)

export default Company
