import Author from "../../models/Author.js"

async function is_active(req, res, next) {
    const author = await Author.findOne({ user_id: req.body.user_id })
    if (author) {
        if (author.active) {
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "You must be an active author to be able to post",
            body: req.body
          })
    } 
    return res.status(404).json({
        success: false,
        message: "The author was not found",
        body: req.body
      })
}

export default is_active
