import controller from "../controllers/companies/create.js"
import schema  from "../schemas/companies/create.js"
import express from "express"
// import passport from "../middlewares/passport.js"
import validator from "../middlewares/validator.js"

const router = express.Router()

const { create } = controller

router.post("/", validator( schema ), create)

export default router
