import { Author } from "../../models/Author.js"
import { Manga } from "../../models/Manga.js"

const controller = async (req, res, next) => {
        const author = await Author.findOne({user_id: req.user._id})
        const mangaFind = await Manga.findById(req.params.id)

        if(!mangaFind.author_id.equals(author._id)){

            return res.status(400).json({
                success: false,
                message: "Is not author of this Manga",
                body: req.body
              })            
        }
    return next()
}

export default controller