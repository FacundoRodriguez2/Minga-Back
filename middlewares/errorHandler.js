<<<<<<< HEAD
=======

>>>>>>> 7e5862e77731491999fbc7a5f04e3be0294335fc
export const errorHandler = (error, req, res, next) => {
    console.error(error)
    return res.status(500).json({
        success: false,
        method: req.method,
        path: req.url,
        response: error.message
    })
}