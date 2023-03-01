import User from '../models/User.js'

async function accountExistSignUp(req, res, next) {
    const user = await User.findOne({main: req.body.mail})
    if (user) {
        return res.status(400).send("user already exist!")
    }
    return next()
}

export default accountExistSignUp