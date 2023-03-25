import controller from "../controllers/companies/create.js"
import readController from '../controllers/companies/read_all.js'
import schema  from "../schemas/companies/create.js"
import express from "express"
import passport from "../middlewares/passport.js"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create } = controller
const {read_all} =readController

router.post("/",passport.authenticate('jwt', { session: false }), validator( schema ), create)
router.get('/', read_all)


export default router
