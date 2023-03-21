
async function user_is_author(req,res,next) {

<<<<<<< HEAD
    if (req.user.is_author === true) {
=======
    if (req.user.is_author) {
>>>>>>> bc5b1698a50a8030be301eef35e53fb5223c5180
        return next()
    }
    res.status(401).json({
        success: false,
        message: 'you are not author'
    })
}

export default  user_is_author 