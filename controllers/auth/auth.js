import User from '../../models/User.js'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'

const controller = {
    sign_up: async(req,res,next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.is_author = false
        req.body.is_company = false
        req.body.is_verified = false
        req.body.verify_code = crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            await User.create(req.body)
            return res.status(200).send('user registered!')
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req,res, next) => {
        try {
            let user = await User.findOneaAndUpdate(
                { main: req.user.mail },
                { is_online: true },
                { new: true }
            )
            user.password = null
            return res.status(200).send('logged in user!')
        } catch (error) {
            next(error)
        }
    },

    sign_out: () => {}
}

export default controller