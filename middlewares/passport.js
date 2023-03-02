import passport from "passport"
import passportJwt from 'passport-jwt'
import User from "../models/User.js"

passport.use(
    new passportJwt.Strategy(
        {
            jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.KSECRET
        },
        async (jwt_payload, done) => {
            try {
                let user = await User.findOne({ _id: jwt_payload.id })
                if (user) {
<<<<<<< HEAD
                    user = user._id, user.name, user.mail
=======
                    user = user._id
>>>>>>> ece56af092647aed306a7cc44612547c89de5c60
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch (error) {
                console.log(error)
                return done(error, false)
            }
        }
        )
)

export default passport