import authorCreate from "../controllers/authors/create.js"
import express from "express"
import validator from "../middlewares/validator.js"
import schema from "../schemas/authors/create.js"
import passport from "../middlewares/passport.js"
import get_author from "../controllers/authors/get_one.js"

const router = express.Router()
const { create } = authorCreate
const { get_one } = get_author

router.post( "/", passport.authenticate("jwt", { session: false }), validator(schema), create )

router.get( "/:id", passport.authenticate("jwt", { session: false }), get_one )

export default router