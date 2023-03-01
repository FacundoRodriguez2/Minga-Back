import express from 'express'
import controller from '../controllers/auth/auth.js'
import validator from '../middlewares/validator.js'
import schemaSignUp from '../schemas/users/usersSignUp.js'
import schemaSignIn from '../schemas/users/usersSignIn.js'
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/accountHasBeenVerified.js'
import passwordIsOk from '../middlewares/passwordIsOk.js'

const { sign_up, sign_in } = controller

let router = express.Router()

router.post('/signup', validator(schemaSignUp),accountExistsSignUp, sign_up)
router.post('/signin', validator(schemaSignIn),accountExistsSignIn, accountHasBeenVerified, passwordIsOk, sign_in)


export default router