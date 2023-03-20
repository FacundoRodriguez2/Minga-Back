import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js";
import Category from "../../models/Category.js"


const controller = {

    update_manga: async (req, res, next) => {
        try{
            const manga = await Manga.findOneAndUpdate(
                {_id: req.params?.id},
                req.body,
                {new: true}
            )
            if(manga){
                return  res.status(200)
                           .json({ manga })
            }

        } catch (error) {
            next(error)
            console.log(error)
        }

    } 
}

export default controller