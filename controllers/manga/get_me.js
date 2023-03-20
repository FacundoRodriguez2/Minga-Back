import Manga from "../../models/Manga.js";


const controller = {
    
    get_me: async (req,res,next) => {
        
        try{
            
            let query = {}
            
            if (req.query.author_id) { query.author_id = req.body.author_id}

               console.log(query)
    
               const mangas = await Manga.find(query)
                                         .select("_id author_id title cover_photo category_id ")
                                         .populate("author_id", "name last_name -_id")
                                         .populate("category_id", "name -_id")
               

               if(mangas){
                return res.status(200).json({
                    success: true,
                    mangas
                })
               }
               
        }catch(error){
            next(error)
            console.log(error)
        }
        }
    }


export default controller 