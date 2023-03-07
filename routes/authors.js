import controller from "../controllers/authors/create.js"
import express from "express"
import validator from "../middlewares/validator.js"
import schema from "../schemas/authors/create.js"
import passport from "../middlewares/passport.js"

const router = express.Router()
const { create } = controller

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    validator(schema),
    create
)

export default router