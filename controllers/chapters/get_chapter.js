import Chapter from "../../models/Chapter.js";

<<<<<<< HEAD

=======
>>>>>>> e7afb3e13e1e63b46faffb8f376fad4e5ce96b86
const get_chapters={
        get: async (req, res, next) => {
        let chapters = {} 
        let pagination = { page: 1,limit: 4}
        if (req.query.manga_id) {
                chapters.manga_id = req.query.manga_id
        }
        if (req.query.page) {
                pagination.page = req.query.page
        }    
        try{
                let chapter = await Chapter.find(chapters).select('title order cover_photo -_id')
                .sort({order:1})
                .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
                .limit(pagination.limit > 0 ? pagination.limit : 0)
<<<<<<< HEAD
                return res.status(200).json({chapter})
=======
                if(chapter.length>0){    
                 res.status(200).json({
                        success: true,
                        response: chapter,
                       })    
                }else{
                 res.status(404).json({
                        success: false,
                        response: "Error obtaining Chapter",
                })    
                }    
>>>>>>> e7afb3e13e1e63b46faffb8f376fad4e5ce96b86
        }
        catch (error){
        next(error)
                }
        }
}
export default get_chapters
