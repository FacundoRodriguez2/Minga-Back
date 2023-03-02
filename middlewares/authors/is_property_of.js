import { Author } from "../../models/Author.js"
import { Manga } from "../../models/Manga.js"

const canEdit = async (req, res, next) => {

    if(req.user.is_author){
        const author = await Author.findOne({user_id: req.user.id})
        const mangaFind = await Manga.findById(req.params.id)

        if(!mangaFind.author_id.equals(author._id)){

            return res.status(400).json({
                success: false,
                message: "Is not author of this Manga",
                body: req.body
              })            
        }
    }
    return next()
}

export default canEdit