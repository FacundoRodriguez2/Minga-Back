import { Author } from "../../models/Author.js"

const authorCreate = {
    create: async (req, res, next) => {
        try {
            const author = await Author.create(req.body)
            res.status(201).json({
                success: true,
                response: author,
            })
        } catch (error) {
            next(error)
        }
    }

}

export default authorCreate