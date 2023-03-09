import Manga from "../../models/Manga.js"


const get_manga={
    get_one: async (req, res, next) => {
        const { id } = req.params
        console.log(id)
        try{
            let comic = await Manga.findById({_id: id}, "-_id -user_id")
            if(comic){
                res.status(200).json({
                    success: true,
                    response: comic,
                })
            }else{
                res.status(400).json({
                    success: false,
                    response: "Error obtaining Comic",
                })
            }
            }catch (error) {
            next(error)
            }
    }
}

export default get_manga